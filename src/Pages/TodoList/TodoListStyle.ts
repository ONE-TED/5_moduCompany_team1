import styled from 'styled-components';

const TodoListTemplate = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  background: white;
`;
const TodoItemsLayout = styled.div`
  overflow-y: scroll;
  margin: 2rem;
  width: 70%;
`;

export const style = {
  TodoListTemplate,
  TodoItemsLayout,
};
