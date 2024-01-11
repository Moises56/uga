import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersolicitudComponent } from './versolicitud.component';

describe('VersolicitudComponent', () => {
  let component: VersolicitudComponent;
  let fixture: ComponentFixture<VersolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VersolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
