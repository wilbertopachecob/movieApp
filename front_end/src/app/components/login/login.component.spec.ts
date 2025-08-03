import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { AppStoreService } from '../../app-store.service';
import { User } from '../../models/User';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let appStoreService: jasmine.SpyObj<AppStoreService>;

  const mockLoginResponse = {
    token: 'mock-token',
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      role_id: 1
    }
  };

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['loginUser']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);
    const appStoreServiceSpy = jasmine.createSpyObj('AppStoreService', ['setUser']);

    routerSpy.getCurrentNavigation.and.returnValue(null);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: AppStoreService, useValue: appStoreServiceSpy }
      ]
    })
    .compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    appStoreService = TestBed.inject(AppStoreService) as jasmine.SpyObj<AppStoreService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty loginUserData', () => {
    expect(component.loginUserData).toEqual({});
  });

  it('should initialize with null flashMSG', () => {
    expect(component.flashMSG).toBeNull();
  });

  it('should set flashMSG from navigation state if available', () => {
    const mockNavigation = {
      extras: {
        state: {
          msg: 'Test error message'
        }
      }
    };
    router.getCurrentNavigation.and.returnValue(mockNavigation as any);

    const newFixture = TestBed.createComponent(LoginComponent);
    const newComponent = newFixture.componentInstance;

    expect(newComponent.flashMSG).toEqual({
      type: 'danger',
      msg: 'Test error message'
    });
  });

  it('should call authService.loginUser and handle success', () => {
    const mockForm = {
      valid: true,
      value: {
        email: 'test@example.com',
        password: 'password123'
      }
    } as any;

    authService.loginUser.and.returnValue(of(mockLoginResponse));

    spyOn(localStorage, 'setItem');

    component.loginUser(mockForm);

    expect(authService.loginUser).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'mock-token');
    expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockLoginResponse.user));
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(appStoreService.setUser).toHaveBeenCalledWith(mockLoginResponse.user);
  });

  it('should set flashMSG on login error', () => {
    const mockForm = {
      valid: true,
      value: {
        email: 'test@example.com',
        password: 'wrongpassword'
      }
    } as any;

    const mockError = { message: 'Authentication failed' };
    authService.loginUser.and.returnValue(throwError(() => mockError));

    component.loginUser(mockForm);

    expect(component.flashMSG).toEqual({
      type: 'danger',
      msg: 'There has been an error authenticating this current credentials.'
    });
  });

  it('should not call authService.loginUser when form is invalid', () => {
    const mockForm = {
      valid: false,
      value: {}
    } as any;

    component.loginUser(mockForm);

    expect(authService.loginUser).not.toHaveBeenCalled();
  });

  it('should render login form', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should display flash message when flashMSG is set', () => {
    component.flashMSG = {
      type: 'danger',
      msg: 'Test error message'
    };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const flashMessage = compiled.querySelector('.alert');
    expect(flashMessage).toBeTruthy();
    expect(flashMessage.textContent).toContain('Test error message');
  });

  it('should have email and password input fields', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="email"]')).toBeTruthy();
    expect(compiled.querySelector('input[type="password"]')).toBeTruthy();
  });
});
