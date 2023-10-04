import { validateCountry, validateYear, validateInput, shortenPublicHoliday } from './helpers';

const mockApiResponse = [{
  date: '01-01-2023',
  localName: 'Summer holiday',
  name: 'Summer holiday',
  countryCode: 'FR',
  fixed: true,
  global: false,
  counties: ['FR', 'GB'],
  launchYear: 2023,
  types: ['holiday'],
}];

const mockResponse = [
  {
    localName: 'Summer holiday',
    name: 'Summer holiday',
    date: '01-01-2023',
  }
]

const year = new Date().getFullYear();
const country = 'FR';
const wrongCountry = 'KG';
const wrongYear = 2022;

describe('=== Helpers tests ===', () => {
  describe('validateCountry', () => {
    test('validateCountry method test', () => {
      const validateCountryResponse = validateCountry(country);
      expect(validateCountryResponse).toEqual(true);
    });

    test('validateCountry method error', () => {
      const validateCountryResponse = validateCountry(wrongCountry);
      expect(validateCountryResponse).toEqual(false);
    });
  });

  describe('validateYear', () => {
    test('validateYear method test', () => {
      const validateYearResponse = validateYear(year);
      expect(validateYearResponse).toEqual(true);
    });

    test('validateYear method error', () => {
      const validateYearResponse = validateYear(wrongYear);
      expect(validateYearResponse).toEqual(false);
    });
  });

  describe('validateInput', () => {
    test('validateInput method test', () => {
      const validateInputResponse = validateInput({ year, country });
      expect(validateInputResponse).toEqual(true);
    });
  });

  describe('shortenPublicHoliday', () => {
    test('shortenPublicHolidayResponse method test', () => {
      const shortenPublicHolidayResponse = shortenPublicHoliday(mockApiResponse[0]);
      expect([shortenPublicHolidayResponse]).toEqual(mockResponse);
    });
  });
});