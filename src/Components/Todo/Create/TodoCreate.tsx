import React, { useState } from 'react';
import { Itodo, Status } from 'types';
import { style } from './TodoCreateStyle';
import { TodoDate } from 'utils/todoDate';
import { Mydatepicker, MySelectBox } from 'Components';
import AddIcon from 'Assets/icons/add-button.svg';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() == '') {
      console.log('빈 값은 입력할 수 없습니다.');
      return;
    }

    createTodo({
      id: nextId,
      taskName: value,
      status: status,
      createdAt: today,
      updatedAt: today,
      dueDate: date.converToString(dueDate),
    });
    incrementNextId();
    setValue('');
    setStatus(Status.NOT_STARTED);
    setDuedate(new Date());
  };

  const handleDuedate = (e: Date) => {
    setDuedate(e);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    let ClickStatus: Status = Status.NOT_STARTED;

    if (value === '완료') {
      ClickStatus = Status.FINISHED;
    } else if (value === '진행중') {
      ClickStatus = Status.ONGOING;
    } else {
      ClickStatus = Status.NOT_STARTED;
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
          <MySelectBox
            value={status}
            handleChange={handleSelect}
            width={200}
            isBorder={true}
          />
          <button style={{ cursor: 'pointer' }}>
            <img src={AddIcon} />
          </button>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default TodoCreate;

const { InsertFormPositioner, InsertForm, Input } = style;
