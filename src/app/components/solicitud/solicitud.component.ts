import { Component, OnInit } from '@angular/core';
import { ConectService } from '../../service/conect.service';
import { Datos } from '../../models/actividades'


@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent implements OnInit {
  Solicitud: any[] = [];

    constructor(
        private conectS:ConectService,
    ) { }

    ngOnInit(): void {
      this.conectS.getSolicitud().subscribe((data:any)=>{
        this.Solicitud = data;
        console.log("data: ", data)
      },
      (error)=>{
        console.log("error: ", error)
      })

    }

    verSolicitud(id:string){
      console.log('ver solicitud:')
      // this.conectS.getSolicitudId(id).subscribe((data:any)=>{
      //   console.log("data: ", data)
      // },
      // (error)=>{
      //   console.log("error: ", error)
      // })
    }



}
