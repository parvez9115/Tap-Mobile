import { Component, OnInit } from '@angular/core';
import { Platform,MenuController } from '@ionic/angular';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';

@Component({
  selector: 'app-dashboard-count',
  templateUrl: './dashboard-count.page.html',
  styleUrls: ['./dashboard-count.page.scss'],
})
export class DashboardCountPage implements OnInit {
  todayDate
  yesDate
  myPlatform;
  constructor(    private commonService: CommonServices,  private ajaxService: AjaxService,    private menuController: MenuController,private platform:Platform,) { }
  dashboarddata={"total":{"certificates":0,"qrcode":0,"products":0,"users":0},"today":{"certificates":0,"qrcode":0},"yesterday":{"certificates":0,"qrcode":0}
}

tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}



ionViewWillEnter(){
  this.commonService.presentLoader()
  this.menuController.enable(true);
    const url = ServerUrl.live + "/dashboard/dashboardcount";
  this.ajaxService.ajaxGet(url).subscribe(res=>{
    this.dashboarddata = res
    this.commonService.updateDashboard(res)
    this.commonService.dismissLoader()
  })
  var currentdate = new Date(); 
  var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + this.tConvert((currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()))
                this.todayDate =datetime
  let yesdatetime = new Date(Date.now() - 864e5);
const ydatetime =  yesdatetime.getDate() + "/"
                + (yesdatetime.getMonth()+1)  + "/" 
                + yesdatetime.getFullYear() 
  this.yesDate = ydatetime
}


  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if(this.myPlatform == 'tablet'){
      this.myPlatform = 'desktop';
    }
  }

}