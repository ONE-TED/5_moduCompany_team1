import styled from 'styled-components';

const TodoListTemplate = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  background: white;
  position: relative;
  margin-top: 180px;
`;

const TodoItemsLayout = styled.div`
  width: 100%;
  padding: 30px;
`;

const BodyContainer = styled.div`
  width: 100%;
  max-width: 700px;
  top: 0;
`;

export const style = {
  TodoListTemplate,
  TodoItemsLayout,
  BodyContainer,
};
