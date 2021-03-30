import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  myForm: FormGroup;
  emailNotFound: boolean = false;
  email: FormControl;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private builder: FormBuilder,
    private userService: UserService, private router: Router) {
    this.email = new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.pattern(this.emailPattern)]));
    this.myForm = builder.group({
      'email': this.email

    })

  }

  ngOnInit() {

  }




  resetPassword() {
    this.userService.getUserByEmail(this.myForm.value.email).subscribe(
      (userFetched: string | any[]) => {
        if (!userFetched || userFetched.length <= 0) {
          this.emailNotFound = true;
          return;
        }

        this.router.navigate(['/order']);
      },
      (error: any) => {
        console.log(error);
      });
  }

}
