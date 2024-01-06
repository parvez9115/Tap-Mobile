import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardCountPageRoutingModule } from './dashboard-count-routing.module';

import { DashboardCountPage } from './dashboard-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardCountPageRoutingModule
  ],
  declarations: [DashboardCountPage]
})
export class DashboardCountPageModule {}
