import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNextMonth, setPrevMonth } from './calendarSlice';
import styles from './Calendar.module.css';

export default function CalendarNav() {
  const { currentMonth, currentYear } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        onClick={() => dispatch(setPrevMonth())}>
        {'<'}
      </button>
      <span className={styles.value}>
        {currentMonth}, {currentYear}
      </span>
      <button
        className={styles.button}
        onClick={() => dispatch(setNextMonth())}>
        {'>'}
      </button>
    </div>
  );
}
