import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AjaxService } from '../services/ajax.service';
import { CommonService } from '../services/common.service';
import { ServerUrl } from '../../environments/environment';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Router } from '@angular/router';
import { PdfLogoService } from '../services/pdf-logo.service'
@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.scss'],
})
export class CreateCertificateComponent implements OnInit {
  certificatedetails: FormGroup;
  fueltypes = ['Petrol', 'Diesel', 'Gas']
  vehiclecategory = []
  rtocode = []
  productName = ''
  lotNumber = ''
  qrDetails:any
  user: boolean = true;
  vehicle: boolean = false;
  certificate: boolean = false;
  other: boolean = false;
  update = ''
  photos = {
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",

  }
  Showphotos = {
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",

  }
  validDealer: any;
  mail: any;
  datas: any;
  shwDownload = false;
  vehtype;
  vehcategory;
  vehCheck: boolean = false;
  rtoZone: any;
  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private camera: Camera,
    private router: Router,
    private PdfLogoService: PdfLogoService,
    private commonService: CommonService,) {

    // let url = ServerUrl.live + "/dashboard/UserrtoList?userid=CRT-00000001"
    // this.ajaxService.ajaxGet(url)
    //   .subscribe(res => {
    //     this.rtocode = JSON.parse(res.value);
    //   })
  }
  userarrow() {
    this.user = !this.user
  }
  vehiclearrow() {
    this.vehicle = !this.vehicle
  }
  certificatearrow() {
    this.certificate = !this.certificate
  }
  otherarrow() {
    this.other = !this.other
  }

  startCam(data) {
    // this.photos[data] = base64Image  
    console.log('test')
    const options: CameraOptions = {
      quality: 5,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      //  this.photos[data] = base64Image  
      this.dataURLtoFile(base64Image, data)
      //  this.photos.photo1 =  base64Image.split(',')[1].slice(8)
      //  this.photos.photo2 =  base64Image.split(',')[1].slice(7)
      //  this.photos.photo3 =  base64Image.split(',')[1].slice(6)
      //  this.photos.photo4 =  base64Image.split(',')[1].slice(5)
      //  this.photos.photo5 =  base64Image
      console.log('Error', base64Image);
    }, (err) => {
      // Handle error
      console.log('Error', err);
    });
  }
  // brandname: "test"
  // createdDate: "04-03-2022"
  // createdby: "SPA-00000001"
  // lastupdatedBy: "SPA-00000001"
  // lastupdatedDate: "04-03-2022"
  // lotnumber: 2055
  // message: "Something Wrong"
  // productname: "s_red20mm"
  // qrcode: "04032022.2055-0"
  // qrid: 70
  // quantity: 1
  // renewal: "s"
  // rto_zone: "MH01"
  // user_id: "DLR-00000011"
  dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    //  console.log(new File([u8arr], filename, {type:mime}))
    this.photos[filename] = new File([u8arr], filename + '.jpeg', { type: mime })
    this.Showphotos[filename] = dataurl
  }
  certificateid() {
    var url = ServerUrl.live + "/qrcodegeneration/getuserid?MobileNo=" + localStorage.getItem('mobileNumber');
    this.ajaxService.ajaxGet(url).subscribe(res => {
        localStorage.setItem('certificateid', res.message);
        this.getRto(res.message);
    });
}

  getRto(res) {
    let url = ServerUrl.live + "/dashboard/UserrtoList?userid=" + res;
    this.ajaxService.ajaxGet(url)
        .subscribe(res => {
        this.rtocode = JSON.parse(res.value);
    });
}

  getMail() {
    let url = ServerUrl.live + "/qrcodegeneration/getemail?MobileNo=" + localStorage.getItem('mobileNumber');
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.mail = res.message

      })
  }

  createCertificate() {
    this.commonService.presentLoader()
    let url1 = ServerUrl.live + "/certificate/save";
    // let data = {"certificateId":this.certificate,"user":{"userId":"SPA-00000001","role":{"roleName":"SuperAdmin","menus":["Manufacturer","Distributor","Dealer","User"],
    //   "createdBy":"jana","createdDate":"2021-01-01T14:42:42.000+00:00"},"email":"sa@apmkt.com","password":"12345","name":"Apmkt","mobile1":"4353656512","mobile2":null,
    //   "addressLine":"3/672, Varaprasath rao nagar, 4th cross street, Nedungundram","city":"chennai","state":"TamilNadu","pincode":600017,"rtoZone":"TN-01","class3":24,
    //   "class4":24,"hologram":24,"createdby":"Admin","createdDate":"2021-01-04T12:33:26.000+00:00","lastupdatedBy":"SPA-00000001",
    //   "fitmentdate":this.certificatedetails.value.FitmentDate, "validfrom":"2021-01-04T12:33:26.000+00:00","validtill":"2021-01-04T12:33:26.000+00:00",
    //   "swhite80mm":24,"syellow20mm":24,"syellow50mm":6.5,"syellow80mm":24,
    //   "sred20mm":24,"sred50mm":24,"sred80mm":24,"swhite20mm":24,"swhite50mm":22},"registrationNumber":this.certificatedetails.value.RegistrationNo,"manufactureYear":"2022",
    //   "chassisNumber":"q23","engineNumber":"123","vehicleMake":"ISUZU MOTORS","vehicleModel":"D MAX FLAT DECK ","ownerName":"gokul",
    //   "addressLine":"3/7, ramanujam garden street, pattalam, chennai-12","city":"chennai","state":"Tamil Nadu","pincode":600012,"rtoZone":this.certificatedetails.value.rtocode,
    //   "class3":"0","class4":"0","hologram":"0","frontImage":'',"backImage":'',"leftImage":'',"rightImage":'',"createdDate":"2021-01-04T12:33:26.000+00:00","updatedBy":"fg",
    //   "updatedDate":null,"rtoStatus":"Pending","rtoStatusdate":null,"rtoComment":null,"swhite20mm":"0","sred80mm":"0","syellow80mm":"0","swhite80mm":"0",
    //   "syellow50mm":"0","sred20mm":"0","syellow20mm":"0","sred50mm":"2","swhite50mm":"2","mobile1":this.certificatedetails.value.PhoneNo,"mobile2":1231,"email":"",
    //   "otp":"656517"}
    let data = {
      "certificateId": this.certificate,
      "user": {
        "userId": localStorage.getItem('certificateid'),
        "role": {
          "roleName": "Dealer",
          "menus": "[\"User\"]",
          "createdBy": localStorage.getItem('certificateid'),
          "createdDate": "2021-01-01T15:26:02.000+00:00"
        },
        "email": this.mail,
        "password": "12345",
        "name": this.certificatedetails.value.OwnerName,
        "mobile1": localStorage.getItem('mobileNumber'),
        "mobile2": "",
        "addressLine": "3/672, Varaprasath rao nagar, 4th cross street, Nedungundram",
        "city": "Chennai",
        "state": "478",
        "pincode": 600048,
        "rtoZone": this.certificatedetails.value.rtocode,
        "class3": 0,
        "class4": 0,
        "hologram": '',
        "createdby": localStorage.getItem('certificateid'),
        "createdDate": new Date(),
        "lastupdatedBy": localStorage.getItem('certificateid'),
        "lastupdatedDate": new Date(),
        "syellow80mm": 0,
        "swhite20mm": 0,
        "sred20mm": 0,
        "syellow20mm": 0,
        "sred80mm": 0,
        "syellow50mm": 0,
        "swhite80mm": 0,
        "swhite50mm": 0,
        "sred50mm": 0
      },
      "registrationNumber": this.certificatedetails.value.RegistrationNo,
      "manufactureYear": this.certificatedetails.value.RegistrationYear,
      "qrcode": this.datas.qrcode,
      "chassisNumber": this.certificatedetails.value.ChassisNo,
      "engineNumber": this.certificatedetails.value.ChassisNo,
      "vehicleMake": this.certificatedetails.value.Make,
      "vehicleModel": this.certificatedetails.value.Model,
      "ownerName": this.certificatedetails.value.OwnerName,
      "addressLine": "",
      "productname": this.productName,
      "city": "chennai",
      "state": "Tamil Nadu",
      "pincode": 600012,
      "rtoZone": this.certificatedetails.value.rtocode,
      "class3": "0",
      "class4": "0",
      "hologram": this.certificatedetails.value.Fueltype,
      "fitmentdate": this.certificatedetails.value.FitmentDate,
      "validfrom": null,
      "validtill": null,
      "frontImage": "",
      "backImage": "",
      "leftImage": "",
      "rightImage": "",
      "documentImage": "",
      "createdDate": new Date(),
      "updatedBy": "fg",
      "updatedDate": null,
      "rtoStatus": "",
      "rtoStatusdate": null,
      "rtoComment": null,
      "swhite20mm": "0",
      "sred80mm": "0",
      "syellow80mm": "0",
      "swhite80mm": "0",
      "syellow50mm": "0",
      "sred20mm": this.certificatedetails.value.C3Quantity,
      "syellow20mm": "0",
      "sred50mm": this.certificatedetails.value.CTQuantity,
      "swhite50mm": 0,
      "mobile1": this.certificatedetails.value.PhoneNo,
      "mobile2": null,
      "email": this.mail,
      "otp": "478864"
    }
    const testData: FormData = new FormData();
    testData.append('right', this.photos.photo1);
    testData.append('left', this.photos.photo2);
    testData.append('front', this.photos.photo3);
    testData.append('back', this.photos.photo4);
    testData.append('document', this.photos.photo5);
    testData.append('data', JSON.stringify(data));
    this.ajaxService.ajaxPostWithFile(url1, testData)
      .subscribe(res => {
        this.commonService.dismissLoader();
        this.commonService.presentToast('Added Successfully')
        this.router.navigateByUrl('dashboard')
      })
  }
  submit() {
    // if(this.photos.photo1 && this.photos.photo2 && this.photos.photo3 && this.photos.photo4){
    //       console.log('test')
    // } 
    if (this.certificatedetails.status == 'VALID') {
      let data1 = { type: "Dealer", id: "" }
      let url1 = ServerUrl.live + "/certificate/id/generate";
      this.ajaxService.ajaxPostWithBody(url1, data1)
        .subscribe(res => {
          console.log(res)
          this.certificate = res.id
          this.commonService.presentToast('Added Successfully')
          this.createCertificate()
        })
    } else {
      this.commonService.presentToast('Oops!! Enter all the fields')
    }

  }


  downloadCer() {
    // this.commonService.presentLoader()
    // var url = ServerUrl.live + "/certificate/download?certificateid=" + this.datas.certificateId
    // this.ajaxService.ajaxGet(url).subscribe(res => {
    //   if (res.status == 400) {
    //     this.commonService.dismissLoader();
    //     this.commonService.presentToast('Try after some time');
    //   } else {
    //     this.commonService.dismissLoader();
    //     window.open(url);
    //   }
    // })
    var url =ServerUrl.s3URL+"TapeManagement/Certificates/Certificate/"+ this.datas.certificateId+"_CERTIFICATE.pdf"
    window.open(url)

  }

  getProductName() {
    // let url = ServerUrl.live + "/qrcodegeneration/getproductname?QrCode="+localStorage.getItem('barcodeData').slice(69)
    let url = ServerUrl.live + "/qrcodegeneration/getproductname?QrCode=" + this.datas.qrcode
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
       
        this.rtoZone = res.rtozone;
        this.productName = res.productname
        this.lotNumber = res.lotnumber
      })
  }
  getVehicleCategory() {
    if (this.vehtype && this.certificatedetails.value.Make) {
      this.vehcategory = null
      this.vehcategory = this.vehtype[this.certificatedetails.value.Make]
      this.vehCheck    = true
    } else {
      this.commonService.presentToast('Select Vehicle Make and try again..');
      this.vehcategory = null
      this.vehCheck    =false
    };
  }

  getVehicle() {

    let url = ServerUrl.live + "/dashboard/vehicleList"
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.vehtype = JSON.parse(res.value)
      })
  }

  ionViewWillEnter() {
    this.ngOnInit()
    localStorage.removeItem('Verified')
  }


  ngOnInit() {
    // if(!history.state.createdby && history.state.createdby){
      if(history.state.datas){
        this.datas = history.state.datas
      }else{
        this.datas = history.state
      }
   
    if (history.state.createdby == 'test') {
      this.router.navigateByUrl('qr-code')
      this.commonService.presentToast('Scan the Qr-code to add Certificate')
    } else {
      this.getMail()
      this.getVehicle()
      this.certificateid()
      this.getProductName()
      this.certificatedetails = this.formBuilder.group({
        RegistrationNo: ['', Validators.required],
        RegistrationYear: ['', Validators.required],
        ChassisNo: ['', Validators.required],
        Fueltype: ['', Validators.required],
        Make: ['', Validators.required],
        Model: ['', Validators.required],
        OwnerName: ['', Validators.required],
        PhoneNo: ['', Validators.required],
        FitmentDate: ['', Validators.required],
        C3Quantity: [''],
        CTQuantity: [''],
        rtocode: ['', Validators.required]
      });
      if (!history.state.datas) {
        this.certificatedetails.patchValue({
          RegistrationNo: this.datas.registrationNumber,
          ChassisNo: this.datas.chassisNumber,
          RegistrationYear: this.datas.manufactureYear,
          Fueltype: this.datas.hologram,
          Make: this.datas.vehicleMake,
          Model: this.datas.vehicleModel,
          OwnerName: this.datas.ownerName,
          PhoneNo: this.datas.mobile1,
          FitmentDate:JSON.parse(this.datas.fitmentdate),
          C3Quantity: this.datas.sred20mm,
          CTQuantity: this.datas.sred50mm,
          rtocode: this.datas.rtoZone,
      })
        this.vehCheck = true
        this.shwDownload = true
        let imageurl = ServerUrl.s3URL+'TapeManagement/Certificates/'
        this.photos.photo1 =  this.Showphotos.photo1 = imageurl+ this.datas.frontImage
        this.photos.photo2 =  this.Showphotos.photo2 = imageurl+this.datas.backImage
        this.photos.photo3 =   this.Showphotos.photo3 = imageurl+this.datas.rightImage
        this.photos.photo4 =  this.Showphotos.photo4 = imageurl+this.datas.leftImage
        this.photos.photo5 = this.Showphotos.photo5 = imageurl+this.datas.documentImage
      }

    }
  }

}
// addressLine: ""
// backImage: "DLR-00000092/DLR-00000092_back.jpg"
// certificateId: "DLR-00000092"
// chassisNumber: "121212121"
// city: "chennai"
// class3: 0
// class4: 0
// createdDate: "2022-03-08T09:36:59.000+00:00"
// documentImage: "DLR-00000092/DLR-00000092_document.png"
// email: "gokultesting@gmail.com"
// engineNumber: "121212121"
// fitmentdate: "2022-03-08T00:00:00.000+00:00"
// frontImage: "DLR-00000092/DLR-00000092_front.png"
// hologram: 0
// leftImage: "DLR-00000092/DLR-00000092_left.png"
// manufactureYear: "2323"
// mobile1: "1231"
// mobile2: null
// otp: "478864"
// ownerName: "asdad"
// pincode: 600012
// productname: "3M - C3"
// registrationNumber: "TN 06 4006"
// rightImage: "DLR-00000092/DLR-00000092_right.png"
// rtoComment: null
// rtoStatus: ""
// rtoStatusdate: null
// rtoZone: "MH"
// sred20mm: 0
// sred50mm: 2
// sred80mm: 0
// state: "Tamil Nadu"
// swhite20mm: 0
// swhite50mm: 0
// swhite80mm: 0
// syellow20mm: 0
// syellow50mm: 0
// syellow80mm: 0
// updatedBy: "fg"
// updatedDate: null
// user: {userId: 'DLR-00000015', role: {…}, email: 'gokultesting@gmail.com', password: '12345', name: 'Testing', …}
// validfrom: "2022-03-08T09:41:20.000+00:00"
// validtill: "2023-03-08T09:41:20.000+00:00"
// vehicleMake: "Pulsar"
// vehicleModel: "200"
