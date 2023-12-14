import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UserComponent } from '../user/user.component';
import {NgClass} from '@angular/common';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DecimalPipe, UserComponent,NgClass],
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




}
