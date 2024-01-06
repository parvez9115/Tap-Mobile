import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { AjaxService } from 'src/app/services/ajax.service';
import { ServerUrl } from 'src/environments/environment';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss'],
})
export class DealerComponent implements OnInit {
  @ViewChild('myTable') table: DatatableComponent;
  ColumnMode = ColumnMode
  @Input() memberList = [];
  temp = [];
  @Input() userRole: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ajaxService: AjaxService

  ) { }

  updateFilter(event) {
    if (event.target.value != "") {
      const val = event.target.value.toLowerCase();
      const temp = this.temp.filter(function (d) {
        if (d.ownerName.toLowerCase().indexOf(val) !== -1)
          return d.ownerName.toLowerCase().indexOf(val) !== -1;
        else if (d.certificateId.toLowerCase().indexOf(val) !== -1)
          return d.certificateId.toLowerCase().indexOf(val) !== -1;
        else if (d.registrationNumber.toLowerCase().indexOf(val) !== -1)
          return d.registrationNumber.toLowerCase().indexOf(val) !== -1;
        else if (d.rtoStatus.toLowerCase().indexOf(val) !== -1)
          return d.rtoStatus.toLowerCase().indexOf(val) !== -1;
        
      });
      this.memberList = temp;
    } else {
      this.memberList = this.temp
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onActivate(event) {
    if (event.type == 'click') {
    }
  }

  async openModalStocks(data) {
    this.router.navigateByUrl("/common-form/" + data + "/" + data + "/null")
  }

  selectedRowRecived(data) {
    let url = ServerUrl.live + "/certificate/" + data.certificateId + "/generate";
    this.ajaxService.ajaxGet(url).subscribe(res => {
      window.location.href = url;
      // window.open(url);
    })
  }

  async openModal() {
    this.router.navigateByUrl("/common-form/Certificate/" + this.userRole + "/null", { replaceUrl: true })
  }

  ngOnChanges(){
    this.temp = this.memberList
  }
  ngOnInit() {
    this.temp = this.memberList
    this.formBuilder.group({
      userName: [""]
    })
  }

}
