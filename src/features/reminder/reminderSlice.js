import { createSlice } from '@reduxjs/toolkit';

const apiKey = 'b29b1966908a7d6f32cf775485c26814';

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState: {
    reminderList: [],
    weather: {},
  },
  reducers: {
    addReminder: (state, action) => {
      state.reminderList = [...state.reminderList, action.payload];
    },
    getWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const callWeatherAPI = (weather) => (dispatch) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${weather.city}&appid=${apiKey}`
  )
    // .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // dispatch(getWeather(data));
    })
    .catch((err) => console.log(err));
};

export const { addReminder, getWeather } = reminderSlice.actions;

export default reminderSlice.reducer;
