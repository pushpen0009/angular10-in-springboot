import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service';

@Component({
  selector: 'app-re-login',
  templateUrl: './re-login.component.html',
  styleUrls: ['./re-login.component.scss']
})
export class ReLoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  currentUser: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    // public ref: DynamicDialogRef
  ) {
    this.createLoginForm();
    this.subscribeCurrentUserData();
  }

  subscribeCurrentUserData(): void {
    this.userService.loggedInUserUpdated$.subscribe(
      user => (this.currentUser = user)
    );
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get form(): any {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (userDetails: any) => {
          this.error = null;
          this.loading = false;
          this.userService.storeUserTokenandDetails(userDetails);
          // this.ref.close();
        },
        error => {
          this.error = error.error.message;
          this.loading = false;
        }
      );
  }
}

