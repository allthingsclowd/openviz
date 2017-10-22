webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  margin-top: 30px;\n}\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n.form-control.ng-invalid.ng-touched {\n  border: 1px solid red;\n}\n\n.form-control {\n  overflow-y: auto;\n}\n\n\n.brand {\n    position: relative;\n    left: 50%;\n    margin-left: -50px !important;  /* 50% of your logo width */\n    display: block; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<img alt=\"Fujitsu K5 Logo\" src=\"http://www.fujitsu.com/uk/Images/K5-skysurfer-580x224_tcm23-2619236.jpg\" class=\"img-responsive center-block img-rounded\">\n\t\t</div>\n\t</div>\n    <div class=\"container-fluid\">\n\t\t<app-login *ngIf=\"!loggedIn\"></app-login>\n\t\t<div>\n\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 text-center\">\n\t\t\t\t\t\t<!-- <app-logout *ngIf=\"loggedIn\"></app-logout> -->\n\t\t\t\t\t\t<app-project *ngIf=\"loggedIn && userProjects\" ></app-project>\n\t\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<app-project-panel *ngIf=\"loggedIn\"></app-project-panel>\n\t</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FormControl, FormGroup, Validators } from '@angular/forms';
var AppComponent = (function () {
    function AppComponent(identityService) {
        this.identityService = identityService;
        this.loggedIn = false;
        this.userProjects = null;
        this.currentProject = null;
        this.contractProjects = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.loggedIn.subscribe(function (status) { return _this.loggedIn = status; });
        this.identityService.userProjects.subscribe(function (currentProjects) { return _this.userProjects = currentProjects; });
        this.identityService.currentProject.subscribe(function (selectedProject) { return _this.currentProject = selectedProject; });
        this.identityService.contractProjects.subscribe(function (projects) { return _this.contractProjects = projects; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_browser_window_reference_service__ = __webpack_require__("../../../../../src/app/services/browser-window-reference.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_password_management_service__ = __webpack_require__("../../../../../src/app/services/password-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sort_objects_by_name_pipe__ = __webpack_require__("../../../../../src/app/services/sort-objects-by-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__server_component__ = __webpack_require__("../../../../../src/app/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__network_component__ = __webpack_require__("../../../../../src/app/network.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router_component__ = __webpack_require__("../../../../../src/app/router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__project_component__ = __webpack_require__("../../../../../src/app/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_display_object_pipe__ = __webpack_require__("../../../../../src/app/services/display-object.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_convert_subset2_array_pipe__ = __webpack_require__("../../../../../src/app/services/convert-subset2-array.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_remove_quotes_pipe__ = __webpack_require__("../../../../../src/app/services/remove-quotes.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__logout_component__ = __webpack_require__("../../../../../src/app/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__project_panel_component__ = __webpack_require__("../../../../../src/app/project-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_stack_sorter_pipe__ = __webpack_require__("../../../../../src/app/services/stack-sorter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_convert_user_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-user-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_convert_role_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-role-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_convert_group_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-group-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_convert_project_idto_name_pipe__ = __webpack_require__("../../../../../src/app/services/convert-project-idto-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__user_management_component__ = __webpack_require__("../../../../../src/app/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_user_maintenance_service__ = __webpack_require__("../../../../../src/app/services/user-maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__loadbalancer_component__ = __webpack_require__("../../../../../src/app/loadbalancer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__cloudvisualised_component__ = __webpack_require__("../../../../../src/app/cloudvisualised.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__services_sort_objects_by_name_pipe__["a" /* SortObjectsByNamePipe */],
            __WEBPACK_IMPORTED_MODULE_14__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__server_component__["a" /* ServerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__network_component__["a" /* NetworkComponent */],
            __WEBPACK_IMPORTED_MODULE_17__router_component__["a" /* RouterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_19__services_display_object_pipe__["a" /* DisplayObjectPipe */],
            __WEBPACK_IMPORTED_MODULE_20__services_convert_subset2_array_pipe__["a" /* ConvertSubset2ArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_21__services_remove_quotes_pipe__["a" /* RemoveQuotesPipe */],
            __WEBPACK_IMPORTED_MODULE_22__logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_23__project_panel_component__["a" /* ProjectPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_24__services_stack_sorter_pipe__["a" /* StackSorterPipe */],
            __WEBPACK_IMPORTED_MODULE_25__services_convert_user_idto_name_pipe__["a" /* ConvertUserIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_26__services_convert_role_idto_name_pipe__["a" /* ConvertRoleIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_27__services_convert_group_idto_name_pipe__["a" /* ConvertGroupIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_28__services_convert_project_idto_name_pipe__["a" /* ConvertProjectIDtoNamePipe */],
            __WEBPACK_IMPORTED_MODULE_29__user_management_component__["a" /* UserManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_31__loadbalancer_component__["a" /* LoadbalancerComponent */],
            __WEBPACK_IMPORTED_MODULE_33__cloudvisualised_component__["a" /* CloudvisualisedComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_identity_service__["a" /* IdentityService */],
            __WEBPACK_IMPORTED_MODULE_6__services_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_7__services_stack_service__["a" /* StackService */],
            __WEBPACK_IMPORTED_MODULE_4__services_compute_service__["a" /* ComputeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_password_management_service__["a" /* PasswordManagementService */],
            __WEBPACK_IMPORTED_MODULE_30__services_user_maintenance_service__["a" /* UserMaintenanceService */],
            __WEBPACK_IMPORTED_MODULE_32__services_loadbalancer_service__["a" /* LoadbalancerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_1__services_cloudvisualised_service__["a" /* CloudvisualisedService */],
            __WEBPACK_IMPORTED_MODULE_0__services_browser_window_reference_service__["a" /* BrowserWindowReferenceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cloudvisualised.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".graph-nav-info {\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  text-align: center;\n  color: slategrey;\n  opacity: 0.7;\n  font-size: 10px;\n}\n\n.graph-tooltip {\n  position: absolute;\n  padding-top: 40vh;\n  color: lightblue;\n  font-size: 18px;\n\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cloudvisualised.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cloudData\" #projectChart ></div>"

/***/ }),

/***/ "../../../../../src/app/cloudvisualised.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_3d_force_graph__ = __webpack_require__("../../../../3d-force-graph/dist/3d-force-graph.mjs");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudvisualisedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CloudvisualisedComponent = (function () {
    function CloudvisualisedComponent(cloudvisualisedService) {
        this.cloudvisualisedService = cloudvisualisedService;
    }
    CloudvisualisedComponent.prototype.ngOnInit = function () {
    };
    CloudvisualisedComponent.prototype.ngAfterViewInit = function () {
        // console.log('native element');
        // console.log(this.chartContainer.nativeElement);
        var _this = this;
        this.cloudvisualisedService.currentVisualData.subscribe(function (newData) {
            _this.nodeDetails = newData;
            // console.log(this.nodeDetails.nodes);
            // console.log(this.nodeDetails.links);
            _this.projectGraph = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_3d_force_graph__["a" /* default */])()(_this.chartContainer.nativeElement)
                .graphData(_this.nodeDetails)
                .nameField('name')
                .autoColorBy('type')
                .nodeRelSize(5)
                .linkColorField('white');
        });
    };
    CloudvisualisedComponent.prototype.ngOnDestroy = function () {
    };
    CloudvisualisedComponent.prototype.ngOnChanges = function () {
    };
    return CloudvisualisedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* ViewChild */])('projectChart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], CloudvisualisedComponent.prototype, "chartContainer", void 0);
CloudvisualisedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'app-cloudvisualised',
        template: __webpack_require__("../../../../../src/app/cloudvisualised.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cloudvisualised.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* ViewEncapsulation */].Native
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _b || Object])
], CloudvisualisedComponent);

var _a, _b;
//# sourceMappingURL=cloudvisualised.component.js.map

/***/ }),

/***/ "../../../../../src/app/loadbalancer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loadbalancer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='currentProjectT' class=\"container-fluid\">\n  <div class=\"row\">\n    <div *ngIf='userLBaaS' class=\"col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            Load Balancers \n          </h3>\n        </div>\n        <div class=\"fixed-panel panel-body\">\n          <div *ngFor='let lbaas of userLBaaS'>\n            <li    value=\"lbaas | json | removeQuotes\"\n                    (click)=\"LBaaSChange(lbaas)\">{{lbaas.LoadBalancerName | json | removeQuotes}}</li>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n\n        </div>\n      </div>\n    </div>\n    <div *ngIf='userLBaaSDetails' class=\"col-md-6\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            Load Balancer {{userLBaaSDetails[0].LoadBalancerName | json | removeQuotes}}\n          </h3>\n        </div>\n        <div class=\"fixed-panel panel-body\">\n          <div>\n            {{userLBaaSDetails[0]| json| removeQuotes}}\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n            <button type=\"button\" class=\"btn-xl btn btn-danger\" (click)=\"onLBaaSDelete(userLBaaSDetails[0])\">Delete Load Balancer</button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loadbalancer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadbalancerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadbalancerComponent = (function () {
    function LoadbalancerComponent(loadBalancerService, identityService) {
        this.loadBalancerService = loadBalancerService;
        this.identityService = identityService;
        this.currentProjectT = null;
    }
    LoadbalancerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadBalancerService.userLBaaS.subscribe(function (lbaas) { return _this.userLBaaS = lbaas; });
        this.loadBalancerService.LBaaSDetails.subscribe(function (lbaasdetail) { return _this.userLBaaSDetails = lbaasdetail; });
        this.identityService.userPToken.subscribe(function (currentProjectToken) { return _this.currentProjectT = currentProjectToken; });
    };
    LoadbalancerComponent.prototype.LBaaSChange = function (LBaaS) {
        this.loadBalancerService.getLBaaSDetailOrList(this.currentProjectT, LBaaS.LoadBalancerName);
        //console.log('Change LBaaS Detail => ');
        //console.log(this.userLBaaSDetails);
    };
    LoadbalancerComponent.prototype.onLBaaSDelete = function (LBaaS) {
        //console.log('Deleting LBaaS => ');
        //console.log(LBaaS);
        this.loadBalancerService.deleteLBaaS(this.currentProjectT, LBaaS.LoadBalancerName);
        this.loadBalancerService.changeLBaaSDetails(null);
        this.loadBalancerService.getLBaaSDetailOrList(this.currentProjectT, 'all');
    };
    return LoadbalancerComponent;
}());
LoadbalancerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'app-loadbalancer',
        template: __webpack_require__("../../../../../src/app/loadbalancer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loadbalancer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_identity_service__["a" /* IdentityService */]) === "function" && _b || Object])
], LoadbalancerComponent);

var _a, _b;
//# sourceMappingURL=loadbalancer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-xl {\n    padding: 10px 20px;\n    font-size: 20px;\n    border-radius: 10px;\n  }\n\n  .center {\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;  \n  }\n\n  /* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {display:none;}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.help-block {\n  color: red;\n  background-color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"center col-md-4\">\n    <form [formGroup]=\"loginForm\" >\n      <div formGroupName=\"loginData\">\n          <div class=\"form-group\">\n            <label for=\"k5contract\">\n              Contract\n            </label>\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              id=\"k5contract\"\n              formControlName=\"contract\">\n            <span\n              *ngIf=\"!loginForm.get('loginData.contract').valid && loginForm.get('loginData.contract').touched\"\n              class=\"help-block\">Please enter a valid K5 contract name\n            </span>\n          </div>\n        <div class=\"form-group\">\t\t\t\t\t \n          <label for=\"k5username\">\n            User\n          </label>\n          <input \n            type=\"text\" \n            class=\"form-control\" \n            id=\"k5username\"\n            formControlName=\"user\">\n          <span\n            *ngIf=\"!loginForm.get('loginData.user').valid && loginForm.get('loginData.user').touched\"\n            class=\"help-block\">Please enter a valid K5 username\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"k5password\">\n            Password\n          </label>\n          <input \n            type=\"password\" \n            class=\"form-control\" \n            id=\"k5password\"\n            formControlName=\"password\">\n          <span\n            *ngIf=\"!loginForm.get('loginData.password').valid && loginForm.get('loginData.password').touched\"\n            class=\"help-block\">Please enter a valid K5 password\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"k5region\">\n            Region\n          </label>\n          <select\n            id=\"region\"\n            class=\"form-control\"\n            formControlName=\"region\"\t\t\t\t\t\t\n            name=\"region\">\n            <option [value]=\"null\">Choose a region</option>\n            <option *ngFor=\"let region of regions\" [value]=\"region\">{{region}}</option>\n            \n          </select>\n          <span\n            *ngIf=\"!loginForm.get('loginData.region').valid && loginForm.get('loginData.region').touched\"\n            class=\"help-block\">Please select a global region from the list\n          </span>\t\n        </div>\n        <div class=\"form-group\"> \n            <!-- CORS Proxy Toggle -->\n            <span\n              *ngIf=\"!loginForm.get('loginData.k5cors').value\"\n              class=\"help-block\">CORS Proxy Disabled\n            </span>\n\n            <!-- <p *ngIf=\"loginForm.get('loginData.k5cors').value\">CORS Proxy Enabled</p>\n            <p *ngIf=\"!loginForm.get('loginData.k5cors').value\">CORS Proxy Disabled</p> -->\n            <label class=\"switch\">\n              <input type=\"checkbox\"\n              id=\"k5cors\"\n              formControlName=\"k5cors\"\n              (change)=\"toggleK5Proxy()\">\n              <span class=\"slider round\"></span>\n              \n            </label>\n            \n          </div>\n\n      </div>\n      <div class=\"form-group\" *ngIf=\"!loggedIn\">\n        <button type=\"button\" class=\"pull-right btn-xl btn btn-success btn-large\" [disabled]=\"!loginForm.get('loginData').valid\" (click)=\"onLogin()\">\n          Login\n        </button>\n        <span\n          *ngIf=\"failedLogIn\"\n          class=\"help-block error\">Login Failure - Please check your K5 details and try again.\n        </span>\t\t\t\t\t\n      </div>\n    </form> \n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(identityService, utilityService) {
        this.identityService = identityService;
        this.utilityService = utilityService;
        this.regions = ['uk-1', 'fi-1', 'de-1', 'es-1', 'us-1'];
        this.loggedIn = false;
        this.failedLogIn = false;
        this.k5proxy = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.loggedIn.subscribe(function (status) { return _this.loggedIn = status; });
        this.utilityService.userK5CORS.subscribe(function (proxy) { return _this.k5proxy = proxy; });
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            'loginData': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
                'user': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'contract': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'region': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]),
                'k5cors': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](true)
            })
        });
    };
    LoginComponent.prototype.toggleK5Proxy = function () {
        //console.log(this.k5proxy);
        this.utilityService.changek5proxy(this.k5proxy);
        //console.log(this.k5proxy);
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.identityService.login(this.loginForm.get('loginData.user').value, this.loginForm.get('loginData.password').value, this.loginForm.get('loginData.contract').value, this.loginForm.get('loginData.region').value)
            .subscribe(function (data) {
            //this.identityService.loggedIn = true;
            //this.failedLogIn = false;
            //console.log("Login.ts -> Logged In");
            // this.identityService.getProjectList().subscribe(newProjectList => {
            //   this.projects = newProjectList;
            // });
            // this.identityService.getK5UnScopedDetails();
        }, function (error) {
            //this.alertService.error(error);
            //this.loading = false;
            //console.log('bang - something failed during login');
            //this.failedLogIn = true;
            _this.loginForm.reset();
        });
        //console.log(this.loginForm);
        //this.passwordForm.reset();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_6" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-xl {\n    padding: 10px 20px;\n    font-size: 20px;\n    border-radius: 10px;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <button type=\"button\" class=\"btn-xl btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(identityService) {
        this.identityService = identityService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.onLogout = function () {
        this.identityService.logout();
        // this.loginForm.reset();
        // this.loggedIn = false;
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export catalog */
/* unused harmony export endpoints */
/* unused harmony export roles */
/* unused harmony export projects */
/* unused harmony export project */
/* unused harmony export ProjectToken */
var User = (function () {
    function User() {
    }
    return User;
}());

var catalog = (function () {
    function catalog() {
    }
    return catalog;
}());

var endpoints = (function () {
    function endpoints() {
    }
    return endpoints;
}());

var roles = (function () {
    function roles() {
    }
    return roles;
}());

var projects = (function () {
    function projects() {
        this.length = projects.length;
    }
    return projects;
}());

var project = (function () {
    function project() {
    }
    return project;
}());

var ProjectToken = (function () {
    function ProjectToken() {
    }
    return ProjectToken;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/network.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/network.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  network works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/network.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkComponent = (function () {
    function NetworkComponent() {
    }
    NetworkComponent.prototype.ngOnInit = function () {
    };
    return NetworkComponent;
}());
NetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-network',
        template: __webpack_require__("../../../../../src/app/network.component.html"),
        styles: [__webpack_require__("../../../../../src/app/network.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NetworkComponent);

//# sourceMappingURL=network.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed-panel {\n    min-height: 200px;\n    max-height: 200px;\n    overflow-y: scroll;\n    overflow-x: scroll;\n  }\n\nli:hover { \n    background-color: yellow;\n  }\n\n  .term-container {\n    background: #171717;\n    border-radius: 5px;\n    color: white;\n    word-break: break-word;\n    overflow-wrap: break-word;\n    font-family: Monaco, Consolas, monospace;\n    font-size: 12px;\n    line-height: 20px;\n    padding: 14px 18px;\n    white-space: pre-wrap;\n  }\n\n  /*** PANEL PRIMARY ***/\n.with-nav-tabs.panel-primary .nav-tabs > li > a,\n.with-nav-tabs.panel-primary .nav-tabs > li > a:hover,\n.with-nav-tabs.panel-primary .nav-tabs > li > a:focus {\n    color: #fff;\n}\n.with-nav-tabs.panel-primary .nav-tabs > .open > a,\n.with-nav-tabs.panel-primary .nav-tabs > .open > a:hover,\n.with-nav-tabs.panel-primary .nav-tabs > .open > a:focus,\n.with-nav-tabs.panel-primary .nav-tabs > li > a:hover,\n.with-nav-tabs.panel-primary .nav-tabs > li > a:focus {\n\tcolor: #fff;\n\tbackground-color: #3071a9;\n\tborder-color: transparent;\n}\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a,\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a:hover,\n.with-nav-tabs.panel-primary .nav-tabs > li.active > a:focus {\n\tcolor: #428bca;\n\tbackground-color: #fff;\n\tborder-color: #428bca;\n\tborder-bottom-color: transparent;\n}\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu {\n    background-color: #428bca;\n    border-color: #3071a9;\n}\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a {\n    color: #fff;   \n}\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a:hover,\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > li > a:focus {\n    background-color: #3071a9;\n}\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a,\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a:hover,\n.with-nav-tabs.panel-primary .nav-tabs > li.dropdown .dropdown-menu > .active > a:focus {\n    background-color: #4a9fe9;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='currentProjectT' class=\"container-fluid\">\n  <app-cloudvisualised *ngIf='currentProjectT && userPorts && userNetworks && userSubNetworks && userRouters' ></app-cloudvisualised>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/project-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_maintenance_service__ = __webpack_require__("../../../../../src/app/services/user-maintenance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectPanelComponent = (function () {
    function ProjectPanelComponent(computeService, userMaintenanceService, identityService, stackService, loadbalancerService, networkService) {
        this.computeService = computeService;
        this.userMaintenanceService = userMaintenanceService;
        this.identityService = identityService;
        this.stackService = stackService;
        this.loadbalancerService = loadbalancerService;
        this.networkService = networkService;
        this.userServers = null;
        this.currentProjectT = null;
        this.serverDetails = null;
        this.serverLogs = null;
        this.currentServer = null;
        this.stackDetails = null;
        this.userStacks = null;
        this.stackOutputs = null;
        this.contractProjects = null;
        this.contractUsers = null;
        this.contractGroups = null;
        this.contractRoles = null;
        this.roleAssignment = null;
        this.groupUsers = null;
        this.userGlobalToken = null;
        this.userLBaaS = null;
        this.userRouters = null;
        this.userNetworks = null;
        this.userSubNetworks = null;
        this.userPorts = null;
    }
    ProjectPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.contractProjects.subscribe(function (projects) { return _this.contractProjects = projects; });
        this.identityService.usersInGroup.subscribe(function (gusers) { return _this.groupUsers = gusers; });
        this.identityService.roleAssignments.subscribe(function (roles) { return _this.roleAssignment = roles; });
        this.identityService.contractUsers.subscribe(function (users) { return _this.contractUsers = users; });
        this.identityService.contractGroups.subscribe(function (groups) { return _this.contractGroups = groups; });
        this.identityService.contractRoles.subscribe(function (roles) { return _this.contractRoles = roles; });
        this.identityService.userPToken.subscribe(function (currentProjectToken) { return _this.currentProjectT = currentProjectToken; });
        this.identityService.userGToken.subscribe(function (globalToken) { return _this.userGlobalToken = globalToken; });
        this.computeService.userServers.subscribe(function (servers) { return _this.userServers = servers; });
        this.computeService.serverDetails.subscribe(function (server) { return _this.serverDetails = server; });
        this.computeService.serverLogs.subscribe(function (logs) { return _this.serverLogs = logs; });
        this.stackService.stackDetails.subscribe(function (stackDetail) { return _this.stackDetails = stackDetail; });
        this.stackService.userStacks.subscribe(function (stacks) { return _this.userStacks = stacks; });
        this.stackService.stackOutputs.subscribe(function (outputs) { return _this.stackOutputs = outputs; });
        this.loadbalancerService.userLBaaS.subscribe(function (LBaaS) { return _this.userLBaaS = LBaaS; });
        this.networkService.userRouters.subscribe(function (routers) { return _this.userRouters = routers; });
        this.networkService.userNetworks.subscribe(function (networks) { return _this.userNetworks = networks; });
        this.networkService.userSubNetworks.subscribe(function (subnets) { return _this.userSubNetworks = subnets; });
        this.networkService.userPorts.subscribe(function (ports) { return _this.userPorts = ports; });
        //console.log('Contract Groups');
        //console.log(this.contractGroups);
    };
    ProjectPanelComponent.prototype.serverChange = function (server) {
        this.computeService.getServerDetails(this.currentProjectT, server);
        this.computeService.getServerLogs(this.currentProjectT, server);
        //console.log('Change Server => ');
        //console.log(this.serverDetails);
        //console.log(this.serverLogs);
    };
    ProjectPanelComponent.prototype.userSelection = function (user) {
        //console.log('Calling USER EMAIL API');
        //console.log(this.userGlobalToken);
        //console.log(user);
        this.identityService.getUserInfo(user);
    };
    ProjectPanelComponent.prototype.stackChange = function (stack) {
        this.stackService.getStackDetails(this.currentProjectT, stack);
        // outputs API call not currently implemented on K5
        // this.stackService.getStackOutputs(this.currentProjectT, stack);
        //console.log('Change Stack => ');
        //console.log(this.stackDetails);
    };
    ProjectPanelComponent.prototype.groupSelection = function (role) {
        //console.log('Group Users Entry');
        //console.log(role);
        this.identityService.getUsersInGroup(role);
    };
    ProjectPanelComponent.prototype.deleteStack = function (stack) {
        this.stackService.deleteStack(this.currentProjectT, stack);
        // this.stackChange(null);
        //this.stackService.getStackList(this.currentProjectT);
    };
    return ProjectPanelComponent;
}());
ProjectPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["_6" /* Component */])({
        selector: 'app-project-panel',
        template: __webpack_require__("../../../../../src/app/project-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-panel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_compute_service__["a" /* ComputeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_compute_service__["a" /* ComputeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_maintenance_service__["a" /* UserMaintenanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_maintenance_service__["a" /* UserMaintenanceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_identity_service__["a" /* IdentityService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_stack_service__["a" /* StackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stack_service__["a" /* StackService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */]) === "function" && _f || Object])
], ProjectPanelComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=project-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\n    border: 1px;\n    height: 250px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    width: 250px;\n }\n .wrapper .selection{\n   float: none;\n   width:250px;\n   border:1px solid #ccc\n }\n\n li:hover { \n  background-color: yellow;\n}\n\n.btn-xl {\n  padding: 10px 20px;\n  font-size: 20px;\n  border-radius: 10px;\n}\n\n/* .navbar .navbar-nav {\n  display: inline-block;\n  float: none;\n  vertical-align: top;\n}\n\n.navbar .navbar-collapse {\n  text-align: center;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project.component.html":
/***/ (function(module, exports) {

module.exports = "\n   <ul *ngIf='currentProject' class=\"btn-group\">   \n      \n      <!-- Split button -->\n        \n        <button type=\"button\" class=\"btn-xl btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n        <button type=\"button\" class=\"btn-xl btn btn-info\">{{currentProject.name | json | removeQuotes}}</button>\n        <button type=\"button\" class=\"btn-xl btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"caret\"></span>\n            <span class=\"sr-only\">Toggle Dropdown</span>\n        </button>\n\n        <ul class=\"wrapper selection dropdown-menu dropdown-hover scrollable-menu\" >\n          <div *ngFor='let project of projects | sortObjectsByName'>\n            <li  *ngIf='project.enabled'  value=\"project.id | json | removeQuotes\"\n                    (click)=\"projectChange(project)\">{{project.name | json | removeQuotes}}</li>\n          </div>\n        </ul>\n    \n    </ul>\n   \n\n"

/***/ }),

/***/ "../../../../../src/app/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormControl, FormGroup, Validators } from '@angular/forms';





var ProjectComponent = (function () {
    function ProjectComponent(identityService, computeService, stackService, loadBalancerService, cloudVisualisedService) {
        this.identityService = identityService;
        this.computeService = computeService;
        this.stackService = stackService;
        this.loadBalancerService = loadBalancerService;
        this.cloudVisualisedService = cloudVisualisedService;
        this.currentProject = null;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.loggedIn.subscribe(function (status) { return _this.loggedIn = status; });
        this.identityService.userProjects.subscribe(function (currentProjects) { return _this.projects = currentProjects; });
        this.identityService.currentProject.subscribe(function (selectedProject) { return _this.currentProject = selectedProject; });
        // this.projectForm = new FormGroup({
        //  'projectData': new FormGroup({
        //    'project': new FormControl(null, [Validators.required])
        //  })
        // });
        // this.projects = this.identityService.k5projects;
        //console.log('NGONINIT on Projects Component - Projects, Project, Logged In Status are as follows (next three lines) : ');
        //console.log(this.projects);
        //     for (let index in this.projects) {
        //       //console.log(this.projects[index].name);
        //   }
        //   for (let project of this.projects.project) {
        //     //console.log(project.name);
        // }
        //console.log(this.currentProject);
        //console.log(this.loggedIn);
    };
    ProjectComponent.prototype.onLogout = function () {
        this.identityService.logout();
        // this.loginForm.reset();
        // this.loggedIn = false;
    };
    ProjectComponent.prototype.projectChange = function (selectedProject) {
        this.computeService.changeServerDetails(null);
        this.computeService.changeServerList(null);
        this.computeService.changeServerLogs(null);
        this.stackService.changeStackList(null);
        this.stackService.changeStackDetails(null);
        this.stackService.changeStackOutputs(null);
        this.loadBalancerService.changeLBaaSList(null);
        this.loadBalancerService.changeLBaaSDetails(null);
        this.identityService.changeProject(selectedProject);
        //console.log('333333333333. Selected Project ID to be scoped to...');
        //console.log(selectedProject.id);
        //console.log(selectedProject.name);
        //console.log(selectedProject);
        this.identityService.getProjectScopedToken(selectedProject.id)
            .subscribe(function (data) {
            //console.log(data);
        }, function (err) { return console.log(err); }, function () {
        });
        //console.log('PROJECT CHANGE SELECTED Projects, Project, Logged In Status are as follows (next three lines) : ');
        //console.log(this.projects);
        //console.log(this.currentProject);
        //console.log(this.loggedIn);
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_compute_service__["a" /* ComputeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_compute_service__["a" /* ComputeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_stack_service__["a" /* StackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_stack_service__["a" /* StackService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _e || Object])
], ProjectComponent);

var _a, _b, _c, _d, _e;
// .subscribe(
//   res => {},
//   err =>// console.log(err),
//   () => {//console.log('End of new Project Selection');
//           this.cloudvisualisedService.getNodes(); }); 
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/router.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  router works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouterComponent = (function () {
    function RouterComponent() {
    }
    RouterComponent.prototype.ngOnInit = function () {
    };
    return RouterComponent;
}());
RouterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-router',
        template: __webpack_require__("../../../../../src/app/router.component.html"),
        styles: [__webpack_require__("../../../../../src/app/router.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RouterComponent);

//# sourceMappingURL=router.component.js.map

/***/ }),

/***/ "../../../../../src/app/server.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/server.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"passwordForm\" >        \n<div *ngIf=\"passwordForm.get('serverData.project').valid\" class=\"form-group\">\n          <label for=\"server\">\n            Please select a server\n          </label>\t\t\t\t\t\n          <select\n            id=\"server\"\n            class=\"form-control\"\n            formControlName=\"server\"\t\t\t\t\t\t\n            name=\"server\"\n            (change)=\"serverChange()\">\n            <option [value]=\"null\">Choose a server</option>\n            <option *ngFor=\"let server of servers | sortObjectsByName\" [value]=\"server.id\">{{server.name}}</option>\n            \n          </select>\n          <span\n            *ngIf=\"!passwordForm.get('serverData.server').valid && passwordForm.get('serverData.server').touched\"\n            class=\"help-block\">Please select a windows server from the list\n          </span>\n        </div>\n        <div *ngIf=\"passwordReceived\" class=\"form-group\">\n          <label for=\"server\">\n            Encrypted password\n          </label>\n          <p class=\"form-control\">{{encryptedPassword}}</p>\n\n        </div>\n        <div *ngIf=\"passwordForm.get('serverData.server').valid\" class=\"form-group\">\n          <label for=\"pemkey\">\n            Paste private ssh key below\n          </label>\t\t\t\t\t\n          <textarea\n            name=\"pemkey\"\n            rows=\"3\"\n            class=\"form-control\"\n            formControlName=\"pemkey\">\n          </textarea>\n          <span\n            *ngIf=\"!passwordForm.get('serverData.pemkey').valid && passwordForm.get('serverData.pemkey').touched\"\n            class=\"help-block\">Please paste the private ssh key file that is associated with the public ssh key used to build the server\n          </span>\t\t\t\t\t\t\n        </div>\n        <div *ngIf=\"passwordForm.get('serverData').valid\" class=\"form-group\">\n          <button type=\"button\" (click)=\"onThisButton()\" class=\"btn btn-primary btn-large\" [disabled]=\"!passwordForm.get('loginData').valid\">\n            Retrieve Password\n          </button>\n        </div>\n    <div *ngIf=\"passwordForm.get('serverData').valid\" class=\"form-group\">\n      <div class=\"jumbotron\">\n        <h2>\n          The password is\n        </h2>\n        <p>\n          An amazing Password\n        </p>\n      </div>\n    </div>\n    \n   </form>\n"

/***/ }),

/***/ "../../../../../src/app/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = (function () {
    function ServerComponent() {
    }
    ServerComponent.prototype.ngOnInit = function () {
    };
    return ServerComponent;
}());
ServerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-server',
        template: __webpack_require__("../../../../../src/app/server.component.html"),
        styles: [__webpack_require__("../../../../../src/app/server.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServerComponent);

//# sourceMappingURL=server.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/browser-window-reference.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserWindowReferenceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var BrowserWindowReferenceService = (function () {
    function BrowserWindowReferenceService() {
    }
    Object.defineProperty(BrowserWindowReferenceService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowReferenceService;
}());
BrowserWindowReferenceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], BrowserWindowReferenceService);

//# sourceMappingURL=browser-window-reference.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cloudvisualised.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* unused harmony export VisualisationData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudvisualisedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualLink = (function () {
    function VisualLink(source, target, weight) {
        this.source = source;
        this.target = target;
        this.weight = weight || 1;
    }
    return VisualLink;
}());
var VisualNameLink = (function () {
    function VisualNameLink(source, target, weight) {
        this.source = source;
        this.target = target;
        this.weight = weight || 1;
    }
    return VisualNameLink;
}());
var VisualNode = (function () {
    function VisualNode(type, id, name, availability_zone) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.availability_zone = availability_zone;
        this.links = [];
    }
    VisualNode.prototype.addLink = function (link) {
        this.links.push(link);
    };
    return VisualNode;
}());
var VisualisationData = (function () {
    function VisualisationData(nodes, links) {
        this.nodes = nodes;
        this.links = links;
    }
    return VisualisationData;
}());

