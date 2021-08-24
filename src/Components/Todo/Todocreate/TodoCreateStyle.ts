import styled from 'styled-components';

const InsertFormPositioner = styled.div`
  width: 50%;
  border-bottom: 1px solid black;
`;

const InsertForm = styled.form`
  display: flex;
  background: white;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
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

export const style = {
  InsertFormPositioner,
  InsertForm,
  Input,
};
