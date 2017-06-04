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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var breadcrumbService_1 = require("./breadcrumbService");
/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router, breadcrumbService) {
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.useBootstrap = true;
        this.prefix = '';
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._urls = new Array();
        if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }
        this._routerSubscription = this.router.events.subscribe(function (navigationEnd) {
            if (navigationEnd instanceof router_1.NavigationEnd) {
                _this._urls.length = 0; //Fastest way to clear out array
                _this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
            }
        });
    };
    BreadcrumbComponent.prototype.ngOnChanges = function (changes) {
        if (!this._urls) {
            return;
        }
        this._urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    };
    BreadcrumbComponent.prototype.generateBreadcrumbTrail = function (url) {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this._urls.unshift(url);
        }
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        }
        else if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }
    };
    BreadcrumbComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    BreadcrumbComponent.prototype.friendlyName = function (url) {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        this._routerSubscription.unsubscribe();
    };
    return BreadcrumbComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BreadcrumbComponent.prototype, "useBootstrap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BreadcrumbComponent.prototype, "prefix", void 0);
BreadcrumbComponent = __decorate([
    core_1.Component({
        selector: 'breadcrumb',
        template: "\n        <ul [class.breadcrumb]=\"useBootstrap\">\n            <li *ngFor=\"let url of _urls; let last = last\" [ngClass]=\"{'breadcrumb-item': useBootstrap, 'active': last}\"> <!-- disable link of last item -->\n                <a role=\"button\" *ngIf=\"!last && url == prefix\" (click)=\"navigateTo('/')\">{{url}}</a>\n                <a role=\"button\" *ngIf=\"!last && url != prefix\" (click)=\"navigateTo(url)\">{{friendlyName(url)}}</a>\n                <span *ngIf=\"last\">{{friendlyName(url)}}</span>\n                <span *ngIf=\"last && url == prefix\">{{friendlyName('/')}}</span>\n            </li>\n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router,
        breadcrumbService_1.BreadcrumbService])
], BreadcrumbComponent);
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.js.map