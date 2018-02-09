import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BreadcrumbService } from './components/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
      <h1>Breadcrumb Example</h1>
      <breadcrumb></breadcrumb>
      <router-outlet></router-outlet>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private breadcrumbService: BreadcrumbService) {
        breadcrumbService.addFriendlyNameForRoute('/comp1', 'Comp 1');
        breadcrumbService.addFriendlyNameForRouteRegex('^/comp1/comp[0-9]$', 'Comp 2');
        breadcrumbService.hideRoute('/comp1/comp2/comp3');
        breadcrumbService.addCallbackForRouteRegex('/comp1/comp2/comp3/[0-9]', this.getName);
    }
    
    getName(id:string): string {
        return 'Comp ' + id;
    }
}

@Component({
    selector: 'comp1',
    template: `
        <h3>This is Component 1</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component1 {
    constructor(private router: Router) {
    }

    goTo(): void {
        this.router.navigate(['/comp1/comp2']);
    }
}

@Component({
    selector: 'comp2',
    template: `
        <h3>This is Component 2</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component2 {
    constructor(private router: Router) {
    }

    goTo(): void {
        this.router.navigate(['/comp1/comp2/comp3']);
    }
}

@Component({
    selector: 'comp3',
    template: `
        <h3>This is Component 3, which is hidden from the breadcrumb</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component3 {
    constructor(private router: Router) {
    }
    
     goTo(): void {
        this.router.navigate(['/comp1/comp2/comp3/' + Math.floor(Math.random()*100)]);
    }
}

@Component({
    selector: 'comp4',
    template: `
        <h3>This is Component 4, which uses a callback to display its breadcrumb name</h3>
    `
})
export class Component4 {
    constructor() {
    }
}
