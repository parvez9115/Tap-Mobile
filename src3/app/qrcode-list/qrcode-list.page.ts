import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';

@Component({
  selector: 'app-qrcode-list',
  templateUrl: './qrcode-list.page.html',
  styleUrls: ['./qrcode-list.page.scss'],
})
export class QrcodeListPage implements OnInit {
  member = [];
  offset = 0;
  valid = false;
  limit = 10;
  userName;
  @ViewChild('myTable') table: DatatableComponent;
  temp: any;

  constructor( private ajaxService: AjaxService,    private commonService: CommonServices) { }

gettotal(){
  const url = ServerUrl.live + '/qrcodegeneration/qrcodecount'
  this.ajaxService.ajaxGet(url).subscribe(res=>{
    console.log(res)
    localStorage.setItem('Qrcount',res.qrcodecount)
  })
}
// brandname: "ORAFOL"
// createdDate: "20-04-2022"
// createdby: "SPA-00000001"
// lastupdatedBy: "2022-04-20T12:42:17.437Z"
// lastupdatedDate: "20-04-2022"
// lotnumber: 499
// message: ""
// mobileno: "7229023198"
// productname: "Avery - CT"
// qrcode: "20042022.499-0"
// qrcodeimg: "http://testing.apmkingstrack.com:8082/tape/qrcodegeneration/scan?QRCode=20042022.499-0"
// qrid: 35
// quantity: 1
// renewal: "y"
// rtoZone: "MH - 01"
// status: "Verified"

updateFilter(event) {
  if (event.target.value != "") {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      if (d.brandname.toLowerCase().indexOf(val) !== -1)
        return d.brandname.toLowerCase().indexOf(val) !== -1;
      else if (d.mobileno.toLowerCase().indexOf(val) !== -1)
        return d.mobileno.toLowerCase().indexOf(val) !== -1;
      else if ((d.lotcount).toString().toLowerCase().indexOf(val) !== -1)
        return (d.lotcount).toString().toLowerCase().indexOf(val) !== -1;
        else if (d.productname.toLowerCase().indexOf(val) !== -1)
        return d.productname.toLowerCase().indexOf(val) !== -1;
      else if (d.createdDate.toLowerCase().indexOf(val) !== -1)
        return d.createdDate.toLowerCase().indexOf(val) !== -1;
      
    });
    this.member = temp;
  } else {  
    this.member = this.temp
  }
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}
getQrcode(){
  this.commonService.presentLoader()
  const url = ServerUrl.live + '/qrcodegeneration/getAllQRCode?offset='+this.offset+'&limit='+this.limit
  this.ajaxService.ajaxGet(url).subscribe(res=>{
    this.member = res
    this.temp = res
    this.commonService.dismissLoader()
  })
}

selectedRowRecived(data) {
  console.log(data)
  
   this.offset = this.offset +(data) 
   this.getQrcode()
  // if(this.search){
  //   this.submit('')
  // }else{
  //   this.getLoginUserList('')

  // }

}

  ngOnInit() {
    this.getQrcode()
    this.gettotal()
   
  }

}
