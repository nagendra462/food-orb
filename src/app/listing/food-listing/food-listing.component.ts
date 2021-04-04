import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
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
  order: Array<any> = [];
  
  constructor(private foodService: FoodService, private router: Router) {

    this.foodService.getFeed().subscribe(
      res => {

        this.listings = res.feedlist;
      },
      err => console.log(err))

  }

  ngOnInit(): void {
  }

  addToCart(index: any) {
    console.log(index);

    this.order.push(this.listings[index]);
    this.router.navigate(['/order']);
  }



}


