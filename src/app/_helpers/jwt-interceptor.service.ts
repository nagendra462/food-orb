import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  if(this.authService.isUserLoggedIn()){
    let authToken=""+this.authService.getAuthenticationToken();
    request=request.clone({
      setHeaders: { Authorization: authToken } 
    });
  }
  return next.handle(request);
  }
}
