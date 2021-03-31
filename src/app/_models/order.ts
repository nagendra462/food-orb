export class Order {
    listing_id: string;
    quantity: string;
    amount: string;

    constructor(listing_id: string,
        quantity: string,
        amount: string) {
        this.listing_id = listing_id;
        this.quantity = quantity;
        this.amount = amount;

    }
}