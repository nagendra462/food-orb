import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ ForgotPasswordComponent, ProfileComponent, SettingsComponent, RegistrationPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
