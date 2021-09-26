import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../../http/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(
    private auth: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    console.log("Sending request with new header now ... INTERCEPTED");

    return next.handle(request);
  }
}
