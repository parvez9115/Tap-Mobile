import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclePageRoutingModule } from './vehicle-routing.module';

import { VehiclePage } from './vehicle.page';
// import { VehicleModelComponent } from './vehicle-model/vehicle-model.component';
import { VehicleMakeComponent } from './vehicle-make/vehicle-make.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclePageRoutingModule,
    SharedModule,FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [VehiclePage],
  entryComponents:[VehicleMakeComponent]
})
export class VehiclePageModule {}
