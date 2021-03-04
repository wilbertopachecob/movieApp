import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movieApp';
  movies: any[] = [];
  isLoading: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies('Home');
  }

  getMovies(searchTerm: string) {
    if (searchTerm) {
      this.isLoading = true;
      this.movieService.getMoviesByNameFilter(searchTerm).subscribe(
        (res: any) => {
          this.isLoading = false;
          this.movies = res.Search;
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }
}
