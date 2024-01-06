import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-all-qrcode',
  templateUrl: './all-qrcode.component.html',
  styleUrls: ['./all-qrcode.component.scss'],
})
export class AllQrcodeComponent implements OnInit {
@Input()data;
valid = true;
member=[]
  temp: any;
  constructor(  private modalController: ModalController,private commonService: CommonServices,private ajaxService: AjaxService) { }

  closeModal(){
    this.modalController.dismiss()
  }
getqrlist(){
  this.commonService.presentLoader()
  const url = ServerUrl.live + "/qrcodegeneration/getAllLotQRCode?qrid="+this.data.qrid
  this.ajaxService.ajaxGet(url).subscribe(res=>{
    console.log(res);
    this.temp  = this.member = res
  
    this.commonService.dismissLoader()
  });
}

updateFilter(event) {
  if (event.target.value != "") {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      if (d.brandname.toLowerCase().indexOf(val) !== -1)
        return d.brandname.toLowerCase().indexOf(val) !== -1;
      else if (d.mobileno.toLowerCase().indexOf(val) !== -1)
        return d.mobileno.toLowerCase().indexOf(val) !== -1;
      else if ((d.lotnumber).toString().toLowerCase().indexOf(val) !== -1)
        return (d.lotnumber).toString().toLowerCase().indexOf(val) !== -1;
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
  // this.table.offset = 0;
}
  ngOnInit() {
    console.log(this.data)
    // this.member.push(this.data)
    this.getqrlist()
  }

}
