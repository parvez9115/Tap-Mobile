import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { BehaviorSubject } from 'rxjs';
import { ServerUrl } from 'src/environments/environment';
import { AjaxService } from './ajax.service';
import { Plugins, FilesystemDirectory } from '@capacitor/core';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
import { PdfLogoService } from './pdf-logo.service';
const { Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CommonServices {
  
  public loginMenuInfo = new BehaviorSubject('');
  public dashboard = new BehaviorSubject('');
  isLoading: boolean;
  constructor(
    private toastController: ToastController,
    private ajaxService: AjaxService,
    private loadingController: LoadingController,
    // public fileOpener: FileOpener,
    private pdfLogo: PdfLogoService
  ) { }

  updateLoginInfo(item: any) {
    this.loginMenuInfo.next(item);
  }

updateDashboard(item: any){
  this.dashboard.next(item)
}

  async presentLoader() {
    this.isLoading = true;

    setTimeout(() => {
      this.dismissLoader();
    }, 200000);

    return await this.loadingController.create({
      spinner: "circles",
      message: "Please Wait!",
      translucent: false,
      cssClass: 'custom-loader-class'
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
    }

  async createPdf(head, pdfDatas, exportTitle, myPlatform, pdfName) {
    const doc = new jsPDF('landscape', "px", 'a4');
    let imgdata = this.pdfLogo.imgdata.Apmkingstrack;
    doc.setFontSize(25);
    //let today = new Date().toTimeString;
    doc.text(pdfName, 400, 42);
    doc.setFontSize(10);
    doc.addImage(imgdata, 'png', 30, 10, 150, 50);
    doc.setTextColor(100);
    //download Table------------->>>>>>>>>>
    (doc as any).autoTable({
      head: [head],
      body: pdfDatas,
      margin: { top: 70 },
      tableWidth: 'auto',
      theme: 'grid',
      didDrawCell: data => {
        console.log(exportTitle, "New Title")
      }
    })
    // var elementHandler = {
    //   '#ignorePDF': function (element, renderer) {
    //     return true;
    //   }
    // };
    // var docs = new jsPDF();
    // docs.fromHTML(
    //   pdfDatas,
    //   15,
    //   15,
    //   {
    //     'width': 180,'elementHandlers': elementHandler
    //   });


    if (myPlatform == 'desktop')
      doc.save(pdfName);
    else {
      let base64: any = doc.output('datauristring')
      var date = new Date()
      let name = pdfName +" " + date.toDateString() + ".pdf"
      const savedFile = await Filesystem.writeFile({
        path: name,
        data: base64,
        directory: FilesystemDirectory.Documents,
        recursive: true
      })
      console.log('Saved:' + savedFile.uri)
      const path = savedFile.uri;
      const mimeType = this.getMimetype(name)

      // this.fileOpener.open(path, mimeType)
      //   .then(() => console.log('file open'))
      //   .catch(err => console.log('Error', err))
    }
  }

  async createPdf2(head) {
    const doc = new jsPDF();
    doc.text(head, 0, 2),
    doc.text(head, 0, 2).setFontSize(20),
    15,
    15, 
    {
      'width': 170  //set width
    }
  
    doc.save('test');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  async presentToastWithOk(msg) {
    let toast = await this.toastController.create({
      message: msg,
      // duration: 3000,
      position: 'bottom',
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          toast.dismiss()
        }
      }
      ]
    });

    toast.present();
  }

  async networkChecker() {
    return navigator.onLine;
    //   // this.commonService.presentAlert("Error", "Please, check your internet connection")
    //   if(this.isLoading == true){
    //     this.dismissLoader();
    //   }
    //   const alert = await this.alertController.create({
    //    header: ' Connection Error',
    //    backdropDismiss: false,
    //    message: "Please check your internet connection",
    //    buttons: [
    //    {
    //      text: 'Connected',
    //      handler: data => {
    //       if(!navigator.onLine){
    //         this.networkChecker()
    //       }
    //      }
    //    }]
    //  });
    //  await alert.present();
  }

  downloadPdfReports(head, pdfdatas, name) {
    const doc = new jsPDF('landscape', "px", 'a4');
    let imgdata = this.pdfLogo.imgdata.Apmkingstrack;
    doc.setFontSize(25);
    doc.text('Reports', 400, 42);
    doc.setFontSize(10);
    doc.addImage(imgdata, 'png', 30, 10, 150, 50);
    doc.setTextColor(100);

    (doc as any).autoTable({
      head: [head],
      body: pdfdatas,
      margin: { top: 70 },
      tableWidth: 'auto',
      theme: 'grid',
      columnStyles: {
        1: { cellWidth: 'auto' }
      },
      didDrawCell: data => {
        console.log("reports", "New Title")
      }
    })

    let base64: any = doc.output('datauristring')
    this.downloadpdfMobile(base64, name);
  }

  async downloadpdfMobile(base64: any, documentName: string) {
    const savedFile = await Filesystem.writeFile({
      path: documentName,
      data: base64,
      directory: FilesystemDirectory.Documents
    })
    console.log('Saved:' + savedFile.uri)
    const path = savedFile.uri;
    const mimeType = this.getMimetype(documentName)

    // this.fileOpener.open(path, mimeType)
      // .then(() => console.log('file open'))
      // .catch(err => console.log('Error', err))
  }

  getMimetype(name) {
    if (name.indexOf('pdf') >= 0) {
      return 'application/pdf'
    } else if (name.indexOf('png') >= 0) {
      return 'image/png'
    } else if (name.indexOf('mp4') >= 0) {
      return 'video/png'
    }
  }
}
