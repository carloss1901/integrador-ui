import { NgModule } from '@angular/core';
import {
  NgbAccordionModule,
  NgbDateParserFormatter,
  NgbDatepickerModule,
  NgbModalModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbToastModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomDateParserFormatter } from './datepicker-adapter.service';

@NgModule({
  exports: [
    NgbDatepickerModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbModalModule,
    NgSelectModule,
    NgbPaginationModule,
    NgbToastModule
  ],
  providers: [
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
	],
})
export class NgBootstrapModule {}
