import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  inValid: boolean = false;
  ngOnInit(): void {
  }

  loginCheck(login: HTMLInputElement, password: HTMLInputElement) {
    this.authService.authenticate(login.value, password.value)
    .subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/food-listing']);
        this.inValid = false;
      },
      (error)=>{
        console.log(error);
        this.inValid = true;
      }
    )

  }

}
