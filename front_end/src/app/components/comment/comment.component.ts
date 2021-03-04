import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStoreService } from 'src/app/app-store.service';
import { Comment } from 'src/app/models/Comment';
import { Movie } from 'src/app/models/Movie';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
import { MovieEventsService } from '../movie/movie-events.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  commentContent: string = '';
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
  constructor(
    private _commentService: CommentService,
    private _store: AppStoreService,
    private _router: Router,
    private _movieEvents: MovieEventsService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {}
  addComment(form: NgForm) {
    const user: User = this._store.getUser();
    if (this._auth.isLoggedIn()) {
      if (form.valid) {
        const data: Comment = {
          content: this.commentContent,
          user_id: this._store.getUser().id,
          movie_id: this.movie.id,
        };
        this._commentService.addComment(data).subscribe(
          (comment: Comment) => {
            this.commentContent = '';
            this._movieEvents.actionAddComment(comment);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      this._router.navigate(['/login']);
    }
  }
}
