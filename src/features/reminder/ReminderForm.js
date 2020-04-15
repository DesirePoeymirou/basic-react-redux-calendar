import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import './calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { addReminder } from './reminderSlice';
// import moment from 'moment';
import { PhotoshopPicker } from 'react-color';

export default function ReminderForm() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  // const dispatch = useDispatch();

  console.log('CALENDAR');

  const handleClick = (e) => {
    e.preventDefault();

    // if (name === '' || moment(startDate).isBefore(moment().toISOString())) {
    //   alert(
    //     'Wrong reminder configuration. Cannot create reminder with no name or a past date.'
    //   );
    // } else {
    //   dispatch(
    //     addReminder({ name, city, date: moment(startDate).toISOString() })
    //   );
    //   alert('Reminder added.');
    // }
  };

  return (
    <div>
      <form>
        <input
          type='text'
          value={name}
          name='name'
          placeholder='Name'
          onChange={(name) => setName(name.value)}
        />
        <br />
        <input
          type='city'
          value={city}
          name='city'
          placeholder='City'
          onChange={(city) => setCity(city.value)}
        />
        <br />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          timeCaption='time'
          dateFormat='MMMM d, yyyy h:mm aa'
        />
        <br />
        <PhotoshopPicker />
        <br />
        <button type='submit' className='button' onClick={handleClick}>
          Add Reminder
        </button>
      </form>
    </div>
  );
}
