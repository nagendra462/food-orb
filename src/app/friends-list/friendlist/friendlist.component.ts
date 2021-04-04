import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})

export class FriendlistComponent implements OnInit {
  
  friends: String = '';
  constructor(private router:Router, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params
    .subscribe(
      (params)=>{
          this.friends= params["friends"];
          console.log("friends list: "+ this.friends)
      });
  }

  ngOnInit(): void {
  }

  addFriends(){
    this.router.navigate(["/add-friend"]);
  }
}
