import { TestBed } from '@angular/core/testing';

import { CommonServices } from './common.service';

describe('CommonServicesService', () => {
  let service: CommonServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
