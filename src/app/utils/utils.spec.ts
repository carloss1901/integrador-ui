import { addLeadingZeros, isEmptyValue, isNullOrUndefinedToCero, isNullOrUndefinedToEmpty, stringToNumberCero, stringToNumberUndefined } from "./utils";

describe('stringToNumberUndefined function', () => {
    it('should return undefined if the input value is undefined', () => {
        const result = stringToNumberUndefined(undefined);
        expect(result).toBeUndefined();
    });

    it('should return undefined if the input value is null', () => {
        const result = stringToNumberUndefined(null);
        expect(result).toBeUndefined();
    });

    it('should return undefined if the input value is not convertible to number', () => {
        const result = stringToNumberUndefined('abc');
        expect(result).toBeUndefined();
    });

    it('should return the converted number if the input value is convertible to number', () => {
        const result = stringToNumberUndefined('123');
        expect(result).toBe(123);
    });
});

describe('stringToNumberCero function', () => {
    it('should return 0 if the input value is undefined', () => {
        const result = stringToNumberCero(undefined);
        expect(result).toBe(0);
    });

    it('should return 0 if the input value is null', () => {
        const result = stringToNumberCero(null);
        expect(result).toBe(0);
    });

    it('should return 0 if the input value is an empty string', () => {
        const result = stringToNumberCero('');
        expect(result).toBe(0);
    });

    it('should return 0 if the input value is not convertible to number', () => {
        const result = stringToNumberCero('abc');
        expect(result).toBe(0);
    });

    it('should return the converted number if the input value is convertible to number', () => {
        const result = stringToNumberCero('123');
        expect(result).toBe(123);
    });

    it('should return the converted number if the input value is convertible to number with commas', () => {
        const result = stringToNumberCero('1,234');
        expect(result).toBe(1234);
    });

    it('should return 0 if the input value is NaN after conversion', () => {
        const result = stringToNumberCero('abc123');
        expect(result).toBe(0);
    });

    it('should return the converted number if the input value is a number', () => {
        const result = stringToNumberCero(123);
        expect(result).toBe(123);
    });

    it('should return the converted number if the input value is a string representation of a number', () => {
        const result = stringToNumberCero('123');
        expect(result).toBe(123);
    });

    it('should return 0 if the input value is a string representation of a non-numeric value', () => {
        const result = stringToNumberCero('abc');
        expect(result).toBe(0);
    });
});

describe('isNullOrUndefinedToCero function', () => {
    it('should return 0 if the input value is null', () => {
        const result = isNullOrUndefinedToCero(null);
        expect(result).toBe(0);
    });

    it('should return 0 if the input value is undefined', () => {
        const result = isNullOrUndefinedToCero(undefined);
        expect(result).toBe(0);
    });

    it('should return the same value if the input value is not null or undefined', () => {
        const result = isNullOrUndefinedToCero(123);
        expect(result).toBe(123);
    });

    it('should return the same value if the input value is not null or undefined even if it is 0', () => {
        const result = isNullOrUndefinedToCero(0);
        expect(result).toBe(0);
    });

    it('should return the same value if the input value is not null or undefined even if it is an empty string', () => {
        const result = isNullOrUndefinedToCero('');
        expect(result).toBe('');
    });

    it('should return the same value if the input value is not null or undefined even if it is false', () => {
        const result = isNullOrUndefinedToCero(false);
        expect(result).toBe(false);
    });
});

describe('isNullOrUndefinedToEmpty function', () => {
    it('should return an empty string if the input value is null', () => {
        const result = isNullOrUndefinedToEmpty(null);
        expect(result).toBe('');
    });

    it('should return an empty string if the input value is undefined', () => {
        const result = isNullOrUndefinedToEmpty(undefined);
        expect(result).toBe('');
    });

    it('should return the same value if the input value is not null or undefined', () => {
        const result = isNullOrUndefinedToEmpty(123);
        expect(result).toBe(123);
    });

    it('should return the same value if the input value is not null or undefined even if it is 0', () => {
        const result = isNullOrUndefinedToEmpty(0);
        expect(result).toBe(0);
    });

    it('should return the same value if the input value is not null or undefined even if it is false', () => {
        const result = isNullOrUndefinedToEmpty(false);
        expect(result).toBe(false);
    });

    it('should return the same value if the input value is not null or undefined even if it is an empty string', () => {
        const result = isNullOrUndefinedToEmpty('');
        expect(result).toBe('');
    });
});


describe('isEmptyValue function', () => {
    it('should return true if the input value is null', () => {
        const result = isEmptyValue(null);
        expect(result).toBe(true);
    });

    it('should return true if the input value is undefined', () => {
        const result = isEmptyValue(undefined);
        expect(result).toBe(true);
    });

    it('should return true if the input value is an empty string', () => {
        const result = isEmptyValue('');
        expect(result).toBe(true);
    });

    it('should return false if the input value is not null, undefined, or empty string', () => {
        const result = isEmptyValue(123);
        expect(result).toBe(false);
    });

    it('should return false if the input value is not null, undefined, or empty string, even if it is 0', () => {
        const result = isEmptyValue(0);
        expect(result).toBe(true);
    });

    it('should return false if the input value is not null, undefined, or empty string, even if it is false', () => {
        const result = isEmptyValue(false);
        expect(result).toBe(true);
    });

    it('should return false if the input value is not null, undefined, or empty string, even if it is an empty object', () => {
        const result = isEmptyValue({});
        expect(result).toBe(false);
    });
});

describe('addLeadingZeros function', () => {
    it('should add leading zeros to a number with default total length', () => {
        const result = addLeadingZeros(123);
        expect(result).toBe('00123');
    });

    it('should add leading zeros to a number with custom total length', () => {
        const result = addLeadingZeros(123, 8);
        expect(result).toBe('00000123');
    });

    it('should return the same number string if the total length is less than or equal to the length of the number', () => {
        const result1 = addLeadingZeros(123, 3);
        const result2 = addLeadingZeros(123, 5);
        const result3 = addLeadingZeros(123, 6);
        expect(result1).toBe('123');
        expect(result2).toBe('00123');
        expect(result3).toBe('000123');
    });

    it('should return the same number string if the number is negative', () => {
        const result = addLeadingZeros(-123);
        expect(result).toBe('0-123');
    });

    it('should return the same number string if the number is a floating point number', () => {
        const result = addLeadingZeros(123.45);
        expect(result).toBe('123.45');
    });

    it('should return "00000" if the input number is 0 and the total length is 5', () => {
        const result = addLeadingZeros(0, 5);
        expect(result).toBe('00000');
    });

    it('should return "0" if the input number is 0 and the total length is 1', () => {
        const result = addLeadingZeros(0, 1);
        expect(result).toBe('0');
    });
});