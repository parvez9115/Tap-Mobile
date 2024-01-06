import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Market } from '@ionic-native/market/ngx';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ServerUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
// private market: Market,
export class CommonService {
  public loginMenuInfo = new BehaviorSubject('');
  public sideMenu = new BehaviorSubject('');
  constructor( private market:Market, private router: Router,private alertController: AlertController,public toastController: ToastController,  public loadingController: LoadingController,) { }
  isLoading: boolean;
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  updateLoginInfo(item: any) {
    this.loginMenuInfo.next(item);
  }

  async presentLoader() {
    this.isLoading = true;

    setTimeout(() => {
      this.dismissLoader();
    }, 200000);

    return await this.loadingController.create({
      spinner: "circles",
      message: "Please Wait!",
      translucent: false,
      cssClass: 'custom-loader-class'
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
}
async appUpdate(){
  if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
   
      //console.log(this.appVersion.getAppName())
      let currentVersion = ServerUrl.appVersion;
      let appVersion = localStorage.getItem('appVersion');
      if (appVersion > currentVersion) {
        const alert = await this.alertController.create({
          header: 'Update Alert',
          backdropDismiss: false,
          message: "A new update is now available. Please update from the appstore or playstore.",
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
            }
          },
          {
            text: 'update',
            handler: data => {
              //console.log("update that")
              this.router.navigateByUrl('')
              this.market.open(ServerUrl.package);
            }
          }]
        });

        await alert.present();

      }
    
  }
}

enableSideMenu(){
  this.sideMenu.next('true')
}

  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
