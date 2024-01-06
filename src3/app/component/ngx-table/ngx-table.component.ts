import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { ServerUrl } from 'src/environments/environment';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.scss'],
})
export class NgxTableComponent implements OnInit {
  @ViewChild('myTable') table: DatatableComponent;
  @Output() selectedRowData = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Input() datalist;
  hide = false
  ColumnMode = ColumnMode
  temp=[];
  valid: boolean = false;
  showQrcode = false;
  data: any;
  showProduct: boolean;
  updateValue: boolean;
  showRto:boolean;
  name: any;
  constructor(private ajaxService: AjaxService,private commonService: CommonServices, private modalController: ModalController,  private router: Router,
    ) { }

ngOnChanges(){
  console.log(this.datalist)
  if(this.datalist){
   if( this.router.url.includes('reports')){
    this.hide = false
    this.showProduct = false
    this.showRto = false
   }else if(this.router.url.includes('addProducts')){
    this.showProduct = true
   }else if(this.router.url.includes('rto')){
    this.showRto = true
   }else if(this.router.url.includes('qrcodelist')){
   this.showQrcode = true
   }
   else{
    this.hide = true
    this.showProduct = false
    this.showRto = false
    this.showQrcode =false
   }
   this.datalist = this.datalist
  //  if(this.datalist.length != 0){  
  //   this.datalist.forEach((element,index) => {
  //    return this.datalist[index]["rtoZone"]=(JSON.parse(element.rtoZone)).toString()

  //    });
  //  }
    
    
    // this.ionViewWillEnter()
  }
}

// onPageChange(pageInfo: any): void {
//   alert( pageInfo.offset)
//   this.datalist.push({'cer':909})
//   // this.gridQuery.page.size = this.page.size;
//   // this.gridQuery.page.pageNumber = pageInfo.offset + 1;

// }

async openModel(data) {
  const modal = await this.modalController.create({
      component: StatusComponent,
      cssClass: 'custome_fleet',
      componentProps: {
        value: data
    }
  });
  modal.onDidDismiss().then(() => {
      this.valid = false
      // this.refresh.emit('true')
      // this.router.navigateByUrl('/dashboard')
      this.reset.emit('refresh')
  })
  return await modal.present();
}

onActivate(event,data){
  this.data = event.row
  if(event.type == 'click' && !this.valid && !this.updateValue) {
    console.log(event.row);
    this.selectedRowData.emit(event.row)
}
}

test(event,data){
this.valid = true
this.openModel( this.data )
}

update(type){
  this.valid = true
  var data;
  var url;
  if(type == 'rtoid'){
    data = { "rtoid" :this.data.rtoid,"status": !this.data.status,"reason":"" }
   url = ServerUrl.live + "/rtolist/rtoliststatus";
  }else{
  data = {"productid":this.data.productid,"status": !this.data.status,"reason":"" }
 url = ServerUrl.live + "/product/productstatus";
  }
this.commonService.presentLoader()

 
  this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
  console.log(res)
  this.commonService.presentToast('Updated Sucessfully');
  this.commonService.dismissLoader()
  this.reset.emit('')
 })

}


ionViewWillEnter(){
  this.valid = false
}

  ngOnInit() {

  }

}
