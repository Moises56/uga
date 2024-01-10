import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { Actividades, Sectores, Subsectores, Datos } from '../models/actividades'

@Injectable({
  providedIn: 'root'
})
export class ConectService {

  constructor(private http:HttpClient) { }


  getSectores(){
    return this.http.get<Sectores[]>('http://localhost:3000/sector');
  }

  // obtener el subsector psasndo el id del sector
  getSubsector(id:string){
    return this.http.get<Subsectores[]>('http://localhost:3000/subsector/'+id);
  }

  // obtener las actividades pasando el id del subsector
  getActividades(id:string){
    return this.http.get<Actividades[]>('http://localhost:3000/actividad/'+id);
  }

  // obtener la actividad pasando el id de la actividad
  getActividad(id:string){
    return this.http.get<Actividades[]>('http://localhost:3000/act/'+id);
  }

  // guardar los datos de la actividad
  saveSolicitud(data: any): Observable<any>{
    console.log(data.apoderado)
    return this.http.post('http://localhost:3000/save',
    {
      apoderado: data.apoderado,
      dni: data.dni,
      solicitante: data.solicitante,
      proyecto: data.proyecto,
      correo: data.correo,
      telefono: data.telefono,
      direccion: data.direccion,
      sector: data.sector,
      subsector: data.subsector,
      actividad: data.actividad,
      unidad: data.unidad,
      categoria: data.categoria,
      descripcion: data.descripcion,
      unidades: data.unidades,
      observacion: data.observacion
    });
  }



}
