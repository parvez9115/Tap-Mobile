import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RtoDashboardPage } from './rto-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: RtoDashboardPage
  },
  {
    path: 'status-modal',
    loadChildren: () => import('./status-modal/status-modal.module').then( m => m.StatusModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RtoDashboardPageRoutingModule {}
