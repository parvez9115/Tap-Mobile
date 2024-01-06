(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-form-common-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/common-form/common-form.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-form/common-form.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommonFormCommonFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-card class=\"topBorder\" style=\"height: 96%;overflow: scroll;\">\n    <ion-card-content style=\"padding: 0px;\">\n      <ion-row class=\"headingClass\">\n        <ion-label>{{creation}}</ion-label>\n      </ion-row>\n      <form [formGroup]=\"profileForm\">\n        <ion-row >\n          <ion-col class='headerSize'>RTO Details</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf=\"formVisible.includes('rtoZone')\" size='12' size-md=\"6\" size-lg=\"3\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item (click)=\"updateAnswer($event)\">\n              <ion-label>{{selectedRto}} </ion-label>\n              <ion-select multiple=\"true\" formControlName=\"rtoZone\" (ionChange)=\"updateAnswer($event)\">\n                <ion-select-option *ngFor=\"let rto of rtoAreaCode\" placeholder=\"Select rto zone\">{{rto}}</ion-select-option>\n               </ion-select>\n              <!-- <input style=\"width: 100%;\n              height: 47px;\n              border: 0px;\" list=\"rto\" formControlName=\"rtoZone\" placeholder='Select rto zone'\n                style=\"padding: 0px; \" />\n                <datalist id=\"rto\">\n                <option *ngFor=\"let rto of rtoAreaCode\">{{rto}}</option>\n              </datalist> -->\n              <!-- <ion-select formControlName=\"rtoZone\">\n                <ion-select-option *ngFor=\"let rto of rtoAreaCode\" placeholder=\"select\">{{rto}} </ion-select-option>\n              </ion-select> -->\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.rtoZone.invalid\">\n              <div *ngIf=\"profileForm.controls.rtoZone.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('roleName')\" size='12' size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item (click)=\"changeDealer()\">\n              <ion-label>{{selectedDealer}} </ion-label>\n              <ion-select formControlName=\"roleName\">\n                <ion-select-option *ngFor=\"let role of role\" placeholder=\"select\">{{role}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.roleName.invalid\">\n              <div *ngIf=\"profileForm.controls.roleName.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"formVisible.includes('name')\">\n          <ion-col class='headerSize'>Customer Information</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf=\"formVisible.includes('name')\" size='12' size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Name\" formControlName=\"name\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.name.invalid\">\n              <div *ngIf=\"profileForm.controls.name.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('password')\" size='12' size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"key\"></ion-icon>\n              <ion-input [type]=\"password_type \" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n              <ion-icon (click)=\"showHidePass()\" slot=\"end\" [name]=\"eye_icon\"></ion-icon>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.password.invalid\">\n              <div *ngIf=\"profileForm.controls.password.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('email')\" size='12'>\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"E-mail\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.email.invalid\">\n              <div *ngIf=\"profileForm.controls.email\">\n                This Field is Required, Enter correct Mail Id.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('mobile1')\" size='12' size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Contact No 1\" maxlength=\"10\"  formControlName=\"mobile1\">\n              </ion-input>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.mobile1.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"profileForm.controls.mobile1.errors.required\">\n                This Field is Required,Enter 10 digits\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('mobile2')\" size='12' size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Contact No 2\" maxlength=\"10\" formControlName=\"mobile2\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('addressLine')\" size='12' size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Address Line1\" formControlName=\"addressLine\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.addressLine.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"profileForm.controls.addressLine.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('tradeNumber')\" size='12' size-md=\"6\" size-lg=\"6\" size-xl=\"6\" size-xxl=\"6\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Trade Certificate Number\" formControlName=\"tradecertificateno\"></ion-input>\n            </ion-item>\n          </ion-col>\n\n          <ion-col *ngIf=\"formVisible.includes('city')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"4\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"navigate\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"City\" formControlName=\"city\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.city.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"profileForm.controls.city.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('state')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"4\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n              <!-- <ion-input type=\"text\" placeholder=\"State\" formControlName=\"state\"></ion-input> -->\n              <input style=\"\n              height: 47px;\n              border: 0px;\" list=\"state\" formControlName=\"state\" placeholder='Enter state name'\n                style=\"padding: 0px; \" />\n\n              <datalist id=\"state\">\n                <option *ngFor=\"let state of stateList\">{{state}}</option>\n              </datalist>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.state.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"profileForm.controls.state.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('pincode')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"4\">\n            <ion-item class=\" labelSpacing\">\n              <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n              <ion-input type=\"text\" maxlength='6' placeholder=\"Pincode\" formControlName=\"pincode\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"profileForm.controls.pincode.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"profileForm.controls.pincode.errors.required\">\n                This Field is Required.\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"formVisible.includes('manufactureYear') || formVisible.includes('registrationNumber')\">\n          <ion-col class='headerSize'> Certificate Creation</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf=\"formVisible.includes('registrationNumber')\" size='12' size-md=\"6\" size-lg=\"3\" size-xl=\"4\"\n            size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"card\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Registration Number\" formControlName=\"registrationNumber\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('manufactureYear')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\"\n            size-xxl=\"6\">\n            <ion-item>\n              <!-- <ion-icon name=\"list-box\"></ion-icon>/ -->\n              <ion-label> Select Manufacturer Year </ion-label>\n              <ion-datetime formControlName=\"manufactureYear\" class=\"dateFormat\" displayFormat=\"YYYY\"\n                pickerFormat=\"YYYY\" placeholder=\"YYYY\" [max]=\"maxDate\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('chassisNum')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\"\n            size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Chassis Number\" formControlName=\"chassisNum\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('engineNumber')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\"\n            size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"calculator\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Engine Number\" formControlName=\"engineNumber\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col *ngIf=\"formVisible.includes('vehicleMake')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\"\n            size-xxl=\"6\">\n            <ion-item (keyup)=\"changeEmpyVehicle($event)\">\n              <!-- <ion-icon name=\"list-box\"></ion-icon>/ -->\n              <ion-label>Select Vehicle</ion-label>\n              <input style=\"width: 100%;\n                height: 47px;\n                border: 0px;\" list=\"vehicle\" [(ngModel)]=\"data\" formControlName=\"vehicleMake\"\n                placeholder='Select vehicle company' style=\"padding: 0px; \" />\n              <datalist id=\"vehicle\">\n                <option *ngFor=\"let vehicle of vehicleList\">{{vehicle}}</option>\n              </datalist>\n              <!-- <ion-select formControlName=\"vehicleMake\">\n                <ion-select-option *ngFor=\"let vehicle of vehicleList\" [value]=\"vehicle\" placeholder=\"vehicle\">{{vehicle}}</ion-select-option>\n              </ion-select> -->\n            </ion-item>\n          </ion-col>\n\n          <ion-col *ngIf=\"formVisible.includes('vehicleModel')\" size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\"\n            size-xxl=\"6\">\n            <ion-item (ionChange)=\"vehicleTypeLength($event)\">\n              <ion-label>Vehicle Model</ion-label>\n              <ion-select formControlName=\"vehicleModel\">\n                <ion-select-option *ngFor=\"let vehicleModal of vehicleModal[data]\" [value]=\"vehicleModal\"\n                  placeholder=\"Address\">{{vehicleModal}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n        <ion-row *ngIf=\"formVisible.includes('stocks')\">\n          <ion-col class='headerSize'>Stocks</ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"formVisible.includes('stocks')\">\n          <ion-col *ngIf=\"formVisible.includes('assign') && pageType != 'Certificate'\" size='12'\n            style=\"text-align: right;\">\n            <ion-item [disabled]='false' (ionChange)=\"selectedDashData($event)\">\n              <!-- <ion-icon name=\"list-box\"></ion-icon>/ -->\n              <ion-label> Select Dealer</ion-label>\n              <ion-select>\n                <ion-select-option *ngFor=\"let user of dashboardData\" [value]=\"user\">{{user.userId}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n          </ion-col>\n\n\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"Red 20mm\" formControlName=\"sred20mm\" #a\n                (ionChange)=\"changeDatas(a,'sred20mm',$event)\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"Red 50mm\" formControlName=\"sred50mm\" #b\n                (ionChange)=\"changeDatas(b,'sred50mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"Red 80mm\" formControlName=\"sred80mm\" #c\n                (ionChange)=\"changeDatas(c,'sred80mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"White 20mm\" formControlName=\"swhite20mm\" #d\n                (ionChange)=\"changeDatas(d,'swhite20mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"White 50mm\" formControlName=\"swhite50mm\" #e\n                (ionChange)=\"changeDatas(e,'swhite50mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"White 80mm\" formControlName=\"swhite80mm\" #f\n                (ionChange)=\"changeDatas(f,'swhite80mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"Yellow 20mm\" formControlName=\"syellow20mm\" #g\n                (ionChange)=\"changeDatas(g,'syellow20mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"Yellow 50mm\" formControlName=\"syellow50mm\" #h\n                (ionChange)=\"changeDatas(h,'syellow50mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"bookmarks\"></ion-icon>\n              <ion-input type=\"number\" placeholder=\"Yellow 80mm\" formControlName=\"syellow80mm\" #i\n                (ionChange)=\"changeDatas(i,'syellow80mm')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"calculator\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Class 3\" formControlName=\"class3\" #j\n                (ionChange)=\"changeDatas(j,'class3')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"calculator\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Class 4\" formControlName=\"class4\" #k\n                (ionChange)=\"changeDatas(k,'class4')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col size='12' size-md=\"6\" size-lg=\"4\" size-xl=\"4\" size-xxl=\"6\">\n\n            <ion-item class=\" labelSpacing\">\n\n              <ion-icon slot=\"start\" name=\"calculator\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Hologram\" formControlName=\"hologram\" #l\n                (ionChange)=\"changeDatas(l,'hologram')\"></ion-input>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"formVisible.includes('images')\">\n          <ion-col class='headerSize'>Uploading Images</ion-col>\n        </ion-row>\n        <div>\n          <ion-row *ngIf=\"formVisible.includes('images')\">\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\n              <ion-row>\n                <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                 <label class=\"heading_label\">Front Image</label>\n                  </ion-col>\n                  <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                    <input  type=\"file\" class=\"documents\"   ng2FileSelect [uploader]=\"front\" />\n                     </ion-col>\n               </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\n              <ion-row>\n                <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                 <label class=\"heading_label\">Back Image</label>\n                  </ion-col>\n                  <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                    <input  type=\"file\" class=\"documents\"   ng2FileSelect [uploader]=\"back\" />\n                     </ion-col>\n               </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\n              <ion-row>\n                <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                 <label class=\"heading_label\">Right Image</label>\n                  </ion-col>\n                  <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                    <input  type=\"file\" class=\"documents\"   ng2FileSelect [uploader]=\"right\" />\n                     </ion-col>\n               </ion-row>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\">\n              <ion-row>\n                <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                 <label class=\"heading_label\">Left Image</label>\n                  </ion-col>\n                  <ion-col  size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"head\">\n                    <input  type=\"file\" class=\"documents\"   ng2FileSelect [uploader]=\"left\" />\n                     </ion-col>\n               </ion-row>\n            </ion-col>\n          </ion-row>\n          </div>\n      </form>\n\n    </ion-card-content>\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center !important;\">\n        <ion-button shape=\"round\" class=\"submitBtn\" (click)=\"submit()\">submit</ion-button>\n        <ion-button shape=\"round\" class=\"submitBtn\" (click)=\"closeModel()\">Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/common-form/common-form-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/common-form/common-form-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CommonFormPageRoutingModule */

    /***/
    function srcAppCommonFormCommonFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonFormPageRoutingModule", function () {
        return CommonFormPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _common_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./common-form.page */
      "./src/app/common-form/common-form.page.ts");

      var routes = [{
        path: '',
        component: _common_form_page__WEBPACK_IMPORTED_MODULE_3__["CommonFormPage"]
      }];

      var CommonFormPageRoutingModule = function CommonFormPageRoutingModule() {
        _classCallCheck(this, CommonFormPageRoutingModule);
      };

      CommonFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CommonFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/common-form/common-form.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/common-form/common-form.module.ts ***!
      \***************************************************/

    /*! exports provided: CommonFormPageModule */

    /***/
    function srcAppCommonFormCommonFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonFormPageModule", function () {
        return CommonFormPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _common_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./common-form-routing.module */
      "./src/app/common-form/common-form-routing.module.ts");
      /* harmony import */


      var _common_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./common-form.page */
      "./src/app/common-form/common-form.page.ts");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-file-upload */
      "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");

      var CommonFormPageModule = function CommonFormPageModule() {
        _classCallCheck(this, CommonFormPageModule);
      };

      CommonFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _common_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommonFormPageRoutingModule"]],
        declarations: [_common_form_page__WEBPACK_IMPORTED_MODULE_6__["CommonFormPage"]]
      })], CommonFormPageModule);
      /***/
    },

    /***/
    "./src/app/common-form/common-form.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/common-form/common-form.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommonFormCommonFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerSize {\n  font-size: 18px;\n}\n\n.input-item {\n  border: 1px solid gray;\n  border-radius: 5px;\n  height: 40px;\n  line-height: 19px;\n}\n\n.col {\n  margin-left: 3%;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.firstcol {\n  margin-left: 5%;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.submitBtn {\n  margin: 10px;\n}\n\n.user {\n  margin-top: 15px;\n  margin-left: 5%;\n}\n\n.col1 {\n  margin-left: 3%;\n  margin-bottom: 14px;\n  margin-top: 14px;\n}\n\n.heading {\n  background: #6c2a84;\n  border-radius: 3px;\n  padding: 4px;\n  color: white;\n}\n\n.col3 {\n  margin-left: 3%;\n  margin-bottom: 14px;\n  margin-top: 14px;\n}\n\n.col2 {\n  margin-left: 5%;\n  margin-bottom: 14px;\n  margin-top: 14px;\n}\n\n.heading_label {\n  border-radius: 4px;\n  font-weight: 500;\n  font-size: 17px;\n  color: black;\n  margin: 0px 0px 0px 50px;\n}\n\ninput {\n  width: 100%;\n  height: 47px;\n  border: 0px;\n  outline-color: white;\n}\n\n.topBorder {\n  border-top: 6px solid red;\n}\n\n.headingClass {\n  justify-content: center;\n  font-size: x-large;\n  color: red;\n  text-transform: uppercase;\n  padding: 12px;\n}\n\ninput, ion-input {\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLWZvcm0vY29tbW9uLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBRUksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUVBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtBQVNKOztBQU5BO0VBQ0ksdUJBQUE7RUFDSixrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFTQTs7QUFOQTtFQUNJLGtDQUFBO0FBU0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tZm9ybS9jb21tb24tZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlclNpemUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5pbnB1dC1pdGVtIHtcclxuICAgIC8vIGJvcmRlcjoxcHggc29saWQgI2YzZTNmNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxufVxyXG4uY29sIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcbi5maXJzdGNvbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uc3VibWl0QnRue1xyXG4gICAgbWFyZ2luOiAxMHB4OyAgXHJcbiAgICAgfVxyXG4udXNlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uY29sMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG4uaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmMyYTg0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY29sMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG4uY29sMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxufVxyXG4uaGVhZGluZ19sYWJlbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDUwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgb3V0bGluZS1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnRvcEJvcmRlciB7XHJcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgcmVkO1xyXG59XHJcblxyXG4uaGVhZGluZ0NsYXNze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmZvbnQtc2l6ZTogeC1sYXJnZTtcclxuY29sb3I6IHJlZDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxucGFkZGluZzogMTJweDtcclxufVxyXG5cclxuaW5wdXQsIGlvbi1pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/common-form/common-form.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/common-form/common-form.page.ts ***!
      \*************************************************/

    /*! exports provided: CommonFormPage */

    /***/
    function srcAppCommonFormCommonFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonFormPage", function () {
        return CommonFormPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-file-upload */
      "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/ajax.service */
      "./src/app/services/ajax.service.ts");
      /* harmony import */


      var _services_assert_json_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/assert-json.service */
      "./src/app/services/assert-json.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _services_tapestock_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/tapestock.service */
      "./src/app/services/tapestock.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import {}


      var CommonFormPage = /*#__PURE__*/function () {
        function CommonFormPage(formBuilder, activatedRoute, storage, ajaxService, commonService, datas, router, location, assertJson) {
          var _this = this;

          _classCallCheck(this, CommonFormPage);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.storage = storage;
          this.ajaxService = ajaxService;
          this.commonService = commonService;
          this.datas = datas;
          this.router = router;
          this.location = location;
          this.assertJson = assertJson;
          this.dtoData = {
            "userId": "",
            "role": {
              "roleName": ""
            },
            "email": "",
            "password": "",
            "name": "",
            "mobile1": "",
            "mobile2": null,
            "addressLine": "",
            "city": null,
            "state": "state",
            "pincode": 8,
            "rtoZone": '',
            "class3": 0,
            "class4": 0,
            "hologram": 0,
            "createdby": "",
            "createdDate": null,
            "lastupdatedBy": null,
            "lastupdatedDate": null,
            "swhite80mm": 0,
            "swhite50mm": 0,
            "sred50mm": 0,
            "syellow50mm": 0,
            "syellow80mm": 0,
            "sred20mm": 0,
            "swhite20mm": 0,
            "sred80mm": 0,
            "syellow20mm": 0
          };
          this.certificateDtoData = {
            "certificateId": "",
            "user": null,
            "registrationNumber": "",
            "manufactureYear": null,
            "chassisNumber": "",
            "engineNumber": "",
            "vehicleMake": "",
            "vehicleModel": "",
            "ownerName": "",
            "addressLine": "",
            "city": "",
            "state": "",
            "pincode": 0,
            "rtoZone": "",
            "class3": 0,
            "class4": 0,
            "hologram": 0,
            "frontImage": "",
            "backImage": "",
            "leftImage": "",
            "rightImage": "",
            "createdDate": null,
            "updatedBy": "fg",
            "updatedDate": null,
            "rtoStatus": null,
            "rtoStatusdate": null,
            "rtoComment": null,
            "swhite20mm": 0,
            "sred80mm": 0,
            "syellow80mm": 0,
            "swhite80mm": 0,
            "syellow50mm": 0,
            "sred20mm": 0,
            "syellow20mm": 0,
            "sred50mm": 0,
            "swhite50mm": 0,
            "mobile1": null,
            "mobile2": null,
            "email": null
          };
          this.stdTapeName = ["sred50mm", "swhite50mm", "syellow50mm", "class3", "class4", "sred20mm", "swhite20mm", "sred80mm", "swhite80mm", "syellow20mm", "syellow80mm", "hologram"];
          this.stdTapeValueJson = {};
          this.selectedDealer = 'Select Role';
          this.count = 0;
          this.minusValue = [];
          this.dealerNames = false;
          this.uploader = false;
          this.selectedRto = "Select RTO";
          this.password_type = "password";
          this.eye_icon = "eye-off";
          this.vehicleList = [];
          this.vehicleModal = []; // gokul

          this.mobnumPattern2 = "^((\\+91-?)|0)?[0-9]{10}$";
          this.stateList = [];
          this.method = "Create";
          this.selectedRtos = [];
          this.right = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
          this.front = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
          this.back = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
          this.left = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({});
          this.rtoAreaCode = [];
          this.users = [];

          this.showHidePass = function () {
            _this.password_type = _this.password_type === "text" ? "password" : "text";
            _this.eye_icon = _this.eye_icon === "eye" ? "eye-off" : "eye";
          };

          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/vehicleList";
          this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.vehicleList = Object.keys(JSON.parse(res.value));
            _this.vehicleModal = JSON.parse(res.value);
          });
          url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/rtoList";
          this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.rtoAreaCode = JSON.parse(res.value);
          });
          url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/dashboard/states";
          this.ajaxService.ajaxGet(url).subscribe(function (res) {
            _this.stateList = JSON.parse(res.value);
          });
        }

        _createClass(CommonFormPage, [{
          key: "addNewMember",
          value: function addNewMember() {
            var _this2 = this;

            var d = new Date();
            var current_date = d.getFullYear().toString() + '-' + (d.getMonth() + 1).toString().padStart(2, '0') + '-' + d.getDate().toString();
            var data = {
              type: this.profileForm.value.roleName,
              id: ""
            };
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/user/id/generate";
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
              if (res.id != null) {
                for (var i = 0; i < _this2.formVisible.length; i++) {
                  if (_this2.formVisible[i] != "roleName") _this2.dtoData[_this2.formVisible[i]] = _this2.profileForm.value[_this2.formVisible[i]];else if (_this2.formVisible[i] == "roleName") _this2.dtoData["role"][_this2.formVisible[i]] = _this2.profileForm.value[_this2.formVisible[i]];
                }

                var date = new Date();
                _this2.dtoData["userId"] = res.id;
                _this2.dtoData["createdby"] = _this2.loginDatas["userId"];
                _this2.dtoData["tradecertificateno"] = _this2.profileForm.value.tradecertificateno;
                _this2.dtoData["createdDate"] = '2022-03-23';
                _this2.dtoData["status"] = true;
                _this2.dtoData["reason"] = ''; // this.dtoData.rtoZone = ["MH - 33","MH - 33","MH - 33"]

                _this2.dtoData["rtoZone"] = JSON.stringify(_this2.selectedRtos);

                var _url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/user/save";

                _this2.ajaxService.ajaxPostWithBody(_url, _this2.dtoData).subscribe(function (res) {
                  if (res.message == "Mobile No Already Exists") {
                    _this2.commonService.dismissLoader();

                    _this2.commonService.presentToast(res.message);
                  } else if (res.message == "Email ID Already Exists") {
                    _this2.commonService.dismissLoader();

                    _this2.commonService.presentToast(res.message);
                  } else {
                    _this2.loginReStore();

                    _this2.profileForm.reset();
                  }
                });
              } else {
                _this2.commonService.presentToast("Invalid role, please select valid role");
              }
            });
          }
        }, {
          key: "vehicleTypeLength",
          value: function vehicleTypeLength(vehicleModal) {
            for (var i = 0; i < this.stdTapeName.length; i++) {
              this.profileForm.controls[this.stdTapeName[i]].setValue(this.stdTapeValueJson[(this.profileForm.value["vehicleMake"] + "_" + vehicleModal["detail"]["value"]).replace(/ /g, "").toUpperCase()][this.stdTapeName[i]]);
            }
          }
        }, {
          key: "closeModel",
          value: function closeModel() {
            //this.location.back()
            this.router.navigateByUrl('/dashboard-count');
          }
        }, {
          key: "changeEmpyVehicle",
          value: function changeEmpyVehicle() {
            this.profileForm.controls['vehicleModel'].setValue(this.vehicleModal[this.profileForm.value['vehicleModal']]);

            for (var i = 0; i < this.stdTapeName.length; i++) {
              this.profileForm.controls[this.stdTapeName[i]].setValue("0");
            }
          }
        }, {
          key: "editSelectedMember",
          value: function editSelectedMember() {
            var _this3 = this;

            Object.assign(this.selectedData, this.profileForm.value);
            this.selectedData['lastupdatedBy'] = this.loginDatas["userId"];
            this.selectedData['lastupdatedDate'] = '2022-03-23';
            this.selectedData['createdDate'] = '2022-03-23';
            this.selectedData.role.createdDate = '2022-03-23'; // this.selectedData.rtoZone = JSON.stringify(["MH - 33","MH - 33","MH - 33"])

            this.selectedData.rtoZone = JSON.stringify(this.selectedData.rtoZone);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/user/save";
            this.ajaxService.ajaxPostWithBody(url, this.selectedData).subscribe(function (res) {
              if (res) {
                _this3.loginReStore();
              } else {
                _this3.commonService.dismissLoader();
              }
            });
          }
        }, {
          key: "stockUploader",
          value: function stockUploader() {
            var _this4 = this;

            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + '/stock/save';
            this.loginDatas['lastupdatedBy'] = this.loginDatas.userId;
            this.loginDatas['lastupdatedDate'] = new Date();
            var data = {
              fromUser: this.loginDatas,
              toUser: null,
              message: "upload"
            };
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
              if (res == "") {
                _this4.loginReStore();
              } else {
                _this4.commonService.dismissLoader();
              }
            });
          }
        }, {
          key: "stockAssign",
          value: function stockAssign() {
            var _this5 = this;

            this.selectedData["swhite80mm"] = this.selectedData["swhite80mm"] != null ? this.profileForm.value["swhite80mm"] == "" ? this.selectedData["swhite80mm"] : parseInt(this.profileForm.value["swhite80mm"]) + parseInt(this.selectedData["swhite80mm"]) : parseInt(this.profileForm.value["swhite80mm"]);
            this.selectedData["swhite50mm"] = this.selectedData["swhite50mm"] != null ? this.profileForm.value["swhite50mm"] == "" ? this.selectedData["swhite50mm"] : parseInt(this.profileForm.value["swhite50mm"]) + parseInt(this.selectedData["swhite50mm"]) : parseInt(this.profileForm.value["swhite50mm"]);
            this.selectedData["sred50mm"] = this.selectedData["sred50mm"] != null ? this.profileForm.value["sred50mm"] == "" ? this.selectedData["sred50mm"] : parseInt(this.profileForm.value["sred50mm"]) + parseInt(this.selectedData["sred50mm"]) : parseInt(this.profileForm.value["sred50mm"]);
            this.selectedData["syellow50mm"] = this.selectedData["syellow50mm"] != null ? this.profileForm.value["syellow50mm"] == "" ? this.selectedData["syellow50mm"] : parseInt(this.profileForm.value["syellow50mm"]) + parseInt(this.selectedData["syellow50mm"]) : parseInt(this.profileForm.value["syellow50mm"]);
            this.selectedData["syellow80mm"] = this.selectedData["syellow80mm"] != null ? this.profileForm.value["syellow80mm"] == "" ? this.selectedData["syellow80mm"] : parseInt(this.profileForm.value["syellow80mm"]) + parseInt(this.selectedData["syellow80mm"]) : parseInt(this.profileForm.value["syellow80mm"]);
            this.selectedData["sred20mm"] = this.selectedData["sred20mm"] != null ? this.profileForm.value["sred20mm"] == "" ? this.selectedData["sred20mm"] : parseInt(this.profileForm.value["sred20mm"]) + parseInt(this.selectedData["sred20mm"]) : parseInt(this.profileForm.value["sred20mm"]);
            this.selectedData["swhite20mm"] = this.selectedData["swhite20mm"] != null ? this.profileForm.value["swhite20mm"] == "" ? this.selectedData["swhite20mm"] : parseInt(this.profileForm.value["swhite20mm"]) + parseInt(this.selectedData["swhite20mm"]) : parseInt(this.profileForm.value["swhite20mm"]);
            this.selectedData["sred80mm"] = this.selectedData["sred80mm"] != null ? this.profileForm.value["sred80mm"] == "" ? this.selectedData["sred80mm"] : parseInt(this.profileForm.value["sred80mm"]) + parseInt(this.selectedData["sred80mm"]) : parseInt(this.profileForm.value["sred80mm"]);
            this.selectedData["syellow20mm"] = this.selectedData["syellow20mm"] != null ? this.profileForm.value["syellow20mm"] == "" ? this.selectedData["syellow20mm"] : parseInt(this.profileForm.value["syellow20mm"]) + parseInt(this.selectedData["syellow20mm"]) : parseInt(this.profileForm.value["syellow20mm"]);
            this.selectedData["class3"] = this.selectedData["class3"] != null ? this.profileForm.value["class3"] == "" ? this.selectedData["class3"] : parseInt(this.profileForm.value["class3"]) + parseInt(this.selectedData["class3"]) : parseInt(this.profileForm.value["class3"]);
            this.selectedData["class4"] = this.selectedData["class4"] != null ? this.profileForm.value["class4"] == "" ? this.selectedData["class4"] : parseInt(this.profileForm.value["class4"]) + parseInt(this.selectedData["class4"]) : parseInt(this.profileForm.value["class4"]);
            this.selectedData["hologram"] = this.selectedData["hologram"] != null ? this.profileForm.value["hologram"] == "" ? this.selectedData["hologram"] : parseInt(this.profileForm.value["hologram"]) + parseInt(this.selectedData["hologram"]) : parseInt(this.profileForm.value["hologram"]);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + '/stock/save';
            var data = {
              fromUser: this.loginDatas,
              toUser: this.selectedData,
              message: "assign"
            };
            this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
              if (res == "") {
                _this5.loginReStore();
              } else {
                _this5.commonService.dismissLoader();
              }
            });
          }
        }, {
          key: "selectedDashData",
          value: function selectedDashData(data) {
            this.selectedData = data.detail.value;
            this.selectedData['lastupdatedBy'] = this.loginDatas.userId;
            this.selectedData['lastupdatedDate'] = new Date();
          }
        }, {
          key: "loginReStore",
          value: function loginReStore() {
            var _this6 = this;

            this.storage.get("login").then(function (body) {
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/authentic/user";

              _this6.ajaxService.ajaxPostWithBody(url, body).subscribe(function (res) {
                if (res != null && res != "") {
                  var messagingServiceData = res;

                  _this6.storage.set("loginRes", JSON.stringify(res)).then(function (res) {
                    _this6.commonService.updateLoginInfo(messagingServiceData);

                    _this6.commonService.dismissLoader();

                    _this6.router.navigateByUrl('/dashboard-count', {
                      replaceUrl: true
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "updateAnswer",
          value: function updateAnswer(event) {
            this.selectedRto = 'Select RTO'; // this.dtoData.rtoZone =   event.target.value
            // this.selectedData.rtoZone = JSON.stringify(event.target.value)

            this.selectedRtos = event.target.value;
            this.selectedRto = 'Select RTO'; // if(this.){
            //   rtoZone
            // }
          }
        }, {
          key: "createDealerCertificate",
          value: function createDealerCertificate() {
            var _this7 = this;

            var digits = '0123456789';
            var OTP = '';

            for (var i = 0; i < 6; i++) {
              OTP += digits[Math.floor(Math.random() * 10)];
            }

            var d = new Date();
            var current_date = d.getDate().toString() + '-' + (d.getMonth() + 1).toString().padStart(2, '0') + '-' + d.getFullYear().toString();

            if (this.right.queue[0] && this.left.queue[0] && this.back.queue[0] && this.front.queue[0]) {
              var data = {
                type: this.profileForm.value.roleName,
                id: ""
              };
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/certificate/id/generate";
              this.ajaxService.ajaxPostWithBody(url, data).subscribe(function (res) {
                if (res.id != null) {
                  _this7.certificateDtoData['certificateId'] = res.id;

                  for (var _i = 0; _i < Object.keys(_this7.certificateDtoData).length; _i++) {
                    if (Object.keys(_this7.certificateDtoData)[_i] == "manufactureYear") {
                      _this7.certificateDtoData[Object.keys(_this7.certificateDtoData)[_i]] = new Date(_this7.profileForm.value.manufactureYear).getFullYear().toString();
                    } else if (Object.keys(_this7.certificateDtoData)[_i] != "certificateId" && Object.keys(_this7.certificateDtoData)[_i] != "User" && _this7.profileForm.value[Object.keys(_this7.certificateDtoData)[_i]] != "" && _this7.profileForm.value[Object.keys(_this7.certificateDtoData)[_i]] != null && _this7.profileForm.value[Object.keys(_this7.certificateDtoData)[_i]] != undefined) {
                      _this7.certificateDtoData[Object.keys(_this7.certificateDtoData)[_i]] = _this7.profileForm.value[Object.keys(_this7.certificateDtoData)[_i]];
                    }
                  }

                  _this7.certificateDtoData['otp'] = OTP;
                  _this7.certificateDtoData['user'] = _this7.loginDatas;
                  _this7.certificateDtoData['chassisNumber'] = _this7.profileForm.value["chassisNum"];
                  _this7.certificateDtoData["createdDate"] = new Date();
                  _this7.certificateDtoData["rtoStatus"] = "Pending";
                  _this7.certificateDtoData["ownerName"] = _this7.profileForm.value["name"];
                  var testData = new FormData();
                  testData.append('right', _this7.right.queue[0]._file);
                  testData.append('left', _this7.left.queue[0]._file);
                  testData.append('front', _this7.front.queue[0]._file);
                  testData.append('back', _this7.back.queue[0]._file);
                  testData.append('data', JSON.stringify(_this7.certificateDtoData));

                  var _url2 = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ServerUrl"].live + "/certificate/save";

                  _this7.ajaxService.ajaxPostWithFile(_url2, testData).subscribe(function (res) {
                    if (res) {
                      // var digits = '0123456789';
                      // let OTP = '';
                      // for (let i = 0; i < 6; i++) {
                      //   OTP += digits[Math.floor(Math.random() * 10)];
                      // }
                      // let resu = { key: res['certificateId'], message: OTP }
                      // let url = ServerUrl.live + "/certificate/send/otp";
                      // this.ajaxService.ajaxPostWithBody(url, resu)
                      //   .subscribe(res => {
                      //     this.commonService.presentToastWithOk(res.message)
                      //   })
                      _this7.commonService.presentToast("Added successfully");

                      _this7.commonService.dismissLoader();

                      _this7.loginReStore();
                    } else {
                      _this7.commonService.dismissLoader();
                    }
                  });
                } else {
                  _this7.commonService.presentToast("Invalid role, please select valid role");
                }
              });
            } else {
              this.commonService.presentToast("Oops!!.. upload the image and try again");
              this.commonService.dismissLoader();
            }
          }
        }, {
          key: "createRtoCertificate",
          value: function createRtoCertificate() {}
        }, {
          key: "submit",
          value: function submit() {
            if (this.profileForm.valid) {
              this.commonService.presentLoader();

              if (this.pageType == "uploadStocks" && this.formVisible.includes("assign") == false) {
                this.stockUploader();
              } else if (this.pageType == "assign" && this.formVisible.includes("assign") == true) {
                this.stockAssign();
              } else if (this.pageType == "Add") {
                this.addNewMember();
              } else if (this.pageType == "Edit") {
                this.editSelectedMember();
              } else if (this.pageType == "Certificate") {
                if (this.activatedRoute.snapshot.params.type == "Dealer") this.createDealerCertificate();else this.createDealerCertificate();
              }
            } else {
              this.commonService.presentToast("Some datas are missing please fill all the requirements");
            }
          }
        }, {
          key: "changeDealer",
          value: function changeDealer() {
            this.selectedDealer = 'Select Role';
          }
        }, {
          key: "changeDatas",
          value: function changeDatas(data, name, event) {
            var _this8 = this;

            if (this.formVisible.includes('assign')) {
              this.changeName = name;
              this.storage.get('loginRes').then(function (logindata) {
                logindata = JSON.parse(logindata);
                _this8.role = JSON.parse(logindata["role"]["menus"]);
                _this8.loginDatas = logindata;
                var result = _this8.loginDatas;
                name = _this8.changeName;
                _this8.orginalValues = result;

                _this8.datas.currentMessage.subscribe(function (message) {
                  return _this8.loginDatas = message;
                });

                if (_this8.orginalValues[name] >= _this8.profileForm.value[name]) {
                  for (var i = 0; i < Object.keys(_this8.orginalValues).length; i++) {
                    if (i == Object.keys(_this8.orginalValues).length) {
                      break;
                    }

                    if (Object.keys(_this8.orginalValues)[i] == name) {
                      if (data.value != "") {
                        var total = _this8.orginalValues[name] - JSON.parse(data.value);
                        _this8.loginDatas[name] = total;
                        var oldValue = JSON.parse(data.value);
                        var name = _this8.loginDatas[i];

                        _this8.minusValue.push({
                          name: oldValue
                        });
                      } else {
                        _this8.loginDatas[name] = _this8.orginalValues[name];
                      }
                    }
                  }

                  _this8.datas.changeMessage(_this8.loginDatas);
                } else {
                  alert('your value should be less than stock value');
                  _this8.loginDatas[name] = 0;

                  _this8.profileForm.controls[name].setValue(_this8.orginalValues[name]);
                }
              });
            } else {
              // this.datas.currentMessage.subscribe(message => this.loginDatas = message);
              // this.loginDatas[name] = parseInt(this.loginDatas[name]) + parseInt(this.profileForm.value[name]);
              // this.datas.changeMessage(this.loginDatas);
              this.changeName = name;
              this.storage.get('loginRes').then(function (result) {
                name = _this8.changeName;
                _this8.orginalValues = JSON.parse(result);

                _this8.datas.currentMessage.subscribe(function (message) {
                  return _this8.loginDatas = message;
                });

                for (var i = 0; i < Object.keys(_this8.orginalValues).length; i++) {
                  if (i == Object.keys(_this8.orginalValues).length) {
                    break;
                  }

                  if (Object.keys(_this8.orginalValues)[i] == name) {
                    if (data.value != "") {
                      var total = _this8.orginalValues[name] + JSON.parse(data.value);
                      _this8.loginDatas[name] = total;
                      var oldValue = JSON.parse(data.value);
                      var name = _this8.loginDatas[i];

                      _this8.minusValue.push({
                        name: oldValue
                      });
                    } else {
                      _this8.loginDatas[name] = _this8.orginalValues[name];
                    }
                  }
                }

                _this8.datas.changeMessage(_this8.loginDatas);
              });
            }
          } // puc, speed govn ,hsrp ,tape,vts

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            localStorage.removeItem('editDatas');
            this.profileForm.patchValue({
              name: '',
              password: '',
              roleName: '',
              rtoZone: '',
              email: '',
              mobile1: '',
              mobile2: [''],
              state: '',
              city: '',
              addressLine: '',
              pincode: '',
              tradecertificateno: ''
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.stdTapeValueJson = this.assertJson.assertJson; // let data: any = this.activatedRoute.snapshot.queryParamMap.get('data');

            var data = localStorage.getItem('editDatas');
            var data1 = this.activatedRoute.snapshot.params.type;
            this.pageType = this.activatedRoute.snapshot.params.method;
            this.storage.get('dashboardResult').then(function (result) {
              result = JSON.parse(result);
              _this9.dashboardData = result;
            });
            this.storage.get('loginRes').then(function (result) {
              result = JSON.parse(result);
              _this9.role = JSON.parse(result["role"]["menus"]);
              _this9.loginDatas = result;
            });

            if (data1 == "SuperAdmin" && history.state.name != 'superAdmin') {
              // data = null
              this.creation = this.method + " a DEALER";
              this.formVisible = ["userId", "password", "roleName", "email", "name", "mobile1", "mobile2", "addressLine", "city", "state", "pincode", "rtoZone", "tradeNumber"];
              this.profileForm = this.formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rtoZone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
                mobile1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobnumPattern2)]],
                mobile2: [''],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                tradecertificateno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });
            } else if (data1 == "Manufacturer") {
              this.creation = this.method + " a distributor";
              this.formVisible = ["userId", "password", "roleName", "email", "name", "mobile1", "mobile2", "addressLine", "city", "state", "pincode", "rtoZone"];
              this.profileForm = this.formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rtoZone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
                mobile1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobnumPattern2)]],
                mobile2: [''],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });
            } else if (data1 == "Distributor") {
              this.creation = this.method + " a dealer";
              this.formVisible = ["userId", "password", "roleName", "email", "name", "mobile1", "mobile2", "addressLine", "city", "state", "pincode", "rtoZone"];
              this.profileForm = this.formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rtoZone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
                mobile1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobnumPattern2)]],
                mobile2: [''],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });
            } else if (data1 == "Dealer" || history.state.name == 'superAdmin') {
              this.creation = this.method + " a certificate";
              this.formVisible = ["userId", "roleName", "email", // "password",
              "name", "mobile1", "mobile2", "addressLine", "city", "state", "pincode", "rtoZone", "chassisNum", "registrationNumber", "manufactureYear", "engineNumber", "vehicleMake", "vehicleModel", "class4", "class3", "hologram", "stocks", "images", "assign"];
              this.profileForm = this.formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [''],
                roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rtoZone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                // call: ['', Validators.required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
                mobile1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobnumPattern2)]],
                mobile2: [''],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                //  stocks
                sred20mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                sred50mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                sred80mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                swhite20mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                swhite50mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                swhite80mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                syellow20mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                syellow50mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                syellow80mm: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                // CERTIFICATE creation
                registrationNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                manufactureYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                chassisNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                engineNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                vehicleMake: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                vehicleModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                class3: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                class4: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                hologram: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });
            } else if (data1 == "Rto") {
              this.creation = this.method + " a certificate";
              this.formVisible = ["userId", "roleName", "email", // "password",
              "name", "mobile1", "mobile2", "addressLine", "city", "state", "pincode", "rtoZone", "registrationNumber", "manufactureYear", "engineNumber", "vehicleMake", "vehicleModel", "class4", "class3", "chassisNum", "hologram", "stocks", "images", "assign"];
              this.profileForm = this.formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [''],
                roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rtoZone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                // call: ['', Validators.required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobile1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobile2: [''],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                //  stocks
                sred20mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                sred50mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                sred80mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                swhite20mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                swhite50mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                swhite80mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                syellow20mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                syellow50mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                syellow80mm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                // CERTIFICATE creation
                registrationNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                manufactureYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                chassisNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                engineNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                vehicleMake: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                vehicleModel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                class3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                class4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                hologram: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              });
            } else if (data1 == "uploadStocks") {
              this.creation = "upload stocks";
              this.formVisible = ["stocks"];
              this.profileForm = this.formBuilder.group({
                sred20mm: [''],
                sred50mm: [''],
                sred80mm: [''],
                swhite20mm: [''],
                swhite50mm: [''],
                swhite80mm: [''],
                syellow20mm: [''],
                syellow50mm: [''],
                syellow80mm: [''],
                class3: [''],
                class4: [''],
                hologram: ['']
              });
            } else if (data1 == "assign") {
              this.creation = "Assign stocks to dealer";
              this.formVisible = ["stocks", "assign"];
              this.profileForm = this.formBuilder.group({
                sred20mm: [''],
                sred50mm: [''],
                sred80mm: [''],
                swhite20mm: [''],
                swhite50mm: [''],
                swhite80mm: [''],
                syellow20mm: [''],
                syellow50mm: [''],
                syellow80mm: [''],
                class3: [''],
                class4: [''],
                hologram: ['']
              });
            }

            data = JSON.parse(data);

            if (data == "null" || data == null) {
              // this.profileForm = this.formBuilder.group({
              //   name: ['', Validators.required],
              //   password: ['', Validators.required],
              //   roleName: ['', Validators.required],
              //   rtoZone: ['', Validators.required],
              //   call: ['', Validators.required],
              //   email: ['', Validators.required],
              //   mobile1: ['', Validators.required],
              //   mobile2: [''],
              //   state: ['', Validators.required],
              //   city: ['', Validators.required],
              //   addressLine: ['', Validators.required],
              //   pincode: ['', Validators.required],
              //   //  stocks
              //   sred20mm: ['', Validators.required],
              //   sred50mm: ['', Validators.required],
              //   sred80mm: ['', Validators.required],
              //   swhite20mm: ['', Validators.required],
              //   swhite50mm: ['', Validators.required],
              //   swhite80mm: ['', Validators.required],
              //   syellow20mm: ['', Validators.required],
              //   syellow50mm: ['', Validators.required],
              //   syellow80mm: ['', Validators.required],
              //   // CERTIFICATE creation
              //   registrationNumber: ['', Validators.required],
              //   manufactureYear: ['', Validators.required],
              //   chassisNum: ['', Validators.required],
              //   engineNumber: ['', Validators.required],
              //   vehicleMake: ['', Validators.required],
              //   vehicleModel: ['', Validators.required],
              //   class3: ['', Validators.required],
              //   class4: ['', Validators.required],
              //   hologram: ['', Validators.required],
              // });
              this.selectedRto = 'Select RTO';
              this.selectedDealer = 'Select Role';
            } else {
              this.selectedData = data;
              this.method = 'edit'; // let rtoName;
              // try {
              //   rtoName = JSON.parse(data.rtoZone);
              // } catch (e) {
              //   data.rtoZone = data.rtoZone
              // }

              this.selectedRto = JSON.parse(data.rtoZone).toString();
              this.selectedDealer = data.role.roleName; // this.profileForm.patchValue({
              //   rtoZone:JSON.parse(data.rtoZone),
              // })

              this.profileForm = this.formBuilder.group({
                name: [data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                password: [data.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                roleName: [data.role.roleName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                rtoZone: [JSON.parse(data.rtoZone)],
                call: [data.cell],
                email: [data.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobile1: [data.mobile1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                mobile2: [data.mobile2],
                state: [data.state, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                city: [data.city, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                addressLine: [data.addressLine, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                pincode: [data.pincode, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                tradecertificateno: [data.tradecertificateno, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                //  stocks
                sred20mm: [data.sred20mm],
                sred50mm: [data.sred50mm],
                sred80mm: [data.sred80mm],
                swhite20mm: [data.swhite20mm],
                swhite50mm: [data.swhite50mm],
                swhite80mm: [data.swhite80mm],
                syellow20mm: [data.syellow20mm],
                syellow50mm: [data.syellow50mm],
                syellow80mm: [data.syellow80mm],
                // CERTIFICATE creation
                registrationNumber: [data.registrationNumber],
                manufactureYear: [data.manufactureYear],
                chassisNum: [data.chassisNum],
                engineNumber: [data.engineNumber],
                vehicleMake: [data.vehicleMake],
                vehicleModel: [data.vehicleModel],
                class3: [data.class3],
                class4: [data.class4],
                hologram: [data.hologram]
              });
            }
          }
        }]);

        return CommonFormPage;
      }();

      CommonFormPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_7__["AjaxService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonServices"]
        }, {
          type: _services_tapestock_service__WEBPACK_IMPORTED_MODULE_10__["TapestockService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
        }, {
          type: _services_assert_json_service__WEBPACK_IMPORTED_MODULE_8__["AssertJsonService"]
        }];
      };

      CommonFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./common-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/common-form/common-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./common-form.page.scss */
        "./src/app/common-form/common-form.page.scss"))["default"]]
      })], CommonFormPage);
      /***/
    },

    /***/
    "./src/app/services/assert-json.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/assert-json.service.ts ***!
      \*************************************************/

    /*! exports provided: AssertJsonService */

    /***/
    function srcAppServicesAssertJsonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssertJsonService", function () {
        return AssertJsonService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AssertJsonService = function AssertJsonService() {
        _classCallCheck(this, AssertJsonService);

        this.assertJson = {
          "AMW_2518TRUCK": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "15",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "AMW_BULKER": {
            "sred50mm": "8",
            "swhite50mm": "7",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "AMW_TAILER": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "AMW_TANKER": {
            "sred50mm": "5",
            "swhite50mm": "6",
            "syellow50mm": "21",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "APE_APEAUTO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.1",
            "swhite20mm": "1.4",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_1214CONTAINER": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "21",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_1618CONTAINER": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "21",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_3516TAILER": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_3516TANKER": {
            "sred50mm": "5",
            "swhite50mm": "2.5",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_3517TAILER": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "22",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_3518TANKER": {
            "sred50mm": "5",
            "swhite50mm": "2.5",
            "syellow50mm": "21",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL1112": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL1212": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL1214SMART": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL1612": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL1613": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL1613TIPPER": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "10",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL1616": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL2513": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL2516": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL2516TIPPER": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "10",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL2518": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL3116": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL3118": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL3718": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_AL4018": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "25",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALBOSS1212LE": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "12",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALCG": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALCT1613": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALCTTIPPER1616XL": {
            "sred50mm": "2.5",
            "swhite50mm": "2.8",
            "syellow50mm": "10.5",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALECOMET912": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALECOMET1012": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALFSV3/46LYNX": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALFV4923": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALLYNX": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPARTNER": {
            "sred50mm": "1.75",
            "swhite50mm": "1.75",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPEV1/38": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "12",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSV": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSV4/38": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSV4/88": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSV4/89": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSV4/161": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSV4/185": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSV4/186": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALPSVVIKING4/83": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALTAURUS2516": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALTUSKERSUPER2214": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALU2518": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALU2523": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ALVIKINGBUS": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_BOSS1115CONTAINER": {
            "sred50mm": "9",
            "swhite50mm": "2.25",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_BOSS1212": {
            "sred50mm": "3",
            "swhite50mm": "3",
            "syellow50mm": "21",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_COMET1611": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_DOST": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "8",
            "class3": "0",
            "class4": "0",
            "sred20mm": "2",
            "swhite20mm": "2",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ECOMET1109": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_ECOMET1212": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASHOKLEYLAND_VIKINGALPSV4/247": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ASOAMOTOR_AMW2518": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ATUL_ATUL": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "2",
            "swhite20mm": "2",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "BAJAJTEMPO_TEMPOTRAXJUDO/GAMA": {
            "sred50mm": "1.5",
            "swhite50mm": "1.5",
            "syellow50mm": "6.5",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "BAJAJ_BAJAJAUTO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.25",
            "swhite20mm": "1.4",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "BAJAJ_BAJAJTEMPO": {
            "sred50mm": "1.5",
            "swhite50mm": "1.5",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "BAJAJ_TRAVELLERCRUSIER": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "9",
            "class3": "0",
            "class4": "0",
            "sred20mm": "2",
            "swhite20mm": "2",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_BHARATBENZ914R": {
            "sred50mm": "2.15",
            "swhite50mm": "2.15",
            "syellow50mm": "12.3",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_BHARATBENZ1214R": {
            "sred50mm": "4",
            "swhite50mm": "2",
            "syellow50mm": "12",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_BHARATBENZ1617TANKER": {
            "sred50mm": "1.8",
            "swhite50mm": "1.8",
            "syellow50mm": "13",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_BHARATBENZ2523C": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "10",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_BHARATBENZ2528": {
            "sred50mm": "2.5",
            "swhite50mm": "2",
            "syellow50mm": "14",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_TTBULKER": {
            "sred50mm": "8",
            "swhite50mm": "2.5",
            "syellow50mm": "30",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_TTTAILER": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "DAIMLERINDIACOMERCIALVEHICLE_TTTANKER": {
            "sred50mm": "5",
            "swhite50mm": "2.5",
            "syellow50mm": "21",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "FORCEMOTOR_FORCETRAVELER": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "9",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "FORCEMOTOR_TEMPOTRAVELLER": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "12",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "FORCEMOTOR_TRUMP40PICKUP": {
            "sred50mm": "1.5",
            "swhite50mm": "1.5",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "FORD_FIGO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "GENERALMOTORS_CHEVEROLETBEAT": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "GENERALMOTORS_CHEVEROLETENJOY": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "GENERALMOTORS_CHEVEROLETSAIL": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "GENERALMOTORS_CHEVEROLETTAVERA": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HINDUSTANMOTOR_AMBASSDOR": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HONDA_AMAZE": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HONDA_CITY": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HONDA_MOBILIO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HYUNDAI_EON": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HYUNDAI_GRAND": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HYUNDAI_SANTRO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HYUNDAI_XCENT": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "HYUNDAI_i10": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "ISUZUMOTORS_DMAXFLATDECK": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_BLAZO": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_BOLERO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_BOLEROPICKUP": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_DI3200": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "8",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_GENIO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_JEETO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_KUV100": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_LOADKING": {
            "sred50mm": "1.5",
            "swhite50mm": "1.5",
            "syellow50mm": "7",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_LOGAN": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_MARSHAL2000": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "5",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_MAXICAB": {
            "sred50mm": "1.75",
            "swhite50mm": "1.75",
            "syellow50mm": "9",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_MAXXIMO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_MAXXMAXITRUCK": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_NAVISTER": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_SCORPIO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_SUPROMINIVAN": {
            "sred50mm": "1.5",
            "swhite50mm": "1.5",
            "syellow50mm": "7",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_TOURISTER": {
            "sred50mm": "1.75",
            "swhite50mm": "1.75",
            "syellow50mm": "10",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_TRACTOR": {
            "sred50mm": "1.5",
            "swhite50mm": "1.5",
            "syellow50mm": "3",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_TRACTORwithSHORTTRAILER": {
            "sred50mm": "1.8",
            "swhite50mm": "1",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_TRACTORwithTRAILER": {
            "sred50mm": "2.5",
            "swhite50mm": "1.5",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_TUV300": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_VERITO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_XUV500": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAHINDRA&MAHINDRA_XYLO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAN_CLA16.220": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "12",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAN_CLABULKER": {
            "sred50mm": "8",
            "swhite50mm": "2.5",
            "syellow50mm": "30",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAN_CLATAILER": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAN_CLATANKER": {
            "sred50mm": "5",
            "swhite50mm": "4",
            "syellow50mm": "23",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MAN_MAN25.250TRUCK": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_ALTOK10": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_CELERIO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_EECO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_ERTIGA": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_ESTEEM": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_GYPSY": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_OMINI": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_RITZ": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_SUPERCARRY": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.5",
            "swhite20mm": "1.5",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_SWIFT": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_SWIFTDZIRE": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_VERSA": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "MARUTHISUZUKI_WAGONR": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "NISSAN_DATSUNGO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "NISSAN_LODGY": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.5",
            "swhite20mm": "1.5",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "NISSAN_MICRA": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "NISSAN_SUNNY": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "PIAGGO_APE": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.25",
            "swhite20mm": "1.25",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "PIAGGO_APECARGO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.5",
            "swhite20mm": "1.5",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "PIAGGO_APEXTRALD": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.5",
            "swhite20mm": "1.5",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "PIAGGO_PORTER600": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.3",
            "swhite20mm": "1.3",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "RENAULT_KWID": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "RENAULT_LODGY": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SCHWINGSTETTER(INDIA)PVTLTD_SLM4000": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_OMNIBUS": {
            "sred50mm": "1.5",
            "swhite50mm": "1.5",
            "syellow50mm": "12",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_SAMRAT": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_SAMRATTURBO": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_SARTAJ": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_SMLISUZUWV26T3500": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_SMLMAXICAB": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_SUPER": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_T3500": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_T3500BUS": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_WT48E": {
            "sred50mm": "2",
            "swhite50mm": "1.5",
            "syellow50mm": "10",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "SWARAJMAZDA_ZT54": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA207": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "2",
            "swhite20mm": "2",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA218": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.3",
            "swhite20mm": "1.3",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA407": {
            "sred50mm": "2",
            "swhite50mm": "1.7",
            "syellow50mm": "8",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA410": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "8",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA709": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "10",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA709STARBUS": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "10",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA712": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "14",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA712STARBUS": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA909": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "10.5",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA912": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1109": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1210": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1510": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1512": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1612": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1613": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1615": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA1616": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA2515": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA2516": {
            "sred50mm": "2",
            "swhite50mm": "2.3",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA2518": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3118": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "20",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3516": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3516BULKER": {
            "sred50mm": "8",
            "swhite50mm": "2.5",
            "syellow50mm": "30",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3516TANKAR": {
            "sred50mm": "5",
            "swhite50mm": "2.5",
            "syellow50mm": "21",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3516TRAILAR": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "21",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3518BULKER": {
            "sred50mm": "8",
            "swhite50mm": "2.5",
            "syellow50mm": "30",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3518TANKAR": {
            "sred50mm": "5",
            "swhite50mm": "2.5",
            "syellow50mm": "21",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3518TRAILAR": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA3718": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA4018": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "25",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA4018BULKER": {
            "sred50mm": "8",
            "swhite50mm": "2.5",
            "syellow50mm": "30",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA4018TANKAR": {
            "sred50mm": "5",
            "swhite50mm": "2.5",
            "syellow50mm": "21",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATA4018TRAILAR": {
            "sred50mm": "2.5",
            "swhite50mm": "2.5",
            "syellow50mm": "28",
            "class3": "0",
            "class4": "1",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAACE": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "2",
            "swhite20mm": "2",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATABOLT": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATACITYRIDEBUS": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAINDICA": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAINDIGO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATALPT1412": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "12",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATALPT1612": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAMAGIC": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "2",
            "swhite20mm": "2",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAMAGICIRISH": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAMARCOPOLOSTARBUS": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATASUMO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATASUPERACE": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATATIAGO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAULTRA912": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAULTRA1012": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAWINGER": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAXENONPICKUP": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.5",
            "swhite20mm": "1.5",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TATAMOTORS_TATAZEST": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TOYOTAKIRLOKAR_ETIOS": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TOYOTAKIRLOKAR_ETIOSLIVA": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TOYOTAKIRLOKAR_INNOVA": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.75",
            "swhite20mm": "1.75",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "TVS_AUTO": {
            "sred50mm": "0",
            "swhite50mm": "0",
            "syellow50mm": "0",
            "class3": "0",
            "class4": "0",
            "sred20mm": "1.1",
            "swhite20mm": "1.4",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.50": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.50CBUS": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "8",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.50DBUS": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.59": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.60": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.70": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.75": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.80": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.90": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER10.95": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER11.10": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER11.12": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER20.15": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER20.16": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHER30.25": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHERLGVOLD": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "10",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHERMAXICAB": {
            "sred50mm": "2.5",
            "swhite50mm": "1.75",
            "syellow50mm": "10.5",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHERMITSUBISHICANTER": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "16",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHERPRO1049": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "7",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHERPRO5016": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "18",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_EICHERTERRA16": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "20",
            "class3": "1",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          },
          "VECOMMERCIAL_MOTORDVAN150HP": {
            "sred50mm": "2",
            "swhite50mm": "2",
            "syellow50mm": "6",
            "class3": "0",
            "class4": "0",
            "sred20mm": "0",
            "swhite20mm": "0",
            "sred80mm": "0",
            "swhite80mm": "0",
            "syellow20mm": "0",
            "syellow80mm": "0",
            "hologram": "0"
          }
        };
      };

      AssertJsonService.ctorParameters = function () {
        return [];
      };

      AssertJsonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AssertJsonService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-form-common-form-module-es5.js.map