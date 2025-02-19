import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Login } from './login';
import { Usuario } from './usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);
  API = environment.SERVIDOR+"/api/login";


  constructor() { }


  logar(login: Login): Observable<string> {
    return this.http.post<string>(this.API, login, {responseType: 'text' as 'json'});
  }
  //leoteste

  addToken(token: string) {
    const objeto = JSON.parse(token); // Converte a string JSON em um objeto
    const token_limpo = objeto.access_token; // Acessa o 'access_token' do objeto JSON
    localStorage.setItem('token', token_limpo); // Armazena apenas o JWT no localStorage
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasPermission(flag_User: number) {
    let user = this.jwtDecode() as Usuario;
    if (user.flagTipoUser == flag_User)
      return true;
    else
      return true;
  }

}
