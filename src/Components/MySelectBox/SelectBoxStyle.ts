import styled from 'styled-components';

const MySelect = styled.select<{
  width: number | null;
  isBorder: boolean | null;
}>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  margin: 0 10px;
  border: ${({ isBorder }) => (isBorder ? '1px solid #D6D6D6' : 'none')};
  outline: none;

  text-align-last: center;
`;

export const style = {
  MySelect,
};
