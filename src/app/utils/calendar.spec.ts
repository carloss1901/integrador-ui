import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { getDateToObject, getFechaTodayNgStruct, getNumberWithZero, maxDateToday, monthList, parseStringDate, toNgDateStruct, yearList } from "./calendar";
import * as moment from "moment";

describe('maxDateToday function', () => {
    it('should return NgbDateStruct with today\'s date', () => {
        const expectedDate: NgbDateStruct = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
        };

        const result = maxDateToday();

        expect(result).toEqual(expectedDate);
    });
});

describe('monthList', () => {
    it('should contain twelve months', () => {
        expect(monthList.length).toBe(12);
    });

    it('should have correct month names and keys', () => {
        const expectedMonths = [
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
            { key: 12, text: 'Diciembre' }
        ];

        expect(monthList).toEqual(expectedMonths);
    });
});

describe('yearList function', () => {
    it('should generate a list of years from minYear to maxYear', () => {
        const minYear = 1900;
        const maxYear = new Date().getFullYear();
        const expectedYears = [];
        for (let i = minYear; i <= maxYear; i++) {
            expectedYears.unshift(i);
        }

        const result = yearList(minYear, maxYear);

        expect(result).toEqual(expectedYears);
    });

    it('should generate a list of years from default minYear to current year', () => {
        const currentYear = new Date().getFullYear();
        const expectedDefaultYears = [];
        for (let i = 1900; i <= currentYear; i++) {
            expectedDefaultYears.unshift(i);
        }

        const result = yearList();

        expect(result).toEqual(expectedDefaultYears);
    });
});


describe('toNgDateStruct function', () => {
    it('should convert a string date to NgbDateStruct', () => {
        const strDate = '2024-05-16';
        const expectedDate: NgbDateStruct = {
            year: 2024,
            month: 5,
            day: 16
        };

        const result = toNgDateStruct(strDate);

        expect(result).toEqual(expectedDate);
    });
});

describe('getFechaTodayNgStruct function', () => {
    it('should return NgbDateStruct with today\'s date', () => {
        const momentToday = moment();
        const expectedDate: NgbDateStruct = {
            year: momentToday.year(),
            month: momentToday.month() + 1,
            day: momentToday.date()
        };

        const result = getFechaTodayNgStruct();

        expect(result).toEqual(expectedDate);
    });
});

describe('getDateToObject function', () => {
    it('should return an object with current date and time components', () => {
      const momentToday = moment();
      const expectedDate = {
        year: momentToday.year(),
        month: ((momentToday.month() + 1) + "").padStart(2, '0'),
        day: (momentToday.date() + "").padStart(2, '0'),
        hour: (momentToday.hour() + "").padStart(2, '0'),
        min: (momentToday.minute() + "").padStart(2, '0'),
        sec: (momentToday.second() + "").padStart(2, '0')
      };
  
      const result = getDateToObject();
  
      expect(result).toEqual(expectedDate);
    });
  });

  describe('getNumberWithZero function', () => {
    it('should prepend zero to single-digit numbers', () => {
      const singleDigitNumber = 5;
      const expectedWithZero = '05';
  
      const result = getNumberWithZero(singleDigitNumber);
  
      expect(result).toBe(expectedWithZero);
    });
  
    it('should not prepend zero to double-digit numbers', () => {
      const doubleDigitNumber = 15;
  
      const result = getNumberWithZero(doubleDigitNumber);
  
      expect(result).toBe(doubleDigitNumber);
    });
  
    it('should not modify numbers already with leading zero', () => {
      const numberWithLeadingZero = '05' as any;
  
      const result = getNumberWithZero(numberWithLeadingZero);
  
      expect(result).toBe(numberWithLeadingZero);
    });
  });


  describe('parseStringDate function', () => {
    it('should return a string in the format "YYYY-MM-DD"', () => {
      const dateObject = { year: 2024, month: 5, day: 16 };
      const expectedDateString = '2024-05-16';
  
      const result = parseStringDate(dateObject);
  
      expect(result).toBe(expectedDateString);
    });
  });