import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsPageRoutingModule } from './reports-routing.module';

import { ReportsPage } from './reports.page';
import { CertificatesComponent } from './certificates/certificates.component';
import { SharedModule } from '../shared-module/shared.module';
import { RtoDepartmentComponent } from './rto-department/rto-department.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ReportsPageRoutingModule
  ],
  declarations: [ReportsPage,CertificatesComponent,RtoDepartmentComponent]
})
export class ReportsPageModule {}