var CloudvisualisedService = (function () {
    function CloudvisualisedService() {
        this.localNodeList = new Array();
        this.localEdgeList = new Array();
        this.nodeList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentNodeList = this.nodeList.asObservable();
        this.edgeList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.currentEdgeList = this.edgeList.asObservable();
        this.visualData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.currentVisualData = this.visualData.asObservable();
    }
    CloudvisualisedService.prototype.changeVisualData = function (data) {
        this.visualData.next(data);
    };
    CloudvisualisedService.prototype.updateNodeList = function (nodes) {
        //console.log('Update Called');
        this.nodeList.next(nodes);
    };
    CloudvisualisedService.prototype.resetNodeList = function () {
        //console.log('Reset Called');
        this.localNodeList = new Array();
        this.nodeList.next(this.localNodeList);
    };
    CloudvisualisedService.prototype.locateIndexinNodeList = function (item, nodeList) {
        for (var _i = 0, nodeList_1 = nodeList; _i < nodeList_1.length; _i++) {
            var node = nodeList_1[_i];
            if (item === node.id) {
                //console.log('link Match') ;
                //console.log(node.id, item);
                return nodeList.indexOf(node);
            }
        }
        //console.log('link No Match') ;
        // //console.log(node.id, item);
        return false;
    };
    CloudvisualisedService.prototype.generateNamedEdges = function (nodelist) {
        this.localEdgeList = new Array();
        for (var _i = 0, nodelist_1 = nodelist; _i < nodelist_1.length; _i++) {
            var node = nodelist_1[_i];
            //console.log('Processing Node ', node);
            for (var _a = 0, _b = node.links; _a < _b.length; _a++) {
                var link = _b[_a];
                var linkIndex = this.locateIndexinNodeList(link, this.localNodeList);
                if (linkIndex) {
                    //console.log('target');
                    //console.log(linkIndex);
                    //console.log('source');
                    //console.log(node);
                    var newLink = new VisualNameLink(node.id, link);
                    this.localEdgeList.push(newLink);
                }
                // let source: number = +node;
                // let target: number = nodelist.indexOf(link);
                // this.localEdgeList.push(source,target);
            }
        }
        //console.log('Finished Link List');
        //console.log(this.localEdgeList);
    };
    CloudvisualisedService.prototype.generateEdges = function (nodelist) {
        this.localEdgeList = new Array();
        for (var node in nodelist) {
            //console.log('Processing Node ', node);
            for (var _i = 0, _a = nodelist[node].links; _i < _a.length; _i++) {
                var link = _a[_i];
                var linkIndex = this.locateIndexinNodeList(link, this.localNodeList);
                if (linkIndex) {
                    //console.log('target');
                    //console.log(linkIndex);
                    //console.log('source');
                    //console.log(node);
                    var newLink = new VisualLink(+node, linkIndex);
                    this.localEdgeList.push(newLink);
                }
                // let source: number = +node;
                // let target: number = nodelist.indexOf(link);
                // this.localEdgeList.push(source,target);
            }
        }
        //console.log('Finished Link List');
        //console.log(this.localEdgeList);
    };
    CloudvisualisedService.prototype.getNodes = function (type, nodelist) {
        //console.log('Visualisation Nodes ' + type);
        //console.log(nodelist);
        this.localNodeList = this.nodeList.getValue();
        for (var _i = 0, nodelist_2 = nodelist; _i < nodelist_2.length; _i++) {
            var node = nodelist_2[_i];
            //console.log(node);
            var newNode = new VisualNode(type, node.id, node.name, node.availability_zone);
            // let newEdge = new VisualLink(1, 1);
            switch (type) {
                case 'port': {
                    // statements;
                    //newNode.availability_zone = node.availability_zone;
                    // console.log(node);
                    var subtype = (node.device_owner).split(':');
                    if (node.name === '') {
                        newNode.name = node.id;
                    }
                    if (subtype[1] === 'dhcp') {
                        newNode.name = type + ': ' + subtype[1] + ': ' + newNode.name;
                        newNode.type = type + ': ' + subtype[1];
                    }
                    else {
                        newNode.name = type + ': ' + subtype[0] + ': ' + newNode.name;
                        newNode.type = type + ': ' + subtype[0];
                    }
                    newNode.status = node.status;
                    newNode.addLink(node.device_id);
                    // newNode.addLink(node.network_id);
                    for (var _a = 0, _b = node.fixed_ips; _a < _b.length; _a++) {
                        var link = _b[_a];
                        if (link['subnet_id']) {
                            newNode.addLink(link['subnet_id']);
                        }
                    }
                    break;
                }
                case 'network': {
                    // statements;
                    // console.log(node);
                    if (node['router:external'] === true) {
                        // console.log('External Network');
                        newNode.status = node.status;
                        for (var _c = 0, _d = node.subnets; _c < _d.length; _c++) {
                            var link = _d[_c];
                            //console.log('Network Subnets');
                            //console.log(node.subnets);
                            //console.log(link);
                            newNode.addLink(link);
                        }
                        newNode.name = type + ': ' + newNode.name;
                    }
                    else {
                        // console.log('Unwanted Network');
                        continue;
                    }
                    break;
                }
                case 'subnetwork': {
                    // statements;
                    if (node.enable_dhcp) {
                        newNode.status = 'DHCP';
                    }
                    else {
                        newNode.status = 'NO_DHCP';
                    }
                    //console.log('failing here => ' + node.network_id);
                    newNode.addLink(node.network_id);
                    newNode.name = type + ': ' + newNode.name;
                    break;
                }
                case 'router': {
                    // statements;
                    //console.log(node);
                    newNode.status = node.status;
                    if (node.external_gateway_info != null) {
                        newNode.addLink(node.external_gateway_info.external_fixed_ips[0]['subnet_id']);
                    }
                    else {
                        newNode.addLink(node.id);
                    }
                    newNode.name = type + ': ' + newNode.name;
                    break;
                }
                case 'lbaas': {
                    // statements;
                    newNode.name = node.LoadBalancerName;
                    newNode.status = node.State;
                    newNode.other = node.DNSName;
                    newNode.id = node.LoadBalancerName;
                    for (var _e = 0, _f = node.Subnets; _e < _f.length; _e++) {
                        var link = _f[_e];
                        newNode.addLink(link['member']);
                    }
                    newNode.name = type + ': ' + newNode.name;
                    break;
                }
                default: {
                    // statements;
                    break;
                }
            }
            //console.log(newNode);
            // //console.log(this.routers);
            // //console.log(this.loadbalancers);
            this.localNodeList.push(newNode);
        }
        //console.log(this.localNodeList);
        this.updateNodeList(this.localNodeList);
        //console.log(this.currentNodeList);
        //this.generateEdges(this.localNodeList);
        this.generateNamedEdges(this.localNodeList);
        this.k5Nodes = new VisualisationData(this.localNodeList, this.localEdgeList);
        // console.log('Final OutPut for D3JS');
        // console.log(this.k5Nodes);
        //console.log(this.k5Nodes);
        this.changeVisualData(this.k5Nodes);
    };
    return CloudvisualisedService;
}());
CloudvisualisedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CloudvisualisedService);

