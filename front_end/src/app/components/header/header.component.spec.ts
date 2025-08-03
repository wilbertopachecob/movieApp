import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { HeaderComponent } from './header.component';
import { AppStoreService } from '../../app-store.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let appStoreService: jasmine.SpyObj<AppStoreService>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  const mockUser: User = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    role_id: 1
  };

  beforeEach(async () => {
    const appStoreServiceSpy = jasmine.createSpyObj('AppStoreService', [], {
      user$: of(mockUser)
    });
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn', 'logout']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ HeaderComponent ],
      providers: [
        { provide: AppStoreService, useValue: appStoreServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();

    appStoreService = TestBed.inject(AppStoreService) as jasmine.SpyObj<AppStoreService>;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to user updates on init', () => {
    expect(component.user).toEqual(mockUser);
  });

  it('should call authService.isLoggedIn', () => {
    authService.isLoggedIn.and.returnValue(true);
    
    const result = component.isLoggedIn();
    
    expect(authService.isLoggedIn).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('should navigate to login page', () => {
    spyOn(router, 'navigate');
    component.login();
    
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should navigate to signin page', () => {
    spyOn(router, 'navigate');
    component.signin();
    
    expect(router.navigate).toHaveBeenCalledWith(['/signin']);
  });

  it('should call authService.logout', () => {
    component.logout();
    
    expect(authService.logout).toHaveBeenCalled();
  });

  it('should render header elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  });

  it('should display account menu when user is logged in', () => {
    authService.isLoggedIn.and.returnValue(true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Account');
  });

  it('should show login button when user is not logged in', () => {
    authService.isLoggedIn.and.returnValue(false);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Log in');
  });
});
