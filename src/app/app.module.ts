import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from './login/login.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EphsErrorHandler, TokenInjectorInterceptor} from './service/';
import {RouterModule} from '@angular/router';
import {CommonService} from './service/common.service';
import {AngularMaterialModule} from './common/angular-material/angular-material.module';
import { DialogComponent } from './dialog/dialog.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    RouterModule,
    AppRoutingModule,
    AngularMaterialModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      autoDismiss: true,
      onActivateTick: true
    })
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInjectorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: EphsErrorHandler
    },
    ToastrService,
    CommonService
  ],
  exports: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
