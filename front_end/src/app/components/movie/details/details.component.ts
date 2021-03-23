import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Movie, movieInitValues } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @ViewChild('content') content: TemplateRef<any> | undefined;
  @Input() movie: Movie = movieInitValues();
  subscriptions: Subscription[] = [];

  constructor(
    private _modalService: NgbModal,
    private _movieService: MovieService
  ) {}

  ngOnInit(): void {}
  closeModal() {
    (document.querySelector('#close_modal') as HTMLButtonElement).click();
  }

  openModal() {
    if (this.movie.id) {
      this._movieService.getMovieById(this.movie.id).subscribe(
        (movie: Movie) => {
          this.movie = movie;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this._modalService.open(this.content, { size: 'xl' });
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
