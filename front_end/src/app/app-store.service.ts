import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root',
})
export class AppStoreService {
  private _user = new BehaviorSubject<User>({
    id: 0,
    name: 'Anonymous',
    role_id: 2,
    email: '',
    password: '',
  });
  user$ = this._user.asObservable();

  constructor() {}

  setUser(user: User) {
    this._user.next(user);
  }

  getUser(): User {
    return this._user.getValue();
  }
}
