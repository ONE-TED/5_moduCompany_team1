import React from 'react';
import { style } from './SelectBoxStyle';

interface ISelectBox {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  width?: number;
  isBorder?: boolean;
}

const SelectBox = ({
  value,
  handleChange,
  width,
  isBorder = false,
}: ISelectBox) => {
  return (
    <MySelect
      value={value}
      onChange={handleChange}
      width={width || null}
      isBorder={isBorder}
    >
      <option value="예정">예정</option>
      <option value="진행중">진행중</option>
      <option value="완료">완료</option>
    </MySelect>
  );
};

export default SelectBox;

const { MySelect } = style;
