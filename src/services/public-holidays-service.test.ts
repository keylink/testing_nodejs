import axios from 'axios';
import { getListOfPublicHolidays, checkIfTodayIsPublicHoliday, getNextPublicHolidays } from './public-holidays.service';

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

const year = 2023;
const country = 'FR';

describe('=== Public holidays service tests ===', () => {
  describe('=== getListOfPublicHolidays ===', () => {
    test('should return Public Holidays & call API with proper arguments', async () => {
      // mock API
      const axiosGetSpy = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: mockApiResponse }));

      const publicHolidaysResponse = await getListOfPublicHolidays(year, country);
      expect(publicHolidaysResponse).toEqual(mockResponse);
      expect(axiosGetSpy).toHaveBeenCalledWith(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`);
    });

    test('should throw error if Year provided not the current', async () => {
      jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: mockApiResponse }));
    
      await expect(getListOfPublicHolidays(2022, country)).rejects.toThrow(
        new Error(`Year provided not the current, received: ${2022}`),
      );
    });
  });

  describe('=== checkIfTodayIsPublicHoliday ===', () => {
    test('should check If Today Is Public Holiday & call API with proper arguments', async () => {
      // mock API
      const axiosGetSpy = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ status: 200 }));

      const publicHolidaysResponse = await checkIfTodayIsPublicHoliday(country);
      expect(publicHolidaysResponse).toEqual(true);
      expect(axiosGetSpy).toHaveBeenCalledWith(`https://date.nager.at/api/v3/IsTodayPublicHoliday/${country}`);
    });

    test('should throw error get List Of Public Holidays', async () => {
      jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ status: 500 }));
    
      const publicHolidaysResponse = await checkIfTodayIsPublicHoliday(country);
      expect(publicHolidaysResponse).toEqual(false);
    });
  });

  describe('=== getNextPublicHolidays ===', () => {
    test('should check Next Public Holidays & call API with proper arguments', async () => {
      // mock API
      const axiosGetSpy = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: mockApiResponse }));

      const publicHolidaysResponse = await getNextPublicHolidays(country);
      expect(publicHolidaysResponse).toEqual(mockResponse);
      expect(axiosGetSpy).toHaveBeenCalledWith(`https://date.nager.at/api/v3/NextPublicHolidays/${country}`);
    });

    test('should throw error get List Of Public Holidays', async () => {
      jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: mockApiResponse[0] }));
    
      const publicHolidaysResponse = await getNextPublicHolidays(country);
      expect(publicHolidaysResponse).toEqual([]);
    });
  });
});