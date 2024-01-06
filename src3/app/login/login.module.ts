import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-routing.module';
// import { IonicSelectableModule } from 'ionic-selectable';
import { LoginPage } from './login.page';
import { ForgotComponent } from './forgot/forgot.component';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule,
    IonicModule,
    // IonicSelectableModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage,ForgotComponent]
})
export class LoginPageModule {}
