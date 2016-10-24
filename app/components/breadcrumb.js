"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var breadcrumbService_1 = require('./breadcrumbService');
/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router, breadcrumbService) {
        var _this = this;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this._urls = new Array();
        this.router.events.subscribe(function (navigationEnd) {
            _this._urls.length = 0; //Fastest way to clear out array
            _this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    }
    BreadcrumbComponent.prototype.generateBreadcrumbTrail = function (url) {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this._urls.unshift(url);
        }
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        }
    };
    BreadcrumbComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    BreadcrumbComponent.prototype.friendlyName = function (url) {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    };
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'breadcrumb',
            template: "\n        <div>\n            <ul class=\"breadcrumb\">\n                <li *ngFor=\"let url of _urls; let last = last\" [ngClass]=\"{'active': last}\"> <!-- disable link of last item -->\n                    <a role=\"button\" *ngIf=\"!last\" (click)=\"navigateTo(url)\">{{friendlyName(url)}}</a>\n                    <span *ngIf=\"last\">{{friendlyName(url)}}</span>\n                </li>\n            </ul>\n        </div>\n    ",
            styles: ["\n      .breadcrumb {\n        padding: 8px 15px;\n        margin-bottom: 20px;\n        list-style: none;\n        background-color: transparent;\n        border-radius: 3px;\n      }\n      .breadcrumb > li {\n        display: inline-block;\n      }\n      .breadcrumb > li + li:before {\n        content: \"/\";\n        padding: 0 5px;\n        color: #999999;\n      }\n      .breadcrumb > .active {\n        color: #555555;\n      }\n   "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, breadcrumbService_1.BreadcrumbService])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.js.map