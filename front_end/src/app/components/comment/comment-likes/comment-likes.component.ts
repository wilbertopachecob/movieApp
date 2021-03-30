import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppStoreService } from 'src/app/app-store.service';
import { Comment } from 'src/app/models/Comment';
import { CommentLike } from 'src/app/models/CommentLike';
import { AuthService } from 'src/app/services/auth.service';
import { CommentLikesService } from 'src/app/services/comment-likes.service';

interface CommentLikeExtended extends Comment {
  commentLike: CommentLike | null;
}

@Component({
  selector: 'app-comment-likes',
  templateUrl: './comment-likes.component.html',
  styleUrls: ['./comment-likes.component.css'],
})
export class CommentLikesComponent implements OnInit {
  commentLikeID: number = 0;
  likeState: 0 | 1 | null = null;

  private _comment: Partial<CommentLikeExtended> = {};
  @Input()
  get comment(): Partial<CommentLikeExtended> {
    return this._comment;
  }
  set comment(val: Partial<CommentLikeExtended>) {
    this._comment = val;
    if (val.commentLike) {
      this.commentLikeID = val.commentLike.id;
      this.likeState = val.commentLike.comment_like;
    }
  }

  constructor(
    private _modalService: NgbModal,
    private _auth: AuthService,
    private _router: Router,
    private _store: AppStoreService,
    private _commentLS: CommentLikesService
  ) {}

  ngOnInit(): void {}

  like(like: 0 | 1) {
    if (!this._auth.isLoggedIn()) {
      //closing all open modals before redirectiong
      this._modalService.dismissAll('Redirecting to log in');
      const navigationExtras: NavigationExtras = {
        state: { msg: 'You need to Log in to perform this action' },
      };
      this._router.navigate(['/login'], navigationExtras);
      return;
    }

    if (this.commentLikeID) {
      this.updateLike(like);
      return;
    }

    this.likeState = like;

    this.comment[like === 1 ? 'likes' : 'dislikes']! += 1;

    const data = {
      comment_like: like,
      movie_id: this.comment.movie_id,
      comment_id: this.comment.id,
      user_id: this._store.getUser().id,
    };
    this._commentLS.addLike(data).subscribe(
      (id: number) => {
        this.commentLikeID = id;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateLike(like: 0 | 1) {
    const selectedState = like === 1 ? 'likes' : 'dislikes';
    const decrement = like === 1 ? 'dislikes' : 'likes';
    if (this.likeState === like) {
      this.likeState = null;
      this.comment[selectedState]! -= 1;
    } else {
      this.likeState = like;
      this.comment[selectedState]! += 1;
      this.comment[decrement]! =
        this.comment[decrement]! > 0 ? this.comment[decrement]! - 1 : 0;
    }

    this._commentLS
      .updateLike({
        id: this.commentLikeID,
        comment_like: this.likeState,
      })
      .subscribe(
        (_) => {},
        (error) => {
          console.log(error);
        }
      );
  }
}
