(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-products-add-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-products/add-product/add-product.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-products/add-product/add-product.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  *ngIf=\"myPlatform == 'desktop'\">\n  <ion-toolbar >\n    <ion-row >\n      <ion-col size = 12 style=\"font-size: 20px;margin: 0px 0px 0px 20px;\">\n        <ion-title>Add-Products</ion-title>\n      </ion-col>\n    </ion-row>  \n  </ion-toolbar>\n</ion-header>\n<ion-header *ngIf=\"myPlatform != 'desktop'\">\n  <ion-toolbar >\n    <ion-row> \n    <ion-col size=8 id='title' style=\"align-self: center;font-size: 20px;margin: 0px 0px 0px 20px;\">Add-Products</ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    <form [formGroup]=\"products\">\n    <ion-row>\n      <ion-col size='12' size-md=\"12\" size-lg=\"12\" size-xl=\"12\" size-xxl=\"12\">\n        <ion-label class=\"label_style\">Brand Name:</ion-label>\n        <input  placeholder='Brand Name' formControlName=\"brandName\" class=\"modal_wrapper\" />\n    </ion-col>\n    <ion-col size='12' size-md=\"12\" size-lg=\"12\" size-xl=\"12\" size-xxl=\"12\">\n      <ion-label class=\"label_style\">Product Name:</ion-label>\n      <input  placeholder='Product Name' formControlName=\"productName\" class=\"modal_wrapper\" />\n  </ion-col>\n  <ion-col size='12' size-md=\"12\" size-lg=\"12\" size-xl=\"12\" size-xxl=\"12\">\n    <ion-label class=\"label_style\">COP Number:</ion-label>\n    <input  placeholder='COP Number' formControlName=\"copNumber\" class=\"modal_wrapper\" />\n</ion-col>\n<ion-col size='12' size-md=\"12\" size-lg=\"12\" size-xl=\"12\" size-xxl=\"12\">\n  <ion-label class=\"label_style\">COP Valid Till Date:</ion-label>\n  <ion-datetime class=\"datetime\" max=\"2040-12-09\" formControlName='copValidtill' displayFormat=\"YYYY-MM-DD\"\n  placeholder=\"Select COP Valid Till Date\"></ion-datetime>\n</ion-col>\n<ion-col size='12' size-md=\"12\" size-lg=\"12\" size-xl=\"12\" size-xxl=\"12\">\n  <input  type=\"file\" class=\"documents\"   ng2FileSelect [uploader]=\"productImg\" style=\"margin: 10px 0px 0px 7px;\" class=\"modal_wrapper\" />\n</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" style=\"text-align: center !important;\">\n        <ion-button color=\"danger\" [disabled]=\"!products.valid\" (click)=\"submit()\" >submit</ion-button>\n        <ion-button color=\"danger\" (click)=\"closeModel()\" >Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n  </form> \n  </ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-products/add-products.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-products/add-products.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"myPlatform != 'desktop'\">\n  <ion-toolbar>\n    <ion-row> \n      <ion-menu-button style=\"font-size: 24px;\"></ion-menu-button> <ion-col size=8 id='title' style=\"align-self: center;font-size: 17px;font-weight: 100;\">Products</ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-header  *ngIf=\"myPlatform == 'desktop'\">\n  <ion-toolbar>\n    <ion-row >\n      <ion-col size = 12>\n        <ion-title>Products</ion-title>\n      </ion-col>\n    </ion-row>  \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"myPlatform == 'desktop'\">\n      <ion-row class=\"rowSpacing\">\n        <ion-item class=\"searchInput\">\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n          <ion-input (keyup)=\"updateFilter($event)\" [ngModel]='search' placeholder=\"Search\">\n          </ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"text-align: right;\">\n          <ion-button (click)=\"openModel()\">\n            <ion-icon name=\"add\"></ion-icon> Add\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=12>\n          <app-ngx-table (selectedRowData)=\"selectedRowRecived($event)\" (reset)=\"getDatas()\" [datalist]=\"memberList\" ></app-ngx-table>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"myPlatform != 'desktop'\">\n      <ion-row>\n        <ion-item class=\"searchboxmobile\">\n          <ion-icon name=\"search-outline\" slot=\"start\" style=\"margin: -10px 10px 0px 0px;\"></ion-icon>\n          <ion-input style=\"margin: -10px 0px 0px 0px;font-size: 13px;\" (keyup)=\"updateFilter($event)\" [ngModel]='search' placeholder=\"Search\">\n          </ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" *ngFor ='let data of memberList'>\n          <ion-card class=\"product-card ion-activatable\">\n            <ion-row>\n            <ion-col size=\"12\" class=\"plateNo tooltip\">\n              <ion-fab-button size=\"small\" class=\"fab-btn\"  (click)=\"selectedRowRecived(data)\">\n                <ion-icon name=\"create\" id=\"edit-icon\"></ion-icon>\n              </ion-fab-button>\n              <span  class=\"tooltiptext\">Edit</span>\n            </ion-col>\n          </ion-row>\n          <ion-card class=\"product-inner-card ion-activatable\" >\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <ion-row>\n                    <ion-col size=\"4\" style=\"padding-left: 10px;\">\n                      <ion-row>\n                        <ion-col size=\"12\">\n                         Product Name\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col size=\"12\" class=\"data\">\n                          {{data.productname}}\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                   <ion-col size=\"4\" style=\"padding-left: 10px;\">\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        Brand Name\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\" class=\"data\">\n                        {{data.brandname}}\n                      </ion-col>\n                    </ion-row>\n                 </ion-col>\n                 <ion-col size=\"4\">\n                  <ion-row>\n                    <ion-col size=\"12\">\n                     createdDate\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\" class=\"data\">\n                      {{data.createdDate.substring(0, 10)}}\n                    </ion-col>\n                  </ion-row>\n               </ion-col>\n                  </ion-row>\n                  <ion-row >\n                    <ion-col size=\"4\" style=\"padding-left: 10px;\">\n                      <ion-row>\n                        <ion-col size=\"12\" >\n                         Valid Date\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                       <ion-col size=\"12\" class=\"data\" >\n                        {{data.copvalidtill}}\n                       </ion-col>\n                     </ion-row>\n                    </ion-col>\n                    <ion-col size=\"4\" style=\"padding-left: 10px;\">\n                      <ion-row>\n                        <ion-col size=\"12\">\n                         Product Id\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col size=\"12\" class=\"data\">\n                          {{data.productid}}\n                        </ion-col>\n                      </ion-row>\n                   </ion-col>\n                    <ion-col size=\"4\" style=\"padding-left: 10px;\">\n                      <ion-row>\n                        <ion-col size=\"12\">\n                          Status\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col size=\"12\" class=\"data\">\n                          <button *ngIf=\"data.status\"  [ngClass]=\"data.status? 'activate_button' : 'deactivate_button'\"   (click)=\"update(data)\" >Activate</button>\n                          <button  *ngIf=\"data.status == false\"  [ngClass]=\"data.status ? 'activate_button' : 'deactivate_button'\"   (click)=\"update(data)\" >Deactivate</button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col size=\"2\" style=\"padding-left: 10px;text-align: center;\">\n\n                    </ion-col>\n                  </ion-row>\n                  </ion-col>\n              </ion-row>\n              <ion-row id=\"cop-col\">\n                <ion-col size=\"12\">\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        COP Number\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\" class=\"data\">\n                        {{data.copnumber}}\n                      </ion-col>\n                    </ion-row>\n                </ion-col>\n              </ion-row>\n             </ion-card-content>\n             <ion-ripple-effect></ion-ripple-effect>\n          </ion-card>\n          <ion-ripple-effect></ion-ripple-effect>\n        </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-fab class=\"botmRow\" (click)=\"openModel()\">\n        <ion-fab-button style=\"position: fixed;bottom: 43px;right: 15px;--background: #cc2930;\">\n          <ion-icon name=\"add\" class=\"add-icon\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/add-products/add-product/add-product.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/add-products/add-product/add-product.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal_wrapper {\n  padding: 0px 0px 0px 18px;\n  width: 90%;\n  height: 35px;\n  outline-color: #d2d6d2;\n  margin: 10px 0px 0px 25px;\n  font-size: 15px;\n}\n\n.label_style {\n  font-size: 15px;\n  margin: 0px 0px 0px 25px;\n}\n\n.datetime {\n  width: 90%;\n  height: 35px;\n  outline-color: #d2d6d2;\n  margin: 10px 0px 0px 25px;\n  font-size: 15px;\n  border: 1px solid #a39696;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7QUFFSjs7QUFBSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZHVjdHMvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxfd3JhcHBlcntcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxOHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG91dGxpbmUtY29sb3I6IHJnYigyMTAsIDIxNCwgMjEwKTtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5sYWJlbF9zdHlsZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAyNXB4O1xuICAgIH1cbiAgICAuZGF0ZXRpbWUge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG91dGxpbmUtY29sb3I6IHJnYigyMTAsIDIxNCwgMjEwKTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTM5Njk2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHhcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/add-products/add-product/add-product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/add-products/add-product/add-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let AddProductComponent = class AddProductComponent {
    constructor(commonService, ajaxService, modalController, formBuilder) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.type = "text";
        this.productImg = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
    }
    closeModel() {
        this.modalController.dismiss();
    }
    submit() {
        this.commonService.presentLoader();
        console.log(this.products.value);
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["ServerUrl"].live + "/product/productsave";
        var data;
        if (!this.value) {
            if (this.productImg.queue.length != 0) {
                data = { "productid": "", "brandname": this.products.value.brandName, "productname": this.products.value.productName, "copnumber": this.products.value.copNumber, "copvalidtill": this.products.value.copValidtill.slice(0, 10), "tagnumber": "",
                    "productImage": "", "status": true, "createdBy": "SPA-00000001", "createdDate": new Date(),
                    "lastupdatedBy": null, "lastupdatedDate": null };
                const testData = new FormData();
                testData.append("productimage", this.productImg.queue[0]._file);
                testData.append("data", JSON.stringify(data));
                this.ajaxService.ajaxPostWithFile(url, testData).subscribe(res => {
                    if (res) {
                        this.commonService.presentToast('Added Succesfully');
                        this.commonService.dismissLoader();
                    }
                    this.modalController.dismiss();
                });
            }
            else {
                this.commonService.presentToast('Please select a image and try again ');
                this.commonService.dismissLoader();
            }
        }
        else {
            data = this.value;
            data['brandname'] = this.products.value.brandName;
            data['productname'] = this.products.value.productName;
            data['copnumber'] = this.products.value.copNumber;
            data['copvalidtill'] = this.products.value.copValidtill;
            data['createdBy'] = null;
            data['createdDate'] = null;
            data['lastupdatedBy'] = "SPA-00000001";
            data['lastupdatedDate'] = new Date();
            if (this.productImg.queue.length == 0) {
                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["ServerUrl"].live + "/product/productedit";
                this.ajaxService.ajaxPostWithBody(url, data).subscribe(res => {
                    this.commonService.presentToast('Updated Succesfully');
                    this.commonService.dismissLoader();
                    this.modalController.dismiss();
                });
            }
            else {
                const testData = new FormData();
                testData.append("productimage", this.productImg.queue[0]._file);
                testData.append("data", JSON.stringify(data));
                this.ajaxService.ajaxPostWithFile(url, testData).subscribe(res => {
                    if (res) {
                        this.commonService.dismissLoader();
                        this.commonService.presentToast('Added Succesfully');
                    }
                    this.modalController.dismiss();
                });
            }
        }
    }
    ngOnInit() {
        this.createForm();
        if (this.value) {
            this.products.patchValue({
                brandName: this.value.brandname,
                productName: this.value.productname,
                copNumber: this.value.copnumber,
                copValidtill: this.value.copvalidtill
            });
        }
    }
    createForm() {
        this.products = this.formBuilder.group({
            brandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            copNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            copValidtill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
};
AddProductComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonServices"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddProductComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-products/add-product/add-product.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-product.component.scss */ "./src/app/add-products/add-product/add-product.component.scss")).default]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/add-products/add-products-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-products/add-products-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPageRoutingModule", function() { return AddProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-products.page */ "./src/app/add-products/add-products.page.ts");




const routes = [
    {
        path: '',
        component: _add_products_page__WEBPACK_IMPORTED_MODULE_3__["AddProductsPage"]
    }
];
let AddProductsPageRoutingModule = class AddProductsPageRoutingModule {
};
AddProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddProductsPageRoutingModule);



/***/ }),

