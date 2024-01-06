(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot/forgot.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot/forgot.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"myPlatform == 'desktop'\">\n    <ion-row>\n    <ion-col size=8 id='title' style=\"align-self: center;\"><h3>Forgot Password</h3></ion-col>\n   <ion-col size=4 style=\"   text-align: end;\"> <ion-icon name=\"close-circle-outline\" (click)='closemodal()'></ion-icon></ion-col> \n  </ion-row>\n</ion-header>\n<ion-header *ngIf=\"myPlatform != 'desktop'\">\n  <ion-toolbar>\n    <ion-row> \n      <ion-menu-button></ion-menu-button> <ion-col size=8 id='title' style=\"align-self: center;\">Forgot Password</ion-col>\n    <ion-col style=\"   text-align: end;\"> <ion-icon name=\"close-circle-outline\" (click)='closemodal()'></ion-icon></ion-col> \n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"cpassword\">\n  <ion-row style=\"margin-top: 5rem;\">\n\n      <ion-col style=\"text-align: center;\" size=6 offset=3> <ion-icon class=\"lockimage\" src='../../../assets/f password.svg'></ion-icon></ion-col>\n     \n  <ion-col  size=12> <ion-input type=text placeholder=\"Enter Mail Id\" formControlName=\"mailid\"></ion-input></ion-col> \n  <!-- <ion-col  size=12> <ion-input  type=text placeholder=\"Phone Number\" formControlName=\"newPassword\"></ion-input></ion-col>  -->\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <!-- [disabled]=\"!cpassword.valid\" -->\n      <ion-button (click)='submit()'  color='danger' [disabled]=\"!cpassword.valid\">\nSubmit\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" [style.background-image]=\"'url('+ background +')'\" [style.background-size]= \"'cover'\"  class='container' *ngIf=\"myPlatform == 'desktop'\">\n      <div class=\"moveAndTrackSpacingNew ion-align-items-center ion-justify-content-center\" size-md =\"6 \" size-lg =\"6\" size-xs =\"12\" >\n        <div style=\"width: 100%;text-align: center; padding: 8px; height: 105px;\">\n          <img src=\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/Company/Techno_Jacks.png\" width=\"200px\" height=\"88px\">\n          </div>\n        <form   style=\"padding-top: 2%;\" [formGroup]=\"login\" >\n            <ion-item *ngIf=\"pageSelection == 'userLogin'\" class=\" labelSpacing\">\n                <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n                <ion-input formControlName=\"compName\" placeholder=\"Username\" autocomplete=\"off\"></ion-input>\n            </ion-item>\n            <ion-item *ngIf=\"pageSelection == 'rtoLogin'\" class=\"labelSpacing\">\n              <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n              <!-- <ion-select interface=\"popover\" style=\"width: 100%;\" placeholder=\"Select rto area\" formControlName=\"rtoArea\">\n                <ion-select-option  *ngFor=\"let rto of rtos\" >{{rto}}</ion-select-option>\n                </ion-select> -->\n                <input style= \"width: 100%; \n                height: 47px;\n                border: 0px;\"  autocomplete=\"off\" list=\"num\"  formControlName=\"rtoArea\"  placeholder = 'Select rto area' style=\"padding: 0px;background-color: white; \" />\n             \n                <datalist id=\"num\">\n                <option *ngFor=\"let rto of rtos\" >{{rto}}</option>\n                </datalist>\n                <!-- <ionic-selectable class=\"maxWidth\" formControlName=\"rtoArea\" [items]=\"rtos\"\n                itemTextField=\"rtos\" [canSearch]=\"true\" (onChange)=\"portChange($event)\" [hasVirtualScroll]=\"true\"\n                placeholder=\"Select rto area\">\n              </ionic-selectable> -->\n              </ion-item>\n            <ion-item  class=\" labelSpacing\">\n                <ion-icon slot=\"start\" name=\"key\"></ion-icon>\n                <ion-input formControlName=\"password\" placeholder=\"Password\" (keyup.enter)=\"submitLogin()\" [type]=\"password_type\">\n                </ion-input>\n                <ion-icon slot=\"end\" [name]=\"eye_icon\" (click)=\"showHidePass()\"></ion-icon>\n            </ion-item>\n        </form>\n        <ion-row>\n            <ion-col size=\"6\" offset=\"3\">\n                <ion-button [class]=\"appName\" (click)=\"submitLogin()\" \n                shape=\"round\" expand=\"block\"\n                [disabled]=\"!login.valid\">\n                <ion-icon name=\"log-in\" class=\"iconSize\"></ion-icon> Login\n            </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row  style=\"justify-content: center;    color: red;\">\n        <ion-col class='ion-text-right' (click)='forgot()'>Forgot Password?</ion-col>\n       </ion-row>\n      <!-- <ion-row>\n        <ion-col size=\"6\" offset=\"3\">\n            <ion-button  (click)=\"changeMode()\"   shape=\"round\" expand=\"block\">{{buttonName}}</ion-button>\n    </ion-col>\n  </ion-row> -->\n      </div>\n    </ion-col>\n  \n    <!-- <ion-col size=\"12\" *ngIf=\"myPlatform != 'desktop'\" style=\"height: 532px; background-color: #86D3EF; background-image: url('https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Admin/Tape_background_Mobile.jpg');background-repeat: no-repeat; background-size: 100% 100%;\"> -->\n      <ion-col size=\"12\" *ngIf=\"myPlatform != 'desktop'\" style=\"background-repeat: no-repeat;\n      background-size: 100% 100%;\n      position: absolute;\n      height: 39.5rem; background-image: url('https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/TapeManagement/Admin/Tape_background_Mobile.jpg');background-repeat: no-repeat;\"> \n      \n      <ion-grid>\n        <ion-row>\n            <ion-col size=\"8\" offset=\"2\" class=\"ion-align-items-center ion-justify-content-center\">\n                <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                <!-- <ion-img class=\"parentAppLogo\" src=ServerUrl.s3ServerName+\"/Company/smart-vaahan.png\"></ion-img> -->\n                </ion-row>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      \n      <form [formGroup]=\"login\" class=\"form\">\n        <ion-card>\n          <ion-item>\n            <ion-icon class=\"placeholder-label parentAppBackcolor\" slot=\"start\" name=\"person\"></ion-icon>\n            <ion-label style=\"color: #b1b1b1;font-size: 14px;\" position=\"stacked\">UserName</ion-label>\n            <ion-input type=\"text\" formControlName='compName' ></ion-input>\n          </ion-item>\n        </ion-card>\n        <ion-card>\n          <ion-item>\n            <ion-icon class=\"placeholder-label parentAppBackcolor\" slot=\"start\" name=\"key\"></ion-icon>\n            <ion-label style=\"color: #b1b1b1;font-size: 14px;\" position=\"stacked\">Password</ion-label>\n            <ion-input type=\"text\" formControlName='password' (keyup.enter)=\"submitLogin()\" [type]=\"password_type\"></ion-input>\n            <ion-icon slot=\"end\" [name]=\"eye_icon\" (click)=\"showHidePass()\" style=\"margin: 16px 0px 0px 0px;\"></ion-icon>\n          </ion-item>\n        </ion-card>\n        <ion-row style=\"justify-content: center;\">\n          <ion-button (click)=\"submitLogin()\" \n          shape=\"round\" expand=\"block\"\n          [disabled]=\"!login.valid\" color=\"danger\">Submit</ion-button>\n        </ion-row>\n        <ion-row  style=\"justify-content: center;    color: red;\">\n         <ion-col class='ion-text-right' (click)='forgot()'>Forgot Password?</ion-col>\n        </ion-row>\n      </form>\n     </ion-col>\n  </ion-row>\n  </ion-content>  ");

