import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from '../_models/listing';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private header: HeaderService,) { }


  public getFeed(): Observable<any>{
    return  this.http.get<any>("assets/food-app.json");
  }

 
}
