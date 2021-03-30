import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AppStoreService } from 'src/app/app-store.service';
import { Movie, movieInitValues } from 'src/app/models/Movie';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { RateMovieService } from 'src/app/services/rate-movie.service';

interface RateResponse {
  id: number;
  rating_id: number;
}

@Component({
  selector: 'app-rate-movie',
  templateUrl: './rate-movie.component.html',
  styleUrls: ['./rate-movie.component.css'],
})
export class RateMovieComponent implements OnInit {
  @Input() movie: Movie = movieInitValues();
  rates: any[] = [];
  rateText: string = '';
  currentRate: Partial<RateResponse> = {};
  subscriptions: Subscription[] = [];
  user: User = {};

  constructor(
    private _rateService: RateMovieService,
    private _store: AppStoreService,
    private _auth: AuthService,
    private _router: Router,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.rates = [
      { text: 'Great', value: 5, checked: false },
      { text: 'Good', value: 4, checked: false },
      { text: 'Okay', value: 3, checked: false },
      { text: 'Bad', value: 2, checked: false },
      { text: 'Terrible', value: 1, checked: false },
    ];

    this.subscriptions.push(
      this._store.user$.subscribe((u: User) => {
        this.user = u;
      })
    );

    if (this.movie.id && this.user.id) {
      this._rateService.getRateByUser(this.movie.id, this.user.id).subscribe(
        (rate: RateResponse) => {
          if (Object.keys(rate).length) {
            this.currentRate = rate;
            const r = this.rates.find((r) => rate.rating_id === r.value);
            this.rateText = r.text;
            r.checked = true;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  rateMovie(rate: any) {
    if (this._auth.isLoggedIn()) {
      this.rates.forEach((r) => {
        r.checked = false;
      });
      rate.checked = true;
      this.rateText = rate.text;

      //If the user already gave a rate to the movie then update else insert
      if (Object.keys(this.currentRate).length) {
        const data = {
          id: this.currentRate.id,
          rating_id: rate.value,
        };
        this._rateService.updateRate(data).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        const data = {
          user_id: this.user.id,
          movie_id: this.movie.id,
          rating_id: rate.value,
        };
        this._rateService.addRate(data).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
      }
      return;
    }
    this._modalService.dismissAll('Redirecting to log in');
    this._router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
