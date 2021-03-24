import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import * as moment from 'moment';
import { User } from 'src/app/models/User';
import { AppStoreService } from 'src/app/app-store.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Movie, movieInitValues } from 'src/app/models/Movie';

interface CommentExtended extends Comment {
  showEdit: boolean;
  showReply: boolean;
  children: [];
}

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css'],
})
export class CommentsListComponent implements OnInit {
  comments: CommentExtended[] = [];
  commentsTree: any[] = [];
  @Input() movie: Movie = movieInitValues();
  user: User = {};
  subscriptions: Subscription[] = [];
  constructor(
    private _commentService: CommentService,
    private _store: AppStoreService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this._commentService.getAllMovieComments(Number(this.movie.id)).subscribe(
      (comments: Comment[]) => {
        this.comments = <CommentExtended[]>comments;
        this.commentsTree = this.arrayToTree(this.comments);
      },
      (error) => {
        console.log(error);
      }
    );

    this.subscriptions.push(
      this._store.user$.subscribe((u: User) => {
        this.user = u;
      })
    );
  }

  canManage(userID: number): boolean {
    return this.user.id === userID || this._auth.isAdmin();
  }

  edit(comment: CommentExtended) {
    comment.showEdit = true;
  }

  reply(comment: CommentExtended) {
    comment.showReply = true;
  }

  updateComment(comment: Comment) {
    const c = this.comments.find((c) => c.id === comment.id);
    if (c) {
      c.content = comment.content;
      c.showEdit = false;
    }
  }

  addReply(parent: CommentExtended, comment: Comment) {
    parent.showReply = false;
    this.comments.push({
      ...comment,
      children: [],
      showEdit: false,
      showReply: false,
    });

    this.commentsTree = this.arrayToTree(this.comments);
  }

  addComment(comment: Comment) {
    this.commentsTree.push({
      ...comment,
      children: [],
      showEdit: false,
      showReply: false,
    });
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this comment.')) {
      this._commentService.deleteComment(id).subscribe(
        (_) => {
          //need to find a better way to do this
          this.comments = this.comments.filter((c) => c.id !== id);
          this.commentsTree = this.arrayToTree(this.comments);
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

  arrayToTree(arr: any[]): any[] {
    let map: any = {},
      node,
      roots = [],
      i;

    for (i = 0; i < arr.length; i += 1) {
      map[arr[i].id] = i; // initialize the map
      arr[i].children = []; // initialize the children
    }

    for (i = 0; i < arr.length; i += 1) {
      node = arr[i];
      if (node.parent_id !== null) {
        // if you have dangling branches check that map[node.parentId] exists
        arr[map[node.parent_id]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
