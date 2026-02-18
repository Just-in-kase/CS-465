import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpInterceptorFn } from '@angular/common/http';

import { JwtInterceptor } from './jwt-interceptor';
import { Authentication } from '../services/authentication';

describe('JwtInterceptor', () => { // Changed code due to original calling a function of jwtinterceptor.
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        // Stub so DI works
        { provide: Authentication, useValue: { isLoggedIn: () => false, getToken: () => '' } },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      ],
    });
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(JwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});