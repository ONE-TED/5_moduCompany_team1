import styled from 'styled-components';

const TodoContainer = styled.div`
    ${({ theme }) => theme.flexSet('center','center','column')};
`;


export const style = {
  TodoContainer
}