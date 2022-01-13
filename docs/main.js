(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'four-card-feature-section';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 41, vars: 0, consts: [["id", "main-container"], ["id", "presentation-box"], [1, "h2-first-line"], [1, "h2-second-line"], [1, "p"], ["id", "boxes-section"], ["id", "item-1", 1, "main-box"], [1, "ribbon", "light-blue"], [1, "box-description"], [1, "h3"], ["src", "./assets/icon-supervisor.svg", 1, "item-svg"], ["id", "item-2", 1, "main-box"], [1, "ribbon", "red"], [1, "item-svg", "item-2-svgImg"], ["id", "item-3", 1, "main-box"], [1, "ribbon", "orange"], [1, "item-svg", "item-3-svgImg"], ["id", "item-4", 1, "main-box"], [1, "ribbon", "dark-blue"], [1, "item-svg", "item-4-svgImg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reliable, efficient delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Powered by Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Monitors activity to identify project roadblocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Team Builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Scans our talent network to create the optimal team for your project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Karma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Regularly evaluates our talent to ensure quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Uses data from past projects to provide better delivery estimates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#main-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  font-size: 15px;\n  line-height: 2rem;\n  background-color: #fafafa;\n  color: #4c4e61;\n  font-family: \"Poppins\", sans-serif;\n  \n}\n#main-container[_ngcontent-%COMP%]   p.p[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-weight: 400;\n  color: #a3a5ae;\n}\n#main-container[_ngcontent-%COMP%]   #presentation-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 350px;\n  max-width: 500px;\n  max-height: 400px;\n  text-align: center;\n  padding-top: 50px;\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 16px;\n}\n#main-container[_ngcontent-%COMP%]   #presentation-box[_ngcontent-%COMP%]   .h2-first-line[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 400;\n  padding-bottom: 10px;\n}\n#main-container[_ngcontent-%COMP%]   #presentation-box[_ngcontent-%COMP%]   .h2-second-line[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 30px;\n  padding-bottom: 10px;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%] {\n  width: 88%;\n  margin-left: auto;\n  margin-right: auto;\n  display: grid;\n  justify-items: stretch;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   h3.h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  padding: 10px;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   #item-1[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 4;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   #item-2[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 3;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   #item-3[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 5;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   #item-4[_ngcontent-%COMP%] {\n  grid-column-start: 3;\n  grid-column-end: 4;\n  grid-row-start: 2;\n  grid-row-end: 4;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  min-height: 250px;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 3px 14px 25px -7px #a3a5ae;\n  margin: 20px;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px 10px 0px 0px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .box-description[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 20px;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .box-description[_ngcontent-%COMP%]   .item-svg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  right: 40px;\n  bottom: 40px;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .light-blue[_ngcontent-%COMP%] {\n  background-color: #45d3d3;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background-color: #ea5353;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  background-color: #fcaf4a;\n}\n#main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .dark-blue[_ngcontent-%COMP%] {\n  background-color: #549ef2;\n}\n@media (max-width: 1200px) {\n  #main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 1038px) {\n  #main-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  #main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n  }\n}\n@media (max-width: 768px) {\n  #main-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  #main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media (max-width: 430px) {\n  #main-container[_ngcontent-%COMP%]   #presentation-box[_ngcontent-%COMP%] {\n    min-width: auto;\n    padding: 10px;\n  }\n  #main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #main-container[_ngcontent-%COMP%]   #boxes-section[_ngcontent-%COMP%]   .main-box[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQStJQSw2RUFBQTtBQTlJSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNaO0FBRVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUFaO0FBS0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7QUFIUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUhaO0FBTVE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSlo7QUFNUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKWjtBQU9RO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUxaO0FBUVE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTlo7QUFVUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFHQSxzQ0FBQTtFQUNBLFlBQUE7QUFSWjtBQVdRO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFUWjtBQVlRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFWWjtBQVdZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVGhCO0FBMEJRO0VBQ0kseUJBQUE7QUF4Qlo7QUEyQlE7RUFDSSx5QkFBQTtBQXpCWjtBQTRCUTtFQUNJLHlCQUFBO0FBMUJaO0FBNkJRO0VBQ0kseUJBQUE7QUEzQlo7QUFpQ0k7RUFDSTtJQUNJLFdBQUE7RUEvQlY7QUFDRjtBQWtDSTtFQTdKSjtJQThKUSxZQUFBO0VBL0JOO0VBZ0NNO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VBOUJWO0FBQ0Y7QUFpQ0k7RUF2S0o7SUF3S1EsWUFBQTtFQTlCTjtFQStCTTtJQUNJLFVBQUE7RUE3QlY7QUFDRjtBQWdDSTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGFBQUE7RUE5QlY7RUFnQ007SUFDSSxXQUFBO0VBOUJWO0VBZ0NVO0lBQ0ksZUFBQTtFQTlCZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jbWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTglKTtcbiAgICBjb2xvcjogaHNsKDIzNCwgMTIlLCAzNCUpO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG5cbiAgICBwLnAge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogaHNsKDIyOSwgNiUsIDY2JSk7XG4gICAgfVxuICAgICNwcmVzZW50YXRpb24tYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgICAuaDItZmlyc3QtbGluZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oMi1zZWNvbmQtbGluZXtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgI2JveGVzLXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcblxuICAgICAgICBoMy5oMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNpdGVtLTF7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLTIge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgfSAgICBcbiAgICBcbiAgICAgICAgI2l0ZW0tMyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICNpdGVtLTR7XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB9XG5cblxuICAgICAgICAubWFpbi1ib3gge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDE0cHggMjVweCAtN3B4IGhzbCgyMjksIDYlLCA2NiUpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAzcHggMTRweCAyNXB4IC03cHggaHNsKDIyOSwgNiUsIDY2JSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggMTRweCAyNXB4IC03cHggaHNsKDIyOSwgNiUsIDY2JSk7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucmliYm9ue1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbiAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJveC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgLml0ZW0tc3Zne1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAuaXRlbS0xLXN2Z0ltZyB7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi1zdXBlcnZpc29yLnN2Zyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuaXRlbS0yLXN2Z0ltZyB7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi10ZWFtLWJ1aWxkZXIuc3ZnKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIC5pdGVtLTMtc3ZnSW1nIHtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29uLWthcm1hLnN2Zyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuaXRlbS00LXN2Z0ltZyB7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbi1jYWxjdWxhdG9yLnN2Zyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cblxuICAgICAgICAubGlnaHQtYmx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgxODAsIDYyJSwgNTUlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpoc2woMCwgNzglLCA2MiUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm9yYW5nZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgzNCwgOTclLCA2NCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhcmstYmx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmhzbCgyMTIsIDg2JSwgNjQlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLypyZWd1bGFyIGRlc2t0b3AgMTIwMHB4LCBpcGFkIDc2OCB4IDEwMjQgcGl4ZWxzLCBpcGhvbmUgNSAzMjAgeCA1NjggcGl4ZWxzLiovXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICAgICAjYm94ZXMtc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDM4cHgpIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAjYm94ZXMtc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH0gIFxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICNib3hlcy1zZWN0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcbiAgICAgICAgI3ByZXNlbnRhdGlvbi1ib3gge1xuICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAjYm94ZXMtc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLm1haW4tYm94IHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/martin/andreea-projects/frontend-mentor-projects/newbie/four-card-feature-section/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map