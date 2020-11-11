import { TestBed } from '@angular/core/testing';

import { SVserviceService } from './svservice.service';

describe('SVserviceService', () => {
  let service: SVserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
