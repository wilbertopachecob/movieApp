import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { EditComponent } from './edit.component';
import { MovieService } from '../../../services/movie.service';
import { Movie } from '../../../models/Movie';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let movieService: jasmine.SpyObj<MovieService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;

  const mockMovie: Movie = {
    id: 1,
    title: 'Test Movie',
    director: 'Test Director',

    language: 'English',
    country: 'USA',
    released: '2023-01-01',
    ratings: [0, 0, 0, 0, 0],
    poster: 'test-poster.jpg',
          plot: 'Test plot',
      genre: 'Action'
  };

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['getMovieById', 'updateMovie']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: { params: { id: '1' } }
    });

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ EditComponent ],
      providers: [
        { provide: MovieService, useValue: movieServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
      ]
    })
    .compileComponents();

    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
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

  it('should load movie data on init when id is provided', () => {
    movieService.getMovieById.and.returnValue(of(mockMovie));

    component.ngOnInit();

    expect(movieService.getMovieById).toHaveBeenCalledWith(1);
    expect(component.movie).toEqual(mockMovie);
    expect(component.originalMovie).toEqual(mockMovie);
  });

  it('should add error when id is missing', () => {
    (activatedRoute.snapshot as any).params = {};
    
    component.ngOnInit();

    expect(component.errors).toContain('Missing required parameter');
    expect(movieService.getMovieById).not.toHaveBeenCalled();
  });

  it('should handle error when loading movie fails', () => {
    const mockError = { message: 'Server error' };
    movieService.getMovieById.and.returnValue(throwError(() => mockError));

    component.ngOnInit();

    expect(component.errors).toContain('There has been an error retreiving the movie from the database');
  });

  it('should call updateMovie and navigate to home on successful form submission', () => {
    component.movie = mockMovie;
    component.originalMovie = mockMovie;
    
    const mockForm = {
      valid: true,
      value: {
        title: 'Updated Movie',
        director: 'Updated Director',
        year: 2024,
        language: 'English',
        country: 'USA'
      }
    } as any;

    movieService.updateMovie.and.returnValue(of({}));

    component.update(mockForm);

    expect(movieService.updateMovie).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should set flashMSG on error during update', () => {
    component.movie = mockMovie;
    component.originalMovie = mockMovie;
    
    const mockForm = {
      valid: true,
      value: mockMovie
    } as any;

    const mockError = { message: 'Server error' };
    movieService.updateMovie.and.returnValue(throwError(() => mockError));

    component.update(mockForm);

    expect(component.flashMSG).toEqual({
      type: 'danger',
      msg: 'There has been an error editing this movie.'
    });
  });

  it('should not call updateMovie when form is invalid', () => {
    const mockForm = {
      valid: false,
      value: {}
    } as any;

    component.update(mockForm);

    expect(movieService.updateMovie).not.toHaveBeenCalled();
  });

  it('should filter changes correctly', () => {
    component.originalMovie = {
      title: 'Original Title',
      director: 'Original Director',
      year: 2023
    };

    const currentMovie = {
      title: 'New Title',
      director: 'Original Director',
      year: 2023
    };

    const result = component.filterChanges(currentMovie);

    expect(result).toEqual({
      director: 'Original Director',
      year: 2023
    });
  });

  it('should render form elements', () => {
    movieService.getMovieById.and.returnValue(of(mockMovie));
    component.ngOnInit();
    fixture.detectChanges();

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
