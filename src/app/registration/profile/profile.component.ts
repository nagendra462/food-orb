import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userSelected: User ;

  constructor(private authService: AuthenticationService, private userService: UserService) { 
  
  }

  ngOnInit(): void {
    let userId = this.authService.getUserId();
    if (userId != "" && userId != null) {
      this.userService.getUsers().forEach(user => {
        if (user.loginId == userId) {
          this.userSelected = user;
        }
      });
    }

  }

}
