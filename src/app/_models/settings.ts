export class Settings {
    currency: string;
    account_status: string;

    constructor(currency: string,
        account_status: string,) {
        this.currency = currency;
        this.account_status = account_status;

    }
}