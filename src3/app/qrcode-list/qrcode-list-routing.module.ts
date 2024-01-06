import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeListPage } from './qrcode-list.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodeListPageRoutingModule {}
