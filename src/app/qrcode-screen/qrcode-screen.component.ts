import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Camera,CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { MenuController } from '@ionic/angular';
// import { Market } from '@ionic-native/market/ngx';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonService } from '../services/common.service';

// import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
// import { BarcodeScanner,BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'app-qrcode-screen',
  templateUrl: './qrcode-screen.component.html',
  styleUrls: ['./qrcode-screen.component.scss'],
})
export class QrcodeScreenComponent implements OnInit {
  scanActive: boolean = false;
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  barcodeData: any;
 
  constructor(private menu:MenuController,private camera: Camera,private router: Router,private barcodeScanner: BarcodeScanner,private ajaxService: AjaxService,
    private commonService: CommonService) {  }

    // private market: Market,
  scanCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log('Error', base64Image);
    }, (err) => {
     // Handle error
     console.log('Error', err);
    });
  }
 barcode(){
  // this.sendData()
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.barcodeData = barcodeData
    console.log('Error', barcodeData);
    if(!this.barcodeData.cancelled){
      this.sendData()
    }

   }).catch(err => {
  //  this.sendData()
       console.log('Error', err);
   });

 }

appUpdate(){
 this.commonService.appUpdate();  
}

//   async appUpdate(){
//   if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
//     if (localStorage.appSettings) {
//       //console.log(this.appVersion.getAppName())
//       let currentVersion = app.appVersion;
//       let appSettingsVersion = JSON.parse(localStorage.appSettings)['appComVersion'][app.appName];
//       if (appSettingsVersion > currentVersion) {
//         const alert = await this.alertController.create({
//           header: 'Update Alert',
//           backdropDismiss: false,
//           message: "A new update is now available. Please update from the appstore or playstore.",
//           buttons: [{
//             text: 'Cancel',
//             role: 'cancel',
//             handler: data => {
//             }
//           },
//           {
//             text: 'update',
//             handler: data => {
//               //console.log("update that")
//               this.router.navigateByUrl('login')
//               this.market.open(app.package);
//             }
//           }]
//         });

//         await alert.present();

//       }
//     }
//   }
// }

ionViewWillEnter(){

  this.appUpdate()
  
}

sendData(){
  this.commonService.presentLoader()
  localStorage.removeItem('barcodeData')
  var qrcode = new URL(this.barcodeData.text);
  var sortedQrcode = qrcode.searchParams.get("QRCode");
  // const url = 'http://testing.apmkingstrack.com:8082/tape/qrcodegeneration/mobilescan?MobileNo=7339023199&QRCode=11042022.473-0'
  // http://tape.apmkingstrack.com:8082/tape/qrcodegeneration/scan?MobileNo=6567678789&QRCode=01032022.1002-1
  const url =  ServerUrl.live + '/qrcodegeneration/mobilescan?MobileNo='+localStorage.getItem('mobileNumber')+'&QRCode='+sortedQrcode
// const url = ServerUrl.live + '/qrcodegeneration/scan?QRCode='+this.barcodeData.text.slice(69);
  this.ajaxService.ajaxGet(url).subscribe(res=>{
  console.log(res)
  if(res.message == "Invalid QRCode"){
    this.commonService.dismissLoader()
    this.commonService.presentToast(res.message)
    // this.barcode()
  }else if(res.message == "Certificate Done"){
    
    // window.open(ServerUrl.live + '/certificate/downloads?qrcode='+this.barcodeData.text.slice(69)) 
    var url =ServerUrl.s3URL+"TapeManagement/Certificates/Certificate/"+res.certificateid+"_CERTIFICATE.pdf"
    window.open(url)
    this.commonService.dismissLoader()
  
  }else{
    this.commonService.dismissLoader()
    this.commonService.presentToast('Verified Sucessfully')
    localStorage.setItem('barcodeData',this.barcodeData.text)
    localStorage.setItem('Verified',this.barcodeData.text)
    this.router.navigateByUrl('create-certificate', {state: {datas: res}})
  }
 
})
}

  ngOnInit() {
 
    // this.sendData()
    // this.barcode();
  }

}
