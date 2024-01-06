import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class CreateCertificateGuardGuard implements CanActivate {
  constructor(private router: Router,private commonservice:CommonService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    if(localStorage.getItem('Verified')){
      return true;
    }else{
      this.router.navigateByUrl('qr-code')
      this.commonservice.presentToast('Scan the Qrcode to Create Cretificate !')
      return false;
    }
 
  }
  
}
