import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListingComponent } from './food-listing/food-listing.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  declarations: [FoodListingComponent, FeedComponent],
  imports: [
    CommonModule
  ]
})
export class ListingModule { }
