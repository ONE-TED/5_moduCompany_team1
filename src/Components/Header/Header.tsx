import React from 'react';
import styled from 'styled-components';

import { TodoDate } from 'utils/todoDate';
import { ReactComponent as filterIcon } from 'Assets/icons/filter.svg';
import { Tfilter } from 'types';
import Filter from 'Components/Filter';
import CloseIcon from 'Assets/icons/closeButton.svg';

interface HeaderProps {
  filter: Tfilter;
  setFilter: React.Dispatch<React.SetStateAction<Tfilter>>;
  openedFilter: boolean;
  setOpenedFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  filter,
  setFilter,
  openedFilter,
  setOpenedFilter,
}: HeaderProps) => {
  const getTodayDate = () => {
    const today = new TodoDate();
    return today.getToday();
  };

  const handleOnClick = () => {
    setOpenedFilter(true);
  };

  return (
    <>
      <HeaderLayout>
        <HeaderTitleLayout>{`Today is : ${getTodayDate()}`}</HeaderTitleLayout>
        <FilterIconLayout>
          <FilterIcon onClick={handleOnClick} />
          <FilterSection opened={openedFilter}>
            {openedFilter && (
              <>
                <Filter
                  filter={filter}
                  setFilter={setFilter}
                  setOpenedFilter={setOpenedFilter}
                />
                <Close onClick={() => setOpenedFilter(false)}>
                  <img src={CloseIcon} />
                </Close>
              </>
            )}
          </FilterSection>
        </FilterIconLayout>
      </HeaderLayout>
    </>
  );
};

const HeaderLayout = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom: 2px solid #5491ed;
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

const FilterSection = styled.div<{ opened: boolean }>`
  z-index: 20;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 200px;
  height: 200px;
  background: #fff;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  border-radius: 5px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
`;

const Close = styled.button<{ onClick: any }>`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

export default Header;