//# sourceMappingURL=cloudvisualised.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/compute.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComputeService = (function () {
    // private userProjectToken = new BehaviorSubject<Response>(null);
    // userPToken = this.userProjectToken.asObservable();
    // currentProject: project = null;
    // currentProjectToken: Response = null;
    function ComputeService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.userServerList = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userServers = this.userServerList.asObservable();
        this.userServerDetails = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.serverDetails = this.userServerDetails.asObservable();
        this.userServerLogs = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.serverLogs = this.userServerLogs.asObservable();
    }
    ComputeService.prototype.changeServerLogs = function (serverLogs) {
        this.userServerLogs.next(serverLogs);
    };
    ComputeService.prototype.changeServerList = function (userServers) {
        this.userServerList.next(userServers);
    };
    ComputeService.prototype.changeServerDetails = function (serverDetails) {
        this.userServerDetails.next(serverDetails);
    };
    ComputeService.prototype.getServerList = function (k5scopedtoken) {
        //console.log('compute token');
        //console.log(k5scopedtoken);
        var _this = this;
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/detail');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Server List ->');
            //console.log(res.json().servers);
            _this.changeServerList(res.json().servers);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Server list complete'); });
    };
    ComputeService.prototype.getServerDetails = function (k5scopedtoken, server) {
        var _this = this;
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', server.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('nova server details');
            //console.log(res.json().server);
            _this.changeServerDetails(res.json().server);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    ComputeService.prototype.getServerPassword = function (k5scopedtoken, serverid) {
        //console.log('Server Password Function');
        //console.log(k5scopedtoken);
        //console.log(serverid);
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', serverid, '/os-server-password');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('server password');
            //console.log(res.json().password);
            return res.json().password;
        });
    };
    ComputeService.prototype.getServerLogs = function (k5scopedtoken, server) {
        //console.log('Server Logs Function');
        //console.log(k5scopedtoken);
        //console.log(server.id);
        var _this = this;
        var computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', server.id, '/action');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);
        var body = {
            'os-getConsoleOutput': {
                'length': 1000
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = postheaders;
        return this.http.post(proxiedURL, bodyString, headeropts)
            .map(function (res) {
            _this.changeServerLogs(res.json().output);
            //console.log('server logs');
            //console.log(res.json().output);
            // return res.json().password;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('got logs complete'); });
    };
    return ComputeService;
}());
ComputeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], ComputeService);

