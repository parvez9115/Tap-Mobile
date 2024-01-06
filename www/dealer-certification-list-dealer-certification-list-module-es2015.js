(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-certification-list-dealer-certification-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-certification-list/dealer-certification-list.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-certification-list/dealer-certification-list.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  *ngIf=\"myPlatform == 'desktop'\">\n  <ion-toolbar>\n    <ion-row >\n      <ion-col size = 11>\n        <ion-title>Certification List</ion-title>\n      </ion-col>\n    </ion-row>  \n  </ion-toolbar>\n</ion-header>\n<ion-header *ngIf=\"myPlatform != 'desktop'\">\n  <ion-toolbar>\n    <ion-row> \n      <ion-col size=\"2\">\n        <ion-menu-button></ion-menu-button> \n      </ion-col>\n      <ion-col size=\"5\" style=\"margin: 15px 0px 0px 0px;font-size: 13px;font-weight: bold;\" style=\"align-self: center;\">Certification List</ion-col>\n      <ion-col size=\"5\">\n        <ion-item class=\"searchboxmobile\">\n          <ion-icon name=\"search-outline\" slot=\"start\" style=\"margin: -10px 10px 0px 0px;\"></ion-icon>\n          <ion-input style=\"margin: -10px 0px 0px 0px;font-size: 13px;\" (keyup)=\"updateFilter($event)\"  placeholder=\"Search\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-text-center\">\n      <ion-col size=6>\n        <ion-datetime [(ngModel)]=\"formDate\" class=\"dateFormat\" displayFormat=\"MMM DD, YYYY\"\n        pickerFormat=\"MMM DD, YYYY\" placeholder=\"Select Form Date\" [max]=\"maxDate\">\n      </ion-datetime>\n      </ion-col>\n      <ion-col size=6>\n        <ion-datetime [(ngModel)]=\"toDate\" class=\"dateFormat\" displayFormat=\"MMM DD, YYYY\"\n        pickerFormat=\"MMM DD, YYYY\" placeholder=\"Select To Date\" [max]=\"maxDate\">\n      </ion-datetime>\n      </ion-col>\n      <ion-col size=6>\n       <ion-button (click)='submit(0)'  expand=\"full\" shape=\"round\">Submit</ion-button>\n      </ion-col>\n      <ion-col size=6>\n        <ion-button (click)='getLoginUserList(0)' shape=\"round\" expand=\"full\">Refresh</ion-button>\n       </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"myPlatform == 'desktop'\">\n      <ion-row class=\"rowSpacing\">\n        <ion-item class=\"searchInput\">\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n          <ion-input (keyup)=\"updateFilter($event)\"  placeholder=\"Search\">\n          </ion-input>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row class=\"ion-text-center\">\n      <ion-col size=3 >\n        <ion-datetime [(ngModel)]=\"formDate\" class=\"dateFormat\" displayFormat=\"MMM DD, YYYY\"\n        pickerFormat=\"MMM DD, YYYY\" placeholder=\"Select Form Date\" [max]=\"maxDate\">\n      </ion-datetime>\n      </ion-col>\n      <ion-col size=3 >\n        <ion-datetime [(ngModel)]=\"toDate\" class=\"dateFormat\" displayFormat=\"MMM DD, YYYY\"\n        pickerFormat=\"MMM DD, YYYY\" placeholder=\"Select To Date\" [max]=\"maxDate\">\n      </ion-datetime>\n      </ion-col>\n      <ion-col size=3>\n       <ion-button (click)='submit()'  expand=\"full\">Submit</ion-button>\n      </ion-col>\n      <ion-col size=3 >\n        <ion-button (click)='getLoginUserList()'  expand=\"full\">Refresh</ion-button>\n       </ion-col>\n      </ion-row> \n      <!-- <ion-row class=\"ion-text-center\">\n        <ion-col size=2.5>\n          <input  list=\"search\" style=\"padding: 15px;\" class=\"Searchbox\" placeholder='Search By' />\n      <datalist id=\"search\">\n                    <option *ngFor=\"let search of searchCode\">{{search}}</option>\n                  </datalist>\n        </ion-col>\n        <ion-col size=2.5>\n          <input type=\"text\" class=\"Searchbox\" placeholder=\"Eg:MH13RE3939\">\n        </ion-col>\n        <ion-col size=2.5>\n          <ion-datetime [(ngModel)]=\"formDate\" class=\"dateFormat\" displayFormat=\"MMM DD, YYYY\"\n          pickerFormat=\"MMM DD, YYYY\" placeholder=\"Select Form Date\" [max]=\"maxDate\">\n        </ion-datetime>\n        </ion-col>\n        <ion-col size=2.5>\n          <ion-datetime [(ngModel)]=\"toDate\" class=\"dateFormat\" displayFormat=\"MMM DD, YYYY\"\n          pickerFormat=\"MMM DD, YYYY\" placeholder=\"Select To Date\" [max]=\"maxDate\">\n        </ion-datetime>\n        </ion-col>\n         <ion-col size=1>\n          <ion-button (click)='submit()' style=\"margin: 0px;\" expand=\"full\">Submit</ion-button>\n         </ion-col>\n         <ion-col size=1>\n          <ion-button (click)='getLoginUserList()' style=\"margin: 0px;\" expand=\"full\">Refresh</ion-button>\n         </ion-col>\n      </ion-row> -->\n      \n      <ion-row>\n        <ion-col size=12>\n        <app-ngx-table-rto #myTable  [datalist]=\"member\"  (selectedRowData)=\"selectedRowRecived($event)\"></app-ngx-table-rto>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"myPlatform != 'desktop'\">\n      <!-- <ion-row style=\"justify-content: center;margin: -5px 0px 10px 0px;\">\n        <ion-item class=\"searchboxmobile\">\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n          <ion-input (keyup)=\"updateFilter($event)\"  placeholder=\"Search\">\n          </ion-input>\n        </ion-item>\n</ion-row> -->\n\n\n\n  <ion-row>\n    <ion-col size=12 style=\"padding: 0px;\">\n      <ion-card id=\"card_style\" *ngFor=\"let items of member\">\n        <ion-row>\n          <ion-col size=\"12\">\n             <ion-row>\n               <ion-col size=\"6\">\n                 <ion-label class=\"certificate_label\">Certificate Id</ion-label>\n               </ion-col>\n               <ion-col size=\"6\">\n                <ion-label class=\"certificate_data\">{{items.certificateId}}</ion-label>\n              </ion-col>\n             </ion-row>\n             <ion-row>\n              <ion-col size=\"6\">\n                <ion-label class=\"certificate_label\">Certificate Number</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n               <ion-label class=\"certificate_data\">{{items.certificateId}}</ion-label>\n             </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label class=\"certificate_label\">Creation Date</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n               <ion-label class=\"certificate_data\">{{items.createdDate.substring(0, 10)}}</ion-label>\n             </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label class=\"certificate_label\">Registration Number</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n               <ion-label class=\"certificate_data\">{{items.registrationNumber}}</ion-label>\n             </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-label class=\"certificate_label\">Chassis No</ion-label>\n              </ion-col>\n              <ion-col size=\"6\">\n               <ion-label class=\"certificate_data\">{{items.engineNumber}}</ion-label>\n             </ion-col>\n            </ion-row>\n            <ion-row style=\"justify-content: center;\">\n              <ion-button (click)='clickToDownload(items)' style=\"height: 30px;\">Download</ion-button>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n       </ion-card>\n    </ion-col>\n  </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/dealer-certification-list/dealer-certification-list-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dealer-certification-list/dealer-certification-list-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: DealerCertificationListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerCertificationListPageRoutingModule", function() { return DealerCertificationListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dealer_certification_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dealer-certification-list.page */ "./src/app/dealer-certification-list/dealer-certification-list.page.ts");




const routes = [
    {
        path: '',
        component: _dealer_certification_list_page__WEBPACK_IMPORTED_MODULE_3__["DealerCertificationListPage"]
    }
];
let DealerCertificationListPageRoutingModule = class DealerCertificationListPageRoutingModule {
};
DealerCertificationListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DealerCertificationListPageRoutingModule);



