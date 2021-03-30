import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/_models/Address';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  addresses: Array<Address> = [];
  isAddressSaved: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  addAddressDetails() {
    console.log("addAddressDetails");
    //this.router.navigate(['/product',selectedProduct.product_name,selectedProduct.product_cost,selectedProduct.product_description])
  }

  editAddressDetails(selectedAddress:Address) {
    console.log(selectedAddress.name);
    //this.router.navigate(['/product',selectedProduct.product_name,selectedProduct.product_cost,selectedProduct.product_description])
  }

  deleteAddressDetails(selectedAddress:Address) {
    console.log(selectedAddress.name);
    //this.router.navigate(['/product',selectedProduct.product_name,selectedProduct.product_cost,selectedProduct.product_description])
  }

}
