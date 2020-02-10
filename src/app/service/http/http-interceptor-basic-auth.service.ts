import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest,HttpEvent, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  
  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
/*
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
  
      return next.handle(request);
    }else{
      return next.handle(request);
    }
  }
  */

 intercept(req: HttpRequest<any>, next: HttpHandler) {

  if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
    req = req.clone({
      setHeaders: {
        Authorization: sessionStorage.getItem('token')
      }
    })
  }

  return next.handle(req);

}

}
