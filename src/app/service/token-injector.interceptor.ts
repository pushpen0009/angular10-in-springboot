import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  ActivatedRoute,
} from '@angular/router';

import { AlertService } from './alert.service';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class TokenInjectorInterceptor implements HttpInterceptor {
  constructor(
    public alertSrvc: AlertService,
    // public dialogService: DialogService,
    public route: ActivatedRoute
  ) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('UserToken');

    if (userToken) {
      const cloned = req.clone({
        headers: req.headers.append('Authorization', 'Bearer ' + userToken)
          .append('X-Correlation-Id', uuid4())
      });

      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(this.route);
          if (error.status === 401) {
            this.navigateToReLogin();
          }
          return throwError(error);
        })
      );
    } else {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(this.route);
          if (error.status === 401) {
            this.navigateToReLogin();
          }
          return throwError(error);
        })
      );
    }
  }

  navigateToReLogin(): void {
    console.log(this.route);
    // const ref = this.dialogService.open(ReLoginComponent, {
    //   showHeader: false,
    //   width: '50%'
    // });
  }
}
