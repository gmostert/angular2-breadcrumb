import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {BreadcrumbService} from './breadcrumbService';

/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
@Component({
    selector: 'breadcrumb',
    template: `
        <div>
            <ul class="breadcrumb">
                <li *ngFor="let url of _urls; let last = last" [ngClass]="{'active': last}"> <!-- disable link of last item -->
                    <a role="button" *ngIf="!last" (click)="navigateTo(url)">{{friendlyName(url)}}</a>
                    <span *ngIf="last">{{friendlyName(url)}}</span>
                </li>
            </ul>
        </div>
    `,
    styles: [`
      .breadcrumb {
        padding: 8px 15px;
        margin-bottom: 20px;
        list-style: none;
        background-color: transparent;
        border-radius: 3px;
      }
      .breadcrumb > li {
        display: inline-block;
      }
      .breadcrumb > li + li:before {
        content: "/";
        padding: 0 5px;
        color: #999999;
      }
      .breadcrumb > .active {
        color: #555555;
      }
   `]
})
export class BreadcrumbComponent {

    private _urls: string[];

    constructor(private router: Router, private breadcrumbService: BreadcrumbService) {
        this._urls = new Array();
        this.router.events.subscribe((navigationEnd:NavigationEnd) => {
            this._urls.length = 0; //Fastest way to clear out array
            this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    }

    generateBreadcrumbTrail(url: string): void {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this._urls.unshift(url);
        }

        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        }
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    friendlyName(url: string): string {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    }

}
