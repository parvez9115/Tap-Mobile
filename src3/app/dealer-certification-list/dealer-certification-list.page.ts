import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';
import { Storage } from '@ionic/storage';
import { FormBuilder } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-dealer-certification-list',
  templateUrl: './dealer-certification-list.page.html',
  styleUrls: ['./dealer-certification-list.page.scss'],
})
export class DealerCertificationListPage implements OnInit {
  page = "Dealer"
  @ViewChild('myTable') table: DatatableComponent;
  member = [];
  temp = [];
  toDate;
  formDate;
  search:boolean;
  pdfTitle: string[];
  pdfData = [];
  offset = 0;
  limit = 10;
  searchCode=["Certificate Number","Vehicle Number","Chassis Number","QRCode"]
  myPlatform: string;
  constructor( private ajaxService: AjaxService,
    private storage: Storage,
    private commonService: CommonServices,private formBuilder: FormBuilder,private platform:Platform,) {
      
     }

ionViewWillEnter(){
  this.getLoginUserList('')
}

updateFilter(event) {
  if (event.target.value != "") {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      if (d.ownerName.toLowerCase().indexOf(val) !== -1)
        return d.ownerName.toLowerCase().indexOf(val) !== -1;
      else if (d.certificateId.toLowerCase().indexOf(val) !== -1)
        return d.certificateId.toLowerCase().indexOf(val) !== -1;
      else if (d.registrationNumber.toLowerCase().indexOf(val) !== -1)
        return d.registrationNumber.toLowerCase().indexOf(val) !== -1;
        else if (d.chassisNumber.toLowerCase().indexOf(val) !== -1)
        return d.chassisNumber.toLowerCase().indexOf(val) !== -1;
      else if (d.rtoStatus.toLowerCase().indexOf(val) !== -1)
        return d.rtoStatus.toLowerCase().indexOf(val) !== -1;
      
    });
    this.member = temp;
  } else {  
    this.member = this.temp
  }
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}
ngOnChanges(){
  // this.temp = this.member
}
  ngOnInit() {
  //  this.temp = this.member
  this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet'){
      this.myPlatform = 'desktop';
    }
  }

  submit(data){
    if(data){
      this.offset = data
    }
    this.search = true
    if(this.formDate && this.toDate){
            let url = ServerUrl.live + "/dashboard/searchcertificate?Key=&KeyID=&FromDate="+this.formDate.slice(0,10)+"&ToDate="+this.toDate.slice(0,10)+"&offset="+this.offset+"&limit="+this.limit
      // let url = ServerUrl.live + "/dashboard/searchcertificate?Key=QRCode&KeyID=16032022.2170-0&FromDate=2022-03-23&ToDate=2022-03-23Key=QRCodeKeyID=16032022.2170-0FromDate=2022-03-23ToDate=2022-03-23"+this.formDate+"&ToDate="+this.toDate;

          this.ajaxService.ajaxGet(url).subscribe(res=>{
            console.log(res)
            this.temp ,  this.member = res
          })
    }else{
      this.commonService.presentToast('Oops !.. select Form and To dates')
    }
   
  }

  clickToDownload(data){
    // window.open(ServerUrl.live + "/certificate/download?certificateid="+data.certificateId)
    var url =ServerUrl.s3ServerName+"/TapeManagement/Certificates/Certificate/"+data.certificateId+"_CERTIFICATE.pdf"
    window.open(url)
  }

  selectedRowRecived(data) {
    console.log(data)
    
     this.offset = this.offset +(data) 
    // this.table.offset = 0;
  //  this.table.offset = 0;
    // this.offset = data
   // this.table.offset = data
    //  alert(data)
    if(this.search){
      this.submit('')
    }else{
      this.getLoginUserList('')
    }

  }

  getLoginUserList(data) {
    if(data){
      this.offset = data
    }
    this.search = false;
    this.toDate = this.formDate = null;
    this.storage.get('loginRes').then((result) => {
      result = JSON.parse(result)
      this.page = result["role"]["roleName"]
      let body = result
      // if (this.page != "Dealer" && this.page != "RTO") {
      //   let url = ServerUrl.live + "/dashboard/user/list";
      //   this.ajaxService.ajaxPostWithBody(url, body)
      //     .subscribe(res => {
      //       // console.log(res)
      //       this.member = res
      //       this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {

      //       })
      //       this.pdfTitle = ["User ID", "Role", "Name", "Email", "Address", "Contact"]
      //       for (let i = 0; i < this.member.length; i++) {
      //         this.pdfData.push([res[i].userId, res[i].role.roleName, res[i].name, res[i].email, res[i]['addressLine'] + ',' + res[i]['city'] + ',' + res[i]['state'] + ',' + res[i]['pincode'], res[i].mobile1])
      //       }
      //     })
      // } else {
        // ?offset="+this.offset+"&limit="+this.limit
        // let url = ServerUrl.live + "/dashboard/certificate/list"
        let url = ServerUrl.live + "/dashboard/certificate/list?offset="+this.offset+"&limit="+this.limit
        this.commonService.presentLoader()
        this.ajaxService.ajaxPostWithBody(url, body)
          .subscribe(res => {
            // console.log(res)
            this.member = res
            this.temp = this.member
          //   if(data){
          //     this.member.filter(n => n)
          //     this.member =   this.member.concat(res)
          //   }else{
          // this.member = this.member.concat(res)
          //     this.temp = this.member
          //     this.member.length = 50
          //   }
           
          
            
            
            this.commonService.dismissLoader()
            this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {

            })
            this.pdfTitle = ["Certificate id", "Registration no", "Name", "Vehicle Type", "Vehicle Modal", "Rto status"]
            for (let i = 0; i < this.member.length; i++) {
              this.pdfData.push([res[i].certificateId, res[i].registrationNumber, res[i].ownerName, res[i].vehicleMake, res[i].vehicleModel, res[i].rtoStatus])
            }
          })
    //  }
    });


  }
}
