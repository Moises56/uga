import { AccesspointService } from './../../service/accesspoint.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SectionComponent } from '../section/section.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HeaderComponent,FooterComponent, SectionComponent,LoginComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  constructor(private accesspoint:AccesspointService) { }
  visibleS:boolean = true;
  ngOnInit(): void {
    this.accesspoint.onVisible.subscribe((visible:boolean)=>{
      console.log(visible)
      this.visibleS = visible;
    }
  )

  }
  // visibleSection:boolean;
  // getVisible(){
  //     this.accesspoint.onVisible.subscribe((visible:boolean)=>{
  //       console.log(visible)
  //       this.visibleS = visible;
  //     }
  //   )
  // }

}
