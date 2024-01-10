import { Component, inject, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet, Data } from '@angular/router';
import { Actividades, Sectores, Subsectores, Activid } from '../../models/actividades';
import { ConectService } from '../../service/conect.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import e from 'express';
import { DiffieHellmanGroup } from 'crypto';


@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterLink,CommonModule, HttpClientModule,ReactiveFormsModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit {

  Actividades:Actividades[] = [];
  Sectores:Sectores[] = [];
  SubSectores:Subsectores[] = [];
  Actis: any = [];
  Unidad = '';
  Categoria:number = 0;
  Description = '';
  // contactForm: FormGroup;
  resultado = '';


  constructor(private modalService: NgbModal,
    private conectS:ConectService,
    ) {}
    formActividad = new FormGroup({
      apoderado: new FormControl(''),
      dni: new FormControl(''),
      solicitante: new FormControl(''),
      proyecto: new FormControl(''),
      correo: new FormControl(''),
      telefono: new FormControl(''),
      direccion: new FormControl(''),
      sector: new FormControl(''),
      subsector: new FormControl(''),
      actividad: new FormControl(''),
      // unidad: new FormControl(''),
      // categoria: new FormControl(''),
      // descripcion: new FormControl(''),
      unidades: new FormControl(''),
      observacion: new FormControl(''),
    });

  ngOnInit(): void {
    this.conectS.getSectores().subscribe((data:Sectores[])=>{
      //console.log("Sectores: ",{data})
      this.Sectores = data;
    });
  }

  openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}

  onSelectSector(event: any): void {
    // Lógica que se ejecutará al seleccionar un elemento
    console.log('Elemento seleccionado:', event.target.value);
    this.conectS.getSubsector(event.target.value).subscribe((data:Subsectores[])=>{
      this.SubSectores = data;
      console.log(data)
    })
  }





  onSelectSubsector(event: any): void {
    // Lógica que se ejecutará al seleccionar un elemento
    console.log('Elemento seleccionado:', event.target.value);
    this.conectS.getActividades(event.target.value).subscribe((data:Actividades[])=>{
      this.Actividades = data;
      console.log(data)
    })
  }

  onSelectActividad(event: any): void {
    console.log(event.target.value)
    this.conectS.getActividad(event.target.value).subscribe((data)=>{
      // mostrar unidad y categoria
      this.Actis = data;
      this.Unidad = this.Actis.Unidad;
      this.Categoria = this.Actis.Categoria;
      this.Description = this.Actis.Descripcion;

      // console.log({
      //   unidad: this.Unidad,
      //   categoria: this.Categoria,
      //   descripcion: this.Description
      // })


    })
  }


  sendData(){
    const data = {
      Apoderado: this.formActividad.value.apoderado,
      DNI: this.formActividad.value.dni,
      Solicitante: this.formActividad.value.solicitante,
      Proyecto: this.formActividad.value.proyecto,
      Correo: this.formActividad.value.correo,
      Telefono: this.formActividad.value.telefono,
      Direccion: this.formActividad.value.direccion,
      Sector: this.formActividad.value.sector,
      SubSector: this.formActividad.value.subsector,
      Actividad: this.formActividad.value.actividad,
      Unidad: this.Unidad,
      Categoria: this.Categoria,
      Descripcion: this.Description,
      Unidades: this.formActividad.value.unidades,
      Observacion: this.formActividad.value.observacion
    };
    console.log(data.Apoderado);
    // guardar los datos
    this.conectS.saveSolicitud(data).subscribe((data)=>{
      console.log(data);
      alert('Datos guardados correctamente');
      },(error)=>{
        console.log(error);
      }
    );







    // limpiar formulario
    this.formActividad.reset();
    this.Unidad = '';
    this.Categoria = 0;
    this.Description = '';



  }

}
