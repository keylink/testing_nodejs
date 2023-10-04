import {
  getListOfPublicHolidays,
  checkIfTodayIsPublicHoliday,
  getNextPublicHolidays,
} from '../services/public-holidays.service';

const year = new Date().getFullYear();
const country = 'FR';

describe('=== Public holidays service integration tests ===', () => {
  test('should return Public Holidays', async () => {
    const publicHolidaysResponse = await getListOfPublicHolidays(year, country);
    expect(publicHolidaysResponse).toBeInstanceOf(Array);
    expect(publicHolidaysResponse).not.toHaveLength(0);
  });

  test('should check If Today Is PublicHoliday', async () => {
    const publicHolidaysResponse = await checkIfTodayIsPublicHoliday(country);
    expect(typeof publicHolidaysResponse === 'boolean').toBeTruthy();
  });

  test('should get Next Public Holidays', async () => {
    const publicHolidaysResponse = await getNextPublicHolidays(country);
    expect(publicHolidaysResponse).toBeInstanceOf(Array);
    expect(publicHolidaysResponse).not.toHaveLength(0);
  });
});