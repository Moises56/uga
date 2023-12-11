import { AccesspointService } from './../../service/accesspoint.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, SectionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private accesspoint:AccesspointService) { }
  visibleSection:boolean = true;

  getVisible(visible:boolean){
    console.log(visible)
      this.accesspoint.onVisible.subscribe((visible:boolean)=>{
        this.visibleSection = visible;
      }
    )
  }

}
