import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndangeredSpeciesComponent } from './endangered-species.component';

describe('EndangeredSpeciesComponent', () => {
  let component: EndangeredSpeciesComponent;
  let fixture: ComponentFixture<EndangeredSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndangeredSpeciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndangeredSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
