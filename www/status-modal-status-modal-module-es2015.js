(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-modal-status-modal-module"],{

/***/ "./src/app/rto-dashboard/status-modal/status-modal-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/rto-dashboard/status-modal/status-modal-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: StatusModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModalPageRoutingModule", function() { return StatusModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _status_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status-modal.page */ "./src/app/rto-dashboard/status-modal/status-modal.page.ts");




const routes = [
    {
        path: '',
        component: _status_modal_page__WEBPACK_IMPORTED_MODULE_3__["StatusModalPage"]
    }
];
let StatusModalPageRoutingModule = class StatusModalPageRoutingModule {
};
StatusModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatusModalPageRoutingModule);



/***/ }),

/***/ "./src/app/rto-dashboard/status-modal/status-modal.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/rto-dashboard/status-modal/status-modal.module.ts ***!
  \*******************************************************************/
/*! exports provided: StatusModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModalPageModule", function() { return StatusModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _status_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-modal-routing.module */ "./src/app/rto-dashboard/status-modal/status-modal-routing.module.ts");
/* harmony import */ var _status_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-modal.page */ "./src/app/rto-dashboard/status-modal/status-modal.page.ts");







let StatusModalPageModule = class StatusModalPageModule {
};
StatusModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _status_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusModalPageRoutingModule"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_status_modal_page__WEBPACK_IMPORTED_MODULE_6__["StatusModalPage"]]
    })
], StatusModalPageModule);



/***/ })

}]);
//# sourceMappingURL=status-modal-status-modal-module-es2015.js.map