var _a, _b;
//# sourceMappingURL=compute.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-group-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertGroupIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertGroupIDtoNamePipe = (function () {
    function ConvertGroupIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractGroups = null;
        this.identityService.contractGroups.subscribe(function (groups) { return _this.contractGroups = groups; });
        // //console.log('Contract  Group IDs in Pipe constructor');
        // //console.log(this.contractGroups);
    }
    ConvertGroupIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractGroups);
        var itemName = 'None';
        for (var item in this.contractGroups) {
            if (this.contractGroups[item].id === value) {
                // //console.log('Group Comparison');
                // //console.log(value);
                // //console.log((this.contractGroups[item].id));
                // //console.log('Group PipeMatch' + (this.contractGroups[item].name));
                itemName = this.contractGroups[item].name;
                break;
            }
            else {
                // //console.log('Group Comparison');
                // //console.log(value);
                // //console.log((this.contractGroups[item].id));
            }
        }
        return itemName;
    };
    return ConvertGroupIDtoNamePipe;
}());
ConvertGroupIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertGroupIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertGroupIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-group-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-project-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertProjectIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertProjectIDtoNamePipe = (function () {
    function ConvertProjectIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractProjects = null;
        this.identityService.contractProjects.subscribe(function (projects) { return _this.contractProjects = projects; });
        // //console.log('Contract Project IDs in Pipe constructor');
        // //console.log(this.contractProjects);
    }
    ConvertProjectIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractProjects);
        var itemName = 'None';
        for (var item in this.contractProjects) {
            if (this.contractProjects[item].id === value) {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractProjects[item].id));
                // //console.log('PipeMatch' + (this.contractProjects[item].name));
                itemName = this.contractProjects[item].name;
                break;
            }
            else {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractProjects[item].id));
            }
        }
        return itemName;
    };
    return ConvertProjectIDtoNamePipe;
}());
ConvertProjectIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertProjectIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertProjectIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-project-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-role-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertRoleIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertRoleIDtoNamePipe = (function () {
    function ConvertRoleIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractRoles = null;
        this.identityService.contractRoles.subscribe(function (roles) { return _this.contractRoles = roles; });
        // //console.log('Contract IDs in Pipe constructor');
        // //console.log(this.contractRoles);
    }
    ConvertRoleIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractRoles);
        var itemName = 'None';
        for (var item in this.contractRoles) {
            if (this.contractRoles[item].id === value) {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractRoles[item].id));
                // //console.log('PipeMatch' + (this.contractRoles[item].name));
                itemName = this.contractRoles[item].name;
                break;
            }
            else {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractRoles[item].id));
            }
        }
        return itemName;
    };
    return ConvertRoleIDtoNamePipe;
}());
ConvertRoleIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertRoleIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertRoleIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-role-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-subset2-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertSubset2ArrayPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertSubset2ArrayPipe = (function () {
    function ConvertSubset2ArrayPipe() {
    }
    ConvertSubset2ArrayPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return ConvertSubset2ArrayPipe;
}());
ConvertSubset2ArrayPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertSubset2Array'
    })
], ConvertSubset2ArrayPipe);

