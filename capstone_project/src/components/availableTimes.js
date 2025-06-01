export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  const selectedDate = action.date;
  // For now, always return the same array
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};