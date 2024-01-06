import { Component, OnInit } from '@angular/core';
  import { ModalController, Platform } from '@ionic/angular';
  import { ServerUrl } from 'src/environments/environment';
  import { AjaxService } from '../services/ajax.service';
  import { CommonServices } from '../services/common.service';
  import { AddRtoComponent } from './add-rto/add-rto.component';
  
  @Component({
    selector: 'app-rto',
    templateUrl: './rto.page.html',
    styleUrls: ['./rto.page.scss'],
  })
  export class RtoPage implements OnInit {
  
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
    update(selectedCard){
      // this.updateValue = true
      this.commonService.presentLoader()
      const url = ServerUrl.live + "/rtolist/rtoliststatus";
        let data = { "rtoid":selectedCard.rtoid,"status": !selectedCard.status}
        this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
        console.log(res)
        this.commonService.presentToast('Updated Sucessfully');
        this.commonService.dismissLoader()
        // this.reset.emit('')
        this.getDatas()
       })
      
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
  

