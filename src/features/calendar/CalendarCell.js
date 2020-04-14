import React from 'react';
import './calendar.css';

export default function CalendarCell(props) {
  const { isThisMonth, isWeekend, number, reminderlist, date } = props;

  console.log(reminderlist);

  function generateReminders() {
    if (isThisMonth === 'notThisMonth') {
      return null;
    } else {
      // const reminders = reminderlist.filter(function (reminder) {
      //   return reminder.date.format('YYYY-MM-DD').isSame(date);
      // });
      // return reminders.map(function (reminder) {
      //   return <div>{reminder.name}</div>;
      // });
    }
  }

  return (
    <td key={number} className='cell'>
      <div className={`${isThisMonth} ${isWeekend}`}>{number}</div>
      {generateReminders()}
    </td>
  );
}
