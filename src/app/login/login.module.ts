import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReLoginComponent } from './re-login/re-login.component';
import { AngularMaterialModule } from '../common/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, ReLoginComponent],
  imports: [
    CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule
  ],
  exports: [LoginComponent, ReLoginComponent]
})
export class LoginModule { }
