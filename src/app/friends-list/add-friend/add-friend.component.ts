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
 
  friends: Array<any>=[];
  friendsList: Array<String>=[];
  loginId: String="test@test.com";
  constructor(private router: Router, private userService: UserService, private http: HttpClient) { 
    
  }

  ngOnInit(){
    this.http.get<any>("assets/food-app.json").subscribe((data)=>
    this.friends = data.friends
    )
    this.friends.forEach(friend => {
      if(friend=== this.loginId){
        this.friendsList=friend.data;
      }
      
    });
  }
  addFriend(){
    
  }

}
