import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcellUploaderPageRoutingModule } from './excell-uploader-routing.module';

import { ExcellUploaderPage } from './excell-uploader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcellUploaderPageRoutingModule
  ],
  declarations: [ExcellUploaderPage]
})
export class ExcellUploaderPageModule {}
