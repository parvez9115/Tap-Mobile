import { TestBed } from '@angular/core/testing';

import { TapestockService } from './tapestock.service';

describe('TapestockService', () => {
  let service: TapestockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TapestockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
