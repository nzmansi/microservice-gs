import { TestBed } from '@angular/core/testing';

import { OceanDataService } from './ocean-data.service';

describe('OceanDataService', () => {
  let service: OceanDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OceanDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
