import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderStatus } from 'src/app/_models/orderstatus';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit{
  orderStatusList: Array<any>= [];
  orderStatus: OrderStatus = new OrderStatus("","","");
  id: string= "";
  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { 
    
    }

  ngOnInit(){
    this.activatedRoute.params
    .subscribe(
      (params)=>{
          this.id= params["id"];
      });
      this.onConfirm(this.id);
      this.orderStatusList.forEach(status=>{
        if(this.id===status.id){
          this.orderStatus= status;
        }
      }
      )
   }

  cancel(){
    this.router.navigate(["/food-listing"]);
  }
  
  onConfirm(id: string){
    return this.http.get<any>("assets/food-app.json").subscribe((data)=>
     this.orderStatusList = data.orderStatus
    )
  }
}
