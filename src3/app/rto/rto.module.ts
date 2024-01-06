import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RtoPageRoutingModule } from './rto-routing.module';

import { RtoPage } from './rto.page';
import { AddRtoComponent } from './add-rto/add-rto.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RtoPageRoutingModule
  ],
  declarations: [RtoPage,AddRtoComponent],
  entryComponents:[AddRtoComponent]
})
export class RtoPageModule {}
