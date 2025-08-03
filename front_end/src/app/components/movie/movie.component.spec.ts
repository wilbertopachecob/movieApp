import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieComponent } from './movie.component';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../services/auth.service';
import { Movie } from '../../models/Movie';
import { of, throwError } from 'rxjs';
import { DetailsComponent } from './details/details.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let movieService: jasmine.SpyObj<MovieService>;
  let authService: jasmine.SpyObj<AuthService>;

  const mockMovie: Movie = {
    id: 1,
    title: 'Test Movie',
    director: 'Test Director',

    language: 'English',
    country: 'USA',
    released: '2023-01-01',
    ratings: [5, 10, 15, 20, 10], // 5 one-star, 10 two-star, etc.
    poster: 'test-poster.jpg',
    plot: 'Test plot',
    cast: 'Test Cast',
    genre: 'Action'
  };

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['deleteMovie']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isAdmin']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ MovieComponent, DetailsComponent ],
      providers: [
        { provide: MovieService, useValue: movieServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();

    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    component.movie = mockMovie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default movie properties', () => {
    const newComponent = new MovieComponent(movieService, authService);
    expect(newComponent.movie.title).toBe('');
    expect(newComponent.movie.plot).toBe('');
    expect(newComponent.movie.cast).toBe('');
    expect(newComponent.movie.genre).toBe('');
    expect(newComponent.movie.released).toBe('2021');
    expect(newComponent.movie.language).toBe('');
    expect(newComponent.movie.director).toBe('');
    expect(newComponent.movie.id).toBe(0);
    expect(newComponent.movie.ratings).toEqual([0, 1, 2, 3, 4]);
  });

  it('should calculate rating correctly', () => {
    const rating = component.calculateRating();
    // (5*1 + 10*2 + 15*3 + 20*4 + 10*5) / (5+10+15+20+10) = 3.33
    expect(rating).toBe(3.3333333333333335);
  });

  it('should return 0 for rating when no ratings exist', () => {
    component.movie.ratings = [];
    const rating = component.calculateRating();
    expect(rating).toBe(0);
  });

  it('should call authService.isAdmin for canManage', () => {
    authService.isAdmin.and.returnValue(true);
    
    const result = component.canManage();
    
    expect(authService.isAdmin).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it('should identify new movies correctly', () => {
    // Test with a recent movie (within 6 months)
    const recentDate = new Date();
    recentDate.setMonth(recentDate.getMonth() - 2);
    component.movie.released = recentDate.toISOString().split('T')[0];
    
    expect(component.isNewMovie()).toBe(true);
  });

  it('should identify old movies correctly', () => {
    // Test with an old movie (more than 6 months)
    const oldDate = new Date();
    oldDate.setMonth(oldDate.getMonth() - 8);
    component.movie.released = oldDate.toISOString().split('T')[0];
    
    expect(component.isNewMovie()).toBe(false);
  });

  it('should return false for isNewMovie when released date is null', () => {
    component.movie.released = null as any;
    expect(component.isNewMovie()).toBe(false);
  });

  it('should call deleteMovie and emit removedMovie on successful deletion', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(component.removedMovie, 'emit');
    
    movieService.deleteMovie.and.returnValue(of({}));

    const mockEvent = new Event('click');
    component.delete(mockEvent, 1);

    expect(movieService.deleteMovie).toHaveBeenCalledWith(1);
    expect(component.removedMovie.emit).toHaveBeenCalledWith(mockMovie);
    expect(component.isLoading).toBe(false);
  });

  it('should not call deleteMovie when user cancels confirmation', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    
    const mockEvent = new Event('click');
    component.delete(mockEvent, 1);

    expect(movieService.deleteMovie).not.toHaveBeenCalled();
  });

  it('should handle error during deletion', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(console, 'log');
    
    const mockError = { message: 'Delete failed' };
    movieService.deleteMovie.and.returnValue(throwError(() => mockError));

    const mockEvent = new Event('click');
    component.delete(mockEvent, 1);

    expect(component.isLoading).toBe(false);
    expect(console.log).toHaveBeenCalled();
  });

  it('should call edit method', () => {
    spyOn(console, 'log');
    
    const mockEvent = new Event('click');
    component.edit(mockEvent, 1);

    expect(console.log).toHaveBeenCalledWith('edit', 1);
  });

  it('should render movie component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.movie-card')).toBeTruthy();
  });

  it('should display movie title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Movie');
  });

  it('should display movie director', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Director');
  });
});
