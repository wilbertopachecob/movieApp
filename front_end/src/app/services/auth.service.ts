import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStoreService } from '../app-store.service';
import { User } from '../models/User';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _store: AppStoreService,
    private _router: Router
  ) {}

  loginUser(user: User) {
    return this._httpClient.post(environment.apiURL + '/login', user);
  }

  logout() {
    const defaultUser: User = {
      id: 0,
      name: 'Anonymous',
      role_id: 2,
      email: '',
    };
    this._store.setUser(defaultUser);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigate(['/home']);
  }

  isAdmin(): boolean {
    console.log(this.isLoggedIn(), this.getUserRole());

    return this.isLoggedIn() && this.getUserRole() === 1;
  }

  getUserRole(): number {
    let role = 2;
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (
        user &&
        typeof user === 'object' &&
        Object.keys(user).length > 0 &&
        Number(user.role_id)
      ) {
        role = user.role_id;
      }
    } catch (error) {
      console.log(error);
    }
    return role;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
