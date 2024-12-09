import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clona a solicitação e adiciona os cabeçalhos
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return next.handle(modifiedRequest);
  }
}
