import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { forkJoin, from, of } from 'rxjs';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';
//  import { ExportExcelService } from '../services/export-excel.service';

@Component({
  selector: 'app-qr-generation',
  templateUrl: './qr-generation.page.html',
  styleUrls: ['./qr-generation.page.scss'],
})
export class QrGenerationPage implements OnInit {
  qrform: FormGroup;
  userDatas=[]
  renewal =['y','n']
  public values = []
  public level: "L" | "M" | "Q" | "H";
  public width: 200;
  rto;
  productName;
  loginRes: string;
  selected_user: any;
  pdfHead: string[];
  qrcodeUrl: string;
  brand: any;
  myPlatform: any;
 // hide:boolean = false
//  ,private ete: ExportExcelService
  constructor(private http: HttpClient,private formBuilder: FormBuilder,  private router: Router,private ajaxService: AjaxService, private commonService: CommonServices,private platform:Platform,) {
 
    this.commonService.loginMenuInfo.subscribe(res => {
      if (res) {
        console.log(res)
        this.loginRes = res
  
      }
    })
   }
  // { "lotnumber":"","productname":"utest","brandname":"test",
  // "user_id":"DLR00000002","rto_zone":"TN01","renewal":"Y",
  // "quantity":5,"qrcode":"","status":"","created_by":"SPA-00000001",
  // "created_date":"2022-02-28","lastupdated_by":"SPA-00000001",
  // "lastupdated_date":"2022-02-28" }
getuserId(){
  for(var i=0;i< this.userDatas.length;i++){
    if(this.userDatas[i].mobile1 == this.qrform.value.user_id){
    this.selected_user = this.userDatas[i].userId
    }
}
}
closeModel(){
  this.router.navigateByUrl('/dashbboard');
}

qrcodes(res){
  res.forEach(element => {
    let productName;
    if(element.productname.includes('Avery')){
      productName = 'AD'
    }else if(element.productname.includes('DM')){
      productName = 'DM'
    } else{
      productName = 'OFL'
    }
   element['subheader'] = (element.rtoZone.replace(/-/g, "")+'-'+element.productname.slice(-2)+'-'+productName)
    this.values.push(element)
  });
  this.convertToImage(this.values[0],res.lotnumber)
}

  submit(){
    this.commonService.presentLoader()
    this.qrform.patchValue({
      user_id: this.selected_user
    })
      const url = ServerUrl.live + '/qrcodegeneration/save';
      let datas = this.qrform.value
      console.log(this.qrform)
      datas["created_by"] = this.loginRes["userId"]
      datas["qrcode"] = ''
      datas["status"] = ''
      datas["created_date"] = new Date()
      datas["lastupdated_by"] = new Date()
      datas["lastupdated_date"] = new Date()
      if( this.qrform.valid){
        this.ajaxService.ajaxPostWithBody(url, datas).subscribe(res=>{
          if(Object.keys(res[0])[0] != 'errormessage' && res != []){
            console.log(res)
            this.qrcodeUrl =  ServerUrl.live+'/qrcodegeneration/scan?QRCode='
            // this.qrcodes(res)
            this.commonService.dismissLoader()
            this.qrform.reset()
            this.commonService.presentToast('Generated Successfully')
          //  let data =  window.open('http://localhost/QRCode/','popup','height=100,width=50')
          //   if (window.focus) {data.focus()
          //     return false;}
              this.popitup(res[0].qrid)
          //  setTimeout(() => {
          //   this.clickToDownload(res)
          //   this.values = []
          //  }, 1000);
          }else{
            this.commonService.presentToast('something bad happened !!')
            this.commonService.dismissLoader()
          }
        
        
       })
      }else{
        this.commonService.presentToast('Oops!.. Please Enter all the fields')
        this.commonService.dismissLoader()
      }
      
  }
  popitup(id) {
    const url = ServerUrl.live + '/dashboard/printqrcode?Qrid='+id
    this.ajaxService.ajaxGet(url)
    .subscribe(res => {
      var myWindow = window.open("http://localhost/QRCode/?Qrid="+id, "","height=700,width=800,left=300,top=0,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes")
    })

    
  //   if (window.focus) {newwindow.focus()}
  //   return false;

  }

getBrand(){
  const url = ServerUrl.live + "/dashboard/brand"
  this.ajaxService.ajaxGet(url)
    .subscribe(res => {
      this.brand = res.value;
    })

}


