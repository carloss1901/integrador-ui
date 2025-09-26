import { Injectable } from '@angular/core';
import {
	NgbDateParserFormatter,
	NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { getNumberWithZero } from '../utils/calendar';

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {
		return date
			? getNumberWithZero(date.day) +
					this.DELIMITER +
					getNumberWithZero(date.month) +
					this.DELIMITER +
					date.year
			: '';
	}
}
