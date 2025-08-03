import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { Movie } from 'src/app/models/Movie';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  searchTerm: string = '';
  currentFilter: string = 'title';
  hasSearched: boolean = false;

  constructor(
    private _movieService: MovieService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loadAllMovies();
  }

  loadAllMovies() {
    this.isLoading = true;
    this.errorMessage = '';
    this.hasSearched = false;
    
    console.log('Loading all movies...');
    
    this._movieService.getAllMovies().subscribe(
      (movies: Movie[]) => {
        console.log('Movies loaded successfully:', movies);
        this.isLoading = false;
        this.movies = movies.map((m) => {
          m.released = format(new Date(m.released), 'yyyy-MM-dd');
          return m;
        });
      },
      (error) => {
        console.error('Error loading movies:', error);
        this.isLoading = false;
        this.errorMessage = 'Failed to load movies. Please try again.';
      }
    );
  }

  getMovies(searchTerm: string, filter: string = 'title') {
    if (!searchTerm || searchTerm.trim() === '') {
      this.loadAllMovies();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.hasSearched = true;
    this.searchTerm = searchTerm.trim();
    this.currentFilter = filter;

    this._movieService.getMoviesByNameFilter(this.searchTerm, filter).subscribe(
      (movies: Movie[]) => {
        this.isLoading = false;
        this.movies = movies.map((m) => {
          m.released = format(new Date(m.released), 'yyyy-MM-dd');
          return m;
        });
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Search failed. Please try again.';
        console.error('Error searching movies:', error);
      }
    );
  }

  clearSearch() {
    this.searchTerm = '';
    this.hasSearched = false;
    this.errorMessage = '';
    this.loadAllMovies();
  }

  removeFromMovies(movie: Movie) {
    this.movies = this.movies.filter((m) => m.id !== movie.id);
  }

  canManage() {
    return this._auth.isAdmin();
  }

  trackByMovieId(index: number, movie: Movie): number {
    return movie.id || index;
  }
}
