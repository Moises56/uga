import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { InicioComponent } from '../inicio/inicio.component';
import { FooterComponent } from '../footer/footer.component';
import { AccesspointService } from './../../service/accesspoint.service';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, NavbarComponent,InicioComponent, FooterComponent,LoginComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  regionVisible: String = '';
  isMenuCollapsed = true;
  loggedIn:boolean = true;
  visibleSection = true;
  visibleS:boolean = false;

  constructor(private accesspoint: AccesspointService) { }

  visible(){
    this.accesspoint.onVisible.subscribe((visible:boolean)=>{
        console.log(visible)
        this.visibleS = visible;
      }
    )
  }
}