/***/ }),

/***/ "./src/app/dealer-certification-list/dealer-certification-list.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dealer-certification-list/dealer-certification-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DealerCertificationListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerCertificationListPageModule", function() { return DealerCertificationListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _dealer_certification_list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealer-certification-list-routing.module */ "./src/app/dealer-certification-list/dealer-certification-list-routing.module.ts");
/* harmony import */ var _dealer_certification_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dealer-certification-list.page */ "./src/app/dealer-certification-list/dealer-certification-list.page.ts");







// import { DashboardPageRoutingModule } from './dashboard-routing.module';


let DealerCertificationListPageModule = class DealerCertificationListPageModule {
};
DealerCertificationListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dealer_certification_list_routing_module__WEBPACK_IMPORTED_MODULE_6__["DealerCertificationListPageRoutingModule"]
        ],
        declarations: [_dealer_certification_list_page__WEBPACK_IMPORTED_MODULE_7__["DealerCertificationListPage"]]
    })
], DealerCertificationListPageModule);



/***/ }),

/***/ "./src/app/dealer-certification-list/dealer-certification-list.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dealer-certification-list/dealer-certification-list.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".downloadPdf {\n  align-self: center;\n  text-align: center;\n  /* font-size: 15px; */\n  color: black;\n  background: #d8d8d8;\n  border-radius: 19px;\n}\n\n.rowSpacing {\n  padding: 10px;\n  justify-content: center;\n}\n\nion-datetime {\n  border: 1px solid;\n  font-family: inherit;\n  font-size: 13px;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: gray;\n  flex: 1 1 0%;\n  min-height: inherit;\n  direction: ltr;\n  overflow: inherit;\n}\n\n.searchInput {\n  padding: 0px;\n  margin: 0px;\n  width: 50%;\n}\n\n.Searchbox {\n  height: 38px;\n  width: 100%;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  border: 1px solid gray;\n  font-size: 13px;\n  color: gray;\n  outline-color: gray;\n}\n\n.searchboxmobile {\n  padding: 0px;\n  margin: 0px;\n  --background: #ede9e9;\n  border-radius: 10px;\n  height: 35px;\n}\n\n.certificate_label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #2E2C2C;\n  margin: 0px 0px 0px 10px;\n}\n\n.certificate_data {\n  font-size: 14px;\n  font-weight: 500;\n  color: #bdbdbd;\n  margin: 0px 0px 0px 25px;\n}\n\n#card_style {\n  background: #f6f6f6;\n  border-radius: 10px;\n  border-left: 3px solid #cc2930;\n}\n\n@media (max-width: 320px) and (max-width: 350px) and (max-width: 361px) {\n  .certificate_label {\n    font-size: 10px;\n    font-weight: 700;\n    color: #2E2C2C;\n    margin: 0px 0px 0px 10px;\n  }\n\n  .certificate_data {\n    font-size: 10px;\n    font-weight: bold;\n    color: #bdbdbd;\n    margin: 0px 0px 0px 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbGVyLWNlcnRpZmljYXRpb24tbGlzdC9kZWFsZXItY2VydGlmaWNhdGlvbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUNBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFBQTtFQUNJO0lBRUUsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHdCQUFBO0VBRUo7O0VBQUU7SUFFRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0Esd0JBQUE7RUFFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVhbGVyLWNlcnRpZmljYXRpb24tbGlzdC9kZWFsZXItY2VydGlmaWNhdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZFBkZntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGZvbnQtc2l6ZTogMTVweDsgKi9cbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xufVxuXG4ucm93U3BhY2luZ3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbn1cblxuaW9uLWRhdGV0aW1le1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5zZWFyY2hJbnB1dHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5TZWFyY2hib3hcbntcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBmb250LXNpemU6IDEzcHg7IFxuICAgIGNvbG9yOiBncmF5O1xuICAgIG91dGxpbmUtY29sb3I6IGdyYXk7XG59XG4uc2VhcmNoYm94bW9iaWxle1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNlZGU5ZTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jZXJ0aWZpY2F0ZV9sYWJlbFxue1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMkUyQzJDO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XG59XG4uY2VydGlmaWNhdGVfZGF0YVxue1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDI1cHg7XG59XG4jY2FyZF9zdHlsZXtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2NjMjkzMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM1MHB4KSBhbmQgKG1heC13aWR0aDogMzYxcHgpIHtcbiAgICAuY2VydGlmaWNhdGVfbGFiZWxcbiAgICB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICMyRTJDMkM7XG4gICAgICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XG4gICAgfVxuICAgIC5jZXJ0aWZpY2F0ZV9kYXRhXG4gICAge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjVweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/dealer-certification-list/dealer-certification-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dealer-certification-list/dealer-certification-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: DealerCertificationListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerCertificationListPage", function() { return DealerCertificationListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let DealerCertificationListPage = class DealerCertificationListPage {
    constructor(ajaxService, storage, commonService, formBuilder, platform) {
        this.ajaxService = ajaxService;
        this.storage = storage;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.page = "Dealer";
        this.member = [];
        this.temp = [];
        this.pdfData = [];
        this.offset = 0;
        this.limit = 10;
        this.searchCode = ["Certificate Number", "Vehicle Number", "Chassis Number", "QRCode"];
    }
    ionViewWillEnter() {
        this.getLoginUserList('');
    }
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
                else if (d.chassisNumber.toLowerCase().indexOf(val) !== -1)
                    return d.chassisNumber.toLowerCase().indexOf(val) !== -1;
                else if (d.rtoStatus.toLowerCase().indexOf(val) !== -1)
                    return d.rtoStatus.toLowerCase().indexOf(val) !== -1;
            });
            this.member = temp;
        }
        else {
            this.member = this.temp;
        }
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    ngOnChanges() {
        // this.temp = this.member
    }
    ngOnInit() {
        //  this.temp = this.member
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    }
    submit(data) {
        if (data) {
            this.offset = data;
        }
        this.search = true;
        if (this.formDate && this.toDate) {
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ServerUrl"].live + "/dashboard/searchcertificate?Key=&KeyID=&FromDate=" + this.formDate.slice(0, 10) + "&ToDate=" + this.toDate.slice(0, 10) + "&offset=" + this.offset + "&limit=" + this.limit;
            // let url = ServerUrl.live + "/dashboard/searchcertificate?Key=QRCode&KeyID=16032022.2170-0&FromDate=2022-03-23&ToDate=2022-03-23Key=QRCodeKeyID=16032022.2170-0FromDate=2022-03-23ToDate=2022-03-23"+this.formDate+"&ToDate="+this.toDate;
            this.ajaxService.ajaxGet(url).subscribe(res => {
                console.log(res);
                this.temp, this.member = res;
            });
        }
        else {
            this.commonService.presentToast('Oops !.. select Form and To dates');
        }
    }
    clickToDownload(data) {
        // window.open(ServerUrl.live + "/certificate/download?certificateid="+data.certificateId)
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ServerUrl"].s3ServerName + "/TapeManagement/Certificates/Certificate/" + data.certificateId + "_CERTIFICATE.pdf";
        window.open(url);
    }
    selectedRowRecived(data) {
        console.log(data);
        this.offset = this.offset + (data);
        // this.table.offset = 0;
        //  this.table.offset = 0;
        // this.offset = data
        // this.table.offset = data
        //  alert(data)
        if (this.search) {
            this.submit('');
        }
        else {
            this.getLoginUserList('');
        }
    }
    getLoginUserList(data) {
        if (data) {
            this.offset = data;
        }
        this.search = false;
        this.toDate = this.formDate = null;
        this.storage.get('loginRes').then((result) => {
            result = JSON.parse(result);
            this.page = result["role"]["roleName"];
            let body = result;
            // if (this.page != "Dealer" && this.page != "RTO") {
            //   let url = ServerUrl.live + "/dashboard/user/list";
            //   this.ajaxService.ajaxPostWithBody(url, body)
            //     .subscribe(res => {
            //       // console.log(res)
            //       this.member = res
            //       this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {
            //       })
            //       this.pdfTitle = ["User ID", "Role", "Name", "Email", "Address", "Contact"]
            //       for (let i = 0; i < this.member.length; i++) {
            //         this.pdfData.push([res[i].userId, res[i].role.roleName, res[i].name, res[i].email, res[i]['addressLine'] + ',' + res[i]['city'] + ',' + res[i]['state'] + ',' + res[i]['pincode'], res[i].mobile1])
            //       }
            //     })
            // } else {
            // ?offset="+this.offset+"&limit="+this.limit
            // let url = ServerUrl.live + "/dashboard/certificate/list"
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ServerUrl"].live + "/dashboard/certificate/list?offset=" + this.offset + "&limit=" + this.limit;
            this.commonService.presentLoader();
            this.ajaxService.ajaxPostWithBody(url, body)
                .subscribe(res => {
                // console.log(res)
                this.member = res;
                this.temp = this.member;
                //   if(data){
                //     this.member.filter(n => n)
                //     this.member =   this.member.concat(res)
                //   }else{
                // this.member = this.member.concat(res)
                //     this.temp = this.member
                //     this.member.length = 50
                //   }
                this.commonService.dismissLoader();
                this.storage.set("dashboardResult", JSON.stringify(res)).then(res => {
                });
                this.pdfTitle = ["Certificate id", "Registration no", "Name", "Vehicle Type", "Vehicle Modal", "Rto status"];
                for (let i = 0; i < this.member.length; i++) {
                    this.pdfData.push([res[i].certificateId, res[i].registrationNumber, res[i].ownerName, res[i].vehicleMake, res[i].vehicleModel, res[i].rtoStatus]);
                }
            });
            //  }
        });
    }
};
DealerCertificationListPage.ctorParameters = () => [
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServices"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
DealerCertificationListPage.propDecorators = {
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['myTable',] }]
};
DealerCertificationListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dealer-certification-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dealer-certification-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-certification-list/dealer-certification-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dealer-certification-list.page.scss */ "./src/app/dealer-certification-list/dealer-certification-list.page.scss")).default]
    })
], DealerCertificationListPage);



/***/ })

}]);
//# sourceMappingURL=dealer-certification-list-dealer-certification-list-module-es2015.js.map