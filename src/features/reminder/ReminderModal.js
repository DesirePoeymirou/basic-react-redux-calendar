import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../calendar/calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addReminder, callWeatherAPI } from './reminderSlice';
import moment from 'moment';
import { CirclePicker } from 'react-color';
import Modal from 'react-modal';

const inputStyle = {
  content: {
    padding: '10px',
  },
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '400px',
    height: '400px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function ReminderModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('Buenos Aires');
  const [startDate, setStartDate] = useState(new Date());
  const [color, setColor] = useState('#f44336');

  const dispatch = useDispatch();

  const saveReminder = (e) => {
    e.preventDefault();

    if (title === '' || moment(startDate).isBefore(moment().toISOString())) {
      alert(
        'Wrong reminder configuration. Cannot create reminder with no name or a past date.'
      );
    } else {
      dispatch(
        addReminder([
          {
            title,
            city,
            date: moment(startDate).format('YYYY-MM-DD'),
            time: moment(startDate).format('HH:mm'),
            color,
          },
        ])
      );
      dispatch(callWeatherAPI({ city }));
      alert('Reminder added.');
      closeModal();
    }
  };

  const handleChangeComplete = (color, event) => {
    setColor(color.hex);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='button' onClick={openModal}>
        Add Reminder
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Create your Reminder'>
        <form>
          <input
            type='text'
            value={title}
            name='title'
            placeholder='Title'
            onChange={({ target: { value } }) => setTitle(value)}
            style={inputStyle}
            maxLength='30'
          />
          <br />
          <input
            type='city'
            value={city}
            name='city'
            placeholder='City'
            onChange={({ target: { value } }) => setCity(value)}
            style={inputStyle}
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
            style={inputStyle}
          />
          <br />
          <CirclePicker
            circleSpacing={10}
            onChangeComplete={handleChangeComplete}
            style={inputStyle}
          />
          <br />
        </form>
        <button onClick={saveReminder}>Save</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
