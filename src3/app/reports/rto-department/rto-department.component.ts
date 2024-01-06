import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent , ColumnMode } from '@swimlane/ngx-datatable';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-rto-department',
  templateUrl: './rto-department.component.html',
  styleUrls: ['./rto-department.component.scss'],
})
export class RtoDepartmentComponent implements OnInit {
  @ViewChild('myTable') table: DatatableComponent;
  ColumnMode = ColumnMode
  constructor(  private ajaxService: AjaxService, private commonServices: CommonServices) { }
  memberList = []
  temp = []
  search;

getDatas(){
  this.commonServices.presentLoader()
  const url = ServerUrl.live + "/dashboard/rtodepartmentreport";
  this.ajaxService.ajaxGet(url).subscribe(res=>{
    console.log(res)
    this.memberList= res
    this.temp = res
    this.commonServices.dismissLoader()
  })
}
updateFilter(event) {
  if (event.target.value != "") {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      if (d.name.toLowerCase().includes(val))
        return d.name.toLowerCase().includes(val);
      // else if (d.numberofvendors+"".toLowerCase().includes(val))
      //   return d.numberofvendors+"".toLowerCase().includes(val)
    });
    this.memberList = temp;
  } else {
    this.memberList = this.temp
  }
  // Whenever the filter changes, always go back to the first page
  this.table["table"].offset = 0;
}


  ngOnInit() {
    this.getDatas()
  }

}
