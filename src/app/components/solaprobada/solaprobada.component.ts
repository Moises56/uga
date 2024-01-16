import { Component, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-solaprobada',
  standalone: true,
  imports: [],
  templateUrl: './solaprobada.component.html',
  styleUrl: './solaprobada.component.css',
  providers: [NgbModalConfig, NgbModal],
})
export class SolaprobadaComponent {

  constructor(
      config: NgbModalConfig,
		  private modalService: NgbModal,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>, idSol:string) {
    this.modalService.open(content, { size: 'lg' });

  }

}
