import { Component, OnInit } from '@angular/core';

import {  Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonServices } from './services/common.service';
import { Storage } from '@ionic/storage';
import {TapestockService} from './services/tapestock.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  data;
  myPlatform;
  name='technojacks@gmail.com'
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard-count',
      icon: 'person'
    },
    // {
    //   title: 'Excel-Uploader',
    //   url: '/excell-uploader',
    //   icon: 'cloud-upload'
    // },
     {
      title: 'Certificate-List',
      url: '/dealer-certification-list',
      icon: 'cloud-upload'
    },{
      title: 'Users',
      url: '/dashbboard',
      icon: 'document'
    },
    {
      title: 'Reports',
      url: '/reports',
      icon: 'list-circle'
    },{
      title: 'Change-Password',
      url: '/changepassword',
      icon: 'key'
    },{
      title: 'Qrcodes',
      url: '/qrcodelist',
      icon: 'qr-code'
    },{
      title: 'Add-Products',
      url: '/addProducts',
      icon: 'albums'
    },
    // {
    //     title: 'Vehicle',
    //     url: '/vehicle',
    //     icon: 'car'
    //   },
      //  {
      //   title: 'Qrcodes',
      //   url: '/qrcodelist',
      //   icon: 'qr-code'
      // },
      {
        title: 'Add-Rtos',
        url: '/rto',
        icon: 'clipboard'
      },
      {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }

  ];
  // ,{
  //   title: 'Add-Rtos',
  //   url: '/rto',
  //   icon: 'albums'
  // },{
  //   title: 'Vehicle',
  //   url: '/vehicle',
  //   icon: 'albums'
  // }
  // {
  //   title: 'Add-Rtos',
  //   url: '/add-rtos',
  //   icon: 'albums'
  // }
  // {
  //   title: 'Add-Rtos',
  //   url: '/add-rtos',
  //   icon: 'albums'
  // },{
  //   title: 'Add-Products',
  //   url: '/addProducts',
  //   icon: 'albums'
  // },
  loginCreation: Object = {
    companyName: "Welcome"
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private commonService: CommonServices,
    private storage: Storage,
    private datas:TapestockService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet' || this.myPlatform == "desktop"){
      this.myPlatform = 'desktop';
     }else{
      this.appPages.splice(3,1)
      this.appPages.splice(4,1)
    }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    //   this.myPlatform = this.platform.platforms()[0];
    // if(this.myPlatform == 'tablet'){
    //   this.myPlatform = 'desktop';
    //  }else{
    //   this.appPages.splice(3,1)
    // }
      this.commonService.loginMenuInfo.subscribe(res => {
        if (res) {
          // if(JSON.parse(res).role.roleName == "SuperAdmin"){
          //   this.appPages.push({
          //     title: 'Certificates',
          //     url: '/login',
          //     icon: 'log-out'
          //   })
          // }
          this.selectedIndex = 0
          this.loginCreation={}
          this.loginCreation['name'] = res['name'];
          this.loginCreation["userId"] = res['userId'];
          this.loginCreation["roleName"] = res["role"]["roleName"]
          this.loginCreation["email"] = res['email'];
          this.data = res
          this.datas.changeMessage(this.data);
          this.datas.currentMessage.subscribe(message => this.data = message);
        } else {
          this.storage.get('loginRes').then((res) => {
            if (res) {
             
              res = JSON.parse(res)
              this.loginCreation={}
              this.loginCreation['name'] = res['name'];
              this.loginCreation["email"] = res['email'];
              this.loginCreation["roleName"] = res["role"]["roleName"]
              this.data = res
              this.datas.changeMessage(this.data);
              this.datas.currentMessage.subscribe(message => this.data = message);
            }
          });
        }

      });
    
      
    });
  }

  ngOnInit() {
    // this.myPlatform = this.platform.platforms()[0];
    // if(this.myPlatform == 'tablet'){
    //   this.myPlatform = 'desktop';
    //  }else{
    //   this.appPages.splice(3,1)
    // }

  }
}
