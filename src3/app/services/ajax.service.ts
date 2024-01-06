import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map ,mergeMap, flatMap, concatMap, switchMap, exhaustMap} from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
// import { CommonServices } from './common.service';
const httpOptionsWithJson = {
  headers: new HttpHeaders({ 'Authorization': 'Basic YWRtaW46YWRtaW4=', 'Content-Type': 'application/json;charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})


export class AjaxService {
  private extractStringData(res: Response) {
    const body = res;
    return body || '';
  }

  handleError = async (error: HttpErrorResponse) => {

    // let toast = await this.toastController.create({
    //   message: error.error.errorMessage,
    //   // duration: 3000,
    //   position: 'bottom',
    //   buttons: [{
    //     text: 'Ok',
    //     role: 'cancel',
    //     handler: () => {
    //       toast.dismiss()
    //     }
    //   }
    //   ]
    // });

    // toast.present();
    console.log("Orginal Error" + JSON.stringify(error));
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return null;
  }
  constructor(
    private http: HttpClient,
    private toastController: ToastController
    // public commonServices: CommonServices
  ) { }

  ajaxPostWithBody(url: string, data: any): Observable<any> {
    return this.http.post(url, data, httpOptionsWithJson)
      .pipe(
        map(this.extractStringData),
        catchError(this.handleError)
      );
  }



  ajaxPutMethod2(url: string, data: FormData): Observable<any> {
    return this.http.put(url, data)
      .pipe(
        map(this.extractStringData),
        catchError(this.handleError)
      );
  }

  ajaxPostWithFile(url: string, data: FormData): Observable<any> {
    return this.http.post(url, data)
      .pipe(
        map(this.extractStringData),
        catchError(this.handleError)
      );
  }

  ajaxGet(url: string): Observable<any> {
 
      return this.http.get(url)
      .pipe(
    
        map(this.extractStringData),
        catchError(this.handleError)
      );

    
  }

  getJSON(): Observable<any> {
    return this.http.get("assets/jsonfile/vehicleDefaultTapeValues.json");
  }
}
