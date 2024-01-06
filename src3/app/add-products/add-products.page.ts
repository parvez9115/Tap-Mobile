import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})
export class AddProductsPage implements OnInit {
  myPlatform: any;
  defaultvalue: any;

  constructor(private commonService: CommonServices,private ajaxService: AjaxService,private modalController: ModalController,private platform:Platform) { }
  memberList;
  search;

  getDatas(){
    this.commonService.presentLoader()
    const url = ServerUrl.live + "/product/getAllProduct";
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
        component: AddProductComponent,
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

  update(selectedCard){
    // this.updateValue = true
    this.commonService.presentLoader()
    const url = ServerUrl.live + "/product/productstatus";
      let data = { "productid":selectedCard.productid,"status": !selectedCard.status,"reason":"" }
      this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
      console.log(res)
      this.commonService.presentToast('Updated Sucessfully');
      this.commonService.dismissLoader()
      // this.reset.emit('')
      this.getDatas()
     })
    
    }

  updateFilter(event) {
    if (event.target.value != "") {
      this.memberList = this.defaultvalue
      const val = event.target.value.toLowerCase();
      const temp = this.memberList.filter(function (d) {
        if (d.brandname.toLowerCase().indexOf(val) !== -1)
          return d.brandname.toLowerCase().indexOf(val) !== -1;
        else if (d.productname.toLowerCase().indexOf(val) !== -1)
          return d.productname.toLowerCase().indexOf(val) !== -1;
        else if ((d.productid.toString()).toLowerCase().indexOf(val) !== -1)
          return (d.productid.toString()).toLowerCase().indexOf(val) !== -1;
        else if (d.copnumber.toLowerCase().indexOf(val) !== -1)
          return d.copnumber.toLowerCase().indexOf(val) !== -1;
        // else if (d.mobile1.toLowerCase().indexOf(val) !== -1)
        //   return d.mobile1.toLowerCase().indexOf(val) !== -1;
      });
      this.memberList = temp;
    } else {
      this.memberList = this.defaultvalue
    }
  }
}