//# sourceMappingURL=convert-subset2-array.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/convert-user-idto-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_identity_service__ = __webpack_require__("../../../../../src/app/services/identity.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertUserIDtoNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConvertUserIDtoNamePipe = (function () {
    function ConvertUserIDtoNamePipe(identityService) {
        var _this = this;
        this.identityService = identityService;
        this.contractUsers = null;
        this.identityService.contractUsers.subscribe(function (users) { return _this.contractUsers = users; });
        // //console.log('Contract User IDs in Pipe constructor');
        // //console.log(this.contractUsers);
    }
    ConvertUserIDtoNamePipe.prototype.transform = function (value, args) {
        // //console.log('Contract Users iside Pipe');
        // //console.log(this.contractUsers);
        var itemName = 'None';
        for (var item in this.contractUsers) {
            if (this.contractUsers[item].id === value) {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractUsers[item].id));
                // //console.log('PipeMatch' + (this.contractUsers[item].name));
                itemName = this.contractUsers[item].name;
                break;
            }
            else {
                // //console.log('Comparison');
                // //console.log(value);
                // //console.log((this.contractUsers[item].id));
            }
        }
        return itemName;
    };
    return ConvertUserIDtoNamePipe;
}());
ConvertUserIDtoNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'convertUserIDtoName'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_identity_service__["a" /* IdentityService */]) === "function" && _a || Object])
], ConvertUserIDtoNamePipe);

var _a;
//# sourceMappingURL=convert-user-idto-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/display-object.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayObjectPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisplayObjectPipe = (function () {
    function DisplayObjectPipe() {
    }
    DisplayObjectPipe.prototype.transform = function (value, args) {
        return Object.keys(value).map(function (key) {
            Object.assign({ key: key }, value[key]);
            // //console.log("Piping Object");
            // //console.log(key);
            // //console.log(value[key].name);
        });
    };
    return DisplayObjectPipe;
}());
DisplayObjectPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'displayObject'
    })
], DisplayObjectPipe);

