import styled from 'styled-components';

const InsertFormPositioner = styled.div`
  width: 100%;
`;

const InsertForm = styled.form`
  display: flex;
  background: #f8f8f8;
  padding: 20px 30px;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #d6d6d6;
  background-color: #fff;
  width: 100%;
  outline: none;
  font-size: 15px;
  box-sizing: border-box;
  color: #c4c4c4;
  margin-right: 10px;
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
