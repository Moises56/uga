import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolaprobadaComponent } from './solaprobada.component';

describe('SolaprobadaComponent', () => {
  let component: SolaprobadaComponent;
  let fixture: ComponentFixture<SolaprobadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolaprobadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolaprobadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
