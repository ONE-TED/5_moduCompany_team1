import React from 'react';
import styled from 'styled-components';

import { TodoDate } from 'utils/todoDate';
import { ReactComponent as filterIcon } from 'Assets/icons/filter.svg';

const Header: React.FC = () => {
  const getTodayDate = () => {
    const today = new TodoDate();
    const dateNum = today.getNumber();
    return today.convertToString(dateNum);
  };

  const handleOnClick = () => {
    //sidedrawer 토글 로직
  };

  return (
    <>
      <HeaderLayout>
        <HeaderTitleLayout>{`Today is : ${getTodayDate()}`}</HeaderTitleLayout>
        <FilterIconLayout>
          <FilterIcon onClick={handleOnClick} />
        </FilterIconLayout>
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
  font-size: 2rem;
`;

const FilterIconLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 5%;
`;

const FilterIcon = styled(filterIcon)`
  width: 2rem;
  height: auto;

  cursor: pointer;
`;

export default Header;
