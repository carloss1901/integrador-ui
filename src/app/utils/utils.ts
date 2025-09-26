/**
 * @param num [number]: valor numerico
 * @param totalLength [number]: cantidad de digitos, default 5
 *
 * */
export const addLeadingZeros = (num: number, totalLength = 5) => {
	return String(num).padStart(totalLength, '0');
};

import { VariablesIniciales, CommonConstants } from '../core/data/commons';

export const isNullOrUndefined = (value: any) => {
	return value === null || value === undefined;
};

export const isEmptyValue = (value: any) => {
	return isNullOrUndefined(value) || value == VariablesIniciales.EMPTY;
};

export const isNullOrUndefinedToEmpty = (value: any) => {
	return isNullOrUndefined(value) ? CommonConstants.EMPTY : value;
};

export const isNullOrUndefinedToCero = (value: any) => {
	return isNullOrUndefined(value) ? 0.0 : value;
};

export const stringToNumberCero = (
	value: number | string | undefined | null
): number => {
	if (value === null || value === undefined || isEmptyValue(value)) {
		return 0;
	}

	try {
		let tempString = value.toString().replace(/,/g, '');
		let tempNum = parseFloat(tempString);
		if (isNaN(tempNum)) {
			return 0;
		} else {
			return tempNum;
		}
	} catch {
		return 0;
	}
};

export const stringToNumberUndefined = (
	value: string | undefined | null
): number | undefined => {
	let number = stringToNumberCero(value);
	if (number) {
		return number;
	} else {
		return undefined;
	}
};
