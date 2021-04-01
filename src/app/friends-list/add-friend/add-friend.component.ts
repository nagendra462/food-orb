import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  friends: Array<String>=[];
  constructor(private router: Router) { 
    this.friends=["Marta", "Alex"];
  }

  ngOnInit(): void {
  }
  addFriend(){
    
  }

}
