import { TestBed } from '@angular/core/testing';

import { AssertJsonService } from './assert-json.service';

describe('AssertJsonService', () => {
  let service: AssertJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssertJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
