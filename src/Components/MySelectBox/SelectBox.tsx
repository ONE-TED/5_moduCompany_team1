import React from 'react';
import { style } from './SelectBoxStyle';
import { Status } from 'types';
interface ISelectBox {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = ({ value, handleChange }: ISelectBox) => {
  return (
    <MySelect value={value} onChange={handleChange}>
      <option value="NOT_STARTED">예정</option>
      <option value="ONGOING">진행중</option>
      <option value="FINISHED">완료</option>
    </MySelect>
  );
};

export default SelectBox;

const { MySelect } = style;
