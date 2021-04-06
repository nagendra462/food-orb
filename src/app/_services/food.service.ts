import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Listing } from '../_models/listing';
import { Order } from '../_models/order';
import { HeaderService } from './header.service';

const apiBaseURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor(private http: HttpClient, private header: HeaderService,) { }


  public getFeed(): Observable<any>{
    return  this.http.get<any>(apiBaseURL+"/feedList");
  }

 
  public getOrder(): Observable<any>{
    return this.http.get(apiBaseURL +  'api/v1/orders'); 
  }

  public getOrderById(id: string): Observable<Order>{
    return this.http.get<Order>(apiBaseURL+ 'api/v1/orders/'+ id); 
  }

  public getOrderStatus(id: string): Observable<any>{
    return this.http.get(apiBaseURL +  'api/v1/orders/'+ id+ '/status'); 
  }

  public getFriends(id: string): Observable<any>{
    return this.http.get(apiBaseURL +  'api/v1/friends'); 
  }

}
