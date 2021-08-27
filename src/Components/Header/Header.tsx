import React, { useState, useEffect } from 'react';
import { TodoDate } from 'utils/todoDate';
import { Tfilter } from 'types';
import Filter from 'Components/Filter';
import CloseIcon from 'Assets/icons/closeButton.svg';
import { style } from './HeaderStyle';
import PencilIcon from 'Assets/icons/pencil.svg';

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
  const [focusTodo, setFocusTodo] = useState<boolean>(false);
  const [focusValue, setFocusValue] = useState<string>('');
  const [now, setNow] = useState<string>('');
  // let hour : string =
  // let minute : string =
  useEffect(() => {
    loadFocusTodo();
  }, [focusTodo]);

  useEffect(() => {
    setTimeout(() => setNow(getTodayDate()), 1000);
  }, [now]);

  const loadFocusTodo = () => {
    const focusTodo = localStorage.getItem('focus');

    if (focusTodo === null) {
      setFocusTodo(false);
    } else {
      setFocusTodo(true);
    }
  };
  const getTodayDate = () => {
    const today = new TodoDate();
    const nowString: string = today.getToday();
    const time: string = nowString.split(' ')[1];

    return time;
  };

  const handleOnClick = () => {
    setOpenedFilter(true);
  };

  const handleFocusTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocusValue(e.target.value);
  };

  const handleSubmitFocus = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem('focus', focusValue);
    setFocusTodo(true);
  };

  const handleModifyFocusTodo = () => {
    localStorage.removeItem('focus');
    setFocusValue('');
    setFocusTodo(false);
  };

  return (
    <>
      <HeaderLayout>
        <HeaderTitleContainer>
          <HeaderTitleLayout>{`${now.split(':')[0]} : ${
            now.split(':')[1]
          }`}</HeaderTitleLayout>
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
        </HeaderTitleContainer>
        <HeaderFocusContainer>
          {focusTodo ? (
            <>
              <FocusValueWrap>
                <FocusText>{focusValue}</FocusText>
                <button
                  onClick={handleModifyFocusTodo}
                  style={{ cursor: 'pointer', marginLeft: '10px' }}
                >
                  <img src={PencilIcon} />
                </button>
              </FocusValueWrap>
            </>
          ) : (
            <>
              <InputForm onSubmit={handleSubmitFocus}>
                <FocusDescription>
                  집중해야할 한가지 일을 적어보세요.
                </FocusDescription>
                <InputWrap>
                  <FocusInput
                    autoFocus
                    value={focusValue}
                    onChange={handleFocusTodo}
                  />
                  <button></button>
                </InputWrap>
              </InputForm>{' '}
            </>
          )}
        </HeaderFocusContainer>
      </HeaderLayout>
    </>
  );
};

export default Header;

const {
  HeaderLayout,
  HeaderTitleLayout,
  FilterIconLayout,
  FilterIcon,
  FilterSection,
  Close,
  HeaderTitleContainer,
  HeaderFocusContainer,
  FocusValueWrap,
  FocusText,
  InputForm,
  InputWrap,
  FocusInput,
  FocusDescription,
} = style;
