import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '../features/calendar/calendarSlice';
import reminderReducer from '../features/reminder/reminderSlice';

export default configureStore({
  reducer: {
    calendar: calendarReducer,
    reminder: reminderReducer,
  },
});
