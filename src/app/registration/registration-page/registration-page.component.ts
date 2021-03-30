import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

 
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public builder: FormBuilder) {
    this.firstname = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.pattern(this.emailPattern)]));

    this.phonenumber = new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.mobNumberPattern)]));
    this.password = new FormControl('', [Validators.required]);

    this.myForm = builder.group({
      'firstname': this.firstname,
      'email': this.email,
      'phonenumber': this.phonenumber,
      'password': this.password

    })

  }

  myForm: FormGroup;
  firstname: FormControl;
  email: FormControl;
  phonenumber: FormControl;
  password: FormControl;

  ngOnInit(): void {
  }

  saveEmployee() {
    console.log(this.myForm.value);
    //this.employees.push(this.myForm.value);
  }

}
