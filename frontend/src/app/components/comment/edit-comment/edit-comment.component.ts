import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from 'src/app/models/Comment';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css'],
})
export class EditCommentComponent implements OnInit {
  @Input() comment: Partial<Comment> = {};
  @Output() updateC = new EventEmitter<Comment>();
  constructor(
    private _commentService: CommentService,
    private _modalService: NgbModal,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {}

  edit(form: NgForm) {
    if (this._auth.isLoggedIn()) {
      if (form.valid) {
        const data: Comment = {
          content: form.value.content,
          id: this.comment.id,
        };
        this._commentService.updateComment(data).subscribe(
          (res) => {
            console.log(res);
            this.updateC.emit({ ...this.comment, ...data });
            // this._movieEvents.actionAddComment({ ...this.comment, ...data });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      //closing all open modals before redirectiong
      this._modalService.dismissAll('Redirecting to log in');
    }
  }
}
