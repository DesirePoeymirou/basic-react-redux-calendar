import React from 'react';
import './reminder.css';

export default function ReminderBlock(props) {
  const { title, background } = props;

  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...';
  }

  return (
    <div className='block' style={{ backgroundColor: `${background}` }}>
      {truncateString(title, 8)}
    </div>
  );
}
