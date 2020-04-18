import { createSlice } from '@reduxjs/toolkit';

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState: {
    reminderList: [],
  },
  reducers: {
    addReminder: (state, action) => {
      state.reminderList = [...state.reminderList, action.payload];
    },
  },
});

export const { addReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
