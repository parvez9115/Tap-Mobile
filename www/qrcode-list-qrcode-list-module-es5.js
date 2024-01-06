(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qrcode-list-qrcode-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/qrcode-list/qrcode-list.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrcode-list/qrcode-list.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppQrcodeListQrcodeListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Qrcode List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"rowSpacing\">\n    <ion-item class=\"searchInput\">\n      <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\n      <ion-input (keyup)=\"updateFilter($event)\" [(ngModel)]=\"userName\" placeholder=\"Search\">\n      </ion-input>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n    <ion-col size=12>\n    <app-ngx-table-rto #myTable  [datalist]=\"member\" [valid]=\"valid\" (selectedRowData)=\"selectedRowRecived($event)\"></app-ngx-table-rto>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/qrcode-list/qrcode-list-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/qrcode-list/qrcode-list-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: QrcodeListPageRoutingModule */

    /***/
    function srcAppQrcodeListQrcodeListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrcodeListPageRoutingModule", function () {
        return QrcodeListPageRoutingModule;
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


      var _qrcode_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qrcode-list.page */
      "./src/app/qrcode-list/qrcode-list.page.ts");

      var routes = [{
        path: '',
        component: _qrcode_list_page__WEBPACK_IMPORTED_MODULE_3__["QrcodeListPage"]
      }];

      var QrcodeListPageRoutingModule = function QrcodeListPageRoutingModule() {
        _classCallCheck(this, QrcodeListPageRoutingModule);
      };

      QrcodeListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QrcodeListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/qrcode-list/qrcode-list.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/qrcode-list/qrcode-list.module.ts ***!
      \***************************************************/

    /*! exports provided: QrcodeListPageModule */

    /***/
    function srcAppQrcodeListQrcodeListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrcodeListPageModule", function () {
        return QrcodeListPageModule;
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


      var _qrcode_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qrcode-list-routing.module */
      "./src/app/qrcode-list/qrcode-list-routing.module.ts");
      /* harmony import */


      var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared-module/shared.module */
      "./src/app/shared-module/shared.module.ts");
      /* harmony import */


      var _qrcode_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./qrcode-list.page */
      "./src/app/qrcode-list/qrcode-list.page.ts");
      /* harmony import */


      var _all_qrcode_all_qrcode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./all-qrcode/all-qrcode.component */
      "./src/app/qrcode-list/all-qrcode/all-qrcode.component.ts");

      var QrcodeListPageModule = function QrcodeListPageModule() {
        _classCallCheck(this, QrcodeListPageModule);
      };

      QrcodeListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qrcode_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrcodeListPageRoutingModule"]],
        declarations: [_qrcode_list_page__WEBPACK_IMPORTED_MODULE_7__["QrcodeListPage"], _all_qrcode_all_qrcode_component__WEBPACK_IMPORTED_MODULE_8__["AllQrcodeComponent"]],
        entryComponents: [_all_qrcode_all_qrcode_component__WEBPACK_IMPORTED_MODULE_8__["AllQrcodeComponent"]]
      })], QrcodeListPageModule);
      /***/
    },

    /***/
    "./src/app/qrcode-list/qrcode-list.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/qrcode-list/qrcode-list.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppQrcodeListQrcodeListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".rowSpacing {\n  padding: 10px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXJjb2RlLWxpc3QvcXJjb2RlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9xcmNvZGUtbGlzdC9xcmNvZGUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93U3BhY2luZ3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/qrcode-list/qrcode-list.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/qrcode-list/qrcode-list.page.ts ***!
      \*************************************************/

    /*! exports provided: QrcodeListPage */

    /***/
    function srcAppQrcodeListQrcodeListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrcodeListPage", function () {
        return QrcodeListPage;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/ajax.service */
      "./src/app/services/ajax.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");

      var QrcodeListPage = /*#__PURE__*/function () {
        function QrcodeListPage(ajaxService, commonService) {
          _classCallCheck(this, QrcodeListPage);

          this.ajaxService = ajaxService;
          this.commonService = commonService;
          this.member = [];
          this.offset = 0;
          this.valid = false;
          this.limit = 10;
        }

        _createClass(QrcodeListPage, [{
          key: "gettotal",
          value: function gettotal() {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ServerUrl"].live + '/qrcodegeneration/qrcodecount';
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
              console.log(res);
              localStorage.setItem('Qrcount', res.qrcodecount);
            });
          } // brandname: "ORAFOL"
          // createdDate: "20-04-2022"
          // createdby: "SPA-00000001"
          // lastupdatedBy: "2022-04-20T12:42:17.437Z"
          // lastupdatedDate: "20-04-2022"
          // lotnumber: 499
          // message: ""
          // mobileno: "7229023198"
          // productname: "Avery - CT"
          // qrcode: "20042022.499-0"
          // qrcodeimg: "http://testing.apmkingstrack.com:8082/tape/qrcodegeneration/scan?QRCode=20042022.499-0"
          // qrid: 35
          // quantity: 1
          // renewal: "y"
          // rtoZone: "MH - 01"
          // status: "Verified"

        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            if (event.target.value != "") {
              var val = event.target.value.toLowerCase();
              var temp = this.temp.filter(function (d) {
                if (d.brandname.toLowerCase().indexOf(val) !== -1) return d.brandname.toLowerCase().indexOf(val) !== -1;else if (d.mobileno.toLowerCase().indexOf(val) !== -1) return d.mobileno.toLowerCase().indexOf(val) !== -1;else if (d.lotcount.toString().toLowerCase().indexOf(val) !== -1) return d.lotcount.toString().toLowerCase().indexOf(val) !== -1;else if (d.productname.toLowerCase().indexOf(val) !== -1) return d.productname.toLowerCase().indexOf(val) !== -1;else if (d.createdDate.toLowerCase().indexOf(val) !== -1) return d.createdDate.toLowerCase().indexOf(val) !== -1;
              });
              this.member = temp;
            } else {
              this.member = this.temp;
            } // Whenever the filter changes, always go back to the first page


            this.table.offset = 0;
          }
        }, {
          key: "getQrcode",
          value: function getQrcode() {
            var _this = this;

            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["ServerUrl"].live + '/qrcodegeneration/getAllQRCode?offset=' + this.offset + '&limit=' + this.limit;
            this.ajaxService.ajaxGet(url).subscribe(function (res) {
              _this.member = res;
              _this.temp = res;

              _this.commonService.dismissLoader();
            });
          }
        }, {
          key: "selectedRowRecived",
          value: function selectedRowRecived(data) {
            console.log(data);
            this.offset = this.offset + data;
            this.getQrcode(); // if(this.search){
            //   this.submit('')
            // }else{
            //   this.getLoginUserList('')
            // }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getQrcode();
            this.gettotal();
          }
        }]);

        return QrcodeListPage;
      }();

      QrcodeListPage.ctorParameters = function () {
        return [{
          type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServices"]
        }];
      };

      QrcodeListPage.propDecorators = {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['myTable']
        }]
      };
      QrcodeListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qrcode-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./qrcode-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/qrcode-list/qrcode-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./qrcode-list.page.scss */
        "./src/app/qrcode-list/qrcode-list.page.scss"))["default"]]
      })], QrcodeListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=qrcode-list-qrcode-list-module-es5.js.map