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
  movies: any[] = [];
  isLoading: boolean = false;

  constructor(
    private _movieService: MovieService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getMovies('Home');
  }

  getMovies(searchTerm: string, filter: string = 'title') {
    if (searchTerm) {
      this.isLoading = true;
      this._movieService.getMoviesByNameFilter(searchTerm, filter).subscribe(
        (movies: Movie[]) => {
          this.isLoading = false;
          this.movies = movies.map((m) => {
            m.released = format(new Date(m.released), 'yyyy-MM-dd');
            return m;
          });
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }

  removeFromMovies(movie: Movie) {
    this.movies = this.movies.filter((m) => m.id !== movie.id);
  }

  canManage() {
    return this._auth.isAdmin();
  }
}
