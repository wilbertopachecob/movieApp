import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AppStoreService } from '../app-store.service';
import { User } from '../models/User';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  let appStore: jasmine.SpyObj<AppStoreService>;

  const mockUser: User = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    role_id: 1
  };

  const mockLoginResponse = {
    token: 'mock-token',
    user: mockUser
  };

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const appStoreSpy = jasmine.createSpyObj('AppStoreService', ['setUser']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: routerSpy },
        { provide: AppStoreService, useValue: appStoreSpy }
      ]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    appStore = TestBed.inject(AppStoreService) as jasmine.SpyObj<AppStoreService>;
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loginUser', () => {
    it('should send login request with user credentials', () => {
      const loginUser: User = {
        email: 'test@example.com',
        password: 'password123'
      } as User;

      service.loginUser(loginUser).subscribe(response => {
        expect(response).toEqual(mockLoginResponse);
      });

      const req = httpMock.expectOne(`${environment.apiURL}/login`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(loginUser);
      req.flush(mockLoginResponse);
    });

    it('should handle login errors', () => {
      const loginUser: User = {
        email: 'test@example.com',
        password: 'wrongpassword'
      } as User;

      const errorMessage = 'Invalid credentials';

      service.loginUser(loginUser).subscribe({
        next: () => fail('should have failed with 401 error'),
        error: (error) => {
          expect(error.status).toBe(401);
          expect(error.error).toBe(errorMessage);
        }
      });

      const req = httpMock.expectOne(`${environment.apiURL}/login`);
      req.flush(errorMessage, { status: 401, statusText: 'Unauthorized' });
    });
  });

  describe('logout', () => {
    it('should clear user data and navigate to home', () => {
      // Set up initial state
      localStorage.setItem('token', 'existing-token');
      localStorage.setItem('user', JSON.stringify(mockUser));

      service.logout();

      expect(localStorage.getItem('token')).toBeNull();
      expect(localStorage.getItem('user')).toBeNull();
      expect(appStore.setUser).toHaveBeenCalledWith({
        id: 0,
        name: 'Anonymous',
        role_id: 2,
        email: ''
      });
      expect(router.navigate).toHaveBeenCalledWith(['/home']);
    });
  });

  describe('isLoggedIn', () => {
    it('should return true when token exists', () => {
      localStorage.setItem('token', 'valid-token');
      expect(service.isLoggedIn()).toBe(true);
    });

    it('should return false when token does not exist', () => {
      expect(service.isLoggedIn()).toBe(false);
    });

    it('should return false when token is empty string', () => {
      localStorage.setItem('token', '');
      expect(service.isLoggedIn()).toBe(false);
    });
  });

  describe('getUserRole', () => {
    it('should return user role from localStorage', () => {
      localStorage.setItem('user', JSON.stringify(mockUser));
      expect(service.getUserRole()).toBe(1);
    });

    it('should return default role (2) when user is not in localStorage', () => {
      expect(service.getUserRole()).toBe(2);
    });

    it('should return default role when localStorage user is empty object', () => {
      localStorage.setItem('user', '{}');
      expect(service.getUserRole()).toBe(2);
    });

    it('should return default role when localStorage user is invalid JSON', () => {
      localStorage.setItem('user', 'invalid-json');
      spyOn(console, 'log');
      expect(service.getUserRole()).toBe(2);
      expect(console.log).toHaveBeenCalled();
    });

    it('should return default role when user has no role_id', () => {
      const userWithoutRole = { ...mockUser };
      delete (userWithoutRole as any).role_id;
      localStorage.setItem('user', JSON.stringify(userWithoutRole));
      expect(service.getUserRole()).toBe(2);
    });
  });

  describe('isAdmin', () => {
    it('should return true for admin user', () => {
      localStorage.setItem('token', 'valid-token');
      localStorage.setItem('user', JSON.stringify({ ...mockUser, role_id: 1 }));
      expect(service.isAdmin()).toBe(true);
    });

    it('should return false for non-admin user', () => {
      localStorage.setItem('token', 'valid-token');
      localStorage.setItem('user', JSON.stringify({ ...mockUser, role_id: 2 }));
      expect(service.isAdmin()).toBe(false);
    });

    it('should return false when user is not logged in', () => {
      expect(service.isAdmin()).toBe(false);
    });
  });

  describe('error handling', () => {
    it('should handle JSON parse errors gracefully', () => {
      localStorage.setItem('user', 'invalid-json');
      spyOn(console, 'log');
      
      const role = service.getUserRole();
      
      expect(role).toBe(2);
      expect(console.log).toHaveBeenCalled();
    });
  });
}); 