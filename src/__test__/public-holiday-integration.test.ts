import { getListOfPublicHolidays, checkIfTodayIsPublicHoliday, getNextPublicHolidays } from '../services/public-holidays.service';

const mockApiResponse = [
  {
    name: "New Year's Day",
    localName: "Jour de l'an",
    date: '2023-01-01'
  },
  {
    name: 'Easter Monday',
    localName: 'Lundi de Pâques',
    date: '2023-04-10'
  },
  {
    name: 'Labour Day',
    localName: 'Fête du Travail',
    date: '2023-05-01'
  },
  {
    name: 'Victory in Europe Day',
    localName: 'Victoire 1945',
    date: '2023-05-08'
  },
  { name: 'Ascension Day', localName: 'Ascension', date: '2023-05-18' },
  {
    name: 'Whit Monday',
    localName: 'Lundi de Pentecôte',
    date: '2023-05-29'
  },
  {
    name: 'Bastille Day',
    localName: 'Fête nationale',
    date: '2023-07-14'
  },
  {
    name: 'Assumption Day',
    localName: 'Assomption',
    date: '2023-08-15'
  },
  {
    name: "All Saints' Day",
    localName: 'Toussaint',
    date: '2023-11-01'
  },
  {
    name: 'Armistice Day',
    localName: 'Armistice 1918',
    date: '2023-11-11'
  },
  { name: 'Christmas Day', localName: 'Noël', date: '2023-12-25' }
];

const mockNextHolidays = [
  { name: "All Saints' Day", localName: 'Toussaint', date: '2023-11-01' },
  { name: 'Armistice Day', localName: 'Armistice 1918', date: '2023-11-11' },
  { name: 'Christmas Day', localName: 'Noël', date: '2023-12-25' },
  { name: "New Year's Day", localName: "Jour de l'an", date: '2024-01-01' },
  { name: 'Easter Monday', localName: 'Lundi de Pâques', date: '2024-04-01' },
  { name: 'Labour Day', localName: 'Fête du Travail', date: '2024-05-01' },
  { name: 'Victory in Europe Day', localName: 'Victoire 1945', date: '2024-05-08' },
  { name: 'Ascension Day', localName: 'Ascension', date: '2024-05-09' },
  { name: 'Whit Monday', localName: 'Lundi de Pentecôte', date: '2024-05-20' },
  { name: 'Bastille Day', localName: 'Fête nationale', date: '2024-07-14' },
  { name: 'Assumption Day', localName: 'Assomption', date: '2024-08-15' },
];

const year = 2023;
const country = 'FR';

describe('=== Public holidays service integration tests ===', () => {
  test('should return Public Holidays', async () => {
    const publicHolidaysResponse = await getListOfPublicHolidays(year, country);
    expect(publicHolidaysResponse).toEqual(mockApiResponse);
  });

  test('should check If Today Is PublicHoliday', async () => {
    const publicHolidaysResponse = await checkIfTodayIsPublicHoliday(country);
    expect(publicHolidaysResponse).toEqual(false);
  });

  test('should get Next Public Holidays', async () => {
    const publicHolidaysResponse = await getNextPublicHolidays(country);
    expect(publicHolidaysResponse).toEqual(mockNextHolidays);
  });
});