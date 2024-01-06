(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qr-generation-qr-generation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/qr-generation/qr-generation.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qr-generation/qr-generation.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- <qr-code  [value]=\"values\" [size]=\"width\" [level]=\"level\"></qr-code> -->\n  <form [formGroup]=\"qrform\">\n    <ion-row>    \n      <!-- <ion-col size=\"3\" size-sm=\"3\" size-lg=\"3\" style=\"margin-top: 10px;\"></ion-col> -->\n      <ion-col size=\"12\" size-sm=\"12\" offset-lg=\"3\" size-lg=\"6\" style=\"background-color: #E3EDFF; margin-top: 10px; padding: 22px; padding-bottom: 10px; border: 1px solid #ccc; border-radius: 10px;\">\n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"12\">  \n          <ion-label id=\"lot_wrapper\">Lot Number</ion-label>\n          <ion-input type=\"text\" class=\"input\" disabled style=\"width: 100%; height: 47px; border: 0px;\" formControlName=\"lotnumber\" placeholder=\"Enter Lot Number\" > </ion-input>\n          <span id=\"lot_mandary\">For generating new lot no, please keep this field blank</span>\n        </ion-col>      \n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"12\">  \n          <ion-label id=\"product_wrapper\">Product Name</ion-label>\n          <input class=\"input\" style=\"width: 100%; height: 47px; border: 0px;\" list=\"datas\" formControlName=\"productname\" placeholder='Select Product Name' />\n          <datalist id=\"datas\" style=\"width: 100%; height: 47px; border: 0px;\">\n            <option *ngFor=\"let data of productName\">{{data}}</option>\n          </datalist>\n        </ion-col>  \n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"12\">  \n          <ion-label class=\"label_wrapper\">Brand name</ion-label>\n          <!-- <ion-input type=\"text\" class=\"input\" style=\"width: 100%; height: 47px; border: 0px;\" formControlName=\"brandname\"   placeholder=\"Brand Name\"></ion-input> -->\n          <select class=\"select\" style=\"width: 100%; border: 0px;\"   formControlName=\"brandname\" >\n            <option value=\"\" disabled selected hidden class=\"\" >Select Brand name</option>\n            <option *ngFor=\"let renewal of brand\" [value]=\"renewal\">{{renewal}}</option>\n          </select>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"12\">  \n          <ion-label class=\"number_wrapper\">Vender Mobile Number</ion-label>\n          <input class=\"input\" style=\"width: 100%; height: 47px; border: 0px;\" (change)=\"getuserId()\" list=\"venderPhone\" formControlName=\"user_id\" placeholder='M NO' />\n          <datalist id=\"venderPhone\" style=\"width: 100%; border: 0px;\">\n            <option *ngFor=\"let rto of userDatas\">{{rto.mobile1}}</option>\n          </datalist>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"12\">  \n          <ion-label class=\"label_wrapper\">RTO Department Codes</ion-label>\n          <input class=\"input\" style=\"width: 100%; height: 47px; border: 0px;\" list=\"rto\" formControlName=\"rto_zone\" placeholder='Select rto zone' />\n          <datalist id=\"rto\" style=\"width: 100%; border: 0px;\">\n            <option *ngFor=\"let rto of rto\">{{rto}}</option>\n          </datalist>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"12\">  \n          <ion-label class=\"label_wrapper\">Is Renewal</ion-label>\n          <!-- <ion-input type=\"text\" class=\"input\" style=\"width: 100%; height: 47px; border: 0px;\" formControlName=\"renewal\" placeholder=\"Enter is Renewal\"></ion-input> -->\n          <select class=\"select\" style=\"width: 100%; border: 0px;\"   formControlName=\"renewal\" >\n            <option value=\"\" disabled selected hidden class=\"\" >Select is Renewal</option>\n            <option *ngFor=\"let renewal of renewal\" [value]=\"renewal\">{{renewal}}</option>\n          </select>\n        </ion-col>\n        <ion-col size=\"12\" size-sm=\"12\" size-lg=\"12\">  \n          <ion-label class=\"number_wrapper\">Quantity</ion-label>\n          <ion-input type=\"number\" class=\"input\" style=\"width: 100%; height: 47px; border: 0px;\" formControlName=\"quantity\" placeholder=\"Enter Quantity\"></ion-input>\n        </ion-col>\n        <ion-row size=\"12\" size-sm=\"12\" size-lg=\"12\" style=\"justify-content: center;\" *ngIf=\"myPlatform == 'desktop'\">  \n          <ion-button (click)='submit()'>Generate QR Code</ion-button>\n        </ion-row> \n        <ion-row *ngIf=\"myPlatform != 'desktop'\" style=\"text-align: center !important;\">\n          <ion-col>\n            <ion-button (click)=\"submit()\">Generate-QR</ion-button>\n              <ion-button (click)=\"closeModel()\">Cancel</ion-button>\n            </ion-col>\n        </ion-row>       \n      </ion-col>\n      <ion-col size=\"3\" size-sm=\"3\" size-lg=\"3\" style=\"margin-top: 10px;\"></ion-col>\n    </ion-row>\n  </form>\n  <!-- <ion-row id='pdf' style=\"opacity: 0;\"> -->\n<!--     \n  <div  style=\" box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);text-align: center;margin-top: -25px;\">\n    <div *ngFor=\"let data of values\" style=\"width: 100%; text-align: center; margin-top: 0px; margin-left: 40px; transform: rotate(270deg);\">\n    <ion-card style=\"border-radius: 35px;padding: 16px;opacity: 0px;\">\n      <div class='ion-text-center' style='    font-size: 17px;\n      padding: 0px; bottom: 6px;\n  position: relative;\n      font-weight: bold;'><span>Smart Rags</span></div>\n   <div class='ion-text-center' style='    font-size: 16px;\n    padding: 0px;\n    font-weight: bold;position: relative;bottom: 4px;\n  z-index: 1;'><span style=\"border-top: 3px dashed;\" >{{data.subheader}}</span></div> \n\n   <ion-row style=\"    bottom: 0.5rem;\n   position: relative;\"><ion-col class='ion-text-center no-padding' size=12>  <qr-code  [value]=qrcodeUrl+data.qrcode size='130' [level]=\"level\"></qr-code></ion-col>\n    <div class='ion-text-center' style='    font-size: 16px;\n    padding: 0px;bottom: 0.5rem;\n  position: relative;\n    font-weight: bold;'><span>{{data.lotnumber}}</span></div>  </ion-row> \n</ion-card> -->\n\n    <!-- <img src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Certificates/QRCode/SmartRags.png\" style='width: 115px; height: 20px;' alt='' /><br />\n    <img src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Certificates/QRCode/UnderLine.png\" style='width: 137px; height: 8px;' alt='' /><br />\n    <img src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Certificates/QRCode/RTOZone.png\" style='width: 117px; height: 18px; z-index: 999; position: relative;' alt='' /><br />\n    <qr-code  [value]=qrcodeUrl+data.qrcode size='130' [level]=\"level\"></qr-code><br />\n      <img src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Certificates/QRCode/LotNumber.png\" style='width: 43px; height: 18px; margin-left: -11px; margin-top: -9px;' alt='' /> -->\n    \n\n  <!-- </div>\n</div> -->\n<!-- </ion-row> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/qr-generation/qr-generation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/qr-generation/qr-generation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: QrGenerationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrGenerationPageRoutingModule", function() { return QrGenerationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _qr_generation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qr-generation.page */ "./src/app/qr-generation/qr-generation.page.ts");




const routes = [
    {
        path: '',
        component: _qr_generation_page__WEBPACK_IMPORTED_MODULE_3__["QrGenerationPage"]
    }
];
let QrGenerationPageRoutingModule = class QrGenerationPageRoutingModule {
};
QrGenerationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QrGenerationPageRoutingModule);



