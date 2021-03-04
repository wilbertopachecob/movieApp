import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStoreService } from '../app-store.service';
import { User } from '../models/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _store: AppStoreService
  ) {}

  loginUser(user: User): Observable<User> {
    return this._httpClient.post<User>(environment.apiURL + '/login', user);
  }

  logout() {
    const defaultUser: User = {
      id: 0,
      name: 'Anonymous',
      role_id: 2,
      email: '',
      password: '',
    };
    this._store.setUser(defaultUser);
    localStorage.removeItem('token');
  }

  isAdmin(): boolean {
    return this._store.getUser().role_id === 1;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
