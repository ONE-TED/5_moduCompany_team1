import React, { useState } from 'react';
import { Itodo, Status } from 'types';
import { style } from './TodoCreateStyle';
import { TodoDate } from 'utils/todoDate';
import { Mydatepicker, MySelectBox } from 'Components';

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [value, setValue] = useState('');
  const date = new TodoDate();
  const today = date.getToday();
  const [dueDate, setDuedate] = useState<Date>(new Date());
  const [status, setStatus] = useState<Status>(Status.NOT_STARTED);
  const [statusValue, SetStatusValue] = useState<string>('NOT_STARTED');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value == '') {
      console.log('빈 값은 입력할 수 없습니다.');
      return;
    }

    createTodo({
      id: nextId,
      taskName: value,
      status: status,
      createdAt: today,
      // 일단 Duedate(마감일) 값은 updateAt에 넣어놨습니다.
      // 추후 dueDate가 Itodo에 추가되면 변경하겠습니다.
      updatedAt: date.converToString(dueDate),
    });
    incrementNextId();
    setValue('');
    setStatus(Status.NOT_STARTED);
    SetStatusValue('NOT_STARTED');
    setDuedate(new Date());
  };

  const handleDuedate = (e: Date) => {
    setDuedate(e);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    let ClickStatus: Status = Status.NOT_STARTED;
    if (value === 'FINISHED') {
      ClickStatus = Status.FINISHED;
      SetStatusValue('FINISHED');
    } else if (value === 'ONGOING') {
      ClickStatus = Status.ONGOING;
      SetStatusValue('ONGOING');
    } else {
      ClickStatus = Status.NOT_STARTED;
      SetStatusValue('NOT_STARTED');
    }

    setStatus(ClickStatus);
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="할 일을 입력하세요"
            value={value}
            onChange={handleChange}
          />
          <Mydatepicker Duedate={dueDate} handleChange={handleDuedate} />
          <MySelectBox value={statusValue} handleChange={handleSelect} />
          <button
            style={{ background: 'black', color: 'white', cursor: 'pointer' }}
          >
            등록하기
          </button>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default TodoCreate;

const { InsertFormPositioner, InsertForm, Input } = style;
