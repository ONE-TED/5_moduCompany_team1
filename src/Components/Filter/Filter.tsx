import React from 'react';
import { All, Sort, Status, Tfilter } from 'types';
import { idText } from 'typescript';
import { Item, Label, Radio, RadioWrapper, Row, Title } from './FilterStyle';

interface FilterProps {
  filter: Tfilter;
  setFilter: React.Dispatch<React.SetStateAction<Tfilter>>;
}

const Filter = ({ filter, setFilter }: FilterProps): JSX.Element => {
  const onChangeArrange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, sort: e.target.dataset.arrange as Sort });
  };

  const onChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      progress: e.target.dataset.progress as Status | All,
    });
  };

  return (
    <>
      <Item>
        <Title>진행상태</Title>
        <RadioWrapper>
          <Row>
            <Radio
              name="progress"
              type="radio"
              data-progress="전체"
              onChange={(e) => onChangeProgress(e)}
              defaultChecked={true}
              id="progress-all"
            />
            <Label checked={filter.progress === '전체'} htmlFor="progress-all">
              전체
            </Label>
          </Row>
          <Row>
            <Radio
              name="progress"
              type="radio"
              data-progress="시작안함"
              onChange={(e) => onChangeProgress(e)}
              id="progress-not-started"
            />
            <Label
              checked={filter.progress === Status.NOT_STARTED}
              htmlFor="progress-not-started"
            >
              시작안함
            </Label>
          </Row>
          <Row>
            <Radio
              name="progress"
              type="radio"
              data-progress="진행중"
              onChange={(e) => onChangeProgress(e)}
              id="progress-ongoing"
            />
            <Label
              checked={filter.progress === Status.ONGOING}
              htmlFor="progress-ongoing"
            >
              진행중
            </Label>
          </Row>
          <Row>
            <Radio
              name="progress"
              type="radio"
              data-progress="완료"
              onChange={(e) => onChangeProgress(e)}
              id="progress-finished"
            />
            <Label
              checked={filter.progress === Status.FINISHED}
              htmlFor="progress-finished"
            >
              완료
            </Label>
          </Row>
        </RadioWrapper>
      </Item>
      <Item>
        <Title>정렬</Title>
        <RadioWrapper>
          <Row>
            <Radio
              name="arrange"
              type="radio"
              data-arrange="basic"
              onChange={(e) => onChangeArrange(e)}
              defaultChecked={true}
              id="arrange-basic"
            />
            <Label checked={filter.sort === Sort.BASIC} htmlFor="arrange-basic">
              기본
            </Label>
          </Row>
          <Row>
            <Radio
              name="arrange"
              type="radio"
              data-arrange="due_date"
              onChange={(e) => onChangeArrange(e)}
              id="arrange-duedate"
            />
            <Label
              checked={filter.sort === Sort.DUE_DATE}
              htmlFor="arrange-duedate"
            >
              마감일순
            </Label>
          </Row>
        </RadioWrapper>
      </Item>
    </>
  );
};

export default Filter;
