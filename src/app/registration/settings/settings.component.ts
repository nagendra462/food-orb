import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/_models/Address';
import { Customer } from 'src/app/_models/customer';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  addresses: Array<Address> = [];
  isAddressSaved: boolean = false;
  public myForm: FormGroup;
  userId: any;
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

  addAddress() {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  addAddressDetails() {
    console.log("addAddressDetails");
    //this.router.navigate(['/product',selectedProduct.product_name,selectedProduct.product_cost,selectedProduct.product_description])
  }

  editAddressDetails(selectedAddress: Address) {
    console.log(selectedAddress.name);
    //this.router.navigate(['/product',selectedProduct.product_name,selectedProduct.product_cost,selectedProduct.product_description])
  }

  removeAddress(selectedAddress: Address) {
    console.log(selectedAddress.name);
    const index: number = this.addresses.indexOf(selectedAddress);
    if (index !== -1) {
      this.addresses.splice(index, 1);
    }
  }




}
