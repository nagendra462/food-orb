import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User> = [];

  getUsers() {

    const users: Array<User> = [
      new User("test@test.com", "test", "User1", "admin"),
      new User("test2@test.com", "test", "User2", "admin"),
      new User("test3@test.com", "test", "User3", "user"),
      new User("test4@test.com", "test", "User4", "user"),
    ]

    return users;
  }

  /*this.http.get<any>("assets/food-app.json").subscribe(
    res => {
      this.users = res.users;
      return this.users;
    },
    err => console.log(err));*/

  apiBaseURL = "http://localhost/";

  constructor(private http: HttpClient, private header: HeaderService,) { }

  getUserByEmail(email: String): any {
    return this.http.post(this.apiBaseURL + 'users/finduserbyemail', { email: email }, this.header.requestHeaders()).pipe(res => {
      return res;
    });
  };
}
