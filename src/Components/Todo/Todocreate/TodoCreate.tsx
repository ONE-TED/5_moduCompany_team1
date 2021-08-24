import React, { useState } from 'react';
import { Itodo, Status } from 'types';
import { style } from './TodoCreateStyle';
import { TodoDate } from 'utils/todoDate';

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
  const Today = new TodoDate();
  const [date, setDate] = useState(Today.getDate());
  const { FINISHED, ONGOING, NOT_STARTED } = Status;
  const [status, setStatus] = useState(NOT_STARTED);

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
      status: Status.NOT_STARTED,
      createdAt: date,
      updatedAt: '',
    });
    incrementNextId();
    setValue('');
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
