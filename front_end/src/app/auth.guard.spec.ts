import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn', 'isAdmin']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should return true when user is logged in and is admin', () => {
      authService.isLoggedIn.and.returnValue(true);
      authService.isAdmin.and.returnValue(true);

      const result = guard.canActivate();

      expect(authService.isLoggedIn).toHaveBeenCalled();
      expect(authService.isAdmin).toHaveBeenCalled();
      expect(result).toBe(true);
      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should return false and navigate to login when user is not logged in', () => {
      authService.isLoggedIn.and.returnValue(false);

      const result = guard.canActivate();

      expect(authService.isLoggedIn).toHaveBeenCalled();
      expect(result).toBe(false);
      expect(router.navigate).toHaveBeenCalledWith(['/login'], { state: { msg: 'You need to Log in to perform this action' } });
    });

    it('should handle multiple calls correctly', () => {
      authService.isLoggedIn.and.returnValues(true, true, false);
      authService.isAdmin.and.returnValues(true, false, false);

      expect(guard.canActivate()).toBe(true);
      expect(guard.canActivate()).toBe(false);
      expect(guard.canActivate()).toBe(false);

      expect(authService.isLoggedIn).toHaveBeenCalledTimes(3);
      expect(authService.isAdmin).toHaveBeenCalledTimes(3);
      expect(router.navigate).toHaveBeenCalledTimes(2);
    });
  });

  describe('edge cases', () => {
    it('should handle authService.isLoggedIn throwing an error', () => {
      authService.isLoggedIn.and.throwError('Auth service error');

      expect(() => guard.canActivate()).toThrowError('Auth service error');
      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should handle router.navigate throwing an error', () => {
      authService.isLoggedIn.and.returnValue(false);
      router.navigate.and.throwError('Router error');

      expect(() => guard.canActivate()).toThrowError('Router error');
    });
  });
}); 