import { TestBed } from '@angular/core/testing';

import { CreateCertificateGuardGuard } from './create-certificate-guard.guard';

describe('CreateCertificateGuardGuard', () => {
  let guard: CreateCertificateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateCertificateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
