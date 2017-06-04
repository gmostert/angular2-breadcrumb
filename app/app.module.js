"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var breadcrumb_1 = require("./components/breadcrumb");
var breadcrumbService_1 = require("./components/breadcrumbService");
__export(require("./components/breadcrumb"));
__export(require("./components/breadcrumbService"));
var Ng2BreadcrumbModule = Ng2BreadcrumbModule_1 = (function () {
    function Ng2BreadcrumbModule() {
    }
    Ng2BreadcrumbModule.forRoot = function () {
        return {
            ngModule: Ng2BreadcrumbModule_1,
            providers: [breadcrumbService_1.BreadcrumbService]
        };
    };
    return Ng2BreadcrumbModule;
}());
Ng2BreadcrumbModule = Ng2BreadcrumbModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            breadcrumb_1.BreadcrumbComponent
        ],
        exports: [
            breadcrumb_1.BreadcrumbComponent
        ]
    })
], Ng2BreadcrumbModule);
exports.Ng2BreadcrumbModule = Ng2BreadcrumbModule;
var Ng2BreadcrumbModule_1;
//# sourceMappingURL=app.module.js.map