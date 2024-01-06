import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { QrcodeScreenComponent } from './qrcode-screen/qrcode-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
//import { Firebase } from '@awesome-cordova-plugins/firebase/ngx';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ShowCertificateComponent } from './show-certificate/show-certificate.component';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LogoutComponent } from './logout/logout.component';
 import { Market } from '@ionic-native/market/ngx';
import { LandingComponent } from './landing/landing.component';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
 import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
@NgModule({
  declarations: [LandingComponent,AppComponent,LoginComponent,LogoutComponent,QrcodeScreenComponent,DashboardComponent,ShowCertificateComponent,CreateCertificateComponent],
  entryComponents: [],
  imports: [BrowserModule ,HttpClientModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },BarcodeScanner,Camera,Market,SplashScreen],
  bootstrap: [AppComponent],
})
// Market
export class AppModule {}
