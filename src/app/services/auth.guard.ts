import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private router: Router,private route: ActivatedRoute){
  console.log(this.router.getCurrentNavigation().extras.state)
}

  // valid(){
  // let oldtime = Date.now();
  // let newDate = Date.now();
  // if(true){

  // }else{
    
  // }
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const oneDay = 24 * 60 * 60 * 1000;
      // const oneDay = 10009878
      const now = Date.now()
      console.log(history.state, this.route.snapshot.paramMap.get('title'))
    if((now - JSON.parse(localStorage.getItem('time'))) > oneDay){
      // this.router.navigateByUrl('/qr-code')
      return true;
    }else{
      // this.router.navigateByUrl('/qr-code')
      this.router.navigateByUrl('/landing')
      return false;
    }
  }
  
}
