import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const currentUser = this.authenticationService.currentUserValue;
    const userToken = localStorage.getItem('UserToken');
    if (userToken) {
      this.userService.setLoggedinUser(userToken);
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }
    // const currentUser = this.userService.loggedInUser;
    // if (currentUser) {
    //     // logged in so return true
    //     return true;
    // }

    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // return false;
  }
}
