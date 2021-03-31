import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Array<String> = [];
  constructor(private router: Router) { 
    this.orders = [
      "item 1","item 2", "item 3", "item 4"
    ]
  }

  ngOnInit(): void {
  }
  cancel(){
    this.router.navigate(['/profile']);
  }
  confirm(){
    this.router.navigate(['/order-track']);
  }
}
