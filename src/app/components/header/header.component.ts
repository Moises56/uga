import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccesspointService } from '../../service/accesspoint.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbCollapseModule,RouterOutlet, RouterLink, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private accesspoint: AccesspointService) { }
   	// Step 1:
	// Create a property to track whether the menu is open.
	// Start with the menu collapsed so that it does not
	// appear initially when the page loads on a small screen!
	isMenuCollapsed = true;
  loggedIn:boolean = false;
  // @Input() :boolean = false
  @Output() addVisibleEvent = new EventEmitter<boolean>();

  visible(){
    this.accesspoint.onVisible.emit(true);
  }


}
