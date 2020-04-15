import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNextMonth, setPrevMonth } from './calendarSlice';
import './calendar.css';

export default function CalendarNav() {
  const { currentMonth, currentYear } = useSelector((state) => state.calendar);

  useEffect(() => {
    console.log('CALENDAR NAV');
  }, []);

  const dispatch = useDispatch();

  return (
    <div className={'row'}>
      <button className={'button'} onClick={() => dispatch(setPrevMonth())}>
        {'<'}
      </button>
      <span className={'value'}>
        {currentMonth}, {currentYear}
      </span>
      <button className={'button'} onClick={() => dispatch(setNextMonth())}>
        {'>'}
      </button>
    </div>
  );
}
