import { Component, inject, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet, Data } from '@angular/router';
import { Actividades, Sectores, Subsectores, Activid, Datos } from '../../models/actividades';
import { ConectService } from '../../service/conect.service';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


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
    const data =
      {
        apoderado: this.formActividad.value.apoderado,
        dni: this.formActividad.value.dni,
        solicitante: this.formActividad.value.solicitante,
        proyecto: this.formActividad.value.proyecto,
        correo: this.formActividad.value.correo,
        telefono: this.formActividad.value.telefono,
        direccion: this.formActividad.value.direccion,
        sector: this.formActividad.value.sector,
        subsector: this.formActividad.value.subsector,
        actividad: this.formActividad.value.actividad,
        unidad: this.Unidad,
        categoria: this.Categoria,
        descripcion: this.Description,
        unidades: this.formActividad.value.unidades,
        observacion: this.formActividad.value.observacion
      };

    console.log(data);
    // guardar los datos
    this.conectS.saveSolicitud(data).subscribe(
      res=>{
        console.log(res);
        alert('Datos guardados correctamente');
        //cerrar modal
        this.modalService.dismissAll();

      },
      err=>{
        console.log(err);
      }
    );







    // limpiar formulario
    this.formActividad.reset();
    this.Unidad = '';
    this.Categoria = 0;
    this.Description = '';



  }

}
