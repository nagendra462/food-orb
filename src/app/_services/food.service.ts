import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../_models/listing';
import { Order } from '../_models/order';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private header: HeaderService,) { }


  public getFeed(): Observable<any>{
    return  this.http.get<any>("assets/food-app.json");
  }

<<<<<<< HEAD
 
=======
  public getOrder(): Observable<any>{
    return this.http.get(this.apiBaseURL +  'api/v1/orders'); 
  }

  public getOrderById(id: string): Observable<Order>{
    return this.http.get<Order>(this.apiBaseURL +  'api/v1/orders/'+ id); 
  }

  public getOrderStatus(id: string): Observable<any>{
    return this.http.get(this.apiBaseURL +  'api/v1/orders/'+ id+ '/status'); 
  }

  public getFriends(id: string): Observable<any>{
    return this.http.get(this.apiBaseURL +  'api/v1/friends'); 
  }

>>>>>>> d98a1b54a5ee85a77a448d0fef9f480d9aaaebc1
}
