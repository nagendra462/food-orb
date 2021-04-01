import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})

export class FriendlistComponent implements OnInit {
  
  friends: Array<String> = [];
  constructor(private router:Router) { 
    this.friends=["James", "Adam", "Nino", "Gabriel"];
  }

  ngOnInit(): void {
  }

  addFriends(){
    this.router.navigate(["/add-friend"]);
  }
}
