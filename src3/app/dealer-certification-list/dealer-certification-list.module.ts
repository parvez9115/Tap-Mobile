import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DealerComponent} from '../dashboard/dealer/dealer.component'
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared-module/shared.module';
import { DealerCertificationListPageRoutingModule } from './dealer-certification-list-routing.module';


// import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DealerCertificationListPage } from './dealer-certification-list.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DealerCertificationListPageRoutingModule
  ],
  declarations: [DealerCertificationListPage]
})
export class DealerCertificationListPageModule {}
