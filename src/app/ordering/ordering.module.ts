import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { TrackingComponent } from './tracking/tracking.component';



@NgModule({
  declarations: [OrderComponent, TrackingComponent],
  imports: [
    CommonModule
  ]
})
export class OrderingModule { }