  clickToDownload(res) {
    // this.generatedcertificate();
    
    
   var printWindow = window.open('', '', 'height=1000,width=900');
     printWindow.document.write('<html>');
   // printWindow.document.write('</body>')
  // printWindow.document.write('<body style="background-image: url(https://kingstrackimages.s3.amazonaws.com/Company/apmlogo_watermarker.svg);background-repeat: no-repeat;background-size: 100% 100%;">');
   var divContents = document.getElementById("pdf").innerHTML;
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.print();
    printWindow.document.close();
    // this.router.navigateByUrl('dashboard')
   }


   getrenewal(ev){
    if(ev.target.value == "Yes"){
      alert("y")
    }
 else{
   alert("n")
 }
 }
   exportToExcel(res) {
    var pdfdatas=[]
    for (var i = 0; i < res.length; i++) {
      pdfdatas.push([res[i]["productname"],res[i]["brandname"],res[i]["mobileno"],res[i]["rtoZone"],res[i]["renewal"],res[i]["qrcode"]]);
    }
    let reportData = {
      title:  'qr-codes',
      data: pdfdatas,
      headers: ['Product_Name','Brand_Name','Vendor_Mobile_Number','RTO_Department_Codes','Is_Renewal','QR_Code']
    }
    // this.ete.exportExcel(reportData);
    console.log("Export Excel")
  }
getRtoList(){
  const url = ServerUrl.live + "/dashboard/rtoList"
  this.ajaxService.ajaxGet(url)
    .subscribe(res => {
      this.rto = JSON.parse(res.value);
    })
}




getUserId(){
  const url = ServerUrl.live + '/qrcodegeneration/getuserid?MobileNo=' + this.qrform.value;
 //  this.ajaxService.ajaxPostWithBody(url, datas).subscribe(res=>{
  //   console.log(res)
  // })
}

async createPdf() {
  this.commonService.createPdf('adsad', [['asfdas']], 'asa', "desktop", "Operator_List");
} 


convertToImage(value,lotnumber){
  let url = ServerUrl.live +'/dashboard/printqrcode?RTOZone='+this.values[0].subheader+'&LotNumber='+this.values[0].lotnumber;
  this.ajaxService.ajaxGet(url).subscribe(res=>{
    console.log(res)
  })
}

getuserlist(){
  const url = ServerUrl.live + "/dashboard/user/list"
  let datas = {
    "userId": this.loginRes["userId"]
   }
  this.ajaxService.ajaxPostWithBody(url, datas).subscribe(res=>{
  //   for(var i=0;i<=res.length;i++){
  //    // let data = {userId:res[i].userId,mobile1:res[i].mobile1}
  //     this.userDatas.push(res[i].mobile1)
  //   }
  this.userDatas = res
   })
  console.log(this.userDatas)
}
// brandname: "red tape"
// createdDate: "03032022"
// createdby: "SPA-00000001"
// lastupdatedBy: "2022-03-03T06:06:28.306Z"
// lastupdatedDate: "03032022"
// lotnumber: 1157
// message: ""
// mobileno: "1231311231"
// productname: "s_red20mm"
// qrcode: "03032022.1157-0"
// quantity: 1
// renewal: "s"
// rtoZone: "TN01"
// status: "Not Verified"
getProducts(){
  const url = ServerUrl.live + "/dashboard/product"
  this.ajaxService.ajaxGet(url)
    .subscribe(res => {
      this.productName = res.value;
    });
}

 createForm(){
    this.qrform = this.formBuilder.group({
      lotnumber: [''],
      productname: ['', Validators.required],
      brandname: ['', Validators.required],
      quantity: ['', Validators.required],
      rto_zone: ['', Validators.required],
      user_id: ['', Validators.required],
      renewal: ['', Validators.required]
    });
//     const data = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve('testing')
//       },3000)
//     })
//     data.then((data)=>{
//       console.log(data)
//     }).catch(data=>{
// console.log(data)
//     }).finally(()=>{
//       console.log('finally testing')
    // }
 
    // )
  }
  ngOnInit() {
    // forkJoin([ this.ajaxService.ajaxGet( ServerUrl.live + "/dashboard/rtoList"), of([ServerUrl.live + "/dashboard/rtoList",'data'])])
    //   .subscribe(res => {
    //     console.log ('User and Post', res);
    //   });
    this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet'){
      this.myPlatform = 'desktop';
    }
              this.getuserlist()
    this.createForm()
    this.getProducts()
    this.getRtoList()
    this.getBrand()
    
  }

}
