import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservationProjectsComponent } from './conservation-projects.component';

describe('ConservationProjectsComponent', () => {
  let component: ConservationProjectsComponent;
  let fixture: ComponentFixture<ConservationProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConservationProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConservationProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
