import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from 'src/app/_models/listing';
import { FoodService } from 'src/app/_services/food.service';
import { HeaderService } from 'src/app/_services/header.service';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.css']
})
export class FoodListingComponent implements OnInit {

  listings: Array<Listing> = [];
  constructor(private foodService: FoodService) {
    this.listings = [
      new Listing("no", "Naturals", "natural Ice cream", "Icecream", "5", "200"),
      new Listing("no", "Chutneys", "Dosa", "Dosa", "5", "200")];
      console.log("test");
    this.foodService.getFeed().subscribe(
      res => {
        let data = JSON.parse(res._body);
        console.log(data);
        this.listings = data.food;
      },
      err => console.log(err))

  }

  ngOnInit(): void {
  }


}