/***/ }),

/***/ "./src/app/login/forgot/forgot.component.scss":
/*!****************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  border: 1px solid lightgrey;\n}\n\nion-icon {\n  font-size: 29px;\n  color: red;\n}\n\nimg {\n  height: 71px;\n}\n\n.lockimage {\n  font-size: 71px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbmlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbiAgICBjb2xvcjogcmVkO1xuIFxufVxuaW1ne1xuICAgIGhlaWdodDogNzFweDtcbn1cblxuLmxvY2tpbWFnZXtcbiAgICBmb250LXNpemU6IDcxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/forgot/forgot.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/forgot/forgot.component.ts ***!
  \**************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








let ForgotComponent = class ForgotComponent {
    constructor(storage, modalController, platform, commonService, formBuilder, ajaxService) {
        this.storage = storage;
        this.modalController = modalController;
        this.platform = platform;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.ajaxService = ajaxService;
    }
    createForm() {
        this.cpassword = this.formBuilder.group({
            mailid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submit() {
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + 'user/forgetpassword?Email=' + this.cpassword.value.mailid;
        this.ajaxService.ajaxGet(url).subscribe(res => {
            console.log(res);
            if (res.message == "Invalid Email ID") {
                this.commonService.presentToast(res.message);
                this.commonService.dismissLoader();
                this.modalController.dismiss();
            }
            else {
                this.commonService.presentToast('Updated Sucessfully');
                this.commonService.dismissLoader();
                this.modalController.dismiss();
            }
        });
    }
    closemodal() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        this.createForm();
        this.storage.get("login").then(body => {
            console.log(body);
            this.loginDatas = body;
        });
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServices"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }
];
ForgotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot/forgot.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot.component.scss */ "./src/app/login/forgot/forgot.component.scss")).default]
    })
], ForgotComponent);



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/login/forgot/forgot.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");







