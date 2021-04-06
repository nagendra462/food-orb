import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListingComponent } from './food-listing/food-listing.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [FoodListingComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class ListingModule { }
