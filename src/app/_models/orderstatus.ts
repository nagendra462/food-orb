export class OrderStatus {
    orderId: string;
    status: string;
    description: string;

    constructor(orderId: string,
        status: string,
        description: string) {
        this.orderId = orderId;
        this.status = status;
        this.description = description;

    }
}