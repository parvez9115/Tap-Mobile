import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonFormPageRoutingModule } from './common-form-routing.module';

import { CommonFormPage } from './common-form.page';
import {FileUploadModule}from 'ng2-file-upload';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    ReactiveFormsModule,
    CommonFormPageRoutingModule
  ],
  declarations: [CommonFormPage]
})
export class CommonFormPageModule {}