// import { IonicSelectableModule } from 'ionic-selectable';



let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // IonicSelectableModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input .native-input {\n  border-radius: 25px;\n}\n\n#num {\n  background-color: white;\n  color: black;\n}\n\n.labelSpacing {\n  margin-bottom: 3%;\n  margin-left: 6%;\n  width: 85%;\n}\n\ninput {\n  width: 100%;\n  height: 47px;\n  border: 0px;\n  outline-color: white;\n}\n\n.imagedata {\n  background-size: 100% 100%;\n}\n\n.moveAndTrackSpacing {\n  opacity: 0.9;\n  width: 300px;\n  margin: auto;\n  position: relative;\n  top: 50px;\n  border-radius: 5px;\n}\n\n@media only screen and (min-width: 1024px) {\n  .moveAndTrackSpacing {\n    margin: auto;\n    position: relative;\n    top: 17vh;\n  }\n\n  .moveAndTrackSpacingNew {\n    position: absolute;\n    right: 8px;\n    top: 27vh;\n    background: #f1f1f170;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .moveAndTrackSpacing {\n    position: relative;\n    top: 50px;\n  }\n}\n\n@media only screen and (min-width: 551px) {\n  .moveAndTrackSpacing {\n    width: 360px;\n  }\n\n  .moveAndTrackSpacingNew {\n    width: 360px;\n  }\n}\n\n.container {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n  background-size: 100% 100% !important;\n}\n\n.text-box-spacing {\n  height: 60px;\n}\n\n.labelSpacing-web {\n  margin-bottom: 3%;\n}\n\n.left-side-form-grp {\n  width: 20%;\n  position: fixed;\n  top: 10vh;\n  right: 2vh;\n}\n\n.container-wrapper {\n  margin: 0px;\n  height: 100vh;\n  display: block;\n  background: url(\"https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/loginimages/track_apmkingstrack_com_background.jpg\") center center/cover no-repeat fixed;\n}\n\n.labelSpacing {\n  margin-bottom: 3%;\n  margin-left: 6%;\n  width: 85%;\n}\n\n#partitioned {\n  padding-left: 15px;\n  letter-spacing: 42px;\n  border: 0;\n  background-image: linear-gradient(to left, #e90000 70%, rgba(255, 255, 255, 0) 0%);\n  background-position: bottom;\n  background-size: 50px 1px;\n  background-repeat: repeat-x;\n  background-position-x: 35px;\n  width: 220px;\n  min-width: 220px;\n}\n\n.background-gradient {\n  background-image: linear-gradient(to top right, #f51e2e, #fd6035);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n}\n\n#divInner {\n  left: 0;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n#divOuter {\n  width: 190px;\n  overflow: hidden;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: none;\n}\n\n.placeholder-label {\n  font-size: 25px;\n  align-self: center;\n}\n\n.resend-otp {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 0px 11px 7px 3px;\n  justify-content: flex-end;\n}\n\n.parentAppLogo {\n  width: 90%;\n  margin-top: 25%;\n}\n\n.form {\n  margin-bottom: 0px;\n  margin-top: 209px;\n}\n\nion-content {\n  --background: #86d3f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksbUJBQUE7QUFBTjs7QUFHQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUlBO0VBQ0U7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VBREo7O0VBR0E7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EscUJBQUE7RUFBSjtBQUNGOztBQUdBO0VBQ0U7SUFDSSxrQkFBQTtJQUNBLFNBQUE7RUFESjtBQUNGOztBQUlBO0VBQ0U7SUFDSyxZQUFBO0VBRkw7O0VBSUE7SUFDSSxZQUFBO0VBREo7QUFDRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0FBSEY7O0FBTUE7RUFDQSxZQUFBO0FBSEE7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0tBQUE7QUFGRjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0ZBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsaUVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFJQTtFQUVFLFVBQUE7RUFDQSxlQUFBO0FBRkY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBR0E7RUFDRSxnQ0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgLm5hdGl2ZS1pbnB1dCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4XG4gIH1cbn1cbiNudW17XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubGFiZWxTcGFjaW5ne1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IDYlO1xuICB3aWR0aDogODUlO1xufVxuXG5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDdweDtcbiAgYm9yZGVyOiAwcHg7XG4gIG91dGxpbmUtY29sb3I6IHdoaXRlO1xufVxuXG4uaW1hZ2VkYXRhe1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblxufVxuXG4ubW92ZUFuZFRyYWNrU3BhY2luZ3tcbiAgb3BhY2l0eTogMC45O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOjE3dmg7XG4gIH1cbiAgLm1vdmVBbmRUcmFja1NwYWNpbmdOZXcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDhweDtcbiAgICAgIHRvcDogMjd2aDtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE3MDtcbiAgfVxuICBcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpICB7XG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogNTBweDtcbiAgfVxuICBcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NTFweCl7XG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nIHtcbiAgICAgICB3aWR0aDogMzYwcHg7XG4gIH0gXG4gIC5tb3ZlQW5kVHJhY2tTcGFjaW5nTmV3IHtcbiAgICAgIHdpZHRoOiAzNjBweDtcbiB9IFxufVxuXG5cbi5jb250YWluZXJ7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUgIWltcG9ydGFudFxufVxuXG4udGV4dC1ib3gtc3BhY2luZ3tcbmhlaWdodDogNjBweDtcbn1cblxuLmxhYmVsU3BhY2luZy13ZWIge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLmxlZnQtc2lkZS1mb3JtLWdycHtcbiAgd2lkdGg6IDIwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwdmg7XG4gIHJpZ2h0OiAydmg7XG59XG4uY29udGFpbmVyLXdyYXBwZXJ7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9raW5nc3RyYWNraW1hZ2VzLnMzLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vbG9naW5pbWFnZXMvdHJhY2tfYXBta2luZ3N0cmFja19jb21fYmFja2dyb3VuZC5qcGdcIikgY2VudGVyIGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCBmaXhlZDsgIFxufVxuLmxhYmVsU3BhY2luZ3tcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIG1hcmdpbi1sZWZ0OiA2JTtcbiAgd2lkdGg6IDg1JTtcbn1cblxuI3BhcnRpdGlvbmVkIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogNDJweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDIzMywgMCwgMCkgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggMXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMzVweDtcbiAgd2lkdGg6IDIyMHB4O1xuICBtaW4td2lkdGg6IDIyMHB4O1xufVxuXG4uYmFja2dyb3VuZC1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNmNTFlMmUsICNmZDYwMzUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNkaXZJbm5lciB7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbiNkaXZPdXRlciB7XG4gIHdpZHRoOiAxOTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnBsYWNlaG9sZGVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cblxuLnJlc2VuZC1vdHB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDBweCAxMXB4IDdweCAzcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucGFyZW50QXBwTG9nb1xue1xuICB3aWR0aDo5MCU7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cbi5mb3Jte1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwOXB4O1xufVxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogIzg2ZDNmMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/login/forgot/forgot.component.ts");










