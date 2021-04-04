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

  apiBaseURL = "http://localhost/";

  public getFeed(): Observable<any>{
    return this.http.get(this.apiBaseURL +  'api/v1/feed');
  }

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

}
