import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyTokenInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (!/^(http|https):/i.test(request.url)) {
        request = request.clone({ url: '/api' + request.url, setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        } });
      }
      return next.handle(request);
      }
}