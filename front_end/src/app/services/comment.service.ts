import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}
  getAllMovieComments(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      `${environment.apiURL}/comment/all?movieID=${id}`
    );
  }
  deleteComment(id: number) {
    return this.httpClient.delete(
      `${environment.apiURL}/comment/delete?id=${id}`
    );
  }
  updateComment(data: Comment) {
    return this.httpClient.put(`${environment.apiURL}/comment/update`, data);
  }
  addComment(data: Comment): Observable<Comment> {
    console.log({ data });

    return this.httpClient.post<Comment>(
      `${environment.apiURL}/comment/add`,
      data
    );
  }
}
