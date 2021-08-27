import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

interface IDate {
  Duedate: null | Date;
  handleChange: (e: Date) => void;
}

const datepicker = ({ Duedate, handleChange }: IDate) => {
  return (
    <>
      <CustomPicker
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

const CustomPicker = styled(DatePicker)`
  width: 100px;
  padding: 10px 8px;
  background-color: #fff;
  border: 1px solid #d6d6d6;
  font-size: 15px;
  color: #c4c4c4;
`;
