import { ErrorHandler, Inject, Injectable, Injector } from '@angular/core';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class EphsErrorHandler implements ErrorHandler {

    constructor(private userService: UserService, @Inject(Injector) private injector: Injector) {
    }

    private get toastrService(): ToastrService {
        return this.injector.get(ToastrService);
    }

    handleError(err: any): void {

        let errorMessage = '';
        if (err.status === 401) {
            // auto logout if 401 response returned from api
            this.userService.logout();
            location.replace('login');
        } else if (err.status === 503) {
            // service unavilable
            errorMessage = 'Temporarily Service Not Available! ';
        } else if (err.status === 403) {
            // user not allowed to access this resource
            errorMessage = 'User Not Allowed to Access!';
        } else {
            errorMessage = err.error?.message || err.statusText;
        }

        if (errorMessage) {
            this.toastrService.error(errorMessage);
        }
    }
}
