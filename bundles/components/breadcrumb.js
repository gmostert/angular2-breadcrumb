import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreadcrumbService } from './breadcrumbService';
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
            if (navigationEnd instanceof NavigationEnd) {
                _this._urls.length = 0;
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
            this._urls.unshift(url);
        }
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/')));
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
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'breadcrumb',
                    template: "\n        <ul [class.breadcrumb]=\"useBootstrap\">\n            <li *ngFor=\"let url of _urls; let last = last\" [ngClass]=\"{'breadcrumb-item': useBootstrap, 'active': last}\"> <!-- disable link of last item -->\n                <a role=\"button\" *ngIf=\"!last && url == prefix\" (click)=\"navigateTo('/')\">{{url}}</a>\n                <a role=\"button\" *ngIf=\"!last && url != prefix\" (click)=\"navigateTo(url)\">{{friendlyName(url)}}</a>\n                <span *ngIf=\"last\">{{friendlyName(url)}}</span>\n                <span *ngIf=\"last && url == prefix\">{{friendlyName('/')}}</span>\n            </li>\n        </ul>\n    "
                },] },
    ];
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: BreadcrumbService, },
    ]; };
    BreadcrumbComponent.propDecorators = {
        'useBootstrap': [{ type: Input },],
        'prefix': [{ type: Input },],
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
