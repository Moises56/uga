import { Component, inject, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet, Data } from '@angular/router';
import { Actividades, Sectores, Subsectores } from '../../models/actividades';
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
      unidad: new FormControl(''),
      categoria: new FormControl(''),
      descripcion: new FormControl(''),
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


  sendData(){
    console.log(this.formActividad.value);

  }

}
