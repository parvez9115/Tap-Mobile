import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGenerationPageRoutingModule } from './qr-generation-routing.module';

import { QrGenerationPage } from './qr-generation.page';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QRCodeModule,
    QrGenerationPageRoutingModule
  ],
  declarations: [QrGenerationPage]
})
export class QrGenerationPageModule {}
