import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { OrderComponent } from './ordering/order/order.component';
import { OrderingModule } from './ordering/ordering.module';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';
import { LoginComponent } from './registration/login/login.component';
import { LogoutComponent } from './registration/logout/logout.component';
import { ProfileComponent } from './registration/profile/profile.component';
import { RegistrationPageComponent } from './registration/registration-page/registration-page.component';
import { SettingsComponent } from './registration/settings/settings.component';
import { AuthGuardService } from './_helpers/auth-guard.service';

const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent,canActivate:[AuthGuardService] },
  { path: 'forgot-password', component: ForgotPasswordComponent ,canActivate:[AuthGuardService]},
  { path: 'registration-page', component: RegistrationPageComponent ,canActivate:[AuthGuardService]},
  { path: 'profile', component: ProfileComponent ,canActivate:[AuthGuardService]},
  { path: 'settings', component: SettingsComponent ,canActivate:[AuthGuardService]},
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGuardService]},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
