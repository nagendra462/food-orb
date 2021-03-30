import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthenticationService,
    private router:Router) {
    this.authService.logout();
    //once user logsout navigate to login component
    this.router.navigate(['/login']);

   }

  ngOnInit(): void {
  }

}
