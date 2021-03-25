import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppStoreService } from 'src/app/app-store.service';
import { Comment } from 'src/app/models/Comment';
import { AuthService } from 'src/app/services/auth.service';
import { CommentLikesService } from 'src/app/services/comment-likes.service';

@Component({
  selector: 'app-comment-likes',
  templateUrl: './comment-likes.component.html',
  styleUrls: ['./comment-likes.component.css'],
})
export class CommentLikesComponent implements OnInit {
  @Input() comment: Partial<Comment> = {};
  commentLikeID: number = 0;
  likeState: 0 | 1 | null = null;

  constructor(
    private _commentLS: CommentLikesService,
    private _store: AppStoreService,
    private _router: Router,
    private _auth: AuthService,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  like(like: 0 | 1) {
    if (!this._auth.isLoggedIn()) {
      //closing all open modals before redirectiong
      this._modalService.dismissAll('Redirecting to log in');
      this._router.navigate(['/login']);
      return;
    }

    if (this.likeState === like) {
      this.removeLike();
      return;
    }

    this.likeState = like;

    if (like === 1) {
      this.comment.likes! += 1;
    } else if (this.comment.dislikes! > 0) {
      this.comment.dislikes! -= 1;
    }

    const data = {
      comment_like: like,
      movie_id: this.comment.movie_id,
      comment_id: this.comment.id,
      user_id: this._store.getUser().id,
    };
    this._commentLS.addLike(data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeLike() {
    this.likeState = null;
    if (this.commentLikeID) {
      this._commentLS.removeLike({ id: this.commentLikeID }).subscribe(
        (_) => {},
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
