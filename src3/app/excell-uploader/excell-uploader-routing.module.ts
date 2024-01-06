import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcellUploaderPage } from './excell-uploader.page';

const routes: Routes = [
  {
    path: '',
    component: ExcellUploaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcellUploaderPageRoutingModule {}
