import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppStoreService } from 'src/app/app-store.service';
import { Comment } from 'src/app/models/Comment';
import { Movie, movieInitValues } from 'src/app/models/Movie';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  commentContent: string = '';
  @Input() movie: Movie = movieInitValues();
  @Input() parent_id: number | null = null;
  @Output() addC = new EventEmitter<Comment>();
  constructor(
    private _commentService: CommentService,
    private _store: AppStoreService,
    private _router: Router,
    private _auth: AuthService,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {}
  addComment(form: NgForm) {
    if (!this._auth.isLoggedIn()) {
      //closing all open modals before redirectiong
      this._modalService.dismissAll('Redirecting to log in');
      const navigationExtras: NavigationExtras = {
        state: { msg: 'You need to Log in to perform this action' },
      };
      this._router.navigate(['/login'], navigationExtras);
      return;
    }

    if (form.valid) {
      const data: Comment = {
        content: this.commentContent,
        user_id: this._store.getUser().id,
        movie_id: this.movie.id,
        ...(this.parent_id ? { parent_id: this.parent_id } : {}),
      };

      this._commentService.addComment(data).subscribe(
        (comment: Comment) => {
          this.commentContent = '';
          this.addC.emit(comment);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
