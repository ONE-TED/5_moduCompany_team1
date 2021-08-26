import styled, { css } from 'styled-components';

const TodoItemBlock = styled.div`
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
