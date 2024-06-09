import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantesEquipeComponent } from './integrantes-equipe.component';

describe('IntegrantesEquipeComponent', () => {
  let component: IntegrantesEquipeComponent;
  let fixture: ComponentFixture<IntegrantesEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrantesEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrantesEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
