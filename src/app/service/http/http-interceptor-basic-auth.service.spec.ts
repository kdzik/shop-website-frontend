import { TestBed } from '@angular/core/testing';

import { HttpInterceptorBasicAuthService } from './http-interceptor-basic-auth.service';

describe('HttpInteceptorBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptorBasicAuthService = TestBed.get(HttpInterceptorBasicAuthService);
    expect(service).toBeTruthy();
  });
});
