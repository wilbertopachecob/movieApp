import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { CommentLike } from '../models/CommentLike';

@Injectable({
  providedIn: 'root',
})
export class CommentLikesService {
  constructor(private _httpClient: HttpClient) {}

  addLike(data: any) {
    return this._httpClient.post<number>(
      `${environment.apiURL}/comment_likes/add`,
      data
    );
  }

  updateLike(data: any) {
    return this._httpClient.put(
      `${environment.apiURL}/comment_likes/update`,
      data
    );
  }

  getUserMovieCommentLike(
    movieID: number,
    userID: number
  ): Observable<CommentLike[]> {
    if (userID !== 0) {
      return this._httpClient.get<CommentLike[]>(
        `${environment.apiURL}/comment_likes/${movieID}/${userID}`
      );
    }
    const r: CommentLike[] = [];
    return of(r);
  }
}