/***/ "./src/app/add-products/add-products.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-products/add-products.module.ts ***!
  \*****************************************************/
/*! exports provided: AddProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPageModule", function() { return AddProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_products_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-products-routing.module */ "./src/app/add-products/add-products-routing.module.ts");
/* harmony import */ var _add_products_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-products.page */ "./src/app/add-products/add-products.page.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-products/add-product/add-product.component.ts");











let AddProductsPageModule = class AddProductsPageModule {
};
AddProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _add_products_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddProductsPageRoutingModule"],
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        declarations: [_add_products_page__WEBPACK_IMPORTED_MODULE_7__["AddProductsPage"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"]],
        entryComponents: [_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"]]
    })
], AddProductsPageModule);



/***/ }),

/***/ "./src/app/add-products/add-products.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/add-products/add-products.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 320px) and (max-width: 1023px) {\n  * {\n    font-size: 11px;\n    margin: 0;\n    padding: 1px 0px 1px 1px;\n    font-weight: bold;\n  }\n}\n.plateNo {\n  padding: 5px 0px 5px 10px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #2e2c2c;\n  text-align: end;\n}\n.product-card {\n  margin: 10px;\n  padding: 10px;\n  background: #f6f6f6;\n  border-radius: 10px;\n  border-left: 3px solid #cc2930;\n}\n.product-inner-card {\n  padding: 0px;\n  background: #e3dddd;\n  border-radius: 10px;\n  box-shadow: none !important;\n  color: #2e2c2c;\n}\n.data {\n  color: #837373;\n  font-family: sans-serif;\n  font-size: 11px;\n  margin: 0px 0px 0px 5px;\n}\n#cop-col {\n  border-top: 1px dotted #b3a6a6;\n  text-align: center;\n  margin-top: 5px;\n  padding-top: 4px;\n}\n#edit-icon {\n  color: green;\n  font-size: 14px;\n}\n.fab-btn {\n  --background: lavender;\n  --box-shadow: none;\n  position: absolute;\n  top: -11px;\n  right: -3px;\n  height: 22px;\n  width: 22px;\n}\n.fab-btn:hover {\n  --background-hover: #b6b6b6;\n}\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  background-color: transparent;\n  color: black;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: -10px;\n  margin-left: -40px;\n  position: absolute;\n  z-index: 1;\n  font-size: 10px;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.activate_button {\n  background: green;\n  padding: 4px;\n  height: 18px;\n  color: white;\n  border-radius: 5px;\n  font-weight: 600;\n  margin: 0px 0px 0px -3px;\n}\n.deactivate_button {\n  background: red;\n  padding: 4px;\n  height: 18px;\n  color: white;\n  border-radius: 5px;\n  font-weight: 600;\n  margin: 0px 0px 0px -3px;\n}\n.searchboxmobile {\n  margin: 0px 0px 0px 8px;\n  --background: #ede9e9;\n  border-radius: 10px;\n  height: 35px;\n  width: 95%;\n}\n.add-icon {\n  font-size: 32px;\n  color: white;\n}\n.rowSpacing {\n  padding: 10px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3RzL2FkZC1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxTQUFBO0lBQ0Esd0JBQUE7SUFDQSxpQkFBQTtFQUFGO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFFRjtBQUFBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBR0Y7QUFEQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFLRjtBQUhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU1GO0FBSkE7RUFDRSwyQkFBQTtBQU9GO0FBSEE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBTUY7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBTUY7QUFIQTtFQUNFLG1CQUFBO0FBTUY7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBT0Y7QUFMRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNGLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFRRjtBQU5FO0VBQ0ksdUJBQUE7RUFDQyxxQkFBQTtFQUNDLG1CQUFBO0VBQ0MsWUFBQTtFQUNDLFVBQUE7QUFTVjtBQVBJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFVTjtBQVBJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBVU4iLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZHVjdHMvYWRkLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQG1lZGlhKG1pbi13aWR0aDozMjBweClhbmQobWF4LXdpZHRoOjEwMjNweCl7XG4gICp7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxcHggMHB4IDFweCAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiB9XG4ucGxhdGVObyB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoNDYsIDQ0LCA0NCk7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5wcm9kdWN0LWNhcmQge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2NjMjkzMDtcbn1cbi5wcm9kdWN0LWlubmVyLWNhcmQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNlM2RkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYig0NiwgNDQsIDQ0KTtcbn1cbi5kYXRhIHtcbiAgY29sb3I6ICM4MzczNzM7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xufVxuI2NvcC1jb2wge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkICNiM2E2YTY7O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbiNlZGl0LWljb24ge1xuICBjb2xvcjpncmVlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZhYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTFweDtcbiAgcmlnaHQ6IC0zcHg7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG59XG4uZmFiLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2I2YjZiNjtcbn1cblxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5hY3RpdmF0ZV9idXR0b257XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBwYWRkaW5nOiA0cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggLTNweDtcbiAgfVxuICAuZGVhY3RpdmF0ZV9idXR0b257XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDBweCAwcHggMHB4IC0zcHg7XG4gIH1cbiAgLnNlYXJjaGJveG1vYmlsZXtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggOHB4O1xuICAgICAgIC0tYmFja2dyb3VuZDogI2VkZTllOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgIH1cbiAgICAuYWRkLWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5yb3dTcGFjaW5ne1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/add-products/add-products.page.ts":
/*!***************************************************!*\
  !*** ./src/app/add-products/add-products.page.ts ***!
  \***************************************************/
