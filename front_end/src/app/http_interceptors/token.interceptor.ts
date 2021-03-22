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
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}
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
    this._router.navigate(['/login']);
  }
}
