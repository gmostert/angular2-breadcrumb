import { Injectable } from "@angular/core";
var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.routesFriendlyNames = new Map();
        this.routesFriendlyNamesRegex = new Map();
        this.routesWithCallback = new Map();
        this.routesWithCallbackRegex = new Map();
        this.hideRoutes = new Array();
        this.hideRoutesRegex = new Array();
    }
    BreadcrumbService.prototype.addFriendlyNameForRoute = function (route, name) {
        this.routesFriendlyNames.set(route, name);
    };
    BreadcrumbService.prototype.addFriendlyNameForRouteRegex = function (routeRegex, name) {
        this.routesFriendlyNamesRegex.set(routeRegex, name);
    };
    BreadcrumbService.prototype.addCallbackForRoute = function (route, callback) {
        this.routesWithCallback.set(route, callback);
    };
    BreadcrumbService.prototype.addCallbackForRouteRegex = function (routeRegex, callback) {
        this.routesWithCallbackRegex.set(routeRegex, callback);
    };
    BreadcrumbService.prototype.getFriendlyNameForRoute = function (route) {
        var name;
        var routeEnd = route.substr(route.lastIndexOf('/') + 1, route.length);
        this.routesFriendlyNames.forEach(function (value, key, map) {
            if (key === route) {
                name = value;
            }
        });
        this.routesFriendlyNamesRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value;
            }
        });
        this.routesWithCallback.forEach(function (value, key, map) {
            if (key === route) {
                name = value(routeEnd);
            }
        });
        this.routesWithCallbackRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value(routeEnd);
            }
        });
        return name ? name : routeEnd;
    };
    BreadcrumbService.prototype.hideRoute = function (route) {
        if (this.hideRoutes.indexOf(route) === -1) {
            this.hideRoutes.push(route);
        }
    };
    BreadcrumbService.prototype.hideRouteRegex = function (routeRegex) {
        if (this.hideRoutesRegex.indexOf(routeRegex) === -1) {
            this.hideRoutesRegex.push(routeRegex);
        }
    };
    BreadcrumbService.prototype.isRouteHidden = function (route) {
        var hide = this.hideRoutes.indexOf(route) > -1;
        this.hideRoutesRegex.forEach(function (value) {
            if (new RegExp(value).exec(route)) {
                hide = true;
            }
        });
        return hide;
    };
    BreadcrumbService.decorators = [
        { type: Injectable },
    ];
    BreadcrumbService.ctorParameters = function () { return []; };
    return BreadcrumbService;
}());
export { BreadcrumbService };
