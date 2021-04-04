import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
 
  friends: Array<string>=[];
  friendsList: Array<string>=[];
  message: string='';
  constructor(private router: Router, private userService: UserService, private http: HttpClient) { 
    
  }

  ngOnInit(){
    this.http.get<any>("assets/food-app.json").subscribe((data)=>
    this.friendsList = data.friends
    )
  }
  addFriend(friend: string){
     this.friends.push(friend);
     this.message="New friend added";
     this.friendsList = this.friendsList.filter(obj => obj !== friend);
     this.router.navigate(["/add-friend"]);
  }

  friendslist(){
    this.router.navigate(["/friend-list", {friends: this.friends}]);
  }
}
