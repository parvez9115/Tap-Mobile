(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vehicle-vehicle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-make/vehicle-make.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-make/vehicle-make.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  vehicle-make works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>vehicle</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/vehicle/vehicle-make/vehicle-make.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/vehicle/vehicle-make/vehicle-make.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS1tYWtlL3ZlaGljbGUtbWFrZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/vehicle/vehicle-make/vehicle-make.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/vehicle/vehicle-make/vehicle-make.component.ts ***!
  \****************************************************************/
/*! exports provided: VehicleMakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleMakeComponent", function() { return VehicleMakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VehicleMakeComponent = class VehicleMakeComponent {
    constructor() { }
    ngOnInit() { }
};
VehicleMakeComponent.ctorParameters = () => [];
VehicleMakeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-make',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicle-make.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle-make/vehicle-make.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicle-make.component.scss */ "./src/app/vehicle/vehicle-make/vehicle-make.component.scss")).default]
    })
], VehicleMakeComponent);



/***/ }),

/***/ "./src/app/vehicle/vehicle-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/vehicle/vehicle-routing.module.ts ***!
  \***************************************************/
/*! exports provided: VehiclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePageRoutingModule", function() { return VehiclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vehicle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle.page */ "./src/app/vehicle/vehicle.page.ts");




const routes = [
    {
        path: '',
        component: _vehicle_page__WEBPACK_IMPORTED_MODULE_3__["VehiclePage"]
    }
];
let VehiclePageRoutingModule = class VehiclePageRoutingModule {
};
VehiclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VehiclePageRoutingModule);



/***/ }),

/***/ "./src/app/vehicle/vehicle.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vehicle/vehicle.module.ts ***!
  \*******************************************/
/*! exports provided: VehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePageModule", function() { return VehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle-routing.module */ "./src/app/vehicle/vehicle-routing.module.ts");
/* harmony import */ var _vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle.page */ "./src/app/vehicle/vehicle.page.ts");
/* harmony import */ var _vehicle_make_vehicle_make_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle-make/vehicle-make.component */ "./src/app/vehicle/vehicle-make/vehicle-make.component.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");







// import { VehicleModelComponent } from './vehicle-model/vehicle-model.component';


let VehiclePageModule = class VehiclePageModule {
};
VehiclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["VehiclePageRoutingModule"],
            _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["VehiclePage"]],
        entryComponents: [_vehicle_make_vehicle_make_component__WEBPACK_IMPORTED_MODULE_7__["VehicleMakeComponent"]]
    })
], VehiclePageModule);



/***/ }),

/***/ "./src/app/vehicle/vehicle.page.scss":
/*!*******************************************!*\
  !*** ./src/app/vehicle/vehicle.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vehicle/vehicle.page.ts":
/*!*****************************************!*\
  !*** ./src/app/vehicle/vehicle.page.ts ***!
  \*****************************************/
/*! exports provided: VehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclePage", function() { return VehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VehiclePage = class VehiclePage {
    constructor() { }
    ngOnInit() {
    }
};
VehiclePage.ctorParameters = () => [];
VehiclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vehicle/vehicle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicle.page.scss */ "./src/app/vehicle/vehicle.page.scss")).default]
    })
], VehiclePage);



/***/ })

}]);
//# sourceMappingURL=vehicle-vehicle-module-es2015.js.map