//# sourceMappingURL=display-object.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/identity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stack_service__ = __webpack_require__("../../../../../src/app/services/stack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loadbalancer_service__ = __webpack_require__("../../../../../src/app/services/loadbalancer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var IdentityService = (function () {
    //servers: any = null;
    // k5currentScopedToken: Response;
    function IdentityService(http, utilityService, computeService, stackService, loadBalancerService, networkService, cloudvisualisedService) {
        this.http = http;
        this.utilityService = utilityService;
        this.computeService = computeService;
        this.stackService = stackService;
        this.loadBalancerService = loadBalancerService;
        this.networkService = networkService;
        this.cloudvisualisedService = cloudvisualisedService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */]();
        // k5projects: projects;
        this.userProjectList = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userProjects = this.userProjectList.asObservable();
        this.contractProjectList = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractProjects = this.contractProjectList.asObservable();
        this.contractUserList = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractUsers = this.contractUserList.asObservable();
        this.contractRoleList = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractRoles = this.contractRoleList.asObservable();
        this.contractGroupList = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.contractGroups = this.contractGroupList.asObservable();
        this.userRegionalToken = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userRToken = this.userRegionalToken.asObservable();
        this.userGlobalToken = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userGToken = this.userGlobalToken.asObservable();
        // k5response: Response;
        // k5Globalresponse: Response;
        // loggedIn :boolean = false;
        this.userLoggedIn = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.loggedIn = this.userLoggedIn.asObservable();
        // currentProject: project;
        this.selectedProject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.currentProject = this.selectedProject.asObservable();
        this.userProjectToken = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userPToken = this.userProjectToken.asObservable();
        this.projectRoleAssignments = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.roleAssignments = this.projectRoleAssignments.asObservable();
        this.usersInGroupList = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.usersInGroup = this.usersInGroupList.asObservable();
        // this.computeService.userServers.subscribe(currentServers => this.servers = currentServers);
    }
    IdentityService.prototype.changeUsersInGroup = function (users) {
        this.usersInGroupList.next(users);
    };
    IdentityService.prototype.changeRoleAssignments = function (roleAssignments) {
        this.projectRoleAssignments.next(roleAssignments);
    };
    IdentityService.prototype.changeContractUsers = function (contractUsers) {
        this.contractUserList.next(contractUsers);
    };
    IdentityService.prototype.changeContractGroups = function (contractGroups) {
        this.contractGroupList.next(contractGroups);
    };
    IdentityService.prototype.changeContractRoles = function (contractRoles) {
        this.contractRoleList.next(contractRoles);
    };
    IdentityService.prototype.changeContractProjects = function (contractProjects) {
        this.contractProjectList.next(contractProjects);
    };
    IdentityService.prototype.changeProject = function (currentProject) {
        this.selectedProject.next(currentProject);
    };
    IdentityService.prototype.changeProjectList = function (userProjects) {
        this.userProjectList.next(userProjects);
    };
    IdentityService.prototype.changeLoginStatus = function (loggedInStatus) {
        this.userLoggedIn.next(loggedInStatus);
    };
    IdentityService.prototype.changeRegionalToken = function (userRToken) {
        this.userRegionalToken.next(userRToken);
    };
    IdentityService.prototype.changeGlobalToken = function (userGToken) {
        this.userGlobalToken.next(userGToken);
    };
    IdentityService.prototype.changeProjectToken = function (userPToken) {
        this.userProjectToken.next(userPToken);
    };
    IdentityService.prototype.getKeystoneObjectList = function (objectType) {
        // const k5token = this.k5response;
        // //console.log('Keystone Token Details ' + JSON.stringify(this.userRegionalToken.getValue()));
        //console.log('Keystone ObjectType Details ' + objectType);
        var identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/', objectType, '?domain_id=', this.userRegionalToken.getValue().json().token.user.domain.id);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userRegionalToken.getValue().headers.get('x-subject-token');
        //console.log('Getting KeystoneObject List' + JSON.stringify(authURL));
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            // //console.log(' Map ObjectList => ' + JSON.stringify(res));
            return res;
        });
    };
    IdentityService.prototype.getProjectScopedToken = function (projectId) {
        var _this = this;
        // const k5token = this.k5response;
        //console.log('New Scoped Project Pre-Response');
        //console.log(this.userRegionalToken.getValue());
        var identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/auth/tokens');
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        var body = { 'auth': { 'identity': { 'methods': ['token'],
                    'token': { 'id': this.userRegionalToken.getValue().headers.get('x-subject-token') }
                }, 'scope': { 'project': { 'id': projectId }
                }
            }
        };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.post(authURL, bodyString, postopts)
            .map(function (res) {
            // const projectToken = new ProjectToken();
            // retrieve the K5/OpenStack authentication token from the response header
            // projectToken.scopedToken = res.headers.get('x-subject-token');
            // projectToken.projectId = projectId;
            //console.log('New Project Scoped Token response ->');
            //console.log(res);
            _this.changeProjectToken(res);
            _this.cloudvisualisedService.resetNodeList();
            _this.computeService.getServerList(res);
            _this.stackService.getStackList(res);
            _this.loadBalancerService.getLBaaSDetailOrList(res, 'all');
            _this.networkService.getPortList(res);
            _this.networkService.getSubnetList(res);
            _this.networkService.getNetworkList(res);
            _this.networkService.getRouterList(res);
            _this.getRoleAssignments().subscribe();
            //console.log('New Project Scoped Token observable ->');
            //console.log(this.userProjectToken.getValue());
            // //console.log('New Server List ->');
            // //console.log(this.servers.getValue());
            // return res;
        });
    };
    IdentityService.prototype.getProjectList = function () {
        var _this = this;
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        // role_assignments?scope.project.id={project_id}
        var endpointDetail = identityURL.concat('/users/', this.userRegionalToken.getValue().json().token.user.id, '/projects');
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        //console.log(authURL);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userRegionalToken.getValue().headers.get('x-subject-token');
        //console.log('Getting Project List');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            _this.changeProjectList(res.json().projects);
            _this.changeProject(res.json().projects[0]);
            //console.log('111111111. Get Project List with projects and actual project as follows: ');
            //console.log('All Unparsed Projects');
            // //console.log(res);
            // //console.log(res.json());
            // //console.log(res.json().projects);
            //console.log(this.userProjectList.getValue());
            //console.log(this.selectedProject.getValue().name);
            // return res.json().projects as projects;
            // return projects;
        });
    };
    IdentityService.prototype.getUserInfo = function (user) {
        var _this = this;
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userProjectToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/users/', user.id);
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userProjectToken.getValue().headers.get('x-subject-token');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .subscribe(function (res) {
            console.log('Getting User Info via API');
            console.log(_this.userProjectToken.getValue());
            // console.log(authURL);
            // console.log(postopts);
            // console.log(postheaders);
            // console.log('New User Info' + JSON.stringify(res));
            // console.log(res.json());
            // console.log(res);
        }, function (err) { return console.log(err); }, function () { return console.log('Getting User Info via API Complete'); });
    };
    IdentityService.prototype.getRoleAssignments = function () {
        var _this = this;
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userProjectToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/role_assignments?scope.project.id=', this.userProjectToken.getValue().json().token.project.id, '&include_names');
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        //console.log(authURL);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userProjectToken.getValue().headers.get('x-subject-token');
        //console.log('Getting Role Assignments');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            //console.log('New Role Assignments' + JSON.stringify(res));
            _this.changeRoleAssignments(res.json().role_assignments);
            //console.log(this.userProjectList.getValue());
            //console.log(this.selectedProject.getValue().name);
            // return res.json().projects as projects;
            // return projects;
        });
        // .subscribe(
        //         data => console.log(data),
        //         err => console.log(err),
        //         () => console.log('Role Assignments Complete'));
    };
    IdentityService.prototype.getUsersInGroup = function (group) {
        var _this = this;
        //console.log(group.group.id);
        // const k5token = this.k5response;
        // //console.log(this.currentProject);
        var identityURL = this.utilityService.getEndpoint(this.userProjectToken.getValue(), 'identityv3');
        var endpointDetail = identityURL.concat('/groups/', group.group.id, '/users');
        //console.log(endpointDetail);
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        //console.log(authURL);
        // retrieve the K5/OpenStack authentication token from the response header
        var token = this.userProjectToken.getValue().headers.get('x-subject-token');
        //console.log('Getting Users in Group');
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.get(authURL, postopts)
            .map(function (res) {
            //console.log('New Group User List' + JSON.stringify(res));
            _this.changeUsersInGroup(res.json().users);
            //console.log(this.usersInGroupList.getValue());
            // return res.json().projects as projects;
            // return projects;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Group Roles Complete'); });
    };
    // Get unscoped K5 global token
    IdentityService.prototype.getCentralPortalToken = function (username, password, contract) {
        var _this = this;
        // Without CORS Proxy Service in use
        var identityURL = 'https://auth-api.jp-east-1.paas.cloud.global.fujitsu.com/API/paas/auth/token';
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(identityURL);
        var body = { 'auth': { 'identity': { 'password': { 'user': { 'contract_number': contract,
                            'name': username,
                            'password': password
                        } } } } };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.post(authURL, bodyString, postopts)
            .map(function (gres) {
            _this.changeGlobalToken(gres);
            // this.k5Globalresponse = gres;
            // retrieve the K5/OpenStack authentication token from the response header
            // this.user.globalToken = gres.headers.get('X-Access-Token');
            //console.log('Central Portal Token => \n');
            //console.log(this.userGlobalToken.getValue().json());
        });
    };
    // Get unscoped K5 regional token
    IdentityService.prototype.login = function (username, password, contract, region) {
        var _this = this;
        // Without CORS Proxy Service in use
        var identityURL = 'https://identity.'.concat(region, '.cloud.global.fujitsu.com/v3/auth/tokens');
        // With CORS Proxy Service in use here
        var authURL = this.utilityService.sendViaCORSProxy(identityURL);
        var body = { 'auth': { 'identity': { 'methods': ['password'], 'password': { 'user': { 'domain': { 'name': contract },
                            'name': username,
                            'password': password
                        } } } } };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        var postopts = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.post(authURL, bodyString, postopts)
            .map(function (res) {
            _this.changeRegionalToken(res);
            _this.changeLoginStatus(true);
            // retrieve Global token
            _this.getCentralPortalToken(username, password, contract).subscribe();
            _this.getKeystoneObjectList('projects').subscribe(function (projects) { return _this.changeContractProjects(projects.json().projects); });
            _this.getKeystoneObjectList('users').subscribe(function (users) { return _this.changeContractUsers(users.json().users); });
            _this.getKeystoneObjectList('roles').subscribe(function (roles) { return _this.changeContractRoles(roles.json().roles); });
            _this.getKeystoneObjectList('groups').subscribe(function (groups) { return _this.changeContractGroups(groups.json().groups); });
            _this.getProjectList().subscribe();
        });
    };
    IdentityService.prototype.logout = function () {
        this.changeLoginStatus(false);
    };
    return IdentityService;
}());
IdentityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__utility_service__["a" /* UtilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__compute_service__["a" /* ComputeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__compute_service__["a" /* ComputeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__stack_service__["a" /* StackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stack_service__["a" /* StackService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__loadbalancer_service__["a" /* LoadbalancerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__loadbalancer_service__["a" /* LoadbalancerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _g || Object])
], IdentityService);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=identity.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/loadbalancer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadbalancerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoadbalancerService = (function () {
    function LoadbalancerService(http, utilitiesService, cloudvisualisedService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.cloudvisualisedService = cloudvisualisedService;
        this.userLBaaSList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userLBaaS = this.userLBaaSList.asObservable();
        this.userLBaaSDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.LBaaSDetails = this.userLBaaSDetails.asObservable();
        this.lBDetails = false;
    }
    LoadbalancerService.prototype.changeLBaaSDetails = function (LBaaSDetails) {
        this.userLBaaSDetails.next(LBaaSDetails);
    };
    LoadbalancerService.prototype.changeLBaaSList = function (userLBaaS) {
        this.userLBaaSList.next(userLBaaS);
        if (userLBaaS != null) {
            this.cloudvisualisedService.getNodes('lbaas', userLBaaS);
        }
    };
    // set LBaaSName to 'all' to retrieve all LBaaS associated with scoped token
    // otherwise provide the name of an existing LBaaS to get it's details
    LoadbalancerService.prototype.getLBaaSDetailOrList = function (k5scopedtoken, LBaaSName) {
        // //console.log('lbaas token');
        // //console.log(k5scopedtoken);
        var _this = this;
        var lbaasURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'loadbalancing');
        if (LBaaSName === 'all') {
            lbaasURL = lbaasURL.concat('/?Version=2014-11-01&Action=DescribeLoadBalancers');
            this.lBDetails = false;
        }
        else {
            //console.log('Get LBAAS Detail rather than ALL')
            lbaasURL = lbaasURL.concat('/?LoadBalancerNames.member.1=', LBaaSName, '&Version=2014-11-01&Action=DescribeLoadBalancers');
            this.lBDetails = true;
        }
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(lbaasURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New LBaaS List ->');
            //console.log(res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member);
            if (_this.lBDetails) {
                _this.changeLBaaSDetails(res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member);
            }
            else {
                _this.changeLBaaSList(res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member);
            }
            return res.json().DescribeLoadBalancersResponse.DescribeLoadBalancersResult.LoadBalancerDescriptions.member;
        })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); }, function () { return console.log('Finished LBaaS List or Details Observable'); });
    };
    LoadbalancerService.prototype.deleteLBaaS = function (k5scopedtoken, LBaaSName) {
        var lbaasURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'loadbalancing');
        lbaasURL = lbaasURL.concat('/?LoadBalancerName=', LBaaSName, '&Version=2014-11-01&Action=DeleteLoadBalancer');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(lbaasURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('LBaaS Deleted');
            //console.log(res.json());
            return res.json();
        })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); }, function () { return console.log('Finished LBaaS Deletion'); });
    };
    return LoadbalancerService;
}());
LoadbalancerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _c || Object])
], LoadbalancerService);

var _a, _b, _c;
//# sourceMappingURL=loadbalancer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__ = __webpack_require__("../../../../../src/app/services/cloudvisualised.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NetworkService = (function () {
    function NetworkService(http, utilitiesService, cloudvisualisedService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.cloudvisualisedService = cloudvisualisedService;
        this.userRouterList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userRouters = this.userRouterList.asObservable();
        this.userRouterDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.routerDetails = this.userRouterDetails.asObservable();
        this.userNetworkList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userNetworks = this.userNetworkList.asObservable();
        this.userNetworkDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.networkDetails = this.userNetworkDetails.asObservable();
        this.userSubNetworkList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userSubNetworks = this.userSubNetworkList.asObservable();
        this.userSubNetworkDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.subNetworkDetails = this.userSubNetworkDetails.asObservable();
        this.userPortList = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userPorts = this.userPortList.asObservable();
        this.userPortDetails = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.subPortDetails = this.userPortDetails.asObservable();
    }
    NetworkService.prototype.changeRouterList = function (userRouters) {
        this.userRouterList.next(userRouters);
        this.cloudvisualisedService.getNodes('router', userRouters);
    };
    NetworkService.prototype.changeRouterDetails = function (routerDetails) {
        this.userRouterDetails.next(routerDetails);
    };
    NetworkService.prototype.changeNetworkList = function (userNetworks) {
        this.userNetworkList.next(userNetworks);
        this.cloudvisualisedService.getNodes('network', userNetworks);
    };
    NetworkService.prototype.changeNetworkDetails = function (NetworkDetails) {
        this.userNetworkDetails.next(NetworkDetails);
    };
    NetworkService.prototype.changeSubNetworkList = function (userSubNetworks) {
        this.userSubNetworkList.next(userSubNetworks);
        this.cloudvisualisedService.getNodes('subnetwork', userSubNetworks);
    };
    NetworkService.prototype.changeSubNetworkDetails = function (SubNetworkDetails) {
        this.userSubNetworkDetails.next(SubNetworkDetails);
    };
    NetworkService.prototype.changePortList = function (userPorts) {
        this.userPortList.next(userPorts);
        this.cloudvisualisedService.getNodes('port', userPorts);
    };
    NetworkService.prototype.changePortDetails = function (PortDetails) {
        this.userPortDetails.next(PortDetails);
    };
    NetworkService.prototype.getRouterList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/routers');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Router List ->');
            //console.log(res.json().routers);
            _this.changeRouterList(res.json().routers);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Router list complete'); });
    };
    NetworkService.prototype.getRouterDetails = function (k5scopedtoken, router) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/routers/', router.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Router details');
            //console.log(res.json().router);
            _this.changeRouterDetails(res.json().router);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed Router Details'); });
    };
    NetworkService.prototype.getNetworkList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/networks');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New network List ->');
            //console.log(res.json().networks);
            _this.changeNetworkList(res.json().networks);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('network list complete'); });
    };
    NetworkService.prototype.getNetworkDetails = function (k5scopedtoken, network) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/networks/', network.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('network details');
            //console.log(res.json().network);
            _this.changeNetworkDetails(res.json().network);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed network Details'); });
    };
    NetworkService.prototype.getSubnetList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/subnets');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Subnet List ->');
            //console.log(res.json().subnets);
            _this.changeSubNetworkList(res.json().subnets);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('subnet list complete'); });
    };
    NetworkService.prototype.getSubnetDetails = function (k5scopedtoken, subnet) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/subnets/', subnet.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Subnet details');
            //console.log(res.json().subnet);
            _this.changeSubNetworkDetails(res.json().subnet);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed Subnet Details'); });
    };
    NetworkService.prototype.getPortList = function (k5scopedtoken) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/ports');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Port List ->');
            //console.log(res.json().ports);
            _this.changePortList(res.json().ports);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('port list complete'); });
    };
    NetworkService.prototype.getPortDetails = function (k5scopedtoken, port) {
        var _this = this;
        var networkURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'networking');
        networkURL = networkURL.concat('/v2.0/ports/', port.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(networkURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Port details');
            //console.log(res.json().port);
            _this.changePortDetails(res.json().port);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed Port Details'); });
    };
    return NetworkService;
}());
NetworkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__["a" /* CloudvisualisedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__cloudvisualised_service__["a" /* CloudvisualisedService */]) === "function" && _c || Object])
], NetworkService);

