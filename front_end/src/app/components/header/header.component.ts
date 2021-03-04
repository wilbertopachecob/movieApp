import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStoreService } from 'src/app/app-store.service';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User | undefined;
  constructor(
    private _router: Router,
    private _store: AppStoreService,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this._store.user$.subscribe((user: User) => {
      // user.isAuthenticated = true;
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this._auth.isLoggedIn();
  }

  login() {
    this._router.navigate(['/login']);
  }
  signin() {
    this._router.navigate(['/signin']);
  }
  logout() {
    this._auth.logout();
  }
}
