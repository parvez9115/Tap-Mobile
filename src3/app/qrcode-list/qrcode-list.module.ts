import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodeListPageRoutingModule } from './qrcode-list-routing.module';
import { SharedModule } from '../shared-module/shared.module';
import { QrcodeListPage } from './qrcode-list.page';
import { AllQrcodeComponent } from './all-qrcode/all-qrcode.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    QrcodeListPageRoutingModule
  ],
  declarations: [QrcodeListPage,AllQrcodeComponent],
  entryComponents:[AllQrcodeComponent]
})
export class QrcodeListPageModule {}
