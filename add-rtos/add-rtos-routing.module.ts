import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRtosPage } from './add-rtos.page';

const routes: Routes = [
  {
    path: '',
    component: AddRtosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRtosPageRoutingModule {}
