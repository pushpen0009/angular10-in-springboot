import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  currentUser: User;
  returnUrl: string;

  loading = false;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.subscribeCurrentUserData();
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
  }

  private subscribeCurrentUserData(): void {
    this.userService.loggedInUserUpdated$.subscribe(
      user => (this.currentUser = user)
    );
  }

  createLoginForm(): void {
    this.form = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.userService
      .login(this.form.value.userId, this.form.value.password)
      .subscribe(
        (userDetails: any) => {
          this.error = null;
          this.loading = false;
          this.userService.storeUserTokenandDetails(userDetails);
          if (this.currentUser.isPasswordChangeRequired) {
            this.router.navigateByUrl('changePassword');
          } else {
            this.router.navigateByUrl(this.returnUrl);
          }
        },
        error => {
          this.error = error.error.message;
          this.router.navigateByUrl(this.returnUrl);
          this.loading = false;
        }
      );
  }
}
