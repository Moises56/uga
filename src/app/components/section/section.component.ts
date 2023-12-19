import { Component, inject, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet, Data } from '@angular/router';
import { Actividades, Sectores, Subsectores } from '../../models/actividades';
import { ConectService } from '../../service/conect.service';


@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterLink,CommonModule, HttpClientModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit {

  Activids:Actividades[] = [];
  Sectores:Sectores[] = [];
  SubSectores:Subsectores[] = [];

  constructor(private modalService: NgbModal,
    private conectS:ConectService) { }

  ngOnInit(): void {
    this.conectS.getSectores().subscribe((data:Sectores[])=>{
      // console.log("Sectores: ",{data})
      this.Sectores = data;
    });

    //obtener subsectores
    this.conectS.getSubsector('65610bbd8e5872613d0e9176').subscribe((data:Subsectores[])=>{
      console.log(data)

    })

  }

  openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}

}
