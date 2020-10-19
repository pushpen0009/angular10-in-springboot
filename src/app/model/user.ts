export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    isPasswordChangeRequired = false;
    authdata?: string;
}
