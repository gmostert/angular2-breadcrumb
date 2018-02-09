import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Component1, Component2, Component3, Component4} from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/comp1', pathMatch: 'full'},
    { path: 'comp1', component: Component1 },
    { path: 'comp1/comp2', component: Component2 },
    { path: 'comp1/comp2/comp3', component: Component3 },
    { path: 'comp1/comp2/comp3/:id', component: Component4 }
];

export const appRoutingProviders: any[] = [];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);