import request from 'supertest';

const country = 'FR';
const DATE_API = 'https://date.nager.at/api/v3';
const COUNTRY_INFO_API_PATH = 'CountryInfo';
const AVAILABLE_COUNTRIES_API_PATH = 'AvailableCountries';
const expectBorders = [
  {
    borders: expect.any(Object),
    commonName: expect.any(String),
    countryCode: expect.any(String),
    officialName: expect.any(String),
    region: expect.any(String),
  }
];
const expectCountries = [
  {
    countryCode: expect.any(String),
    name: expect.any(String),
  }
];

describe('DATE API', () => {
  describe('/CountryInfo', () => {
    test('should return 200 and France country information', async () => {
      const { status, body } = await request(DATE_API).get(`/${COUNTRY_INFO_API_PATH}/${country}`);

      expect(status).toEqual(200);
      expect(body).toEqual({
        commonName: expect.stringContaining('France'),
        officialName: expect.stringContaining('French Republic'),
        countryCode: expect.stringContaining(country),
        region: expect.stringContaining('Europe'),
        borders: expect.arrayContaining(expectBorders),
      });
    });
  });

  describe('/AvailableCountries', () => {
    test('should return 200 and available countries inforamation', async () => {
      const { status, body } = await request(DATE_API).get(`/${AVAILABLE_COUNTRIES_API_PATH}`);

      expect(status).toEqual(200);
      expect(body).toEqual(expect.arrayContaining(expectCountries));
    });
  });
});