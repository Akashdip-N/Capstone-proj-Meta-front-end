import { initializeTimes } from './components/BookingPage';
import { fetchAPI } from './utils/ApiFunction';

// Mock fetchAPI
jest.mock('./utils/ApiFunction', () => ({
  fetchAPI: jest.fn()
}));

describe('initializeTimes', () => {
  it('should return available times from fetchAPI', () => {
    // Arrange
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    // Act
    const result = initializeTimes();

    // Assert
    expect(fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  it('should update available times based on selected date', () => {
    // Arrange
    const mockTimes = ['17:00', '18:00'];
    const selectedDate = new Date('2025-06-01');
    fetchAPI.mockReturnValue(mockTimes);

    const prevState = ['17:00']; // previous state
    const action = { type: 'UPDATE_TIMES', payload: selectedDate };

    // Act
    const newState = updateTimes(prevState, action);

    // Assert
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
    expect(newState).toEqual(mockTimes);
  });
});