import { Address } from "./Address";


export class Customer {
    name: string;
    addresses: Address[];

    constructor( name: string,
        addresses: Address[]) {
        this.name = name;
        this.addresses = addresses;
    }

}

