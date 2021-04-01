import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AddFriendComponent } from './friends-list/add-friend/add-friend.component';
import { FriendlistComponent } from './friends-list/friendlist/friendlist.component';
import { FoodListingComponent } from './listing/food-listing/food-listing.component';
import { OrderComponent } from './ordering/order/order.component';
import { OrderingModule } from './ordering/ordering.module';
import {FriendsListModule} from './friends-list/friends-list.module';
import { TrackingComponent } from './ordering/tracking/tracking.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';
import { LoginComponent } from './registration/login/login.component';
import { LogoutComponent } from './registration/logout/logout.component';
import { ProfileComponent } from './registration/profile/profile.component';
import { RegistrationPageComponent } from './registration/registration-page/registration-page.component';
import { SettingsComponent } from './registration/settings/settings.component';
import { AuthGuardService } from './_helpers/auth-guard.service';

const routes: Routes = [
  { path: 'order', component: OrderComponent,canActivate:[AuthGuardService] },
  { path: 'order-track', component: TrackingComponent,canActivate:[AuthGuardService] },
  { path: 'food-listing', component: FoodListingComponent ,canActivate:[AuthGuardService]},
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuardService]},
  { path: 'settings', component: SettingsComponent ,canActivate:[AuthGuardService]},
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGuardService]},  
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'add-friend', component: AddFriendComponent },
  { path: 'friend-list', component: FriendlistComponent ,canActivate:[AuthGuardService]},
  { path: 'add-friend', component: AddFriendComponent ,canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
