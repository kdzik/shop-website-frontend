import { TestBed } from '@angular/core/testing';

import { JwtAuthenticationService } from './jwt-authentication.service';

describe('JwtAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtAuthenticationService = TestBed.get(JwtAuthenticationService);
    expect(service).toBeTruthy();
  });
});
