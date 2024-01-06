import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { name } from 'src/app/test';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-add-rto',
  templateUrl: './add-rto.component.html',
  styleUrls: ['./add-rto.component.scss'],
})
export class AddRtoComponent implements OnInit {

  @Input()value;
  rto: FormGroup;
  constructor(  private commonService: CommonServices,private ajaxService: AjaxService,private modalController: ModalController,private formBuilder: FormBuilder) { }

 
  closeModel(){
    this.modalController.dismiss();
  }
  submit(){
    this.commonService.presentLoader()
    var data;
    if(!this.value){
      data={
        "rtoname": this.rto.value.rtoname,
        "address": this.rto.value.address,
        "createdDate": "2022-04-04T06:49:27.844Z",
        "rtoid": "",
        "lastupdatedDate": "2022-04-04T06:49:27.844Z",
        "createdBy": "SPA-00000001",
        "lastupdatedBy": "2022-04-04T06:49:27.844Z",
        "mobileno": this.rto.value.mobileno,
        "status": true
    }
    const url = ServerUrl.live + "/rtolist/rtolistsave";
 
    this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
      if(res){
        this.commonService.presentToast('Added Succesfully')
        this.commonService.dismissLoader()
      }
      this.modalController.dismiss()
    });
    }
    else{
      data = this.value;
      data['rtoname'] = this.rto.value.rtoname
      data['address'] = this.rto.value.address
      data['mobileno'] = this.rto.value.mobileno
      data['createdDate'] = null
      data['rtoid'] = this.value.rtoid
      data['createdBy'] = null
      data['lastupdatedBy'] = "SPA-00000001";
      data['lastupdatedDate'] = new Date();
      data['status']= true
  
        const url = ServerUrl.live + "/rtolist/rtolistsave";
        this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
           this.commonService.presentToast('Updated Succesfully')
           this.commonService.dismissLoader()
           this.modalController.dismiss()
           
        })

   }
  }

  ngOnInit() {
    this.createForm() 
    if(this.value){
      this.rto.patchValue({
        rtoname: this.value.rtoname,
        address: this.value.address,
        mobileno: this.value.mobileno,
      })
    }
    
  }
  createForm(){
    this.rto = this.formBuilder.group({
      rtoname: ['',Validators.required],
      address: ['',Validators.required],
      mobileno: ['',Validators.required],
    })
  }

}