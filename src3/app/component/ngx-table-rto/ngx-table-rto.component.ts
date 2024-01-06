import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { AjaxService } from 'src/app/services/ajax.service';
import { CommonServices } from 'src/app/services/common.service';
import { TestPDFPage } from 'src/app/test-pdf/test-pdf.page';
import { ServerUrl } from 'src/environments/environment';
import jsPDF from 'jspdf';
import { ActivatedRoute, Router } from '@angular/router';
import { AllQrcodeComponent } from 'src/app/qrcode-list/all-qrcode/all-qrcode.component';
@Component({
  selector: 'app-ngx-table-rto',
  templateUrl: './ngx-table-rto.component.html',
  styleUrls: ['./ngx-table-rto.component.scss'],
})
export class NgxTableRtoComponent implements OnInit {
  @ViewChild('myTable') table: DatatableComponent;
  @Output() selectedRowData = new EventEmitter();
  @Input() page;
  @Input() valid;
  show:boolean;
  hide = false;
  width = 80;
  offset = 0
  values = 'aasd'
  @Input() datalist;
  ColumnMode = ColumnMode
  operation = 'RESEND OTP';
  temp = [];
    productDetails: any;
    total: string;
    currentPage = -1;
  constructor(
    private ajaxService: AjaxService,
    private commonService: CommonServices,
    private modalController: ModalController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {  console.log(router.url)


if(router.url.includes('qrcodelist')){
    this.show = false
}else{
    this.show = true
}
    // this.show = router.url
        }
  data = [];
  cols = [
    {prop: 'name'},
    {prop: 'age'}
  ];


  
  ngOnChanges() {
    // this.datalist.length = 150
    // console.log( this.datalist)
    // this.datalist = []
    if(this.router.url.includes('qrcodelist')){
        this.total = localStorage.getItem('Qrcount')
      }else{
        this.commonService.dashboard.subscribe(res=>{
            this.total = res['total'].certificates
        })
      }
    if (this.datalist) {

      this.datalist = this.datalist
    }
    this.page = 'rto'
    this.page == 'rto' ? this.operation = "DOWNLOAD" : this.operation = 'RESEND OTP';
  }


getProductname(data){
    const url =  ServerUrl.live + "/product/productname?productname=" + data.productname
    this.ajaxService.ajaxGet(url).subscribe(res=>{
      console.log(res)
      this.productDetails = res
      this.clickToDownload(data);
  })
}

onPageChange(pageInfo: any): void {
//   alert( pageInfo)
  this.selectedRowData.emit( pageInfo)
  this.currentPage=  this.currentPage+(pageInfo);
//   this.datalist.push({'cer':909})
//   this.gridQuery.page.size = this.page.size;
//   this.gridQuery.page.pageNumber = pageInfo.offset + 1;

}
    async viewQrcodes(ev){
    const modal = await this.modalController.create({
        component: AllQrcodeComponent,
        cssClass: 'qr-code',
        componentProps: {
       data: ev
      }
    });
    modal.onDidDismiss().then(() => {
    //    this.getDatas()
    })
    return await modal.present();
}


  async onActivate(event) {
    if (event.type == 'click' && event.column.name== 'List of Qr-code'){
        this.viewQrcodes(event.row)
         }else if (event.type == 'click' && event.column.name != "Operations") {
      console.log(event.row);
    //   this.selectedRowData.emit(event.row)
    } else if (event.type == 'click' && event.column.name == "Operations" && this.operation != 'RESEND OTP') {
      console.log(event.row);
      this.getProductname(event.row)
    //   this.clickToDownload(event.row);
      // const modal = await this.modalController.create({
      //   component: TestPDFPage,
      //   cssClass: 'test-pdf-class'
      // });
      // return await modal.present();
      // if (this.page != 'rto') {
      //   var digits = '0123456789';
      //   let OTP = '';
      //   for (let i = 0; i < 6; i++) {
      //     OTP += digits[Math.floor(Math.random() * 10)];
      //   }
      //   let resu = { key: event.row['certificateId'], message: OTP }
      //   let url = ServerUrl.live + "/certificate/send/otp";
      //   this.ajaxService.ajaxPostWithBody(url, resu)
      //     .subscribe(res => {
      //       this.commonService.presentToastWithOk(res.message)
      //     })
      // } else {
      //   if (event.row.rtoStatus == "Verified") {
      //     console.log(event.row);
      //     let url = ServerUrl.live + "/certificate/" + event.row.certificateId + "/generate";
      //     this.ajaxService.ajaxGet(url).subscribe(res => {
      //       console.log(res)
      //       // window.location.href = url;
      //       window.open(url);
      //     })
      //   } else {
      //     this.commonService.presentToast('Rto status is not verified.')
      //   }
      // }
    }else if (event.type == 'click' && this.operation == 'RESEND OTP'){
      console.log('send otp')
    }
  }

  clickToDownload(data){
    // window.open(ServerUrl.live + "/certificate/download?certificateid="+data.certificateId)
    var url =ServerUrl.s3ServerName+"/TapeManagement/Certificates/Certificate/"+data.certificateId+"_CERTIFICATE.pdf"
    window.open(url)
  }

  clickToDownloada(data) {
    // var divContents = document.getElementById("pdf").innerHTML;
       

    const avery = ServerUrl.s3ServerName+"/Company/avery.logo.png"
    const dm = ServerUrl.s3ServerName+"/Company/dm.png"
    const orafol = ServerUrl.s3ServerName+"/Company/orafol.png"
   let  ManufactureName = ''
    let Productimage = ''
    // data.productname.includes("ORAFOL")
    if(data.productname){
    if(data.productname.includes("Avery")){
        ManufactureName = 'DM'
        Productimage = "Avery"
    }else if(data.productname.includes("DM")){
        Productimage = dm
        ManufactureName = 'DM'
    }else if(data.productname.includes("ORAFOL")){
        Productimage = orafol
        ManufactureName = 'ORAFOL'
    }else{
        Productimage = avery
        ManufactureName = 'Avery'
    }
}else{
    Productimage = avery
    ManufactureName = 'Avery'
}

   const url = ServerUrl.s3ServerName+"/TapeManagement/Certificates/"
   const frontImage = url+data.frontImage
   const leftImage =  url+data.leftImage
   const rightImage = url+data.rightImage
   const backImage  = url+data.backImage
   const documentImage = url+data.documentImage
    var printWindow = window.open('', '', 'height=1000,width=900');
    printWindow.document.write('<html><head><title>Vehicle Safty</title>');
    printWindow.document.write('</head><body style="background-image: url(ServerUrl.s3ServerName+/Company/back-smart.png" >');
 
    let pdfImage = '<div id="printcertificate">\n' +
    '<table style="width: 100%; height: 1300px; border-collapse: separate;">\n' +
        '<tbody>\n' +
            '<tr>\n' +
                '<td colspan="3" style="height: 90px; width: 100%;">\n' +
                    '<table style="width: 100%; height: 90px; border-collapse: separate;">\n' +
                        '<tbody>\n' +
                            '<tr>\n' +
                                '<td style="width: 24%; height: 55px;">\n' +
                                    '<img src='+Productimage+' style="width: 98%;height: 76px;" alt="" />\n' +
                                '</td>\n' +
                                '<td style="width: 52%; height: 53px; text-align: center; color: red; font-family: Verdana; font-weight: bolder; font-size: 18px;">\n' +
                                    '<span style="margin-top: -15px; display: inline-block;">INSTALLATION&nbsp;CERTIFICATE</span>\n' +
                                '</td>\n' +
                               '<td style="width: 24%; height: 53px;">\n' +
                                    '<img src=ServerUrl.s3ServerName+"/Company/Techno_Jacks.png" style="width: 59%; height: 128px;" alt="" />\n' +
                                '</td>\n' +
                            '</tr>\n' +
                        '</tbody>\n' +
                    '</table>\n' +
                '</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
                '<td colspan="3" style="height: 110px; width: 100%;">\n' +
                    '<table style="width: 100%; height: 110px; border-collapse: separate;">\n' +
                        '<tbody>\n' +
                            '<tr>\n' +
                                '<td style="width: 22%; height: 110px; text-align: left; color: black; font-family: Verdana; font-size: 17px;">\n' +
                                    '<div style="width: 85%; height: 110px; margin-left: 15%; margin-top: 15%; line-height: 1.6;">\n' +
                                        'TO:<br /><b>The&nbsp;Regional</b><br /><b>Transport&nbsp;Office</b><br />'+data.rtoZone+'\n' +
                                    '</div>\n' +
                                '</td>\n' +
                                '<td style="width: 51%; height: 110px; text-align: center; color: black; font-family: Verdana; font-weight: bolder; font-size: 17px;">\n'   +document.getElementById("code").innerHTML +
                                '</td>\n' +
                                '<td style="width: 27%; height: 110px; text-align: left; color: black; font-family: Verdana; font-size: 17px;">\n' +
                                    '<div style="width: 100%; height: 110px; margin-top: 27%; line-height: 1.6;">\n' +
                                        '<span style="width: 100%; display: inline-block;">Certificate&nbsp;No:&nbsp;<b>'+data.certificateId+'</b></span><br />\n' +
                                        '<span style="width: 100%; display: inline-block;">Valid&nbsp;From:&nbsp;<b>'+data.validfrom.slice(-29,-19)+'</b></span><br />\n' +
                                        '<span style="width: 100%; display: inline-block;">Valid&nbsp;Till:&nbsp;<b>'+data.validfrom.slice(-29,-19)+'</b></span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                            '</tr>\n' +
                        '</tbody>\n' +
                    '</table>\n' +
                '</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
                '<td colspan="3" style="height: 140px; width: 100%;">\n' +
                    '<table style="width: 100%; height: 140px; border: 3px solid #000; border-collapse: separate;">\n' +
                        '<tbody>\n' +
                            '<tr>\n' +
                                '<td style="width: 52%; height: 140px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 98%; height: 170px; margin-left: 2%; margin-top: 10px; line-height: 42px;">\n' +
                                       '<b>Vehicle&nbsp;Details</b><br /><b>Registration&nbsp;No:&nbsp;</b>'+data.certificateId+'<br /><b>Engine/Chassis&nbsp;No:&nbsp;</b>'+data.chassisNumber+'<br /><b>Vehicle&nbsp;Make:&nbsp;</b>'+data.vehicleMake+'\n' +
                                    '</div>\n' +
                                '</td>\n' +
                                '<td style="width: 48%; height: 140px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 100%; height: 130px; padding-top: 55px;">\n' +
                                        '<b>Registration&nbsp;Year:</b>&nbsp;'+data.registrationNumber+'<br /><br /><br /><span style="margin-top: 15px; display: block;"><b>Vehicle&nbsp;Category:</b>&nbsp;'+data.vehicleModel+'</span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                            '</tr>\n' +
                        '</tbody>\n' +
                    '</table>\n' +
                '</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
                '<td colspan="3" style="height: 112px; width: 100%;">\n' +
                    '<table style="width: 100%; height: 112px; border: 3px solid #000; border-collapse: separate;">\n' +
                        '<tbody>\n' +
                            '<tr>\n' +
                                '<td style="width: 52%; height: 112px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 98%; height: 82px; margin-left: 2%; margin-top: -25px; line-height: 36px;">\n' +
                                        '<b>Vehicle&nbsp;Owner&nbsp;Details</b><br /><span style="margin-top: 10px; display: block;">Owner&nbsp;Name:&nbsp;<b>'+data.ownerName+'</b><br /><span style="margin-top: -11px; display: block;">Contact&nbsp;Number:&nbsp;<b>'+data.mobile1+'</b></span></span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                                '<td style="width: 48%; height: 112px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 100%; height: 82px;">\n' +
                                        '<b>Manufacturer&nbsp;Details</b><br /><br /><span style="margin-top: 5px; display: block;">Manufacturer&nbsp;Name:&nbsp;<b>'+ManufactureName+'</b></span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                            '</tr>\n' +
                        '</tbody>\n' +
                    '</table>\n' +
                '</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
                '<td colspan="3" style="height: 117px; width: 100%;">\n' +
                    '<table style="width: 100%; height: 117px; border: 3px solid #000; border-collapse: separate;">\n' +
                       '<tbody>\n' +
                            '<tr>\n' +
                                '<td style="width: 50%; height: 117px; text-align: center; color: black; font-family: Verdana; font-weight: bolder; font-size: 20px;">\n' +
                                    '<div style="width: 100%; height: 82px; margin-top: -10px; line-height: 36px;">\n' +
                                        'Product&nbsp;Name<br />C3<br /><span style="margin-top: -7px; display: block;">CT</span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                                '<td style="width: 50%; height: 117px; text-align: center; color: black; font-family: Verdana; font-weight: bolder; font-size: 20px;">\n' +
                                    '<div style="width: 100%; height: 82px; margin-top: -10px; line-height: 36px;">\n' +
                                       'Quantity<br />'+data.sred20mm+'<br /><span style="margin-top: -7px; display: block;">'+data.sred50mm+'</span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                            '</tr>\n' +
                        '</tbody>\n' +
                    '</table>\n' +
                '</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
                '<td colspan="3" style="height: 180px; width: 100%;">\n' +
                    '<table style="width: 100%; height: 180px; border: 3px solid #000; border-collapse: separate;">\n' +
                        '<tbody>\n' +
                            '<tr>\n' +
                                '<td style="width: 300px; height: 180px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 300px; height: 160px; margin-left: 2%; margin-top: 25px; line-height: 30px;">\n' +
                                        'Dealer&nbsp;Name:&nbsp;<b>'+data.user.name+'</b><br /><span style="margin-top: 15px; display: block;">Trade&nbsp;Certificate&nbsp;Number:&nbsp;<b><br />'+data.user.tradecertificateno+'</b></span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                                '<td style="width: 380px; height: 180px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 380px; height: 160px; margin-top: 25px; line-height: 30px;">\n' +
                                        'COP&nbsp;Number:<b>'+this.productDetails.copnumber+'</b><br /><span style="margin-top: 16px; display: block;">COP&nbsp;Valid&nbsp;Till:<b>'+this.productDetails.copvalidtill+'</b></span>\n' +
                                    '</div>\n' +
                                '</td>\n' +
                                '<td style="width: 190px; height: 200px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                '<div style="width: 190px; margin-left: 5px; margin-right: 35px; height: 30px;">Document-Image:</div>\n' +
                                  '<div style="width: 260px; height: 30px; font-weight: bolder; font-size: 20px;">&nbsp;</div>\n' +
                                  '<img src='+documentImage+' style="width: 170px; margin-left: 5px; margin-right: 35px; height: 130px;" alt="" />\n' +
                                  '<div style="margin-top: 25px; font-size: 17px;">&nbsp;</div>\n' +
                              '</td>\n' +
                            '</tr>\n' +
                        '</tbody>\n' +
                    '</table>\n' +
                '</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
                '<td colspan="3" style="height: 310px; width: 100%;">\n' +
                    '<table style="width: 100%; height: 310px; border: 3px solid #000; border-collapse: separate;">\n' +
                        '<tbody>\n' +
                            '<tr>\n' +
                                '<td style="width: 190px; height: 200px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 260px; height: 30px; font-weight: bolder; font-size: 20px; padding: 5px;">Fitment&nbsp;Images:</div>\n' +
                                    '<div style="width: 190px; margin-left: 5px; margin-right: 35px; height: 30px;">Front:</div>\n' +
                                    '<img src='+frontImage+' style="width: 210px; margin-left: 5px; margin-right: 35px; height: 185px;" alt="" />\n' +
                                    '<div style="margin-top: 25px; margin-left: 5px; font-size: 17px; width: 98%; text-align: left;">____________________</div>\n' +
                                    '<div style="margin-top: 15px; margin-left: 5px; margin-bottom: 8px; font-weight: 100; font-size: 17px; width: 98%; text-align: left;">Authorised&nbsp;RTO&nbsp;Signature</div>\n' +
                                '</td>\n' +
                                '<td style="width: 190px; height: 200px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 260px; height: 30px; font-weight: bolder; font-size: 20px;">&nbsp;</div>\n' +
                                    '<div style="width: 190px; margin-left: 5px; margin-right: 35px; height: 30px;">Back:</div>\n' +
                                    '<img src='+backImage+' style="width: 210px; margin-left: 5px; margin-right: 35px; height: 185px;" alt="" />\n' +
                                    '<div style="margin-top: 25px; font-size: 17px;">&nbsp;</div>\n' +
                                    '<div style="margin-top: 15px; margin-bottom: 8px; font-size: 17px;">&nbsp;</div>\n' +
                                '</td>\n' +
                                '<td style="width: 190px; height: 200px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 260px; height: 30px; font-weight: bolder; font-size: 20px;">&nbsp;</div>\n' +
                                    '<div style="width: 190px; margin-left: 5px; margin-right: 35px; height: 30px;">Side-1:</div>\n' +
                                    '<img src='+rightImage+' style="width: 210px; margin-left: 5px; margin-right: 35px; height: 185px;" alt="" />\n' +
                                    '<div style="margin-top: 25px; font-size: 17px;">&nbsp;</div>\n' +
                                    '<div style="margin-top: 15px; margin-bottom: 8px; font-size: 17px;">&nbsp;</div>\n' +
                                '</td>\n' +
                                '<td style="width: 190px; height: 200px; text-align: left; color: black; font-family: Verdana; font-size: 20px;">\n' +
                                    '<div style="width: 260px; height: 30px; font-weight: bolder; font-size: 20px;">&nbsp;</div>\n' +
                                    '<div style="width: 190px; margin-left: 5px; margin-right: 35px; height: 30px;">Side-2:</div>\n' +
                                    '<img src='+leftImage+' style="width: 210px; margin-left: 5px; margin-right: 35px; height: 185px;" alt="" />\n' +
                                    '<div style="margin-top: 25px; font-size: 17px; width: 98%; text-align: right;">____________________</div>\n' +
                                    '<div style="margin-top: 15px; margin-bottom: 8px; font-weight: 100; font-size: 17px; width: 98%; text-align: right;">Customer&nbsp;Signature</div>\n' +
                                '</td>\n' +
                            '</tr>\n' +
                        '</tbody>\n' +
                    '</table>\n' +
                '</td>\n' +
            '</tr>\n' +
            '<tr>\n' +
                '<td style="width: 23%; height: 80px;">&nbsp;</td>\n' +
                '<td style="width: 54%; height: 80px;">&nbsp;</td>\n' +
                '<td style="width: 23%; height: 80px;">&nbsp;</td>\n' +
            '</tr>\n' +
        '</tbody>\n' +
    '</table>\n' +
'</div>'
    this.values = pdfImage
    // this.commonService.createPdf2('asd')
    // var source = window.document.getElementsByTagName("body")[0];
    // var specialElementHandlers = {
    //     '#hidden-element': function (element, renderer) {
    //         return true;
    //     }
    // };
    // var doc = new jsPDF({
    //     orientation: 'landscape'
    // });
    // doc.setFont("courier");
    // // doc.setFontType("normal");
    // doc.setFontSize(24);
    // doc.setTextColor(100);
    // doc.html(source)
    // doc.save()
    printWindow.document.write(pdfImage)
    printWindow.document.write('</body></html>');
    printWindow.document.close()
    // var win = window.open('', 'print', 'height=720,width=300');
    
    // win.document.write(document.getElementById("id").innerHTML);
    
    // win.document.close(); 
    // win.focus();
    // win.print();
    setTimeout(() => {
    printWindow.print();
}, 3000);
  }
  // https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Certificates/CRT-00000001/CRT-00000001_front.png
  ngOnInit() {
      
     
   
  }
}
// '    <img style="position:absolute;top:8.62in;left:0.62in;width:1.56in;height:1.35in"\n' +
// '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_2.png" />\n' +
// '    <img style="position:absolute;top:8.62in;left:2.66in;width:1.56in;height:1.35in"\n' +
// '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_3.png" />\n' +
// '    <img style="position:absolute;top:8.62in;left:4.70in;width:1.56in;height:1.35in"\n' +
// '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_4.png" />\n' +
// '    <img style="position:absolute;top:8.62in;left:6.73in;width:1.56in;height:1.35in"\n' +
// '      src="https://kingstrackimages.s3.amazonaws.com/TapeManagement/Admin/ri_5.png" />\n' +
// addressLine: "3/672, Varaprasath rao nagar, 4th cross street, Nedungundram"
// backImage: "CRT-00000005/CRT-00000005_back.04"
// certificateId: "CRT-00000005"
// chassisNumber: ""
// city: "Chennai"
// class3: 0
// class4: 0
// createdDate: "2021-01-12T13:08:09.000+00:00"
// email: null
// engineNumber: "6765"
// frontImage: "CRT-00000005/CRT-00000005_front.04"
// hologram: 0
// leftImage: "CRT-00000005/CRT-00000005_left.04"
// manufactureYear: "2021"
// mobile1: null
// mobile2: null
// otp: null
// ownerName: "test"
// pincode: 600048
// registrationNumber: "65"
// rightImage: "CRT-00000005/CRT-00000005_right.04"
