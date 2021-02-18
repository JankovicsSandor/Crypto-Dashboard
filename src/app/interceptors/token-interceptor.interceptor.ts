import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //TODO add auth header
    /* request = request.clone({
       setHeaders: {
         Authorization: `Bearer ${this.auth.getToken()}`
       }
     });*/
    return next.handle(request);
  }
}
