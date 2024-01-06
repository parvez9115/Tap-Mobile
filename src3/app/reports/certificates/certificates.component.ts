import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  @ViewChild('myTable') table: DatatableComponent;
  rows = []
  headers = ['BrandName','ProductName','CertificateCount']
  headers2 = ['brandname','productname','certificatecount']
  memberList =  []
  dealerList = []
  selectedRto='';
  formDate='';
  toDate='';
  rtoAreaCode: any;
  selectedDealer='';

  constructor(private ajaxService: AjaxService, private commonService: CommonServices) { }

  getRtoList(){
    const url = ServerUrl.live + "/dashboard/rtoList"
    this.ajaxService.ajaxGet(url)
      .subscribe(res => {
        this.rtoAreaCode = JSON.parse(res.value);
      })
   }

submit(data){
  if(data == 'reset'){
    this.selectedDealer = '0'
    this.selectedRto = ''  
    this.toDate = ''
    this.formDate = ''
  }else if(this.selectedDealer){
    this.selectedDealer = this.selectedDealer.slice(-11, -1)
  }

  const url = ServerUrl.live + "/dashboard/certificatereport?RTOZone="+this.selectedRto+"&Mobileno="+this.selectedDealer+"&FromDate="+this.formDate+"&ToDate="+this.toDate
  this.ajaxService.ajaxGet(url)
  .subscribe(res => {
    this.memberList = res
   console.log(res)
   this.selectedDealer = ''
   if(res.length == 0){
     this.commonService.presentToast('Oops !!.. No Data Available')
   }
  })
}

getDealer(){
  const url = ServerUrl.live + "/dashboard/roleuser?key=Dealer"
  this.ajaxService.ajaxGet(url)
  .subscribe(res => {
    this.dealerList = res

  })
}

  ngOnInit() {
    this.getDealer()
    this.getRtoList()
    
    this.submit('reset')
  }

}
