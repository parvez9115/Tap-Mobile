import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
//import { Firebase } from '@awesome-cordova-plugins/firebase/ngx';
import { CommonService } from '../services/common.service';
// import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  otp: string;
  enteredOtp;
  button = 'Generate OTP'
  login: FormGroup
  validDealer: boolean;
constructor(private router: Router,private menu:MenuController, private ajaxService: AjaxService, public commonService:CommonService,private formBuilder:FormBuilder) { 
  // private database:SQLiteObject,private sqlite: SQLite,
}

  submit(){
   // this.router.navigateByUrl('dashboard')
//     this.firebase.getToken()
//   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
//   .catch(error => console.error('Error getting token', error));

// this.firebase.onNotificationOpen()
//    .subscribe(data => console.log(`User opened a notification ${data}`));

// this.firebase.onTokenRefresh()
//   .subscribe((token: string) => console.log(`Got a new token ${token}`));


 if(this.button != 'Submit'){
   this.verifyDealer()
 }else{
  if(this.otp == this.login.value.otp ){
   this.router.navigateByUrl('landing')
    // this.router.navigateByUrl('qr-code')
    this.sessionTime()
    // this.menu.enable(true);
    localStorage.setItem('mobileNumber',this.login.value.mobnumber)
    // this.commonService.updateLoginInfo(this.login.value.mobnumber)
  }else{
    this.commonService.presentToast('check the otp');
  }
 }
  
  }


sessionTime(){
  // this.sqlite.create({
  //   name: 'tape',
  //   location: 'default'
  // })
  //   .then((db: SQLiteObject) => {
  
  
  //     db.executeSql('create table if not exists login(logintime VARCHAR(32))', [])
  //       .then(() => console.log('Executed SQL'))
  //       .catch(e => console.log(e));
  
  
  //   })
  //   .catch(e => console.log(e));
    let loggedIntime =(Date.now()*50).toString()
  //   let cur_time = "INSERT INTO login VALUES ("+loggedIntime+")";
  //   this.database.executeSql(cur_time);
  //   const oneDay = 24 * 60 * 60 * 1000;
  //   this.database.executeSql("SELECT * FROM items ").then((r) => {
  //     console.log(r)
  //   })


  localStorage.setItem("time",loggedIntime)
}


verifyDealer(){
  let url = ServerUrl.live + "/qrcodegeneration/getuserid?MobileNo="+this.login.value.mobnumber;
      this.ajaxService.ajaxGet(url)
        .subscribe(res => {
          if(res.message == "Invalid Mobile No"){
        this.commonService.presentToast(res.message)
          }else{
            this.validDealer = true
            // localStorage.setItem('appVersion',res.appVersion);
           res['username'] = this.login.value.mobnumber
            this.commonService.updateLoginInfo(res)
            localStorage.setItem('loginDatas',JSON.stringify(res))
            this.generateOtp()
          }
      })
  }


sendOtp(){
  const url =ServerUrl.live + '/dashboard/otp?message='+this.otp+'&contact='+ this.login.value.mobnumber
  this.ajaxService.ajaxGet(url).subscribe(res=>{
    console.log(res)
  })
}

  generateOtp(){
    if(JSON.stringify(this.login.value.mobnumber).length == 10 && this.validDealer){
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    this.otp = OTP
    this.commonService.presentToast(OTP);
    this.button = 'Submit'
  }else{
    this.commonService.presentToast('check the mobile number');
  }
}
ionViewDidEnter(): void {
  this.menu.enable(false);
 }
ionViewWillEnter(){
  this.login.reset()
  this.button = 'Generate OTP'
}
  ngOnInit() {

    this.login=this.formBuilder.group({
      mobnumber:['',Validators.required],
      otp:['',Validators.required]
    })
  }

}
