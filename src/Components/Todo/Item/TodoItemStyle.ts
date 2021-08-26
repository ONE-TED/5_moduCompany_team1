import React from 'react';
import styled, { css } from 'styled-components';

interface ItodoItem {
  onDragStart: React.DragEventHandler<HTMLDivElement>;
  onDragOver: React.DragEventHandler<HTMLDivElement>;
  onDragEnd: React.DragEventHandler<HTMLDivElement>;
}

const TodoItemBlock = styled.div<ItodoItem>`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

const Text = styled.div<{ done: boolean }>`
  font-size: 20px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const ElementBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const style = {
  TodoItemBlock,
  Text,
  ElementBlock,
};
