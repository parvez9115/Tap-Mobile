import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';
import { Storage } from '@ionic/storage';
import { ServerUrl } from 'src/environments/environment';
import { name} from '../test'
import { ForgotComponent } from './forgot/forgot.component';
// import { IonicSelectableComponent } from 'ionic-selectable';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // @ViewChild('selectComponent', { static: false }) selectComponent: IonicSelectableComponent;
  background;
  login: any;
  eye_icon: string = "eye-off";
  password_type: string = "password";
  pageSelection = "userLogin";
  logindealer: any;
  rtos = []
  buttonName: string = "Rto Login";
  myPlatform: string;
  constructor(
    private modalController: ModalController,
    private menuController: MenuController,
    private formBuilder: FormBuilder,
    private commonService: CommonServices,
    private router: Router,
    private ajaxService: AjaxService,
    private storage: Storage,
    private platform:Platform
  ) {

    let url = ServerUrl.live + "/dashboard/background"
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.background = res.value;
      })
    url = ServerUrl.live + "/dashboard/rtoList"
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.rtos = JSON.parse(res.value);
      })

  }

   forgot = async ()=>{
    const modal = await this.modalController.create({
      component: ForgotComponent,
      cssClass: 'custome_fleet',
      componentProps: {
        value: 'data'
    }
  });
  modal.onDidDismiss().then(() => {
 
  })
  return await modal.present();
}
  


  showHidePass = () => {
    this.password_type = this.password_type === "text" ? "password" : "text";
    this.eye_icon = this.eye_icon === "eye" ? "eye-off" : "eye";
  }

  submitLogin() {
    if (!this.commonService.isLoading)
      this.commonService.presentLoader();
    let body = {}
    if (this.pageSelection == "userLogin") {
      body = {
        "email": this.login.value.compName.toString(),
        "password": this.login.value.password.toString()
      };
    } else {
      body = {
        "email": this.login.value.rtoArea.toString(),
        "password": this.login.value.password.toString()
      };
     }
    this.storage.set("login", JSON.stringify(body));

    let url = ServerUrl.live + "/authentic/user";
    this.ajaxService.ajaxPostWithBody(url, body)
      .subscribe(res => {
        // console.table(res)
        if (res != null && res != "" && res.message != "Invalid User Name & Password.") {
          let messagingServiceData = res
          if(this.buttonName == "Rto Login" && res.role.roleName == "RTO"){
            this.commonService.dismissLoader();
            let msg = "!Oops.. You should be logged in rto login"
            this.commonService.presentToast(msg)
          }else{
            this.storage.set("loginRes", JSON.stringify(res)).then(res => {
              this.commonService.updateLoginInfo(messagingServiceData);
              if (this.pageSelection == "userLogin") {
                this.router.navigateByUrl('/dashboard-count', { replaceUrl: true })
                this.commonService.dismissLoader();
              } else {
                this.router.navigateByUrl('/rto-dashboard', { replaceUrl: true })
              }
            })
          }
        
        } else if (res == "") {
          if (this.commonService.isLoading)
            this.commonService.dismissLoader();
          let msg = "Your logging credential is invalid "
          this.commonService.presentToast(msg)
        }else if (res.message) {
          if (this.commonService.isLoading)
            this.commonService.dismissLoader();
          this.commonService.presentToast(res.message)
        } else {
          if (navigator.onLine) {
            if (this.commonService.isLoading)
              this.commonService.dismissLoader();
            let msg = "Oops! Server is in under maintenance"
            this.commonService.presentToast(msg)
          } else {
            if (this.commonService.isLoading)
              this.commonService.dismissLoader();
            let msg = "Oops! Connecting server error, Make sure your internet connection"
            this.commonService.presentToast(msg)
          }
        }

      })
    // } 
    // else {
    // let body = {
    //   "email": "TN-01",
    //   "password": this.login.value.password.toString()
    // };
    // this.storage.set("login", JSON.stringify(body));
    // let url = ServerUrl.live + "/authentic/user";
    // this.ajaxService.ajaxPostWithBody(url, body)
    //   .subscribe(res => {
    //     let messagingServiceData = res
    //     if (res != null && res != "") {
    //       this.storage.set("loginRes", JSON.stringify(res)).then(res => {
    //         this.commonService.updateLoginInfo(messagingServiceData);
    //         this.router.navigateByUrl('/rto-dashboard')
    //       });
    //     } if (res == "") {
    //       if (this.commonService.isLoading)
    //         this.commonService.dismissLoader();
    //       let msg = "Your logging credential is invalid "
    //       this.commonService.presentToastWithOk(msg)
    //     } else {
    //       if (this.commonService.isLoading)
    //         this.commonService.dismissLoader();
    //       let msg = "Oops! Server is in under maintenance"
    //       this.commonService.presentToastWithOk(msg)
    //     }

    //   });
    // }

  }

  // portChange = (event: {
  //   component: IonicSelectableComponent,
  //   value: any
  // }) => {
  //   this.login= event.value;
  // }
  
  changeMode() {
    let data = this.pageSelection
    if (data == 'userLogin') {
      this.pageSelection = "rtoLogin"
      this.buttonName = "User Login";
      this.login = this.formBuilder.group({
        compName: [''],
        rtoArea: ['', Validators.required],
        password: ['', Validators.required]
      });
    } else {
      this.pageSelection = "userLogin"
      this.buttonName = "Rto Login";
      this.login = this.formBuilder.group({
        compName: ['', Validators.required],
        rtoArea: [''],
        password: ['', Validators.required]
      });
    }
  }

  ionViewWillEnter() {
    this.menuController.enable(false)
    this.storage.clear()  
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet'){
      this.myPlatform = 'desktop';
    }
    this.menuController.enable(false)
    this.login = this.formBuilder.group({
      compName: ['', Validators.required],
      rtoArea: [''],
      password: ['', Validators.required]
    });
  }

}

