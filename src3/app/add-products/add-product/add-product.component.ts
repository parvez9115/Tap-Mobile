import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FileUploader } from 'ng2-file-upload';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { name } from 'src/app/test';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})

export class AddProductComponent implements OnInit {
  @Input()value;
  products: FormGroup;
  constructor(  private commonService: CommonServices,private ajaxService: AjaxService,private modalController: ModalController,private formBuilder: FormBuilder) { }
  type = "text";
  public productImg: FileUploader = new FileUploader({});
 
  closeModel(){
    this.modalController.dismiss();
  }
submit(){
  this.commonService.presentLoader()
  console.log(this.products.value)
  const url = ServerUrl.live + "/product/productsave";
  var data;
 if(!this.value){
   if(this.productImg.queue.length != 0){
    data ={"productid":"","brandname":this.products.value.brandName,"productname":this.products.value.productName,"copnumber":this.products.value.copNumber,"copvalidtill":this.products.value.copValidtill.slice(0,10),"tagnumber":"",
    "productImage":"","status":true,"createdBy":"SPA-00000001","createdDate":new Date(),
    "lastupdatedBy":null,"lastupdatedDate":null}
    const testData: FormData = new FormData();
    testData.append("productimage",this.productImg.queue[0]._file)
    testData.append("data",JSON.stringify(data))
    this.ajaxService.ajaxPostWithFile(url,testData).subscribe(res=>{
    if(res){
      this.commonService.presentToast('Added Succesfully')
      this.commonService.dismissLoader()
    }
    this.modalController.dismiss()
  });
   }else{
    this.commonService.presentToast('Please select a image and try again ')
    this.commonService.dismissLoader()
   }
   
  }else{
    data = this.value;
    data['brandname'] = this.products.value.brandName
    data['productname'] = this.products.value.productName
    data['copnumber'] = this.products.value.copNumber
    data['copvalidtill'] = this.products.value.copValidtill
    data['createdBy'] = null
    data['createdDate'] = null
    data['lastupdatedBy'] = "SPA-00000001";
    data['lastupdatedDate'] = new Date();

    if(this.productImg.queue.length == 0){
      const url = ServerUrl.live + "/product/productedit";
      this.ajaxService.ajaxPostWithBody(url,data).subscribe(res=>{
         this.commonService.presentToast('Updated Succesfully')
         this.commonService.dismissLoader()
         this.modalController.dismiss()
         
      })
    }else{
      const testData: FormData = new FormData();
      testData.append("productimage",this.productImg.queue[0]._file)
       testData.append("data",JSON.stringify(data))
       this.ajaxService.ajaxPostWithFile(url,testData).subscribe(res=>{
         if(res){
           this.commonService.dismissLoader()
           this.commonService.presentToast('Added Succesfully')
         }
         this.modalController.dismiss()
    })
    }
  
 }
}



ngOnInit() {
  this.createForm() 
  if(this.value){

    this.products.patchValue({
      brandName: this.value.brandname,
      productName: this.value.productname,
      copNumber: this.value.copnumber,
      copValidtill: this.value.copvalidtill
    })
  }
   }
  
  
  
   createForm(){
     this.products = this.formBuilder.group({
       brandName: ['',Validators.required],
       productName: ['',Validators.required],
       copNumber: ['',Validators.required],
       copValidtill: ['',Validators.required]
     })
   }
}


