import { Component, inject, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}

}
