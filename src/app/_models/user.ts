export class User {
    loginId: string;
    password: string;
    firstName: string;
    role: string;

    constructor(loginId: string,
        password: string,
        firstName: string,
        role: string) {
        this.loginId = loginId;
        this.password = password;
        this.firstName = firstName;
        this.role = role;
    }

}