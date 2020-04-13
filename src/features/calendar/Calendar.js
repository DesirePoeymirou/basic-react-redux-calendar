import React from 'react';
import CalendarNav from './CalendarNav';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

export default function Calendar() {
  return (
    <div>
      <CalendarNav />
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}
