import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TokenService} from './auth/token.service';
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {RouterUrls} from "../constants/RouterUrls";
import {CustomSnackbarService} from "./snackbar-service.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService,
              private router: Router,
              private snackBarService: CustomSnackbarService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.geToken();

    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          localStorage.clear();
          this.router.navigateByUrl('');
          this.snackBarService.info('Per shkak te sigurise, duhet qe te kyqeni prap')
        }
      }));
  }

}
