import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

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
}
