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

const BodyContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 700px;
  top: 20%;
  z-index: -1;
`;

export const style = {
  TodoListTemplate,
  TodoItemsLayout,
  BodyContainer,
};
