import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/_models/user';
import { UserService } from '../_services/user.service';
//credential repository/collection

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements HttpInterceptor {

  constructor(private userService: UserService) { }
  //fake authorization server
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<User>> {
    //there are four major section extract from request and assign to variables
    const { url, method, headers, body } = request;
    switch (true) {
      case url.endsWith("/users/login") && method === "GET"://request number 1 
        //validate the credential
        //this case is only for login
        return this.authenticate(headers);
      default:
        //pass on the request to original server
        //check the validity of the token 
        if (this.isValid(headers))
          return next.handle(request);
        return this.unauthorized();

    }

  }

  isValid(headers: HttpHeaders) {
    let authToken = headers?.get("Authorization");
    let users = this.userService.getUsers();
    //iterate over users collection
    let user = users.find(user => authToken === "Bearer " + window.btoa(user.loginId + ":" + user.password));

    if (user) {
      //user is found and credentials are valid
      return true;
    } else {
      return false;
    }
  }

  authenticate(headers: HttpHeaders) {
    let authToken = headers?.get("Authorization");
    let users = this.userService.getUsers();
    //iterate over users collection
    let user = users.find(user => authToken === "Bearer " + window.btoa(user.loginId + ":" + user.password));

    if (user) {
      //user is found and credentials are valid
      return this.authorized(user);
    } else {
      return this.unauthorized();
    }

  }

  authorized(body?: User) {
    //create an observable of data and return
    return of(new HttpResponse({ status: 200, body }));
  }

  unauthorized() {
    //yet another function to create observable using error
    return throwError({ status: 401, error: { message: "Unauthorized" } });
  }
}
