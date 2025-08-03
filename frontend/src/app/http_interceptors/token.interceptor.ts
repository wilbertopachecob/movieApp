import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { User } from '../models/User';
import { AppStoreService } from '../app-store.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private _store: AppStoreService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = localStorage.getItem('token');
    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
    }
    // send cloned request with header to the next handler.
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.handle403Error();
        }
        return throwError(error);
      })
    );
  }

  handle403Error() {
    const defaultUser: User = {
      id: 0,
      name: 'Anonymous',
      role_id: 2,
      email: '',
    };
    this._store.setUser(defaultUser);
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    const navigationExtras: NavigationExtras = {
      state: { msg: 'Your sesion has expired. Please Log in again' },
    };
    this._router.navigate(['/login'], navigationExtras);
  }
}
