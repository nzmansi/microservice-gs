import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanConditionsComponent } from './ocean-conditions.component';

describe('OceanConditionsComponent', () => {
  let component: OceanConditionsComponent;
  let fixture: ComponentFixture<OceanConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
