import styled from 'styled-components';
import GrayRadio from 'Assets/icons/radio-gray.svg';
import BlueRadio from 'Assets/icons/radio-blue.svg';

export const Item = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100px;
`;

export const Title = styled.h2`
  font-size: 13px;
  position: absolute;
  left: -16px;
`;

export const RadioWrapper = styled.div`
  padding-top: 16px;
  position: relative;
`;

export const Row = styled.div`
  width: 100%;
`;

export const Radio = styled.input`
  position: absolute;
  left: -9999%;
`;

export const Label = styled.label<{ checked: boolean }>`
  font-size: 12px;
  line-height: 16px;
  color: #646464;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: -16px;
    top: 0;
    width: 13px;
    height: 13px;
    background-image: ${({ checked }) =>
      checked ? `url(${BlueRadio})` : `url(${GrayRadio})`};
    border-radius: 50%;
    cursor: pointer;
  }
`;
