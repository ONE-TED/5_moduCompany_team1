import styled from 'styled-components';
import { ReactComponent as filterIcon } from 'Assets/icons/filter.svg';

const HeaderLayout = styled.div`
  top: 0;
  width: 100%;
  height: 20%;
  background-color: #fff;
  display: inline-block;
  justify-content: center;
  padding: 1rem;
  border-bottom: 2px solid #5491ed;
  max-width: 700px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  width: 100%;
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
  top: 20px;
  width: 220px;
  height: 220px;
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

const HeaderFocusContainer = styled.div`
  width: 100%;
  display: inline-block;
`;

const FocusValueWrap = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const FocusDescription = styled.div`
  font-size: x-large;
  font-weight: 600;
  margin-bottom: 10px;
`;

const FocusText = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: #5491ed;
`;

const InputForm = styled.form`
  width: 100%;
  text-align: center;
`;

const InputWrap = styled.div`
  display: flex;
  width: 100%;
  place-content: center;
`;
const FocusInput = styled.input`
  width: 50%;
  border-bottom: 1px solid black;
  text-align: center;
`;

export const style = {
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
};