// import { IonicSelectableComponent } from 'ionic-selectable';
let LoginPage = class LoginPage {
    constructor(modalController, menuController, formBuilder, commonService, router, ajaxService, storage, platform) {
        this.modalController = modalController;
        this.menuController = menuController;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.ajaxService = ajaxService;
        this.storage = storage;
        this.platform = platform;
        this.eye_icon = "eye-off";
        this.password_type = "password";
        this.pageSelection = "userLogin";
        this.rtos = [];
        this.buttonName = "Rto Login";
        this.forgot = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__["ForgotComponent"],
                cssClass: 'custome_fleet',
                componentProps: {
                    value: 'data'
                }
            });
            modal.onDidDismiss().then(() => {
            });
            return yield modal.present();
        });
        this.showHidePass = () => {
            this.password_type = this.password_type === "text" ? "password" : "text";
            this.eye_icon = this.eye_icon === "eye" ? "eye-off" : "eye";
        };
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ServerUrl"].live + "/dashboard/background";
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.background = res.value;
        });
        url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ServerUrl"].live + "/dashboard/rtoList";
        this.ajaxService.ajaxGet(url)
            .subscribe(res => {
            this.rtos = JSON.parse(res.value);
        });
    }
    submitLogin() {
        if (!this.commonService.isLoading)
            this.commonService.presentLoader();
        let body = {};
        if (this.pageSelection == "userLogin") {
            body = {
                "email": this.login.value.compName.toString(),
                "password": this.login.value.password.toString()
            };
        }
        else {
            body = {
                "email": this.login.value.rtoArea.toString(),
                "password": this.login.value.password.toString()
            };
        }
        this.storage.set("login", JSON.stringify(body));
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ServerUrl"].live + "/authentic/user";
        this.ajaxService.ajaxPostWithBody(url, body)
            .subscribe(res => {
            // console.table(res)
            if (res != null && res != "" && res.message != "Invalid User Name & Password.") {
                let messagingServiceData = res;
                if (this.buttonName == "Rto Login" && res.role.roleName == "RTO") {
                    this.commonService.dismissLoader();
                    let msg = "!Oops.. You should be logged in rto login";
                    this.commonService.presentToast(msg);
                }
                else {
                    this.storage.set("loginRes", JSON.stringify(res)).then(res => {
                        this.commonService.updateLoginInfo(messagingServiceData);
                        if (this.pageSelection == "userLogin") {
                            this.router.navigateByUrl('/dashboard-count', { replaceUrl: true });
                            this.commonService.dismissLoader();
                        }
                        else {
                            this.router.navigateByUrl('/rto-dashboard', { replaceUrl: true });
                        }
                    });
                }
            }
            else if (res == "") {
                if (this.commonService.isLoading)
                    this.commonService.dismissLoader();
                let msg = "Your logging credential is invalid ";
                this.commonService.presentToast(msg);
            }
            else if (res.message) {
                if (this.commonService.isLoading)
                    this.commonService.dismissLoader();
                this.commonService.presentToast(res.message);
            }
            else {
                if (navigator.onLine) {
                    if (this.commonService.isLoading)
                        this.commonService.dismissLoader();
                    let msg = "Oops! Server is in under maintenance";
                    this.commonService.presentToast(msg);
                }
                else {
                    if (this.commonService.isLoading)
                        this.commonService.dismissLoader();
                    let msg = "Oops! Connecting server error, Make sure your internet connection";
                    this.commonService.presentToast(msg);
                }
            }
        });
        // } 
        // else {
        // let body = {
        //   "email": "TN-01",
        //   "password": this.login.value.password.toString()
        // };
        // this.storage.set("login", JSON.stringify(body));
        // let url = ServerUrl.live + "/authentic/user";
        // this.ajaxService.ajaxPostWithBody(url, body)
        //   .subscribe(res => {
        //     let messagingServiceData = res
        //     if (res != null && res != "") {
        //       this.storage.set("loginRes", JSON.stringify(res)).then(res => {
        //         this.commonService.updateLoginInfo(messagingServiceData);
        //         this.router.navigateByUrl('/rto-dashboard')
        //       });
        //     } if (res == "") {
        //       if (this.commonService.isLoading)
        //         this.commonService.dismissLoader();
        //       let msg = "Your logging credential is invalid "
        //       this.commonService.presentToastWithOk(msg)
        //     } else {
        //       if (this.commonService.isLoading)
        //         this.commonService.dismissLoader();
        //       let msg = "Oops! Server is in under maintenance"
        //       this.commonService.presentToastWithOk(msg)
        //     }
        //   });
        // }
    }
    // portChange = (event: {
    //   component: IonicSelectableComponent,
    //   value: any
    // }) => {
    //   this.login= event.value;
    // }
    changeMode() {
        let data = this.pageSelection;
        if (data == 'userLogin') {
            this.pageSelection = "rtoLogin";
            this.buttonName = "User Login";
            this.login = this.formBuilder.group({
                compName: [''],
                rtoArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
        else {
            this.pageSelection = "userLogin";
            this.buttonName = "Rto Login";
            this.login = this.formBuilder.group({
                compName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rtoArea: [''],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    }
    ionViewWillEnter() {
        this.menuController.enable(false);
        this.storage.clear();
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.menuController.enable(false);
        this.login = this.formBuilder.group({
            compName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rtoArea: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map