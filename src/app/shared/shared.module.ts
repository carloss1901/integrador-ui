import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import '@angular/common/locales/global/es-PE';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AgrihusaBreadcrumbComponent } from './components/agrihusa-breadcrumb/agrihusa-breadcrumb.component';
import { AgrihusaTopBarComponent } from './components/agrihusa-topbar/agrihusa-topbar.component';
import { AgrihusaNoResultsComponent } from './components/agrihusa-no-result/agrihusa-no-results.component';
import { AgrihusaLoadingComponent } from './components/agrihusa-loading/agrihusa-loading.component';
import { TableFooterPaginationComponent } from './components/agrihusa-table-footer/agrihusa-table-footer.component';
import { AgrihusaButtonComponent } from './components/agrihusa-button/agrihusa-button.component';

// services
@NgModule({
	declarations: [
		AgrihusaBreadcrumbComponent,
		AgrihusaTopBarComponent,
		AgrihusaNoResultsComponent,
		AgrihusaLoadingComponent,
		TableFooterPaginationComponent,
		AgrihusaButtonComponent
	],
	imports: [
		NgSelectModule,
		NgbPaginationModule,
		FormsModule,
		CommonModule,
		RouterModule
	],
	exports: [
		AgrihusaBreadcrumbComponent,
		AgrihusaTopBarComponent,
		AgrihusaNoResultsComponent,
		AgrihusaLoadingComponent,
		TableFooterPaginationComponent,
		AgrihusaButtonComponent
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'es-PE' },
		DecimalPipe,
	],
})
export class SharedModule {}
