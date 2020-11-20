import { TestBed } from '@angular/core/testing';

import { RegionGeograficaContinentalService } from './region-geografica-continental.service';

describe('RegionGeograficaContinentalService', () => {
  let service: RegionGeograficaContinentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionGeograficaContinentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
