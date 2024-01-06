import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  valid: boolean = false

  constructor() { }


  change(data){
if(data == 'rto'){
  this.valid = true
}else{
  this.valid = false
}
  }
  ngOnInit() {
  }

}
