import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private login: LoginService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //add the jwt token(which is saved in local storage) request
    let authReq = req;
    const token = this.login.gettoken();
    console.log('inside interceptor');

    if (token != null) {
      authReq = authReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
