import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { Actividades, Sectores } from '../models/actividades'

@Injectable({
  providedIn: 'root'
})
export class ConectService {

  constructor(private http:HttpClient) { }


  getSectores(){
    return this.http.get<Sectores[]>('http://localhost:3000/sector');
  }


  getActividades(){
    return this.http.get<Actividades[]>('http://localhost:3000/actividad');
  }

}