/***/ }),

/***/ "./src/app/qr-generation/qr-generation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/qr-generation/qr-generation.module.ts ***!
  \*******************************************************/
/*! exports provided: QrGenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrGenerationPageModule", function() { return QrGenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _qr_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qr-generation-routing.module */ "./src/app/qr-generation/qr-generation-routing.module.ts");
/* harmony import */ var _qr_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qr-generation.page */ "./src/app/qr-generation/qr-generation.page.ts");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/__ivy_ngcc__/lib/angular2-qrcode.js");








let QrGenerationPageModule = class QrGenerationPageModule {
};
QrGenerationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            angular2_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"],
            _qr_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrGenerationPageRoutingModule"]
        ],
        declarations: [_qr_generation_page__WEBPACK_IMPORTED_MODULE_6__["QrGenerationPage"]]
    })
], QrGenerationPageModule);



/***/ }),

/***/ "./src/app/qr-generation/qr-generation.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/qr-generation/qr-generation.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  border: 6px solid #000000;\n  border-radius: 8px;\n  height: 38px !important;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #ffffff;\n}\n\n.input {\n  border: 6px solid #000000;\n  border-radius: 8px;\n  height: 38px !important;\n  line-height: 18px;\n  padding: 15px;\n  background: #ffffff;\n}\n\n.select {\n  border-radius: 8px;\n  height: 38px !important;\n  line-height: 18px;\n  padding: 8px;\n  background: #ffffff;\n}\n\n#lot_wrapper {\n  font-weight: bolder;\n  width: 100%;\n  margin-left: 5px;\n  margin-top: -25px;\n  margin-bottom: 2px;\n  display: block;\n}\n\n#product_wrapper {\n  font-weight: bolder;\n  width: 100%;\n  margin-left: 5px;\n  margin-top: -5px;\n  margin-bottom: 2px;\n  display: block;\n}\n\n.label_wrapper {\n  font-weight: bolder;\n  width: 100%;\n  margin-left: 5px;\n  margin-top: 14px;\n  margin-bottom: 2px;\n  display: block;\n}\n\n.number_wrapper {\n  font-weight: bolder;\n  width: 100%;\n  margin-left: 5px;\n  margin-top: 10px;\n  margin-bottom: 2px;\n  display: block;\n}\n\n#lot_mandary {\n  color: darkblue;\n  font-weight: bolder;\n  margin-left: 6px;\n  margin-top: 5px;\n  display: flex;\n}\n\n@media (max-width: 320px) and (max-width: 350px) and (max-width: 361px) {\n  #lot_mandary {\n    color: darkblue;\n    font-weight: bolder;\n    margin-left: 6px;\n    margin-top: 5px;\n    display: flex;\n    font-size: 10px;\n  }\n\n  #lot_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: -25px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  #product_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: -5px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  .label_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: 14px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  .number_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: 10px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 380px) and (max-width: 420px) {\n  #lot_mandary {\n    color: darkblue;\n    font-weight: bolder;\n    margin-left: 6px;\n    margin-top: 5px;\n    display: flex;\n    font-size: 12px;\n  }\n\n  #lot_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: -25px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  #product_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: -5px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  .label_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: 14px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  .number_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: 10px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n}\n\n@media (max-width: 425px) and (max-width: 550px) {\n  #lot_mandary {\n    color: darkblue;\n    font-weight: bolder;\n    margin-left: 6px;\n    margin-top: 5px;\n    display: flex;\n    font-size: 12px;\n  }\n\n  #lot_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: -25px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  #product_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: -5px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  .label_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: 14px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n\n  .number_wrapper {\n    font-weight: bolder;\n    width: 100%;\n    margin-left: 5px;\n    margin-top: 10px;\n    margin-bottom: 2px;\n    display: block;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXItZ2VuZXJhdGlvbi9xci1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUpBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQU9OOztFQUxFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFRTjs7RUFORTtJQUNJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBU047O0VBUEU7SUFDSSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQVVOOztFQVJFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFXTjtBQUNGOztBQVJBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQVVOOztFQVJFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFXTjs7RUFURTtJQUNJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBWU47O0VBVkU7SUFDSSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQWFOOztFQVhFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFjTjtBQUNGOztBQVpBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQWNOOztFQVpFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFlTjs7RUFiRTtJQUNJLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBZ0JOOztFQWRFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUFpQk47O0VBZkU7SUFDSSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQWtCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcXItZ2VuZXJhdGlvbi9xci1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgIzAwMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgaGVpZ2h0OiAzOHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uaW5wdXQge1xuICAgIGJvcmRlcjogNnB4IHNvbGlkICMwMDAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLnNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyBcbn1cblxuI2xvdF93cmFwcGVye1xuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiNwcm9kdWN0X3dyYXBwZXJ7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubGFiZWxfd3JhcHBlcntcbiAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5udW1iZXJfd3JhcHBlcntcbiAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiNsb3RfbWFuZGFyeXtcbiAgICBjb2xvcjogZGFya2JsdWU7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkgYW5kIChtYXgtd2lkdGg6IDM2MXB4KSB7XG4gICAgI2xvdF9tYW5kYXJ5e1xuICAgICAgICBjb2xvcjogZGFya2JsdWU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgICNsb3Rfd3JhcHBlcntcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgI3Byb2R1Y3Rfd3JhcHBlcntcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAubGFiZWxfd3JhcHBlcntcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAubnVtYmVyX3dyYXBwZXJ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KXtcbiAgICAjbG90X21hbmRhcnl7XG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgI2xvdF93cmFwcGVye1xuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAjcHJvZHVjdF93cmFwcGVye1xuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5sYWJlbF93cmFwcGVye1xuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5udW1iZXJfd3JhcHBlcntcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkgYW5kIChtYXgtd2lkdGg6IDU1MHB4KXtcbiAgICAjbG90X21hbmRhcnl7XG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgI2xvdF93cmFwcGVye1xuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAjcHJvZHVjdF93cmFwcGVye1xuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5sYWJlbF93cmFwcGVye1xuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5udW1iZXJfd3JhcHBlcntcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/qr-generation/qr-generation.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/qr-generation/qr-generation.page.ts ***!
  \*****************************************************/
