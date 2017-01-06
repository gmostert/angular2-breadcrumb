import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2BreadcrumbService } from './breadcrumb.service';
import { Ng2BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
    declarations: [Ng2BreadcrumbComponent],
    imports: [CommonModule],
    exports: [Ng2BreadcrumbComponent]
})
export class Ng2BreadcrumbModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: Ng2BreadcrumbModule,
            providers: [Ng2BreadcrumbService]
        };
    }
}
