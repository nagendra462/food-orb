import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../_models/Address';
import { Customer } from '../_models/customer';
import { User } from '../_models/user';
import { HeaderService } from './header.service';
const apiBaseURL = environment.apiUrl;
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





  constructor(private http: HttpClient, private header: HeaderService,) { }

  getUserByEmail(email: String): any {
    return this.http.post(apiBaseURL + '/users/finduserbyemail', { email: email }, this.header.requestHeaders()).pipe(res => {
      return res;
    });
  };


  getAddress(): Observable<Customer[]> {

    return this.http.get<Customer[]>(apiBaseURL + '/customers');

  }

  addAddress(arg0: Address[], userId: any) {
    const headers = { 'content-type': 'application/json' }
    let customer = new Customer(userId, arg0);
    return this.http.post(apiBaseURL + '/customers', customer, { 'headers': headers });
  }
}
