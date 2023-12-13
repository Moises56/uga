import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

}
