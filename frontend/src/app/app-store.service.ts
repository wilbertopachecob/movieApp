import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class AppStoreService {
  private _user = new BehaviorSubject<User>(this.getInitUser());
  user$ = this._user.asObservable();

  constructor() {}

  getInitUser() {
    let user = {
      id: 0,
      name: 'Anonymous',
      role_id: 2,
      email: '',
      password: '',
    };
    try {
      let u = JSON.parse(localStorage.getItem('user') || '{}');
      if (typeof u === 'object' && Object.keys(u).length > 0) {
        user = u;
      }
    } catch (error) {
      console.log(error);
    }
    return user;
  }

  setUser(user: User) {
    this._user.next(user);
  }

  getUser(): User {
    return this._user.getValue();
  }
}
