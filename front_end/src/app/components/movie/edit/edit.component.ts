import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import languages from '../../../helpers/languages';
import countries from '../../../helpers/countries';
import { Movie } from 'src/app/models/Movie';
import { format } from 'date-fns';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  languages = languages;
  countries = countries;
  flashMSG: any = null;
  errors: string[] = [];
  movie: any = {};
  originalMovie: any = {};
  isLoading: boolean = false;

  constructor(
    private _movieService: MovieService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    if (!id) {
      this.errors.push('Missing required parameter');
    } else {
      this._movieService.getMovieById(id).subscribe(
        (movie: Movie) => {
          this.movie = movie;
          this.originalMovie = movie;
        },
        (error) => {
          this.errors.push(
            'There has been an error retreiving the movie from the database'
          );
          console.log(error);
        }
      );
    }
  }

  update(f: NgForm) {
    if (f.valid) {
      //sending only changed values
      const data = this.filterChanges(f.value);
      data.id = this.movie.id;
      this.isLoading = true;
      this._movieService.updateMovie(data).subscribe(
        (_) => {
          this.isLoading = true;
          this._router.navigate(['/home']);
        },
        (error) => {
          this.isLoading = true;
          this.flashMSG = {
            type: 'danger',
            msg: 'There has been an error editing this movie.',
          };
          console.log(error);
        }
      );
    }
  }
  filterChanges(currentMovie: any) {
    const obj: any = {};
    Object.keys(currentMovie).forEach((key) => {
      if (this.originalMovie[key] == currentMovie[key]) {
        obj[key] = currentMovie[key];
      }
    });
    return obj;
  }

  ngAfterViewInit(): void {
    const elem: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('released')
    );
    elem.value = format(new Date(this.movie.released), 'yyyy-MM-dd');
  }
}
