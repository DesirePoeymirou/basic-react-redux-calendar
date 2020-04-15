import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    currentMonth: moment().format('MMMM'),
    currentYear: moment().format('YYYY'),
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setNextMonth: (state) => {
      const thisMonth = moment().month(state.currentMonth).format('M');
      if (thisMonth === '12') {
        state.currentYear = moment()
          .year(parseInt(state.currentYear) + 1)
          .format('YYYY');
      }
      state.currentMonth = moment().month(thisMonth).format('MMMM');
    },
    setPrevMonth: (state) => {
      const thisMonth = moment().month(state.currentMonth).format('M');
      if (thisMonth === '1') {
        state.currentYear = moment()
          .year(state.currentYear - 1)
          .format('YYYY');
      }
      state.currentMonth = moment()
        .month(thisMonth - 2)
        .format('MMMM');
    },
    setNextYear: (state) => {
      state.currentYear = moment()
        .year(state.currentYear + 1)
        .format('YYYY');
    },
    setPrevYear: (state) => {
      state.currentYear = moment()
        .year(state.currentYear - 1)
        .format('YYYY');
    },
  },
});

export const {
  setNextMonth,
  setPrevMonth,
  setNextYear,
  setPrevYear,
} = calendarSlice.actions;

export default calendarSlice.reducer;
