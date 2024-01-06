import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusModalPageRoutingModule } from './status-modal-routing.module';

import { StatusModalPage } from './status-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusModalPageRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [StatusModalPage]
})
export class StatusModalPageModule {}
