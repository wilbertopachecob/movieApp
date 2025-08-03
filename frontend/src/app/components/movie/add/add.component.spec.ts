import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { AddComponent } from './add.component';
import { MovieService } from '../../../services/movie.service';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let movieService: jasmine.SpyObj<MovieService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['addMovie']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ AddComponent ],
      providers: [
        { provide: MovieService, useValue: movieServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with languages and countries data', () => {
    expect(component.languages).toBeDefined();
    expect(component.countries).toBeDefined();
    expect(component.languages.length).toBeGreaterThan(0);
    expect(component.countries.length).toBeGreaterThan(0);
  });

  it('should have flashMSG initialized as null', () => {
    expect(component.flashMSG).toBeNull();
  });

  it('should call movieService.addMovie and navigate to home on successful form submission', () => {
    const mockMovieData = {
      title: 'Test Movie',
      director: 'Test Director',
      language: 'English',
      country: 'USA',
      plot: 'Test plot',
      genre: 'Action',
      released: '2023-01-01'
    };

    const mockForm = {
      valid: true,
      value: mockMovieData
    } as any;

    movieService.addMovie.and.returnValue(of({}));

    component.store(mockForm);

    expect(movieService.addMovie).toHaveBeenCalledWith(mockMovieData);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should set flashMSG on error during form submission', () => {
    const mockMovieData = {
      title: 'Test Movie',
      director: 'Test Director',
      language: 'English',
      country: 'USA',
      plot: 'Test plot',
      genre: 'Action',
      released: '2023-01-01'
    };

    const mockForm = {
      valid: true,
      value: mockMovieData
    } as any;

    const mockError = { message: 'Server error' };
    movieService.addMovie.and.returnValue(throwError(() => mockError));

    component.store(mockForm);

    expect(component.flashMSG).toEqual({
      type: 'danger',
      msg: 'There has been an error adding the movie to the database.'
    });
  });

  it('should not call movieService.addMovie when form is invalid', () => {
    const mockForm = {
      valid: false,
      value: {}
    } as any;

    component.store(mockForm);

    expect(movieService.addMovie).not.toHaveBeenCalled();
  });

  it('should render form elements', () => {
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
});
