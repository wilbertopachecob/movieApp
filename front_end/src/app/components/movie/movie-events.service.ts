import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Comment } from 'src/app/models/Comment';

interface Notification {
  type: string;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieEventsService {
  private _notification = new Subject<Notification>();
  private _actionAddComment = new Subject<Comment>();

  constructor() {}

  getNotifications() {
    return this._notification.asObservable();
  }

  actionAddComment(comment: Comment) {
    this._actionAddComment.next(comment);
  }

  getActionAddCommentSubscription() {
    return this._actionAddComment.asObservable();
  }
}
