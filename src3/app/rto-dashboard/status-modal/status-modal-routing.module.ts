import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusModalPage } from './status-modal.page';

const routes: Routes = [
  {
    path: '',
    component: StatusModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusModalPageRoutingModule {}
