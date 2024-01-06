import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerCertificationListPage } from './dealer-certification-list.page';

const routes: Routes = [
  {
    path: '',
    component: DealerCertificationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerCertificationListPageRoutingModule {}
