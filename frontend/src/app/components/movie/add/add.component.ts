import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import languages from '../../../helpers/languages';
import countries from '../../../helpers/countries';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  languages = languages;
  countries = countries;
  flashMSG: any = null;

  constructor(private _movieService: MovieService, private _router: Router) {}

  ngOnInit(): void {}

  store(f: NgForm) {
    if (f.valid) {
      console.log(f.value);

      this._movieService.addMovie(f.value).subscribe(
        (_) => {
          this._router.navigate(['/home']);
        },
        (error) => {
          this.flashMSG = {
            type: 'danger',
            msg: 'There has been an error adding the movie to the database.',
          };
          console.log(error);
        }
      );
    }
  }
}
