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

  apiBaseURL = "http://localhost/";

  public getFeed(): Observable<any>{
    return this.http.get(this.apiBaseURL +  'api/v1/feed');
  }
}
