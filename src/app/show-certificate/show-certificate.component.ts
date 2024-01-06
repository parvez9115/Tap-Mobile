import { Component, OnInit } from '@angular/core';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-show-certificate',
  templateUrl: './show-certificate.component.html',
  styleUrls: ['./show-certificate.component.scss'],
})
export class ShowCertificateComponent implements OnInit {
  certificateList=[];

  constructor(private ajaxService: AjaxService, public commonService:CommonService,) { }


submit(){
  
}

getList(res1){
  let body = {"userId":res1.message,"role":{"roleName":"Delear"}}
  let url = ServerUrl.live + "/dashboard/certificate/list";
  this.ajaxService.ajaxPostWithBody(url, body)
    .subscribe(res => {
      this.certificateList = res
      this.commonService.dismissLoader()
    });
}

certificateid(){
  this.commonService.presentLoader()
  var url =ServerUrl.live + "/qrcodegeneration/getuserid?MobileNo="+localStorage.getItem('mobileNumber');
  this.ajaxService.ajaxGet(url).subscribe(res=>{
 this.getList(res);
})
}

  downloadCer(certificateId) {
    // this.commonService.presentLoader()
    // https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Certificates/Certificate/DLR-00000118_CERTIFICATE.pdf
    // var url = ServerUrl.live + "/certificate/download?certificateid=" + certificateId
    var url =ServerUrl.s3URL+"TapeManagement/Certificates/Certificate/"+certificateId+"_CERTIFICATE.pdf"
    window.open(url)
    // this.ajaxService.ajaxGet(url).subscribe(res => {
    //   if (res.status == 400) {
    //     this.commonService.dismissLoader();
    //     this.commonService.presentToast('Try after some time');
    //   } else {
    //     this.commonService.dismissLoader();
    //     window.open(url);
    // }
    // })

  }


ionViewWillEnter(){
  this.certificateid();
}

  ngOnInit() {}

}
