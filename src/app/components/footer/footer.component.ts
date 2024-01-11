import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {
    // mostrar el año actual
    const fecha = new Date();
    this.anio = fecha.getFullYear();

    // console.log(this.anio);

  }



}
