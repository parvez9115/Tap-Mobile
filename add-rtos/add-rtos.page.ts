import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { AddRtoComponent } from '../add-rtos/add-rto/add-rto.component';
import { CommonServices } from '../services/common.service';


@Component({
  selector: 'app-add-rtos',
  templateUrl: './add-rtos.page.html',
  styleUrls: ['./add-rtos.page.scss'],
})
export class AddRtosPage implements OnInit {
  myPlatform: any;
  defaultvalue: any;
  memberList;
  constructor(private commonService: CommonServices,private ajaxService: AjaxService,private modalController: ModalController,private platform:Platform) { }
  search;

  getDatas(){
    this.commonService.presentLoader()
    const url = ServerUrl.live + "/rtolist/getAllRtoList";
    this.ajaxService.ajaxGet(url).subscribe(res=>{
      console.log(res);
      this.memberList = res;
      this.defaultvalue = res;
      this.commonService.dismissLoader()
    });
  }
  selectedRowRecived(ev){
    this.openModel(ev)
  }
  async openModel(data) {
    const modal = await this.modalController.create({
        component: AddRtoComponent,
        cssClass: 'custome_fleet',
        componentProps: {
          value: data
      }
    });
    modal.onDidDismiss().then(() => {
       this.getDatas()
    })
    return await modal.present();
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet'){
      this.myPlatform = 'desktop';
    }
    this.getDatas()
  }
  updateFilter(event) {
    if (event.target.value != "") {
      this.memberList = this.defaultvalue
      const val = event.target.value.toLowerCase();
      const temp = this.memberList.filter(function (d) {
        if (d.rtoname.toLowerCase().indexOf(val) !== -1)
          return d.rtoname.toLowerCase().indexOf(val) !== -1;
        else if (d.mobileno.toLowerCase().indexOf(val) !== -1)
          return d.mobileno.toLowerCase().indexOf(val) !== -1;
      });
      this.memberList = temp;
    } else {
      this.memberList = this.defaultvalue
    }
  }
}
