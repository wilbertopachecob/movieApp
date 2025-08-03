import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RateMovieService {
  constructor(private _httpClient: HttpClient) {}

  getRateByUser(movieID: number, userID: number) {
    return this._httpClient.get<any>(
      `${environment.apiURL}/rate/${movieID}/${userID}`
    );
  }

  getMovieRate(movieID: number): Observable<Number> {
    return this._httpClient.get<Number>(
      `${environment.apiURL}/rate/movie-rate/${movieID}`
    );
  }

  deleteRate(id: number) {
    return this._httpClient.delete(
      environment.apiURL + '/rate/delete?id=' + id
    );
  }

  updateRate(data: any) {
    return this._httpClient.put(environment.apiURL + '/rate/update', data);
  }

  addRate(data: any) {
    return this._httpClient.post(environment.apiURL + '/rate/add', data);
  }
}
