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
  ) {
    const navigation = this._router.getCurrentNavigation();
    if (navigation) {
      const state = navigation.extras.state;
      if (state) {
        this.flashMSG = {
          type: 'danger',
          msg: state!.msg,
        };
      }
    }
  }

  ngOnInit(): void {}

  loginUser(f: NgForm) {
    if (f.valid) {
      const user: User = {
        email: f.value.email,
        password: f.value.password,
      };
      this._auth.loginUser(user).subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token || '');
          localStorage.setItem('user', JSON.stringify(res.user) || '{}');
          this._router.navigate(['/home']);
          this._store.setUser(res.user);
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
