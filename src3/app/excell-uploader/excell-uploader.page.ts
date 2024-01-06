import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';
import { ServerUrl } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-excell-uploader',
  templateUrl: './excell-uploader.page.html',
  styleUrls: ['./excell-uploader.page.scss'],
})
export class ExcellUploaderPage implements OnInit {
  dealers=[];
  dataString: any;
  output='';
  willDownload = false;
  selectedDealer=''
  excellKeyValid:boolean=false;
  name:boolean=false;
  loginRes: string;
  constructor( private commonService: CommonServices,
    private ajaxService: AjaxService,private router: Router
    ) { this.commonService.loginMenuInfo.subscribe(res => {
      if (res) {
        console.log(res)
        this.loginRes = res
  
      }
    });this.selectedDealer = '' }


    getDealer(){
      let datas = {
        "userId": this.loginRes["userId"]
       }
      let url = ServerUrl.live + "/dashboard/user/list";
      this.ajaxService.ajaxPostWithBody(url, datas)
        .subscribe(res => {
          this.dealers = res
        })
    }

  onFileChange(ev) {
    var fileName=ev.srcElement.files[0];
    this.name = fileName.name.includes(".xlsx");
   if(this.name== true){
     this.dataString=[];
     let workBook = null;
     let jsonData = null;
     const reader = new FileReader();
     const file = ev.srcElement.files[0];
     reader.onload = (event) => {
       const data = reader.result;
       workBook = XLSX.read(data, { type: 'binary' });
       jsonData = workBook.SheetNames.reduce((initial, name) => {
         const sheet = workBook.Sheets[name];
         initial[name] = XLSX.utils.sheet_to_json(sheet);
         return initial;
       }, {});
       this.dataString = jsonData['Customer List'];
       this.output = this.dataString.slice(0, 300).concat("...");
       // this.sendToServer(dataString);
     }
     reader.readAsBinaryString(file);
   }else{
     this.commonService.presentToast("please insert only excel file (.xlsx)")
   }
   
   }
  //  "Lastupdated"
 submit(){
    // checking excell keys is valid or not
    if(this.dataString.length == 0){
                this.commonService.presentToast("check your excell file,don't enter blank spaces")
    }else{
    var excellKeys=Object.keys(this.dataString[0])
    for(var i=0;i<excellKeys.length;i++){

     if ((excellKeys[i] == "Vendor_Mobile_Number") || (excellKeys[i] == "QR_Code") ){
      console.log("present")
      this.excellKeyValid = true
     }
     }
    if(this.name == true && this.excellKeyValid == true){
    this.willDownload = true;
    if(this.dataString[0].Vendor_Mobile_Number  == this.selectedDealer.split('(')[1].substring(0, 10)){
      const url = ServerUrl.live +'/qrcodegeneration/verifiy?userId='+this.loginRes["userId"]; 
      //  let data = {userId:this.loginRes["userId"],value:this.dataString}
       this.ajaxService.ajaxPostWithBody(url,this.dataString)
      .subscribe(res => {
        console.log(res);
        if(res.message=='Verified Successfully'){
          this.commonService.presentToast(res.message)
          this.router.navigateByUrl('dashboard')
        }else{
          this.commonService.presentToast("please insert a value excell file only");
        }
 })
  }else{
    this.commonService.presentToast("Oops.. selected dealer is not able to upload the excell");
  }
    
  }else{
    this.commonService.presentToast("please insert valid excel file (.xlsx)")
  }  
}
  
 }
  ngOnInit() {
    this.getDealer()
  }

}