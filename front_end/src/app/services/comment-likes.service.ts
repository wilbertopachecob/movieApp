import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CommentLike } from '../models/CommentLike';

@Injectable({
  providedIn: 'root',
})
export class CommentLikesService {
  constructor(private _httpClient: HttpClient) {}

  addLike(data: any) {
    return this._httpClient.post(
      `${environment.apiURL}/comment_likes/add`,
      data
    );
  }

  removeLike(data: any) {
    return this._httpClient.put(
      `${environment.apiURL}/comment_likes/remove`,
      data
    );
  }

  getUserMovieCommentLike(
    movieID: number,
    userID: number
  ): Observable<CommentLike[]> {
    return this._httpClient.get<CommentLike[]>(
      `${environment.apiURL}/comment_likes/${movieID}/${userID}`
    );
  }
}
