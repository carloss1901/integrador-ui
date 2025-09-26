import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export type IDateJson = NgbDateStruct;
type propNgbDateStruct = NgbDateStruct | null | undefined;

export const parseStringDate = ({ year, month, day }: IDateJson): string => {
	const _day = getNumberWithZero(day);
	const _month = getNumberWithZero(month);
	return `${year}-${_month}-${_day}`;
};

// Todo: Mejorar con Pad
// ("0" + date.day).slice(-2),
export const getNumberWithZero = (n: number) => {
	return n < 10 && n.toString().length === 1 ? `0${n}` : n;
};

export const getDateToObject = (): any => {
	let momentToday = moment();
	return {
		year: momentToday.year(),
		month: (momentToday.month() + 1 + '').padStart(2, '0'),
		day: (momentToday.date() + '').padStart(2, '0'),
		hour: (momentToday.hour() + '').padStart(2, '0'),
		min: (momentToday.minute() + '').padStart(2, '0'),
		sec: (momentToday.second() + '').padStart(2, '0'),
	};
};

export const getFechaTodayNgStruct = (): NgbDateStruct => {
	let momentToday = moment();
	return {
		year: momentToday.year(),
		month: momentToday.month() + 1,
		day: momentToday.date(),
	};
};

/**
 *
 * @param strDate formato fecha, yyyy-mm-dd
 * @returns
 */
export const toNgDateStruct = (strDate: string): NgbDateStruct => {
	const [year, month, day] = strDate.split('-');
	return {
		year: Number(year),
		month: Number(month),
		day: Number(day),
	};
};

export const yearList = (
	minYear: number = 1900,
	maxYear: number = new Date().getFullYear()
) => {
	const years = [];
	for (let i = minYear; i <= maxYear; i++) {
		years.unshift(i);
	}

	return years;
};

export const monthList = [
	{ key: 1, text: 'Enero' },
	{ key: 2, text: 'Febrero' },
	{ key: 3, text: 'Marzo' },
	{ key: 4, text: 'Abril' },
	{ key: 5, text: 'Mayo' },
	{ key: 6, text: 'Junio' },
	{ key: 7, text: 'Julio' },
	{ key: 8, text: 'Agosto' },
	{ key: 9, text: 'Septiembre' },
	{ key: 10, text: 'Octubre' },
	{ key: 11, text: 'Noviembre' },
	{ key: 12, text: 'Diciembre' },
];

export const maxDateToday = (): NgbDateStruct => {
	const today = new Date();

	return {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate(),
	};
};

// verifica si la fecha es del tipo NgbDateStruct
export const esTipoNgbDateStruct = (date: any) => {
	if (!date || typeof date !== 'object') {
		return false;
	}

	const isNgbDateStruct = 'year' in date && 'month' in date && 'day' in date;

	if (!isNgbDateStruct) return false;

	const checkIfValuesAreNumbers =
		typeof date.year === 'number' &&
		typeof date.month === 'number' &&
		typeof date.day === 'number';

	return checkIfValuesAreNumbers;
};

// transforma NgbDateStruct a string en el formato yyyy-mm-dd
export const parseToStringDate = ({
	year,
	month,
	day,
}: NgbDateStruct): string => {
	if (!esTipoNgbDateStruct({ year, month, day })) return '';

	const _day = getNumberWithZero(day);
	const _month = getNumberWithZero(month);

	return `${year}-${_month}-${_day}`;
};

/**
 * Retorna la fecha actual en el tipo de dato NgbDateStruct
 * @returns NgbDateStruct
 */
export const getTodayNgbDateStruct = (): NgbDateStruct => {
	const today = new Date();

	return {
		day: today.getDate(),
		month: today.getMonth() + 1,
		year: today.getFullYear(),
	};
};

/**
 * Retorna la fecha actual en el tipo de dato NgbDateStruct
 * @returns NgbDateStruct
 */
export const getMinDateNgbDateStruct = (): NgbDateStruct => {
	return {
		day: 1,
		month: 1,
		year: 1900,
	};
};

// convierte NgbDateStruct a string en el formato yyyy-mm-dd
export const ngbDateToStringDate = (
	date: propNgbDateStruct,
	separator = '-'
): string | null => {
	if (!date) return null;

	const _day = getNumberWithZero(date.day);
	const _month = getNumberWithZero(date.month);

	return `${date.year}${separator}${_month}${separator}${_day}`;
};

export const toDateNgStruct = (
	strDate: string | null | undefined
): NgbDateStruct | null => {
	if (!strDate) return null;

	return setDateNgStruct(strDate);
};

/**
 *
 * @param strDate
 * @returns
 */
export const setDateNgStruct = (strDate: string): NgbDateStruct => {
	let momentDate = null;
	if (!strDate) {
		momentDate = moment();
		return {
			year: momentDate.year(),
			month: momentDate.month() + 1,
			day: momentDate.date(),
		};
	}
	momentDate = moment(strDate);
	return {
		year: parseInt(momentDate.format('YYYY')),
		month: parseInt(momentDate.format('MM')),
		day: parseInt(momentDate.format('DD')),
	};
};

export const parseStringDateTimeZero = ({
	year,
	month,
	day,
}: NgbDateStruct): string => {
	const strDate = parseStringDate({ year, month, day });
	return `${strDate} 00:00`;
};

export const ngbDateStructToMill = (ngbDateStruct: NgbDateStruct): number => {
	return new Date(parseStringDateTimeZero(ngbDateStruct)).getTime();
};

export const parseStringDateFormatUser = ({
	year,
	month,
	day,
}: IDateJson): string => {
	const _day = getNumberWithZero(day);
	const _month = getNumberWithZero(month);
	return `${_day}/${_month}/${year}`;
};
export const NgDateStructToStringDDMMYYY = (
	dateStruct: NgbDateStruct
): string => {
	if (!dateStruct) return '';

	const _day = getNumberWithZero(dateStruct.day);
	const _month = getNumberWithZero(dateStruct.month);

	return `${_day}/${_month}/${dateStruct.year}`;
};
