import React from 'react';
import './calendar.css';
import ReminderBlock from '../reminder/ReminderBlock';
import moment from 'moment';

export default function CalendarCell(props) {
  const { isThisMonth, isWeekend, number, reminders } = props;

  let sortedReminderList = [];
  if (reminders) {
    let unsortedReminderList = [];

    reminders.forEach((reminder) => {
      unsortedReminderList.push(reminder[0]);
    });

    sortedReminderList = unsortedReminderList.sort((a, b) =>
      moment(a.time, 'HH:mm').diff(moment(b.time, 'HH:mm'))
    );
  }

  function generateReminders() {
    if (isThisMonth === 'notThisMonth') {
      return null;
    } else {
      return sortedReminderList.map((reminder, i) => (
        <ReminderBlock
          key={i}
          title={reminder.title}
          city={reminder.city}
          time={reminder.time}
          background={reminder.color}
        />
      ));
    }
  }

  return (
    <td key={number} className='cell'>
      <div className={`${isThisMonth} ${isWeekend}`}>
        <div className='number'>{number}</div>
        <div className='reminders'>{generateReminders()}</div>
      </div>
    </td>
  );
}
