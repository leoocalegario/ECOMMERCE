import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Auditoria } from '../models/auditoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {
  http = inject(HttpClient);
  API = environment.SERVIDOR+"/api/log";
  constructor() { }

  listAll(): Observable<Auditoria[]>{
    return this.http.get<Auditoria[]>(this.API+"/listAll");
  }
}
