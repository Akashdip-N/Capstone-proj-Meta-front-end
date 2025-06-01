import { initializeTimes, updateTimes } from './components/AvailableTimes';

describe('initializeTimes', () => {
  test('should return correct initial time slots', () => {
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expected);
  });
});

describe('updateTimes', () => {
  test('should return same values regardless of date (for now)', () => {
    const state = ["17:00", "18:00", "19:00"];
    const action = { date: "2025-06-01" };
    const result = updateTimes(state, action);

    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(result).toEqual(expected);
  });
});
