import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    const url = `${environment.apiURL}/movie/all`;
    console.log('Calling API:', url);
    return this.httpClient.get<Movie[]>(url);
  }

  getMoviesByNameFilter(searchTerm: string, filter: string = '') {
    return this.httpClient.get<Movie[]>(
      `${environment.apiURL}/movie/all?searchTerm=${encodeURIComponent(
        searchTerm
      )}&filter=${filter}`
    );
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${environment.apiURL}/movie/${id}`);
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(
      environment.apiURL + '/movie/delete?id=' + id
    );
  }

  updateMovie(data: Movie) {
    return this.httpClient.put(environment.apiURL + '/movie/update', data);
  }

  addMovie(data: Movie) {
    return this.httpClient.post(environment.apiURL + '/movie/add', data);
  }
}
