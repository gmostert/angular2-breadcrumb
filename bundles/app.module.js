import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb';
import { BreadcrumbService } from './components/breadcrumbService';
export * from './components/breadcrumb';
export * from './components/breadcrumbService';
var Ng2BreadcrumbModule = (function () {
    function Ng2BreadcrumbModule() {
    }
    Ng2BreadcrumbModule.forRoot = function () {
        return {
            ngModule: Ng2BreadcrumbModule,
            providers: [BreadcrumbService]
        };
    };
    Ng2BreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        BreadcrumbComponent
                    ],
                    exports: [
                        BreadcrumbComponent
                    ]
                },] },
    ];
    Ng2BreadcrumbModule.ctorParameters = function () { return []; };
    return Ng2BreadcrumbModule;
}());
export { Ng2BreadcrumbModule };
