import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtoPage } from './rto.page';

const routes: Routes = [
  {
    path: '',
    component: RtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtoPageRoutingModule {}