var _a, _b, _c;
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/password-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordManagementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordManagementService = (function () {
    function PasswordManagementService() {
        this.crypto = window.crypto;
        this.encryptAlgorithm = {
            name: "RSA-OAEP",
            hash: {
                name: "SHA-1"
            }
        };
    }
    // importPublicKey(pemKey) {
    //     //console.log('import pem key');
    //     //console.log(this.convertPemToBinary(pemKey));
    //     return new Promise(function(resolve) {
    //         let importer = crypto.subtle.importKey("spki", this.convertPemToBinary(pemKey), this.encryptAlgorithm, false, ["encrypt"]);
    //         importer.then(function(key) { 
    //         resolve(key);
    //         });
    // });
    // }
    PasswordManagementService.prototype.importKey = function (pemkey) {
        pemkey = this.convertPemToBinary(pemkey);
        window.crypto.subtle.importKey("pkcs8", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        pemkey, {
            name: "RSA-OAEP",
            hash: { name: "SHA-256" },
        }, false, //whether the key is extractable (i.e. can be used in exportKey)
        ["decrypt"] //"encrypt" or "wrapKey" for public key import or
        //"decrypt" or "unwrapKey" for private key imports
        )
            .then(function (publicKey) {
            //returns a publicKey (or privateKey if you are importing a private key)
            //console.log(publicKey);
            return publicKey;
        });
    };
    PasswordManagementService.prototype.convertPemToBinary = function (pem) {
        //console.log('convert pem key');
        //console.log(pem);
        var lines = pem.split('\n');
        var encoded = '';
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].trim().length > 0 &&
                lines[i].indexOf('-BEGIN RSA PRIVATE KEY-') < 0 &&
                lines[i].indexOf('-BEGIN RSA PUBLIC KEY-') < 0 &&
                lines[i].indexOf('-BEGIN PUBLIC KEY-') < 0 &&
                lines[i].indexOf('-END PUBLIC KEY-') < 0 &&
                lines[i].indexOf('-END RSA PRIVATE KEY-') < 0 &&
                lines[i].indexOf('-END RSA PUBLIC KEY-') < 0) {
                encoded += lines[i].trim();
            }
        }
        //console.log('converted pem key');
        //console.log(encoded);
        //console.log(this.base64StringToArrayBuffer(encoded));
        return this.base64StringToArrayBuffer(encoded);
    };
    PasswordManagementService.prototype.base64StringToArrayBuffer = function (b64str) {
        var byteStr = atob(b64str);
        var bytes = new Uint8Array(byteStr.length);
        for (var i = 0; i < byteStr.length; i++) {
            bytes[i] = byteStr.charCodeAt(i);
        }
        return bytes.buffer;
    };
    PasswordManagementService.prototype.arrayBufferToBase64String = function (arrayBuffer) {
        var byteArray = new Uint8Array(arrayBuffer);
        var byteString = '';
        for (var i = 0; i < byteArray.byteLength; i++) {
            byteString += String.fromCharCode(byteArray[i]);
        }
        return btoa(byteString);
    };
    PasswordManagementService.prototype.decrypt_data = function (private_key_object, encrypted_data) {
        //console.log(' decrypt key debug....');
        //console.log(private_key_object);
        private_key_object = this.importKey(private_key_object);
        //console.log(private_key_object);
        //console.log(encrypted_data);
        encrypted_data = this.base64StringToArrayBuffer(encrypted_data);
        //console.log(encrypted_data);
        window.crypto.subtle.decrypt({
            name: "RSA-OAEP",
        }, private_key_object, //from generateKey or importKey above
        encrypted_data //ArrayBuffer of the data
        )
            .then(function (decrypted) {
            //returns an ArrayBuffer containing the decrypted data
            //console.log(new Uint8Array(decrypted));
        });
    };
    return PasswordManagementService;
}());
PasswordManagementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PasswordManagementService);

//# sourceMappingURL=password-management.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/remove-quotes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveQuotesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveQuotesPipe = (function () {
    function RemoveQuotesPipe() {
    }
    RemoveQuotesPipe.prototype.transform = function (value, args) {
        if (value.indexOf('"') > -1) {
            return value.replace(/"/g, '');
        }
        else {
            return value;
        }
    };
    return RemoveQuotesPipe;
}());
RemoveQuotesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'removeQuotes'
    })
], RemoveQuotesPipe);

//# sourceMappingURL=remove-quotes.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/sort-objects-by-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortObjectsByNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortObjectsByNamePipe = (function () {
    function SortObjectsByNamePipe() {
    }
    SortObjectsByNamePipe.prototype.transform = function (arr, args) {
        if (!arr) {
            return;
        }
        return arr.sort(function (a, b) {
            if ((a.name).toLowerCase() > (b.name).toLowerCase()) {
                return 1;
            }
            if ((a.name).toLowerCase() < (b.name).toLowerCase()) {
                return -1;
            }
            return 0;
        });
    };
    return SortObjectsByNamePipe;
}());
SortObjectsByNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'sortObjectsByName'
    })
], SortObjectsByNamePipe);

