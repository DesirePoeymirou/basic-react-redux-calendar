import React from 'react';
import './calendar.css';
export default function CalendarCell(props) {
  const { isThisMonth, isWeekend, number } = props;
  return (
    <td key={number} className='cell'>
      <div className={`${isThisMonth} ${isWeekend}`}>{number}</div>
    </td>
  );
}
