import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    
  }

  cancel(){
    this.router.navigate(["/profile"]);
  }

}
