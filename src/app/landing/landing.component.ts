import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServerUrl } from 'src/environments/environment';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})

export class LandingComponent implements OnInit {
  images=[ServerUrl.s3URL+'Company/1_Advertisment.jpg',ServerUrl.s3URL+'Company/2_Advertisment.jpg',ServerUrl.s3URL+'Company/3_Advertisment.jpg']
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true,
     };
    //  ServerUrl.s3URL+''
  landingitems=[{name:'TAPE','img':ServerUrl.s3URL+'Company/tape.svg','route':'/qr-code'},{name:'VTS','img':ServerUrl.s3URL+'Company/VTS.svg'},
  {name:'PUC','img':ServerUrl.s3URL+'Company/PUC.svg','onprogress':'Coming Soon'},{name:'speed govn','img':ServerUrl.s3URL+'Company/Speed%20Governer.svg','onprogress':'Coming Soon'},{name:'hsrp','img':ServerUrl.s3URL+'Company/Hsrp.svg','onprogress':'Coming Soon'}
]
  username: any;
  constructor(private router: Router,public commonService:CommonService,private menu:MenuController) {
    this.username = JSON.parse(localStorage.getItem('loginDatas')).username
     this.menu.enable(false)
  }


  enableMenu(items){
    this.router.navigateByUrl(items.route)
 
  }


    ionViewDidLeave(): void {
     this.menu.enable(true);
    }
  ngOnInit() {
    console.log('test')
   }

}
// puc, speed govn ,hsrp ,tape,vts





