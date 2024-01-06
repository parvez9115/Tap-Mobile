import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';
import { StatusModalPage } from './status-modal/status-modal.page';

@Component({
  selector: 'app-rto-dashboard',
  templateUrl: './rto-dashboard.page.html',
  styleUrls: ['./rto-dashboard.page.scss'],
})
export class RtoDashboardPage implements OnInit {
  search;
  page: any;
  memberList = []
  constructor(
    private formBuilder: FormBuilder,
    private menuController: MenuController,
    private storage: Storage,
    private router: Router,
    private ajaxService: AjaxService,
    private modalController: ModalController,
    private commonServices: CommonServices
  ) { }

  logout(){
    this.router.navigateByUrl("/login")
  }

  getLoginUserList() {
    this.storage.get('loginRes').then((result) => {
      result = JSON.parse(result)
      this.page = result["role"]["roleName"]
      let body = result

      let url = ServerUrl.live + "/dashboard/certificate/list";
      this.ajaxService.ajaxPostWithBody(url, body)
        .subscribe(res => {
          // console.log(res)
          this.memberList = res
          
          this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {
            this.commonServices.dismissLoader();
          })
        })
    });
  }
  async selectedRowRecived(data) {
    console.log(data)
    const modal = await this.modalController.create({
      component: StatusModalPage,
      componentProps: {
        shownContent: data,
      }
    });
    modal.onDidDismiss().then(data => {
      this.getLoginUserList();
    });
    return await modal.present();
  }
  ionViewWillEnter(){
    this.getLoginUserList();
  }

  ngOnInit() {
    this.getLoginUserList();
    this.menuController.enable(false)
  }

}
