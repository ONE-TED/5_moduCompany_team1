import { Status } from 'types';
import React from 'react';
import styled, { css } from 'styled-components';

interface ItodoItem {
  onDragStart: React.DragEventHandler<HTMLDivElement>;
  onDragOver: React.DragEventHandler<HTMLDivElement>;
  onDragEnd: React.DragEventHandler<HTMLDivElement>;
}

const TodoItemBlock = styled.div<ItodoItem>`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Text = styled.div<{ done: boolean }>`
  font-size: 15px;
  color: #474747;
  ${(props) =>
    props.done &&
    css`
      color: #a6a6a6;
      text-decoration: line-through;
    `}
`;

const Dday = styled.div<{ done: boolean; status: string }>`
  font-size: 13px;
  font-weight: bold;
  color: ${({ status }) => (status === Status.ONGOING ? '#D76B6B' : '#C7C7C7')};
  opacity: ${({ done }) => (done ? '0' : '1')};
  position: absolute;
  right: 170px;
`;

const ElementBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Cancle = styled.span`
  width: 30px;
  display: inline-block;
  color: #c1c1c1;
`;

const Input = styled.input`
  padding: 12px;
  margin-right: 10px;
  border: 1px solid #d6d6d6;
  width: 100%;
  outline: none;
  font-size: 15px;
  box-sizing: border-box;
  color: #c4c4c4;
  &::placeholder {
    color: lightgray;
    font-size: 16px;
  }
`;

const InsertForm = styled.form`
  display: flex;
  background: white;
  flex: 1;
`;

const Complete = styled.button`
  width: 70px;
  margin-right: 8px;
  cursor: pointer;
`;

export const style = {
  TodoItemBlock,
  Text,
  Dday,
  Cancle,
  Complete,
  ElementBlock,
  Input,
  InsertForm,
};
