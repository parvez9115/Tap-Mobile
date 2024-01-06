import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FileUploadModule}from 'ng2-file-upload';
import { IonicModule } from '@ionic/angular';

import { AddProductsPageRoutingModule } from './add-products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductsPage } from './add-products.page';
import { SharedModule } from '../shared-module/shared.module';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    IonicModule,
    AddProductsPageRoutingModule,
    SharedModule
  ],
  declarations: [AddProductsPage,AddProductComponent],
  entryComponents:[AddProductComponent]
})
export class AddProductsPageModule {}
