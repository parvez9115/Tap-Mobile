import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../services/ajax.service';
import { ServerUrl} from '../../environments/environment';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items=[];
  constructor(private router: Router,private ajaxService: AjaxService, public commonService:CommonService,) { }
 details:any


  submit(){
    this.router.navigateByUrl('create-certificate',{ state: {createdby:'test'}})
  }



certificateid(){
  this.commonService.presentLoader()
  var url =ServerUrl.live + "/qrcodegeneration/getuserid?MobileNo="+localStorage.getItem('mobileNumber');
  this.ajaxService.ajaxGet(url).subscribe(res=>{
  this.details=res;
localStorage.setItem('certificateid',res)
  this.certificatelist();
})
}

selectedCard(datas){
//   const url =ServerUrl.live + '/dashboard/certificateid'
//   let data = {"certificateId":datas.certificateId}
// this.ajaxService.ajaxPostWithBody(url,JSON.stringify(data)).subscribe(res=>{
//   console.log(res)
   localStorage.setItem('Verified','editing')
  this.router.navigateByUrl('create-certificate',{state:datas})
// })

}

certificatelist(){
  var data={
    "userId":this.details.message,
    "role":{"roleName":"Dealer"}
  }
  var url =ServerUrl.live + "/dashboard/certificate/list";
  this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
  this.items=res;
  this.commonService.dismissLoader()
  })
  }

  ionViewWillEnter(){
    console.log(history.state)
    this.certificateid();
  }
  
  appUpdate(){
    this.commonService.appUpdate();  
  }
  ngOnInit() {
    this.appUpdate()
    
  }
 
}
