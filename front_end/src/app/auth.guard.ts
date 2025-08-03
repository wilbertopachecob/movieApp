import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate(): boolean {
    if (this._auth.isLoggedIn() && this._auth.isAdmin()) {
      return true;
    }
    const navigationExtras: NavigationExtras = {
      state: { msg: 'You need to Log in to perform this action' },
    };
    this._router.navigate(['/login'], navigationExtras);
    return false;
  }
}
