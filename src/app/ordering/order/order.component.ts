import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  listing_id: string="";
  cost: string="";
  order: Order= new Order(this.listing_id, "1", this.cost);
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params
    .subscribe(
      (params)=>{
          this.listing_id= params["listing_id"];
          this.cost= params["cost"];
      });   
      this.order= new Order(this.listing_id, "1", this.cost);
      this.orders.push(this.order);   
  }

  ngOnInit(){
    
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
