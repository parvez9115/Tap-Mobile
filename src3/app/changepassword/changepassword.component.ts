import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from '../services/ajax.service';
import { CommonServices } from '../services/common.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  cpassword: FormGroup;
  loginDatas: any;
  constructor(   private router: Router,  private storage: Storage, private platform:Platform,private commonService: CommonServices,private formBuilder:FormBuilder,private ajaxService: AjaxService) { }
  myPlatform;
createForm(){
  this.cpassword = this.formBuilder.group({
    currentPassword:['',Validators.required],
    newPassword:['',Validators.required],
    conformNewPassword:['',Validators.required]
  })
}
submit(){
  this.commonService.presentLoader()
  if(this.cpassword.value.newPassword == this.cpassword.value.conformNewPassword){
    const url =  ServerUrl.live+'/user/changepassword?Email='+this.loginDatas.email+'&OldPassword='+this.cpassword.value.currentPassword+'&NewPassword='+this.cpassword.value.newPassword
    this.ajaxService.ajaxGet(url).subscribe(res=>{
     if(res.message == "Password Change Successfully"){
       this.commonService.presentToast(res.message)
       this.commonService.dismissLoader()
       this.cpassword.patchValue({
        newPassword:'',
        conformNewPassword:'',
        currentPassword:''
       })
       this.router.navigateByUrl('')
    
     }else{
       this.commonService.presentToast(res.message)
       this.commonService.dismissLoader()
     }
   
   })
  }else{
    this.commonService.dismissLoader()
    this.commonService.presentToast("Oops!.. Your Passwords mismatch")
    
  }
  

}

  ngOnInit() {
    this.storage.get("login").then(body => {
      this.loginDatas = JSON.parse(body)
    // this.cpassword.patchValue({
    //   currentPassword :this.loginDatas.password
    // })  
    })  
    this.createForm()
   this.myPlatform = this.platform.platforms()[0];
   if(this.myPlatform == 'tablet'){
     this.myPlatform = 'desktop';
   }
  }
}
