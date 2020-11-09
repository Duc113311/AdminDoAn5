import { TestBed } from '@angular/core/testing';

import { QldsvService } from './qldsv.service';

describe('QldsvService', () => {
  let service: QldsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QldsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
