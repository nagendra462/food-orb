import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/_models/order';
import { FoodService } from 'src/app/_services/food.service';
import { TrackingComponent } from '../tracking/tracking.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Array<Order> = [];
  constructor(private router: Router, private http: HttpClient) { 
  }

  ngOnInit(){
    this.http.get<any>("assets/food-app.json").subscribe((data)=>
    this.orders = data.orders
  )
  console.log(this.orders)
  }
  cancel(){
    this.router.navigate(['/profile']);
  }
  confirm(id: string){
    if(id!="" && id!=null){
      this.orders.forEach(order => {
        if(order.listing_id==id){
          this.router.navigate(['/order-track', id]);
        }
      });
    }
  }
}
