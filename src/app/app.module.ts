import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './registration/login/login.component';
import { LogoutComponent } from './registration/logout/logout.component';
import { JwtInterceptorService } from './_helpers/jwt-interceptor.service';
import { FakeBackendService } from './_helpers/fake-backend.service';
import { ErrorInterceptorService } from './_helpers/error-interceptor.service';
import { AuthGuardService } from './_helpers/auth-guard.service';
import { ListingModule } from './listing/listing.module';
import { OrderingModule } from './ordering/ordering.module';
import { FriendsListModule } from './friends-list/friends-list.module';
import { RegistrationModule } from './registration/registration.module';
import { FoodListingComponent } from './listing/food-listing/food-listing.component';
import { FriendlistComponent } from './friends-list/friendlist/friendlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RegistrationModule,
    ListingModule,
    OrderingModule
  ],
  providers: [
    {
      //any http request will be intercepted
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    },
    {
      //any http request will be intercepted
      provide: HTTP_INTERCEPTORS, useClass: FakeBackendService, multi: true
    },
    {

      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true

    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
