import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { Movie } from '../models/Movie';
import { environment } from '../../environments/environment';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMoviesByNameFilter', () => {
    it('should return movies with search term and filter', () => {
      const searchTerm = 'test';
      const filter = 'action';
      const mockMovies = [mockMovie];

      service.getMoviesByNameFilter(searchTerm, filter).subscribe(movies => {
        expect(movies).toEqual(mockMovies);
      });

      const req = httpMock.expectOne(
        `${environment.apiURL}/movie/all?searchTerm=${encodeURIComponent(searchTerm)}&filter=${filter}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockMovies);
    });

    it('should return movies with search term only', () => {
      const searchTerm = 'test';
      const mockMovies = [mockMovie];

      service.getMoviesByNameFilter(searchTerm).subscribe(movies => {
        expect(movies).toEqual(mockMovies);
      });

      const req = httpMock.expectOne(
        `${environment.apiURL}/movie/all?searchTerm=${encodeURIComponent(searchTerm)}&filter=`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockMovies);
    });
  });

  describe('getMovieById', () => {
    it('should return a movie by id', () => {
      const movieId = 1;

      service.getMovieById(movieId).subscribe(movie => {
        expect(movie).toEqual(mockMovie);
      });

      const req = httpMock.expectOne(`${environment.apiURL}/movie/${movieId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockMovie);
    });
  });

  describe('deleteMovie', () => {
    it('should delete a movie by id', () => {
      const movieId = 1;

      service.deleteMovie(movieId).subscribe(response => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne(`${environment.apiURL}/movie/delete?id=${movieId}`);
      expect(req.request.method).toBe('DELETE');
      req.flush({});
    });
  });

  describe('updateMovie', () => {
    it('should update a movie', () => {
      const updatedMovie = { ...mockMovie, title: 'Updated Movie' };

      service.updateMovie(updatedMovie).subscribe(response => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne(`${environment.apiURL}/movie/update`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.body).toEqual(updatedMovie);
      req.flush({});
    });
  });

  describe('addMovie', () => {
    it('should add a new movie', () => {
      const newMovie = { ...mockMovie, id: undefined };

      service.addMovie(newMovie).subscribe(response => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne(`${environment.apiURL}/movie/add`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(newMovie);
      req.flush({});
    });
  });

  describe('error handling', () => {
    it('should handle HTTP errors gracefully', () => {
      const searchTerm = 'test';
      const errorMessage = 'Server error';

      service.getMoviesByNameFilter(searchTerm).subscribe({
        next: () => fail('should have failed with 500 error'),
        error: (error) => {
          expect(error.status).toBe(500);
          expect(error.error).toBe(errorMessage);
        }
      });

      const req = httpMock.expectOne(
        `${environment.apiURL}/movie/all?searchTerm=${encodeURIComponent(searchTerm)}&filter=`
      );
      req.flush(errorMessage, { status: 500, statusText: 'Server Error' });
    });
  });
}); 