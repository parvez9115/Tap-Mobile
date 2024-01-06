import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input()value
  reason;
  constructor(  private modalController: ModalController,   private router: Router,private ajaxService: AjaxService, private commonService: CommonServices) { }
name;
heading = ''

submit(){
  // if(this.reason){
    let status = !this.value.status
    const url = ServerUrl.live + '/user/savestatus'
     let data = {"userId":this.value.userId,"status": status,"reason":this.reason}
     this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
     this.commonService.presentToast("Updated successfully..")
     this.router.navigateByUrl('/dashbboard')
     this.modalController.dismiss()
    
   })
  // }else{
  //   this.commonService.presentToast("Oops!!.. Please enter the reason")
  // }
 
}

closeModel(){
  this.modalController.dismiss()

}

  ngOnInit() {
    // console.log(this.value)
    this.reason = ''
    this.name = this.value.name
    console.log(this.name)
    if(this.value.status){
      this.heading = 'Deactivate'
    }else{
      this.heading = 'Activate'
    }
  }

}
