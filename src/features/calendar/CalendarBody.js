import React from 'react';
import { useSelector } from 'react-redux';
import CalendarCell from './CalendarCell';
// import styles from './Calendar.module.css';
import moment from 'moment';
import './calendar.css';

export default function CalendarBody() {
  const { currentMonth, currentYear, reminderlist } = useSelector(
    (state) => state.calendar
  );
  const startOfMonth = parseInt(moment().startOf('month').format('d'));
  const daysPerMonth = parseInt(moment().daysInMonth());
  const endOfMonth = parseInt(moment().endOf('month').format('d'));

  function generateTableRows(startOfMonth, daysPerMonth, endOfMonth) {
    let prevMonthDays = [];
    let daysInMonth = [];
    let nextMonthDays = [];
    let totalDays = [];

    for (let i = 0; i < startOfMonth; i++) {
      prevMonthDays.push(
        <CalendarCell
          number={''}
          isThisMonth={'notThisMonth'}
          isWeekend={i === 0 ? 'isWeekend' : ''}
        />
      );
    }

    for (let d = 1; d <= daysPerMonth; d++) {
      let date = moment(
        `${currentYear}-${moment().month(currentMonth).format('M')}-${d}`,
        'YYYY-MM-D'
      );

      daysInMonth.push(
        <CalendarCell
          number={d}
          isThisMonth={'thisMonth'}
          isWeekend={
            date.isoWeekday() === 6 || date.isoWeekday() === 7
              ? 'isWeekend'
              : ''
          }
          date={date}
          reminderlist={reminderlist}
        />
      );
    }

    for (let e = endOfMonth; e < 6; e++) {
      nextMonthDays.push(
        <CalendarCell
          number={''}
          isThisMonth={'notThisMonth'}
          isWeekend={e === 5 ? 'isWeekend' : ''}
        />
      );
    }

    totalDays = [...prevMonthDays, ...daysInMonth, ...nextMonthDays];

    let rows = [];
    let cells = [];
    totalDays.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = []; // empty container
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalDays.length - 1) {
        // when end loop we add remain date
        rows.push(cells);
      }
    });

    return rows;
  }

  function generateDayCells() {
    const rows = generateTableRows(startOfMonth, daysPerMonth, endOfMonth);
    return rows.map((d, i) => <tr key={i}>{d}</tr>);
  }

  function generateHeaders() {
    const weekArray = moment.weekdays();

    return weekArray.map((day) => (
      <th className={'header'} key={day}>
        {day}
      </th>
    ));
  }

  return (
    <div>
      <table id={'calendarTable'} cellSpacing={0}>
        <thead>
          <tr>{generateHeaders()}</tr>
        </thead>
        <tbody>{generateDayCells()}</tbody>
      </table>
    </div>
  );
}
