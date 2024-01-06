(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-count-dashboard-count-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-count/dashboard-count.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-count/dashboard-count.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDashboardCountDashboardCountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"myPlatform != 'desktop'\">\n  <ion-toolbar>\n    <ion-row> \n      <ion-menu-button></ion-menu-button> <ion-col size=8 id='title' style=\"align-self: center;\">Dashboard Count</ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"background-Style\">\n<ion-row>\n  <ion-col size=\"12\" *ngIf=\"myPlatform == 'desktop'\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row class=\"day-style\">\n          Statistics\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row class=\"time_style\">\n          {{todayDate}}\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-card class=\"certificate-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n         <ion-row>\n    <ion-col size=\"9\" class=\"certificate-label\">\n     Certificates\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"ribbon\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total.certificates}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-card class=\"qrcode-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"qrcode-label\">\n Qrcodes\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"qr-code-outline\"class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total['qr-code']}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-card class=\"product-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"product-label\">\n products\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"cart\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total.products}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-card class=\"user-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"user-label\">\n users\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"people\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total.users}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n         </ion-row>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-row class=\"day-style\">\n          Today\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-row class=\"time_style\">\n       {{todayDate}}\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-card class=\"certificate-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n         <ion-row>\n    <ion-col size=\"9\" class=\"certificate-label\">\n     Certificates\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"ribbon\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.today.certificates}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-card class=\"qrcode-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"qrcode-label\">\n Qrcodes\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"qr-code-outline\"class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.today['qr-code']}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n         </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-row class=\"day-style\">\n          Yesterday\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-row class=\"time_style\">\n          {{yesDate}}\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-card class=\"certificate-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n         <ion-row>\n    <ion-col size=\"9\" class=\"certificate-label\">\n     Certificates\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"ribbon\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.yesterday.certificates}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-card class=\"qrcode-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"qrcode-label\">\n Qrcodes\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"qr-code-outline\"class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.yesterday['qr-code']}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n         </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n\n  <ion-col size=\"12\" *ngIf=\"myPlatform != 'desktop'\">\n \n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row class=\"day-style\">\n          Statistics\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row class=\"mob_time_style\">\n          {{todayDate}}\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card class=\"certificate-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n         <ion-row>\n    <ion-col size=\"9\" class=\"certificate-label\">\n     Certificates\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"ribbon\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total.certificates}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-card class=\"qrcode-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"qrcode-label\">\n Qrcodes\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"qr-code-outline\"class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total['qr-code']}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-card class=\"product-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"product-label\">\n products\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"cart\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total.products}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-card class=\"user-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"user-label\">\n users\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"people\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.total.users}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n         </ion-row>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row class=\"day-style\">\n          Today\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row class=\"mob_time_style\">\n       {{todayDate}}\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card class=\"certificate-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n         <ion-row>\n    <ion-col size=\"9\" class=\"certificate-label\">\n     Certificates\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"ribbon\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.today.certificates}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-card class=\"qrcode-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"qrcode-label\">\n Qrcodes\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"qr-code-outline\"class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.today['qr-code']}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n         </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row class=\"day-style\">\n          Yesterday\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row class=\"mob_time_style\">\n          {{yesDate}}\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card class=\"certificate-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n         <ion-row>\n    <ion-col size=\"9\" class=\"certificate-label\">\n     Certificates\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"ribbon\" class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.yesterday.certificates}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-card class=\"qrcode-card\">\n               <ion-row>\n                 <ion-col size=\"12\">\n<ion-row>\n  <ion-col size=\"9\" class=\"qrcode-label\">\n Qrcodes\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-icon name=\"qr-code-outline\"class=\"icon-style\"></ion-icon>\n  </ion-col>\n</ion-row>\n<ion-row class=\"count-style\">\n  {{dashboarddata.yesterday['qr-code']}}\n</ion-row>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n         </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-row>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/dashboard-count/dashboard-count-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/dashboard-count/dashboard-count-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: DashboardCountPageRoutingModule */

    /***/
    function srcAppDashboardCountDashboardCountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardCountPageRoutingModule", function () {
        return DashboardCountPageRoutingModule;
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


      var _dashboard_count_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-count.page */
      "./src/app/dashboard-count/dashboard-count.page.ts");

      var routes = [{
        path: '',
        component: _dashboard_count_page__WEBPACK_IMPORTED_MODULE_3__["DashboardCountPage"]
      }];

      var DashboardCountPageRoutingModule = function DashboardCountPageRoutingModule() {
        _classCallCheck(this, DashboardCountPageRoutingModule);
      };

      DashboardCountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DashboardCountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/dashboard-count/dashboard-count.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/dashboard-count/dashboard-count.module.ts ***!
      \***********************************************************/

    /*! exports provided: DashboardCountPageModule */

    /***/
    function srcAppDashboardCountDashboardCountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardCountPageModule", function () {
        return DashboardCountPageModule;
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


      var _dashboard_count_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-count-routing.module */
      "./src/app/dashboard-count/dashboard-count-routing.module.ts");
      /* harmony import */


      var _dashboard_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard-count.page */
      "./src/app/dashboard-count/dashboard-count.page.ts");

      var DashboardCountPageModule = function DashboardCountPageModule() {
        _classCallCheck(this, DashboardCountPageModule);
      };

      DashboardCountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_count_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardCountPageRoutingModule"]],
        declarations: [_dashboard_count_page__WEBPACK_IMPORTED_MODULE_6__["DashboardCountPage"]]
      })], DashboardCountPageModule);
      /***/
    },

    /***/
    "./src/app/dashboard-count/dashboard-count.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/dashboard-count/dashboard-count.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDashboardCountDashboardCountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#background-Style {\n  --background:#f8f9fc ;\n}\n\n.day-style {\n  margin: 20px 0px 0px 30px;\n  font-size: 24px;\n  color: #5c5c6a;\n}\n\n.time_style {\n  font-weight: 500;\n  place-content: end;\n  color: #5778e2;\n  margin: 25px 30px 0px 0px;\n  font-size: 15px;\n}\n\n.mob_time_style {\n  font-weight: 500;\n  place-content: end;\n  color: #5778e2;\n  margin: 25px 15px 0px 0px;\n  font-size: 13px;\n}\n\n.certificate-card {\n  border-bottom: 3px solid #4e73df;\n  width: 95%;\n  height: 100%;\n  background: white;\n}\n\n.qrcode-card {\n  border-bottom: 3px solid #1cc88a;\n  width: 95%;\n  height: 100%;\n  background: white;\n}\n\n.product-card {\n  border-bottom: 3px solid #36b9cc;\n  width: 95%;\n  height: 100%;\n  background: white;\n}\n\n.user-card {\n  border-bottom: 3px solid #f6c23e;\n  width: 95%;\n  height: 100%;\n  background: white;\n}\n\n.certificate-label {\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #4e73df;\n  padding: 0px 0px 0px 15px;\n  margin: 15px 0px 0px 0px;\n}\n\n.qrcode-label {\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #1cc88a;\n  padding: 0px 0px 0px 15px;\n  margin: 15px 0px 0px 0px;\n}\n\n.product-label {\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #36b9cc;\n  padding: 0px 0px 0px 15px;\n  margin: 15px 0px 0px 0px;\n}\n\n.user-label {\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #f6c23e;\n  padding: 0px 0px 0px 15px;\n  margin: 15px 0px 0px 0px;\n}\n\n.icon-style {\n  font-size: 34px;\n  margin: 15px 0px 0px 0px;\n  color: #dddfed;\n}\n\n.count-style {\n  font-size: 20px;\n  font-weight: bold;\n  margin: -22px 0px 0px 15px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLWNvdW50L2Rhc2hib2FyZC1jb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtBQUFKOztBQUVBO0VBRUkseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUVBO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFFSSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBRUksZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFFSSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDRix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFFQTtFQUVJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFFQTtFQUVJLGVBQUE7RUFDRix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFFQTtFQUVJLGVBQUE7RUFDRix5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFBRjs7QUFFQTtFQUVJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLWNvdW50L2Rhc2hib2FyZC1jb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZC1TdHlsZVxue1xuICAgIC0tYmFja2dyb3VuZDojZjhmOWZjXG59XG4uZGF5LXN0eWxlXG57XG4gICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMzBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM1YzVjNmE7XG59XG4udGltZV9zdHlsZVxue1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGxhY2UtY29udGVudDplbmQ7XG4gICAgY29sb3I6ICM1Nzc4ZTI7XG4gICAgbWFyZ2luOiAyNXB4IDMwcHggMHB4IDBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4ubW9iX3RpbWVfc3R5bGVcbntcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBsYWNlLWNvbnRlbnQ6ZW5kO1xuICAgIGNvbG9yOiAjNTc3OGUyO1xuICAgIG1hcmdpbjogMjVweCAxNXB4IDBweCAwcHg7IFxuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jZXJ0aWZpY2F0ZS1jYXJkXG57XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0ZTczZGY7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ucXJjb2RlLWNhcmRcbntcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFjYzg4YTtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5wcm9kdWN0LWNhcmRcbntcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzM2YjljYztcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi51c2VyLWNhcmRcbntcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y2YzIzZTtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jZXJ0aWZpY2F0ZS1sYWJlbFxue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0ZTczZGY7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHg7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4IDBweDtcbn1cbi5xcmNvZGUtbGFiZWxcbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMWNjODhhO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHg7XG4gICAgbWFyZ2luOiAxNXB4IDBweCAwcHggMHB4O1xufVxuLnByb2R1Y3QtbGFiZWxcbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzZiOWNjO1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNXB4O1xuICBtYXJnaW46IDE1cHggMHB4IDBweCAwcHg7XG59XG4udXNlci1sYWJlbFxue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmNmMyM2U7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHg7XG4gIG1hcmdpbjogMTVweCAwcHggMHB4IDBweDtcbn1cbi5pY29uLXN0eWxlXG57XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIG1hcmdpbjogMTVweCAwcHggMHB4IDBweDtcbiAgICBjb2xvcjogI2RkZGZlZDtcbn1cbi5jb3VudC1zdHlsZVxue1xuZm9udC1zaXplOiAyMHB4O1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5tYXJnaW46IC0yMnB4IDBweCAwcHggMTVweDtcbmNvbG9yOiBibGFjaztcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/dashboard-count/dashboard-count.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/dashboard-count/dashboard-count.page.ts ***!
      \*********************************************************/

    /*! exports provided: DashboardCountPage */

    /***/
    function srcAppDashboardCountDashboardCountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardCountPage", function () {
        return DashboardCountPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/ajax.service */
      "./src/app/services/ajax.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");

      var DashboardCountPage = /*#__PURE__*/function () {
        function DashboardCountPage(commonService, ajaxService, menuController, platform) {
          _classCallCheck(this, DashboardCountPage);

          this.commonService = commonService;
          this.ajaxService = ajaxService;
          this.menuController = menuController;
          this.platform = platform;
          this.dashboarddata = {
            "total": {
              "certificates": 0,
              "qrcode": 0,
              "products": 0,
              "users": 0
            },
            "today": {
              "certificates": 0,
              "qrcode": 0
            },
            "yesterday": {
              "certificates": 0,
              "qrcode": 0
            }
          };
        }

        _createClass(DashboardCountPage, [{
          key: "tConvert",
          value: function tConvert(time) {
            // Check correct time format and split into components
            time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

            if (time.length > 1) {
              // If time format correct
              time = time.slice(1); // Remove full string match value

              time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM

              time[0] = +time[0] % 12 || 12; // Adjust hours
            }

            return time.join(''); // return adjusted time or original string
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.commonService.presentLoader();
            this.menuController.enable(true);
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ServerUrl"].live + "/dashboard/dashboardcount";
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
              _this.dashboarddata = res;

              _this.commonService.updateDashboard(res);

              _this.commonService.dismissLoader();
            });
            var currentdate = new Date();
            var datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " " + this.tConvert(currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds());
            this.todayDate = datetime;
            var yesdatetime = new Date(Date.now() - 864e5);
            var ydatetime = yesdatetime.getDate() + "/" + (yesdatetime.getMonth() + 1) + "/" + yesdatetime.getFullYear();
            this.yesDate = ydatetime;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myPlatform = this.platform.platforms()[0];

            if (this.myPlatform == 'tablet') {
              this.myPlatform = 'desktop';
            }
          }
        }]);

        return DashboardCountPage;
      }();

      DashboardCountPage.ctorParameters = function () {
        return [{
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServices"]
        }, {
          type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      DashboardCountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-count',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dashboard-count.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-count/dashboard-count.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dashboard-count.page.scss */
        "./src/app/dashboard-count/dashboard-count.page.scss"))["default"]]
      })], DashboardCountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-count-dashboard-count-module-es5.js.map