/*! exports provided: AddProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsPage", function() { return AddProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-products/add-product/add-product.component.ts");







let AddProductsPage = class AddProductsPage {
    constructor(commonService, ajaxService, modalController, platform) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.platform = platform;
    }
    getDatas() {
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ServerUrl"].live + "/product/getAllProduct";
        this.ajaxService.ajaxGet(url).subscribe(res => {
            console.log(res);
            this.memberList = res;
            this.defaultvalue = res;
            this.commonService.dismissLoader();
        });
    }
    selectedRowRecived(ev) {
        this.openModel(ev);
    }
    openModel(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
                cssClass: 'custome_fleet',
                componentProps: {
                    value: data
                }
            });
            modal.onDidDismiss().then(() => {
                this.getDatas();
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.getDatas();
    }
    update(selectedCard) {
        // this.updateValue = true
        this.commonService.presentLoader();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ServerUrl"].live + "/product/productstatus";
        let data = { "productid": selectedCard.productid, "status": !selectedCard.status, "reason": "" };
        this.ajaxService.ajaxPostWithBody(url, data).subscribe(res => {
            console.log(res);
            this.commonService.presentToast('Updated Sucessfully');
            this.commonService.dismissLoader();
            // this.reset.emit('')
            this.getDatas();
        });
    }
    updateFilter(event) {
        if (event.target.value != "") {
            this.memberList = this.defaultvalue;
            const val = event.target.value.toLowerCase();
            const temp = this.memberList.filter(function (d) {
                if (d.brandname.toLowerCase().indexOf(val) !== -1)
                    return d.brandname.toLowerCase().indexOf(val) !== -1;
                else if (d.productname.toLowerCase().indexOf(val) !== -1)
                    return d.productname.toLowerCase().indexOf(val) !== -1;
                else if ((d.productid.toString()).toLowerCase().indexOf(val) !== -1)
                    return (d.productid.toString()).toLowerCase().indexOf(val) !== -1;
                else if (d.copnumber.toLowerCase().indexOf(val) !== -1)
                    return d.copnumber.toLowerCase().indexOf(val) !== -1;
                // else if (d.mobile1.toLowerCase().indexOf(val) !== -1)
                //   return d.mobile1.toLowerCase().indexOf(val) !== -1;
            });
            this.memberList = temp;
        }
        else {
            this.memberList = this.defaultvalue;
        }
    }
};
AddProductsPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServices"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
AddProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-products/add-products.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-products.page.scss */ "./src/app/add-products/add-products.page.scss")).default]
    })
], AddProductsPage);



/***/ })

}]);
//# sourceMappingURL=add-products-add-products-module-es2015.js.map