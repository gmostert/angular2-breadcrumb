"use strict";
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
var Ng2BreadcrumbModule = (function () {
    function Ng2BreadcrumbModule() {
    }
    Ng2BreadcrumbModule.forRoot = function () {
        return {
            ngModule: Ng2BreadcrumbModule,
            providers: [breadcrumbService_1.BreadcrumbService]
        };
    };
    return Ng2BreadcrumbModule;
}());
Ng2BreadcrumbModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    breadcrumb_1.BreadcrumbComponent
                ],
                exports: [
                    breadcrumb_1.BreadcrumbComponent
                ]
            },] },
];
/** @nocollapse */
Ng2BreadcrumbModule.ctorParameters = function () { return []; };
exports.Ng2BreadcrumbModule = Ng2BreadcrumbModule;
//# sourceMappingURL=app.module.js.map