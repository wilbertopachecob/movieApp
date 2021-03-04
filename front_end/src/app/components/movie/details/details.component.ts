import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/models/Comment';
import { Movie } from 'src/app/models/Movie';
import { CommentService } from 'src/app/services/comment.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieEventsService } from '../movie-events.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @ViewChild('content') content: TemplateRef<any> | undefined;
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
  comments: Comment[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private _modalService: NgbModal,
    private _commentService: CommentService,
    private _movieService: MovieService,
    private _movieEvents: MovieEventsService
  ) {}

  ngOnInit(): void {
    //listening to new comments and updating the comments array
    this.subscriptions.push(
      this._movieEvents
        .getActionAddCommentSubscription()
        .subscribe((comment: Comment) => {
          this.addComment(comment);
        })
    );
    console.log(this.movie.id);

    this._commentService.getAllMovieComments(Number(this.movie.id)).subscribe(
      (comments: Comment[]) => {
        this.comments = comments;
      },
      (error) => {
        console.log(error);
      }
    );
  }
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

  getAllComments() {
    this._commentService.getAllMovieComments(Number(this.movie.id)).subscribe(
      (res) => {
        this.comments = res;
      },
      (error) => {
        console.log(error);
      }
    );
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
  addComment(comment: Comment) {
    this.comments.push(comment);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
