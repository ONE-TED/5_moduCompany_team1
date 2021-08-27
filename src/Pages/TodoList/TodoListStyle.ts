import styled from 'styled-components';

const TodoListTemplate = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  background: white;
  position: relative;
  margin-top: 95px;
`;
const TodoItemsLayout = styled.div`
  width: 100%;
  padding: 30px;
`;

export const style = {
  TodoListTemplate,
  TodoItemsLayout,
};