/*! exports provided: QrGenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrGenerationPage", function() { return QrGenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");









//  import { ExportExcelService } from '../services/export-excel.service';
let QrGenerationPage = class QrGenerationPage {
    // hide:boolean = false
    //  ,private ete: ExportExcelService
    constructor(http, formBuilder, router, ajaxService, commonService, platform) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.platform = platform;
        this.userDatas = [];
        this.renewal = ['y', 'n'];
        this.values = [];
        this.commonService.loginMenuInfo.subscribe(res => {
            if (res) {
                console.log(res);
                this.loginRes = res;
            }
        });
    }
    // { "lotnumber":"","productname":"utest","brandname":"test",
    // "user_id":"DLR00000002","rto_zone":"TN01","renewal":"Y",
    // "quantity":5,"qrcode":"","status":"","created_by":"SPA-00000001",
    // "created_date":"2022-02-28","lastupdated_by":"SPA-00000001",
    // "lastupdated_date":"2022-02-28" }
    getuserId() {
        for (var i = 0; i < this.userDatas.length; i++) {
            if (this.userDatas[i].mobile1 == this.qrform.value.user_id) {
                this.selected_user = this.userDatas[i].userId;
            }
        }
    }
    closeModel() {
        this.router.navigateByUrl('/dashbboard');
    }
    qrcodes(res) {
        res.forEach(element => {
            let productName;
            if (element.productname.includes('Avery')) {
                productName = 'AD';
            }
            else if (element.productname.includes('DM')) {
                productName = 'DM';
            }
            else {
                productName = 'OFL';
            }
            element['subheader'] = (element.rtoZone.replace(/-/g, "") + '-' + element.productname.slice(-2) + '-' + productName);
            this.values.push(element);
        });
        this.convertToImage(this.values[0], res.lotnumber);
    }
    submit() {
        this.commonService.presentLoader();
        this.qrform.patchValue({
            user_id: this.selected_user
        });
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + '/qrcodegeneration/save';
        let datas = this.qrform.value;
        console.log(this.qrform);
        datas["created_by"] = this.loginRes["userId"];
        datas["qrcode"] = '';
        datas["status"] = '';
        datas["created_date"] = new Date();
        datas["lastupdated_by"] = new Date();
        datas["lastupdated_date"] = new Date();
        if (this.qrform.valid) {
            this.ajaxService.ajaxPostWithBody(url, datas).subscribe(res => {
                if (Object.keys(res[0])[0] != 'errormessage' && res != []) {
                    console.log(res);
                    this.qrcodeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + '/qrcodegeneration/scan?QRCode=';
                    // this.qrcodes(res)
                    this.commonService.dismissLoader();
                    this.qrform.reset();
                    this.commonService.presentToast('Generated Successfully');
                    //  let data =  window.open('http://localhost/QRCode/','popup','height=100,width=50')
                    //   if (window.focus) {data.focus()
                    //     return false;}
                    this.popitup(res[0].qrid);
                    //  setTimeout(() => {
                    //   this.clickToDownload(res)
                    //   this.values = []
                    //  }, 1000);
                }
                else {
                    this.commonService.presentToast('something bad happened !!');
                    this.commonService.dismissLoader();
                }
            });
        }
        else {
            this.commonService.presentToast('Oops!.. Please Enter all the fields');
            this.commonService.dismissLoader();
        }
    }
    popitup(id) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + '/dashboard/printqrcode?Qrid=' + id;
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            var myWindow = window.open("http://localhost/QRCode/?Qrid=" + id, "", "height=700,width=800,left=300,top=0,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes");
        });
        //   if (window.focus) {newwindow.focus()}
        //   return false;
    }
    getBrand() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/brand";
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.brand = res.value;
        });
    }
    clickToDownload(res) {
        // this.generatedcertificate();
        var printWindow = window.open('', '', 'height=1000,width=900');
        printWindow.document.write('<html>');
        // printWindow.document.write('</body>')
        // printWindow.document.write('<body style="background-image: url(https://kingstrackimages.s3.amazonaws.com/Company/apmlogo_watermarker.svg);background-repeat: no-repeat;background-size: 100% 100%;">');
        var divContents = document.getElementById("pdf").innerHTML;
        printWindow.document.write(divContents);
        printWindow.document.write('</body></html>');
        printWindow.print();
        printWindow.document.close();
        // this.router.navigateByUrl('dashboard')
    }
    getrenewal(ev) {
        if (ev.target.value == "Yes") {
            alert("y");
        }
        else {
            alert("n");
        }
    }
    exportToExcel(res) {
        var pdfdatas = [];
        for (var i = 0; i < res.length; i++) {
            pdfdatas.push([res[i]["productname"], res[i]["brandname"], res[i]["mobileno"], res[i]["rtoZone"], res[i]["renewal"], res[i]["qrcode"]]);
        }
        let reportData = {
            title: 'qr-codes',
            data: pdfdatas,
            headers: ['Product_Name', 'Brand_Name', 'Vendor_Mobile_Number', 'RTO_Department_Codes', 'Is_Renewal', 'QR_Code']
        };
        // this.ete.exportExcel(reportData);
        console.log("Export Excel");
    }
    getRtoList() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/rtoList";
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.rto = JSON.parse(res.value);
        });
    }
    getUserId() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + '/qrcodegeneration/getuserid?MobileNo=' + this.qrform.value;
        //  this.ajaxService.ajaxPostWithBody(url, datas).subscribe(res=>{
        //   console.log(res)
        // })
    }
    createPdf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commonService.createPdf('adsad', [['asfdas']], 'asa', "desktop", "Operator_List");
        });
    }
    convertToImage(value, lotnumber) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + '/dashboard/printqrcode?RTOZone=' + this.values[0].subheader + '&LotNumber=' + this.values[0].lotnumber;
        this.ajaxService.ajaxGet(url).subscribe(res => {
            console.log(res);
        });
    }
    getuserlist() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/user/list";
        let datas = {
            "userId": this.loginRes["userId"]
        };
        this.ajaxService.ajaxPostWithBody(url, datas).subscribe(res => {
            //   for(var i=0;i<=res.length;i++){
            //    // let data = {userId:res[i].userId,mobile1:res[i].mobile1}
            //     this.userDatas.push(res[i].mobile1)
            //   }
            this.userDatas = res;
        });
        console.log(this.userDatas);
    }
    // brandname: "red tape"
    // createdDate: "03032022"
    // createdby: "SPA-00000001"
    // lastupdatedBy: "2022-03-03T06:06:28.306Z"
    // lastupdatedDate: "03032022"
    // lotnumber: 1157
    // message: ""
    // mobileno: "1231311231"
    // productname: "s_red20mm"
    // qrcode: "03032022.1157-0"
    // quantity: 1
    // renewal: "s"
    // rtoZone: "TN01"
    // status: "Not Verified"
    getProducts() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/product";
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.productName = res.value;
        });
    }
    createForm() {
        this.qrform = this.formBuilder.group({
            lotnumber: [''],
            productname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            brandname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rto_zone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            user_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            renewal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        //     const data = new Promise((resolve,reject)=>{
        //       setTimeout(()=>{
        //         resolve('testing')
        //       },3000)
        //     })
        //     data.then((data)=>{
        //       console.log(data)
        //     }).catch(data=>{
        // console.log(data)
        //     }).finally(()=>{
        //       console.log('finally testing')
        // }
        // )
    }
    ngOnInit() {
        // forkJoin([ this.ajaxService.ajaxGet( ServerUrl.live + "/dashboard/rtoList"), of([ServerUrl.live + "/dashboard/rtoList",'data'])])
        //   .subscribe(res => {
        //     console.log ('User and Post', res);
        //   });
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.getuserlist();
        this.createForm();
        this.getProducts();
        this.getRtoList();
        this.getBrand();
    }
};
QrGenerationPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonServices"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
QrGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-qr-generation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./qr-generation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/qr-generation/qr-generation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./qr-generation.page.scss */ "./src/app/qr-generation/qr-generation.page.scss")).default]
    })
], QrGenerationPage);



/***/ })

}]);
//# sourceMappingURL=qr-generation-qr-generation-module-es2015.js.map