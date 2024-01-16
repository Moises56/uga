import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {NgClass} from '@angular/common';
import { UserComponent } from '../user/user.component';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { SolaprobadaComponent } from '../solaprobada/solaprobada.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DecimalPipe, UserComponent,NgClass, SolicitudComponent, SolaprobadaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  regionVisible: String = '';

  constructor() { }
  ngOnInit(): void {
  }

  mostrar(){
    // mostrar la region al hacer click y manternerla visible
    this.regionVisible = 'user';
  }

  versolicitud(){
    // mostrar la region al hacer click y manternerla visible
    this.regionVisible = 'solicitud';
  }

  solaprobada(){
    // mostrar la region al hacer click y manternerla visible
    this.regionVisible = 'solaprobada';
  }





}
