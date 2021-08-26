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

const Input = styled.input`
  padding: 12px;
  border: 1px solid black;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: lightgray;
    font-size: 16px;
  }
`;

const InsertForm = styled.form`
  display: flex;
  background: white;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

export const style = {
  TodoItemBlock,
  Text,
  ElementBlock,
  Input,
  InsertForm,
};
