import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared-module/shared.module'
import { RtoDashboardPageRoutingModule } from './rto-dashboard-routing.module';

import { RtoDashboardPage } from './rto-dashboard.page';
import { StatusModalPage } from './status-modal/status-modal.page';
import { RouterModule, Routes } from '@angular/router';

const repModal: Routes = [
  {
    path: '',
    component: StatusModalPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(repModal),
    RtoDashboardPageRoutingModule
  ],
  declarations: [RtoDashboardPage, StatusModalPage]
})
export class RtoDashboardPageModule {}
