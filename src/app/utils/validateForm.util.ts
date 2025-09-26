import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateFormatExcel(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		if (
			control.value === null ||
			control.value === undefined ||
			control.value === ''
		) {
			return null;
		}

		const fileExtension = control.value.split('.').pop().toLowerCase();
		if (fileExtension !== 'xlsx' && fileExtension !== 'xls') {
			return { invalidExtension: true };
		} else {
			return null;
		}
	};
}
