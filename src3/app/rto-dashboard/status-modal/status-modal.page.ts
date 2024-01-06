import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.page.html',
  styleUrls: ['./status-modal.page.scss'],
})
export class StatusModalPage implements OnInit {
  @Input() shownContent;
  textBox
  verifiedData: any;
  otp
  statusNames = ["Pending", "Recheck", "Verified", "Rejected"]
  showContent: boolean = false;
  constructor(
    private ajaxService: AjaxService,
    private modalController: ModalController,
    private commonService: CommonServices,
  ) { }

  radioSelect($event, item) {
    this.shownContent["rtoStatus"] = $event.detail.value
  }

  verifiOtp() {
    if(this.otp == this.shownContent["otp"]){
      this.showContent = true
    }else{
      this.showContent = false
    }
  }

  submit() {
    this.shownContent["rtoComment"] = this.textBox
    let url = ServerUrl.live + "/certificate/updatee";
    this.ajaxService.ajaxPostWithBody(url, this.shownContent)
      .subscribe(res => {
        console.log(res)
        if (res) {
          this.commonService.presentToast(res.message)
          this.modalController.dismiss()
        } else {
          this.commonService.presentToast('something went wrong, please try again')
          this.modalController.dismiss()
        }
      })
  }

  ngOnInit() {
    this.commonService.presentToast('Please enter the otp to verify')
  }

}
