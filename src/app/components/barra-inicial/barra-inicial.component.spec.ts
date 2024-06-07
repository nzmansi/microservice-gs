import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInicialComponent } from './barra-inicial.component';

describe('BarraInicialComponent', () => {
  let component: BarraInicialComponent;
  let fixture: ComponentFixture<BarraInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
