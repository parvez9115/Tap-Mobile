import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, Platform } from '@ionic/angular';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { ServerUrl } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  loginDatas: any;
  constructor(   private storage: Storage,private modalController: ModalController, private platform:Platform,private commonService: CommonServices,private formBuilder:FormBuilder,private ajaxService: AjaxService) { }
  cpassword: FormGroup;  
  myPlatform;
  
  createForm(){
    this.cpassword = this.formBuilder.group({
      mailid:['',Validators.required],
      // newPassword:['',Validators.required]
    })
  }
  
  submit(){
    this.commonService.presentLoader()
   const url = ServerUrl.live+'user/forgetpassword?Email='+this.cpassword.value.mailid
   this.ajaxService.ajaxGet(url).subscribe(res=>{
   console.log(res)
   if(res.message == "Invalid Email ID"){
    this.commonService.presentToast(res.message)
    this.commonService.dismissLoader()
    this.modalController.dismiss()
   }else{
    this.commonService.presentToast('Updated Sucessfully')
    this.commonService.dismissLoader()
      this.modalController.dismiss();
   }
  
  })
 }

  closemodal(){
    this.modalController.dismiss()
  }
  
    ngOnInit() {
      this.createForm()
      this.storage.get("login").then(body => {
        console.log(body)
        this.loginDatas = body

      })
     
     this.myPlatform = this.platform.platforms()[0];
     if(this.myPlatform == 'tablet'){
       this.myPlatform = 'desktop';
     }
    }

}