//# sourceMappingURL=sort-objects-by-name.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/stack-sorter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackSorterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StackSorterPipe = (function () {
    function StackSorterPipe() {
    }
    StackSorterPipe.prototype.transform = function (arr, args) {
        if (!arr) {
            return;
        }
        return arr.sort(function (a, b) {
            if ((a.stack_name).toLowerCase() > (b.stack_name).toLowerCase()) {
                return 1;
            }
            if ((a.stack_name).toLowerCase() < (b.stack_name).toLowerCase()) {
                return -1;
            }
            return 0;
        });
    };
    return StackSorterPipe;
}());
StackSorterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'stackSorter'
    })
], StackSorterPipe);

//# sourceMappingURL=stack-sorter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/stack.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StackService = (function () {
    function StackService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.userStackList = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.userStacks = this.userStackList.asObservable();
        this.userStackDetails = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.stackDetails = this.userStackDetails.asObservable();
        this.userStackOutputs = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.stackOutputs = this.userStackOutputs.asObservable();
        this.currentProject = null;
        this.currentProjectToken = null;
    }
    StackService.prototype.changeStackList = function (userStacks) {
        this.userStackList.next(userStacks);
    };
    StackService.prototype.changeStackOutputs = function (stackOutputs) {
        this.userStackOutputs.next(stackOutputs);
    };
    StackService.prototype.changeStackDetails = function (stackDetails) {
        this.userStackDetails.next(stackDetails);
    };
    StackService.prototype.getStackList = function (k5scopedtoken) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('New Stack List ->');
            //console.log(res.json().stacks);
            _this.changeStackList(res.json().stacks);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    StackService.prototype.getStackDetails = function (k5scopedtoken, stack) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks/', stack.stack_name, '/', stack.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Heat Stack Details');
            //console.log(res.json());
            _this.changeStackDetails(res.json());
            // added following 'hack' as the outputs API call is not currently implemented on FJ K5 IaaS
            _this.changeStackOutputs(res.json().stack.outputs);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    StackService.prototype.deleteStack = function (k5scopedtoken, stack) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks/', stack.stack.stack_name, '/', stack.stack.id);
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.delete(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Delete Stack');
            //console.log(res.json());
            _this.changeStackDetails(null);
            // added following 'hack' as the outputs API call is not currently implemented on FJ K5 IaaS
            _this.changeStackOutputs(null);
            return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    // API not currently implemented on Fujitsu K5 IaaS 12/09/2017 - Graham Land
    // Just grab the outputs from the server details
    StackService.prototype.getStackOutputs = function (k5scopedtoken, stack) {
        var _this = this;
        var stackURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'orchestration');
        stackURL = stackURL.concat('/stacks/', stack.stack_name, '/', stack.id, '/outputs');
        // With CORS Proxy Service in use here
        var proxiedURL = this.utilitiesService.sendViaCORSProxy(stackURL);
        var getheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));
        var headeropts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        headeropts.headers = getheaders;
        return this.http.get(proxiedURL, headeropts)
            .map(function (res) {
            //console.log('Heat Stack Outputs');
            //console.log(res.json().outputs);
            _this.changeStackOutputs(res.json().outputs);
            // return res;
        })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('yay'); });
    };
    return StackService;
}());
StackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], StackService);

var _a, _b;
//# sourceMappingURL=stack.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-maintenance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility_service__ = __webpack_require__("../../../../../src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMaintenanceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMaintenanceService = (function () {
    function UserMaintenanceService(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
    }
    // undocumented api - just a guess
    // listUserfromCentralPortal(k5GlobalToken: any, user: any) {
    //   let centralIdUrl = 'https://k5-apiportal.paas.cloud.global.fujitsu.com/API/v1/api/users?login_id=';
    //   centralIdUrl = centralIdUrl.concat(user.name);
    //   // With CORS Proxy Service in use here
    //   const authURL = this.utilitiesService.sendViaCORSProxy(centralIdUrl);
    //   const postheaders: Headers = new Headers();
    //   postheaders.append('Content-Type', 'application/json');
    //   postheaders.append('Accept', 'application/json');
    //   postheaders.append('Token', k5GlobalToken.headers.get('X-Access-Token'));
    //   const postopts: RequestOptions = new RequestOptions();
    //   postopts.headers = postheaders;
    //   //console.log('call Update API ===>' + user.id + ' token : ' + user.globalToken);
    //   return this.http.get(authURL, postopts)
    //       .map(res => res.json())
    //       .subscribe((data) => { //console.log('Get Response ' + data);
    //                   },
    //                   (err) => { //console.log('Get Error ' + err);
    //                   });
    // }
    UserMaintenanceService.prototype.listUserfromCentralPortal = function (k5GlobalToken, user) {
        var centralIdUrl = 'https://k5-apiportal.paas.cloud.global.fujitsu.com/API/v1/api/users?login_id=';
        centralIdUrl = centralIdUrl.concat(user.name);
        // With CORS Proxy Service in use here
        var authURL = this.utilitiesService.sendViaCORSProxy(centralIdUrl);
        var body = { 'language_code': 'en' };
        var bodyString = JSON.stringify(body); // Stringify payload
        var postheaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('Token', k5GlobalToken.headers.get('X-Access-Token'));
        var postopts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        postopts.headers = postheaders;
        return this.http.put(authURL, bodyString, postopts)
            .map(function (res) {
            //console.log('Response of User Update');
            //console.log(res);
            //console.log('User Queried on Central Portal' + JSON.stringify(res) );
        });
    };
    return UserMaintenanceService;
}());
UserMaintenanceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_utility_service__["a" /* UtilityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_utility_service__["a" /* UtilityService */]) === "function" && _b || Object])
], UserMaintenanceService);

var _a, _b;
//# sourceMappingURL=user-maintenance.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilityService = (function () {
    function UtilityService() {
        this.userk5CORSproxy = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.userK5CORS = this.userk5CORSproxy.asObservable();
    }
    UtilityService.prototype.changek5proxy = function (proxy) {
        //console.log(this.userk5CORSproxy.getValue());
        this.userk5CORSproxy.next(!proxy);
        //console.log(this.userk5CORSproxy.getValue());
    };
    UtilityService.prototype.convertStringToArrayBufferView = function (str) {
        var bytes = new Uint8Array(str.length);
        for (var iii = 0; iii < str.length; iii++) {
            bytes[iii] = str.charCodeAt(iii);
        }
        return bytes;
    };
    UtilityService.prototype.convertArrayBufferViewtoString = function (buffer) {
        var str = "";
        for (var iii = 0; iii < buffer.byteLength; iii++) {
            str += String.fromCharCode(buffer[iii]);
        }
        return str;
    };
    // Generate random password
    UtilityService.prototype.generateRandomPassword = function (passwordLength) {
        var text = '';
        var possible = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (var i = 0; i < passwordLength; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    UtilityService.prototype.getEndpoint = function (k5token, endpointType) {
        // //console.log('Get Endpoint Token Details ' + JSON.stringify(k5token));
        // //console.log('Get Endpoint ObjectType Details ' + endpointType);
        for (var _i = 0, _a = (k5token.json().token.catalog); _i < _a.length; _i++) {
            var endpoint = _a[_i];
            if (endpoint.endpoints.length > 0) {
                if (endpointType === endpoint.endpoints[0].name) {
                    // //console.log(endpoint.endpoints[0].url);
                    return endpoint.endpoints[0].url;
                }
            }
        }
    };
    UtilityService.prototype.getItemId = function (itemList, itemName, itemType) {
        var itemId = 'None';
        for (var item in itemList.json()[itemType]) {
            if (itemList.json()[itemType][item].name === itemName) {
                // //console.log('\n\n\n\===== OBJECT  LIST ======\n\n\n' + JSON.stringify(itemList.json()[itemType][item]));
                itemId = itemList.json()[itemType][item].id;
                break;
            }
        }
        return itemId;
    };
    UtilityService.prototype.getItemName = function (itemList, itemID) {
        var itemName = 'None';
        for (var item in itemList.json()) {
            if (itemList.json()[item].id === itemID) {
                //console.log('\n\n\n\===== OBJECT  LIST ======\n\n\n' + JSON.stringify(itemList.json()));
                itemName = itemList.json()[item].name;
                break;
            }
        }
        return itemName;
    };
    UtilityService.prototype.sendViaCORSProxy = function (URL) {
        // //console.log(URL);
        if (this.userk5CORSproxy.getValue()) {
            // CORS PROXY URL
            //const corsProxy = 'http://localhost:2337/';https://corsproxy.uk-1.cf-app.net/
            var corsProxy = 'https://corsproxy.uk-1.cf-app.net/';
            // const corsProxy = 'https://hydra-t-apimng.uk-1.paas.cloud.global.fujitsu.com:10443/k5corsdemo/'
            // remove the first 8 characters of the URL...https:// and add export
            var protocol = URL.split(':', 1);
            var port = (protocol[0] === 'https') ? 443 : 80;
            // insert port number after host details
            var pureURL = URL.substring((protocol[0].length + 3), URL.length);
            // //console.log(pureURL);
            var hostName = pureURL.split('/', 1);
            var urlWithoutHost = pureURL.substring(hostName[0].length, pureURL.length);
            // //console.log(urlWithoutHost);
            var hostNamePort = hostName[0].concat(':', port.toString());
            var proxyURL = corsProxy.concat(hostNamePort, urlWithoutHost);
            // //console.log(proxyURL);
            return proxyURL;
        }
        else {
            return URL;
        }
    };
    return UtilityService;
}());
UtilityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilityService);

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-management works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserManagementComponent = (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    return UserManagementComponent;
}());
UserManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-user-management',
        template: __webpack_require__("../../../../../src/app/user-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-management.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserManagementComponent);

//# sourceMappingURL=user-management.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map