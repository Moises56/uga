import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { InicioComponent } from '../inicio/inicio.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, NavbarComponent,InicioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuCollapsed = true;
  loggedIn:boolean = false;
  visibleSection = true;

  visible(){
    console.log(this.visibleSection)
    this.visibleSection = true;
  }
}
