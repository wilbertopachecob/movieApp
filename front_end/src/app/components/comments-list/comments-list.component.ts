import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import * as moment from 'moment';
import { User } from 'src/app/models/User';
import { AppStoreService } from 'src/app/app-store.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
})
export class CommentsListComponent implements OnInit {
  @Input() comments: Comment[] = [];
  user: User = {};
  subscriptions: Subscription[] = [];
  constructor(
    private commentService: CommentService,
    private _store: AppStoreService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this._store.user$.subscribe((u: User) => {
        this.user = u;
      })
    );
  }
  update(comment: Comment) {
    const data: Comment = { content: '' };
    this.commentService.updateComment(data).subscribe(
      (_) => {},
      (error) => {
        console.log(error);
      }
    );
  }

  canManage(userID: number): boolean {
    console.log(this.user.id === userID || this._auth.isAdmin());

    return this.user.id === userID || this._auth.isAdmin();
  }

  edit(content: string) {}

  delete(id: number) {
    if (confirm('Are you sure you want to delete this comment.')) {
      this.commentService.deleteComment(id).subscribe(
        (_) => {
          this.comments = this.comments.filter((c) => c.id !== id);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  timeSince(date: string) {
    const seconds = moment().diff(moment(date), 'seconds');

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + ' years ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes ago';
    }
    return Math.floor(seconds) + ' seconds ago';
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}