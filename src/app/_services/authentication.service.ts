import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

const LOGIN_URL = "http://localhost:4200/users/login";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(private http: HttpClient) {


  }




  authenticate(loginId: string, password: string) {
    //hard coded logic
    /* if(loginId==="test@test.com" && password==="test"){
       //remains only in the session,removed when browser is closed
       sessionStorage.setItem("loginId",loginId);
       return true;
     }else{
       return false;
     } */

    //create authentication token now 
    let authToken = "Bearer " + window.btoa(loginId + ":" + password);
    //request fak backedn server using this token
    console.log("token" + authToken);
    //add token to header 
    let headers = new HttpHeaders({
      Authorization: authToken
    })
    return this.http.get(LOGIN_URL, { headers })
      .pipe(
        map(successData => {
          //store the token  in session
          console.log(JSON.parse(JSON.stringify(successData)).role);

          sessionStorage.setItem("loginId", loginId);
          sessionStorage.setItem("authToken", authToken);
          sessionStorage.setItem('currentUserRole', JSON.parse(JSON.stringify(successData)).role);
          return successData;
        }), map(
          failureData => {
            return failureData;
          }
        ));
  }

  //to return auth token
  getAuthenticationToken() {
    if (this.isUserLoggedIn()) {
      return sessionStorage.getItem("authToken");
    }
    return null;
  }

  //check if user is logged in
  isUserLoggedIn() {
    let loginId = sessionStorage.getItem("loginId");
    console.log("loginId" + loginId);
    if (loginId == null) {
      return false;
    }
    return true;
  }

  //check if user is logged in
  getCurrentRole() {
    let role = sessionStorage.getItem("currentUserRole");

    return role;
  }

  logout() {
    sessionStorage.removeItem("loginId");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("currentUserRole");
    sessionStorage.clear();
  }

  //check if user is logged in
  getUserId() {
    let loginId = sessionStorage.getItem("loginId");
    console.log("loginId" + loginId);
    return loginId;
  }


}
