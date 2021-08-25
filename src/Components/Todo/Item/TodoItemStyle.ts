import styled from 'styled-components';

const TodoItemBlock = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 20px;
  color: #119955;
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
