import React from 'react';
import CalendarNav from './CalendarNav';
import CalendarBody from './CalendarBody';
import ReminderModal from '../reminder/ReminderModal';

export default function Calendar() {
  return (
    <div>
      <CalendarNav />
      <CalendarBody />
      <ReminderModal />
    </div>
  );
}
