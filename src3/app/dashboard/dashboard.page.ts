import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import 'jspdf-autotable';
import { jsPDF } from 'jspdf';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  page: any = ""
  member = [];
  pdfTitle = [];
  pdfData = [];
  myPlatform: any;
  constructor(
    private menuController: MenuController,
    private ajaxService: AjaxService,
    private storage: Storage,
    private commonService: CommonServices,
    private platform:Platform,
  ) { }

  ionViewWillEnter() {
    this.getLoginUserList();
    this.loginReStore();
  }

  generatePdf() {
    var doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(this.page, 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: [this.pdfTitle],
      body: this.pdfData,
      theme: 'grid',
      didDrawCell: data => {
      }
    })

    // // Open PDF document in new tab
    doc.output('dataurlnewwindow')
  }

  loginReStore() {
    this.storage.get("login").then(body => {
      let url = ServerUrl.live + "/authentic/user";
      this.ajaxService.ajaxPostWithBody(url, body)
        .subscribe(res => {
          // console.table(res)
          if (res != null && res != "") {
            let messagingServiceData = res
            this.storage.set("loginRes", JSON.stringify(res)).then(res => {
              if (this.commonService.isLoading)
                this.commonService.dismissLoader();
              this.commonService.updateLoginInfo(messagingServiceData);
            })
          }
        });
    })
  }

  getLoginUserList() {
    this.storage.get('loginRes').then((result) => {
      result = JSON.parse(result)
      this.page = result["role"]["roleName"]
      let body = result
      if (this.page != "Dealer" && this.page != "RTO") {
        let url = ServerUrl.live + "/dashboard/user/list";
        this.commonService.presentLoader()
        this.ajaxService.ajaxPostWithBody(url, body)
          .subscribe(res => {
            // console.log(res)
            // res.forEach(element => {
              
            // });
            this.member = res
            this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {
              this.commonService.dismissLoader()
            })
            this.pdfTitle = ["User ID", "Role", "Name", "Email", "Address", "Contact"]
            for (let i = 0; i < this.member.length; i++) {
              this.pdfData.push([res[i].userId, res[i].role.roleName, res[i].name, res[i].email, res[i]['addressLine'] + ',' + res[i]['city'] + ',' + res[i]['state'] + ',' + res[i]['pincode'], res[i].mobile1])
            }
          })
      } else {
        let url = ServerUrl.live + "/dashboard/certificate/list";
        this.commonService.presentLoader()
        this.ajaxService.ajaxPostWithBody(url, body)
          .subscribe(res => {
            // console.log(res)
            this.member = res
            this.commonService.dismissLoader()
            this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {

            })
            this.pdfTitle = ["Certificate id", "Registration no", "Name", "Vehicle Type", "Vehicle Modal", "Rto status"]
            for (let i = 0; i < this.member.length; i++) {
              this.pdfData.push([res[i].certificateId, res[i].registrationNumber, res[i].ownerName, res[i].vehicleMake, res[i].vehicleModel, res[i].rtoStatus])
            }
          })
      }
    });


  }

  
  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet'){
      this.myPlatform = 'desktop';
    }
   // this.menuController.enable(true)
  }

}
