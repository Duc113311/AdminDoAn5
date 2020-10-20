import { TestBed } from '@angular/core/testing';

import { HcserviceService } from './hcservice.service';

describe('HcserviceService', () => {
  let service: HcserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HcserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
