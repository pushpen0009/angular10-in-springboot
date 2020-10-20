import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedInUserUpdated$: BehaviorSubject<any> = new BehaviorSubject(null);
  loggedInUser: any;
  userToken = 'UserToken';
  userDetails = 'UserDetails';

  constructor(private httpServie: HttpClient) { }

  login(usrId, password): Observable<any> {
    return this.httpServie.post(environment.BACKEND_SERVICE_ENDPOINT + 'api-gateway/auth-service-app/auth-service/api/auth', {
      usrId,
      password
    });
  }

  logout(): void {
    localStorage.removeItem(this.userToken);
    localStorage.removeItem(this.userDetails);
  }

  storeUserTokenandDetails(userdetails): void {
    localStorage.setItem(this.userToken, userdetails.token);
    localStorage.setItem(this.userDetails, JSON.stringify(userdetails));
    this.setLoggedinUser(userdetails.token);
  }

  setLoggedinUser(token): void {
    // const tokenDecoded = jwt_decode(token);
    //  this.loggedInUser = JSON.parse(tokenDecoded.user);
    this.loggedInUser = ''; // JSON.parse(tokenDecoded);
    this.loggedInUserUpdated$.next(this.loggedInUser);
  }

  getRefreshToken = () => {
    this.httpServie.get(environment.BACKEND_SERVICE_ENDPOINT + 'api-gateway/auth-service-app/auth-service/api/auth/refresh/token')
      .subscribe(data => {
        this.storeUserTokenandDetails({ token: data});
    });
  }
}
