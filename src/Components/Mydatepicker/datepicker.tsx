import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDate {
  Duedate: null | Date;
  handleChange: (e: Date) => void;
}

const datepicker = ({ Duedate, handleChange }: IDate) => {
  return (
    <>
      <DatePicker
        showPopperArrow={false}
        dateFormat="yyyy-MM-dd"
        selected={Duedate}
        onChange={handleChange}
        placeholderText="마감일을 선택하세요"
        minDate={new Date()}
      />
    </>
  );
};

export default datepicker;
