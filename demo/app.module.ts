import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Component1, Component2, Component3, Component4 } from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { Ng2BreadcrumbModule } from '../lib/breadcrumb.module';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        Ng2BreadcrumbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        Component1,
        Component2,
        Component3,
        Component4
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }