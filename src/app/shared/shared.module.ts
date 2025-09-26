import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import '@angular/common/locales/global/es-PE';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

// services
@NgModule({
	declarations: [
	],
	imports: [
		NgSelectModule,
		NgbPaginationModule,
		FormsModule,
		CommonModule,
		RouterModule
	],
	exports: [
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'es-PE' },
		DecimalPipe,
	],
})
export class SharedModule {}
