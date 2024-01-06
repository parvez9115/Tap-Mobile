import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QrcodeScreenComponent } from './qrcode-screen/qrcode-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { ShowCertificateComponent } from './show-certificate/show-certificate.component';
import { AuthGuard } from './services/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { CreateCertificateGuardGuard } from './services/create-certificate-guard.guard';
import { LandingComponent } from './landing/landing.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'LoginComponent',
    pathMatch: 'full'
  },
  {
    path: 'LoginComponent',
   component:LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'qr-code',
   component:QrcodeScreenComponent,
  },
  {
    path: 'create-certificate',
   component:CreateCertificateComponent,
  canActivate: [CreateCertificateGuardGuard]
  },{
    path: 'dashboard',
   component:DashboardComponent
  },
  {
    path: 'CertificateList',
   component:ShowCertificateComponent
  },{
    path: 'logout',
   component:LogoutComponent
  },{
    path: 'landing',
    component: LandingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
