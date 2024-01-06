import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DealerComponent } from './dashboard/dealer/dealer.component';
import { ReportsGuard } from './guards/reports.guard';
import {  LogoutComponent } from '../app/logout/logout.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashbboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard-count',
    loadChildren: () => import('./dashboard-count/dashboard-count.module').then( m => m.DashboardCountPageModule)
  },
 
  {
    path: 'common-form/:method/:type/:data',
    loadChildren: () => import('./common-form/common-form.module').then( m => m.CommonFormPageModule)
  },
  {
    path: 'rto-dashboard',
    loadChildren: () => import('./rto-dashboard/rto-dashboard.module').then( m => m.RtoDashboardPageModule)
  },
  {
    path: 'qr-generation',
    loadChildren: () => import('./qr-generation/qr-generation.module').then( m => m.QrGenerationPageModule)
  },
  {
    path: 'excell-uploader',
    loadChildren: () => import('./excell-uploader/excell-uploader.module').then( m => m.ExcellUploaderPageModule)
  },{
    path: 'DealerComponent',
   loadChildren: () => import('./dashboard/dashboard.module').then(m=> m.DashboardPageModule)
  },
  {
    path: 'dealer-certification-list',
    loadChildren: () => import('./dealer-certification-list/dealer-certification-list.module').then( m => m.DealerCertificationListPageModule)
  },
 
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule),
  },
  {
    path: 'Users',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'addProducts',
    loadChildren: () => import('./add-products/add-products.module').then( m => m.AddProductsPageModule)
  },
  {
    path: 'rto',
    loadChildren: () => import('./rto/rto.module').then( m => m.RtoPageModule)
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehiclePageModule)
  },
  {
    path: 'qrcodelist',
    loadChildren: () => import('./qrcode-list/qrcode-list.module').then( m => m.QrcodeListPageModule)
  },{
    path: 'logout',
    component: LogoutComponent
  }
  // {
  //   path: 'add-rtos',
  //   loadChildren: () => import('./add-rtos/add-rtos.module').then( m => m.AddRtosPageModule)
  // },
  // {
  //   path: 'test-pdf',
  //   loadChildren: () => import('./test-pdf/test-pdf.module').then( m => m.TestPDFPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
