import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <>
      <HeaderLayout>
        <HeaderTitleLayout>TO DO LIST</HeaderTitleLayout>
        <FilterIconLayout>filter icon</FilterIconLayout>
      </HeaderLayout>
    </>
  );
};

const HeaderLayout = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;

  padding: 1rem;

  border-bottom: 1px solid #999999;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
`;

const HeaderTitleLayout = styled.div`
  width: 95%;

  padding: 1rem;

  text-align: center;
  color: #555555;
  font-size: 2.5rem;
`;

const FilterIconLayout = styled.div`
  width: 5%;
  border: 1px solid black;

  text-align: center;
`;

export default Header;
