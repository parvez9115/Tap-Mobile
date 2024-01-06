import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { CommonService } from './services/common.service';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
// import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
// import {SplashScreen} from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
// private statusBar: StatusBar,
export class AppComponent {
  constructor(private splashScreen: SplashScreen,private menuCtrl: MenuController,private platform: Platform,public commonService:CommonService,) { this.initializeApp();}
  username;
  loadingRefresh = false;
  appVersion;
  public appPages = [
    { title: 'Home', url: '/landing', icon: 'albums' },
    { title: 'Dashboard', url: '/dashboard', icon: 'mail' },
    { title: 'QR-Code', url: '/qr-code', icon: 'qr-code' },
    { title: 'Certificate-List', url: '/CertificateList', icon: 'list' },
    // { title: 'Home', url: '/landing', icon: 'albums' },
    { title: 'Logout', url: '/logout', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];


  initializeApp() {

    this.platform.ready().then(() => {
  //   this.menuCtrl.enable(false);
  //  localStorage.clear()
  setTimeout(() => {
    // this.splashScreen.hide();
  }, 2000);
  
    if(localStorage.getItem('loginDatas')){
      this.commonService.updateLoginInfo(JSON.parse(localStorage.getItem('loginDatas')))
      // let data = localStorage.getItem('loginDatas')
      // this.username = data["username"]
      // this.appVersion = data["appVersion"]
    }
    })
  this.commonService.loginMenuInfo.subscribe(res=>{
    this.username = res["username"]
   this.appVersion = res["appVersion"]
  })
  }
  logout(){
    // localStorage.clear()
    this.menuCtrl.enable(false);
  }
  
}
