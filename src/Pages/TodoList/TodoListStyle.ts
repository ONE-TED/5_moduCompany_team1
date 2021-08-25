import styled from 'styled-components';

const TodoListTemplate = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  background: white;
`;

const Li = styled.li`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

const TodoItemsLayout = styled.div`
  overflow-y: scroll;
  margin: 2rem;
`;

export const style = {
  TodoListTemplate,
  Li,
  TodoItemsLayout,
};
