import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminComponent } from '../dashboard/super-admin/super-admin.component'
import { DealerComponent } from '../dashboard/dealer/dealer.component';
import { NgxTableComponent  } from '../component/ngx-table/ngx-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTableRtoComponent } from '../component/ngx-table-rto/ngx-table-rto.component';
import { QRCodeModule } from 'angular2-qrcode';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from '../component/status/status.component';
import { AddProductsPageModule } from '../add-products/add-products.module';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
@NgModule({
  declarations: [
    SuperAdminComponent,
    DealerComponent,
    StatusComponent,
    NgxTableComponent,
    NgxTableRtoComponent,
    // ChangepasswordComponent
    
 //   QrGenerationComponent
  ],
  entryComponents:[StatusComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    QRCodeModule,
  ],
  exports:[
    SuperAdminComponent,
    DealerComponent,
    StatusComponent,
  //  QrGenerationComponent,
    NgxTableComponent,
    NgxTableRtoComponent
  ]
})
export class SharedModule { }
