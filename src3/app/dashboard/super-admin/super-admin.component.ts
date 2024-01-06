import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { EventEmitter } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { StatusComponent } from 'src/app/component/status/status.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent implements OnInit {
  @Output() refresh = new EventEmitter();
  @ViewChild('myTable') table: DatatableComponent;
  ColumnMode = ColumnMode
  @Input() memberList = [];
 
  temp = [];
  @Input() userRole: string;
  myPlatform: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private platform:Platform,
    private modalController: ModalController,

  ) { }

  reset($event){
  console.log('test')
  this.refresh.emit('refresh')
  }


  oldQrcode(){
    var myWindow = window.open("http://localhost/QRCode/?LotNumber=00", "","height=700,width=800,left=300,top=0,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes")
  }
  async openModel(data) {
    const modal = await this.modalController.create({
        component: StatusComponent,
        cssClass: 'custome_fleet',
        componentProps: {
          value: data
      }
    });
    modal.onDidDismiss().then(() => {
      //  this.valid = false
        // this.refresh.emit('true')
        // this.router.navigateByUrl('/dashboard')
       // this.reset.emit('refresh')
       this.reset('')
    })
    return await modal.present();
  }
  test(data){
//    this.valid = true
    this.openModel( data )
    // this.
    }
  updateFilter(event) {
    if (event.target.value != "") {
      const val = event.target.value.toLowerCase();
      const temp = this.temp.filter(function (d) {
        if (d.name.toLowerCase().indexOf(val) !== -1)
          return d.name.toLowerCase().indexOf(val) !== -1;
        else if (d.userId.toLowerCase().indexOf(val) !== -1)
          return d.userId.toLowerCase().indexOf(val) !== -1;
        else if (d.role.roleName.toLowerCase().indexOf(val) !== -1)
          return d.role.roleName.toLowerCase().indexOf(val) !== -1;
        else if (d.email.toLowerCase().indexOf(val) !== -1)
          return d.email.toLowerCase().indexOf(val) !== -1;
        else if (d.mobile1.toLowerCase().indexOf(val) !== -1)
          return d.mobile1.toLowerCase().indexOf(val) !== -1;
      });
      this.memberList = temp;
    } else {
      this.memberList = this.temp
    }
    // Whenever the filter changes, always go back to the first page
    this.table["table"].offset = 0;
  }

  onActivate(event) {
    if (event.type == 'click') {
      console.log(event.row);
    }
  }

  async openModalStocks(data) {
    this.router.navigateByUrl("/common-form/" + data + "/" + data + "/null", { replaceUrl: true })
  }

  selectedRowRecived(data) {
    localStorage.setItem('editDatas',JSON.stringify(data))
    // this.router.navigateByUrl("/common-form/Edit/" + this.userRole + "/?data=" + JSON.stringify(data), { replaceUrl: true })
    this.router.navigateByUrl("/common-form/Edit/" + this.userRole + "/?data=", { replaceUrl: true })
  }

  async openModal() {
    this.router.navigateByUrl("/common-form/Add/" + this.userRole + "/null", { replaceUrl: true })
  }

  async opencertificate() {
    this.router.navigateByUrl("/common-form/Certificate/" + this.userRole + "/null", {state:{name:'superAdmin'}})

  }
  ngOnChanges() {
    this.temp = this.memberList
  }

  openQrcode(){
    this.router.navigateByUrl('qr-generation')
  }


  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet'){
      this.myPlatform = 'desktop';
    }
    this.temp = this.memberList
    this.formBuilder.group({
      userName: [""]
    })
  }

}
