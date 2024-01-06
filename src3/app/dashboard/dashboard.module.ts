import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard.page';
import { SharedModule } from '../shared-module/shared.module';
import { TestPDFPage } from '../test-pdf/test-pdf.page';
import { DealerComponent } from './dealer/dealer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage,TestPDFPage],
  exports:[DealerComponent]
})
export class DashboardPageModule {}
