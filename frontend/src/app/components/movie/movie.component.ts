import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = {
    title: '',
    plot: '',
    cast: '',
    genre: '',
    released: '2021',
    language: '',
    director: '',
    id: 0,
    ratings: [0, 1, 2, 3, 4],
  };
  isLoading: boolean = false;
  @Output() removedMovie = new EventEmitter<Movie>();
  @ViewChild('detail') detail: DetailsComponent | undefined;
  constructor(private movieService: MovieService, private _auth: AuthService) {}

  ngOnInit(): void {}

  delete(e: Event, id: number) {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this movie?')) {
      this.isLoading = true;
      this.movieService.deleteMovie(id).subscribe(
        (_) => {
          this.isLoading = false;
          this.removedMovie.emit(this.movie);
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }

  edit(e: Event, id: number) {
    e.stopPropagation();
    console.log('edit', id);
  }

  calculateRating(): number {
    //calculating weightedAVG
    let total: number = 0;
    let weighted: number = 0;

    for (let i = 0; i < (this.movie.ratings || []).length; i++) {
      total += this.movie.ratings![i];
      weighted += (i + 1) * this.movie.ratings![i];
    }
    return total && weighted ? weighted / total : 0;
  }

  canManage() {
    return this._auth.isAdmin();
  }

  isNewMovie(): boolean {
    if (!this.movie.released) return false;
    const releaseDate = new Date(this.movie.released);
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
    return releaseDate >= sixMonthsAgo;
  }
}
