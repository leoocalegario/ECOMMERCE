import { Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,} from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { AuditoriaService } from '../../services/auditoria.service';
import { Auditoria } from '../../models/auditoria';



@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [RouterLink, MdbModalModule, AuditoriaComponent],
  templateUrl: './auditoria.component.html',
  styleUrl: './auditoria.component.scss'
})
export class AuditoriaComponent {
  lista: Auditoria[] =[];

  auditoriaService = inject(AuditoriaService);


  constructor(){
    this.listAll();
  }

  listAll(){
    this.auditoriaService.listAll().subscribe({
      next: (lista) => {
        this.lista=lista;
      },
      error: (erro) =>{
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }
}
