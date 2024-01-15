import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConectService } from '../../service/conect.service';
import { Datos } from '../../models/actividades'
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { create } from 'domain';


@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css',
  providers: [NgbModalConfig, NgbModal],
})
export class SolicitudComponent implements OnInit {
  Solicitud: any[] = [];
  idSol:string = '';
  Sol: any = [];

    constructor(
        config: NgbModalConfig,
		    private modalService: NgbModal,
        private conectS:ConectService,
    ) { // customize default values of modals used by this component tree
      config.backdrop = 'static';
      config.keyboard = false;
     }

    ngOnInit(): void {
      this.conectS.getSolicitud().subscribe((data:any)=>{
        this.Solicitud = data;
        console.log("data: ", data)
      },
      (error)=>{
        console.log("error: ", error)
      })

    }

    // openXl(content: TemplateRef<any>) {
    //   this.modalService.open(content, { size: 'xl' });
    // }
    open(content: TemplateRef<any>, idSol:string) {
      this.modalService.open(content, { size: 'lg' });
      this.idSol = idSol;
      console.log('ver solicitud: ', idSol)
      this.conectS.getSolicitudId(idSol).subscribe((data)=>{
        this.Sol = data;
        //formatear fecha  "createdAt": "2024-01-12T15:31:20.480Z",
        let fecha = new Date(this.Sol.createdAt);
        let dia = fecha.getDate();
        let mes = fecha.getMonth()+1;
        let anio = fecha.getFullYear();
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        let fechaFormat = dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos + ':' + segundos;
        this.Sol.createdAt = fechaFormat;
        // console.log(this.createdAt)
        console.log("Datos: ", this.Sol)
        // console.log("data: ", data)
      },
      (error)=>{
        console.log("error: ", error)
      })
    }


    // verSolicitud(idSol:string){
    //   console.log('ver solicitud: ', idSol)
    //   this.conectS.getSolicitudId(idSol).subscribe((data:any)=>{
    //     console.log("data: ", data)
    //   },
    //   (error)=>{
    //     console.log("error: ", error)
    //   })
    // }



}
