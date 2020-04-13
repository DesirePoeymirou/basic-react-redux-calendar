import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calendarReducer from '../features/calendar/calendarSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    calendar: calendarReducer,
  },
});
