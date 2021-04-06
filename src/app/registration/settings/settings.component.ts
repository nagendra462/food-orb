import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/_models/Address';
import { Customer } from 'src/app/_models/customer';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  addresses: Array<Address> = [];
  newaddresses: Array<Address> = [];
  isAddressSaved: boolean = false;
  addAddressClicked: boolean = false;
  public myForm: FormGroup;
  userId: any;
  name: string;
  postCode: string;
  constructor(private _fb: FormBuilder, private userService: UserService, private authService: AuthenticationService) {

    this.userId = this.authService.getUserId();
    this.userService.getAddress().subscribe(
      res => {
        res.forEach((customer: { name: string | null; addresses: Address[]; }) => {
          if (customer.name == this.authService.getUserId()) {
            this.addresses = customer.addresses;
          }
        });

      },
      err => console.log(err));

  }

  ngOnInit(): void {

    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([
        this.initAddress(),
      ])
    });
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }



  addAddressDetails() {
    this.addAddressClicked = true;
    console.log("addAddressDetails");
  }

  onSubmit(myform: any) {  
    console.log(myform);
   
    let newAddress = new Address(myform.name, myform.postCode);
    this.newaddresses.push(newAddress);
    this.userService.addAddress(this.newaddresses, this.userId);
  }



  removeAddress(selectedAddress: Address) {
    console.log(selectedAddress.name);
    const index: number = this.addresses.indexOf(selectedAddress);
    if (index !== -1) {
      this.addresses.splice(index, 1);
      this.userService.addAddress(this.addresses, this.userId);
    }
  }




}
