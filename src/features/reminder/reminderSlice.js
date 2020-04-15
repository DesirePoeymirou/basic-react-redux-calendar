import { createSlice } from '@reduxjs/toolkit';

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState: {
    reminderList: [],
  },
  reducers: {
    addReminder: (state, action) => {
      state.reminderlist = [...state.reminderlist, action.payload];
    },
  },
});

export const { addReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
