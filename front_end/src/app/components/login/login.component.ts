import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { AppStoreService } from 'src/app/app-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData: any = {};
  flashMSG: any = null;
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _store: AppStoreService
  ) {}

  ngOnInit(): void {}

  loginUser(f: NgForm) {
    if (f.valid) {
      const user: User = {
        email: f.value.email,
        password: f.value.password,
      };
      this._auth.loginUser(user).subscribe(
        (user: User) => {
          localStorage.setItem('token', user.token || '');
          this._router.navigate(['/home']);
          this._store.setUser(user);
        },
        (error) => {
          this.flashMSG = {
            type: 'danger',
            msg:
              'There has been an error authenticating this current credentials.',
          };
          console.log(error);
        }
      );
    }
  }
}