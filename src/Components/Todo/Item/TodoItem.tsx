import React, { useState, useEffect } from 'react';
import { Itodo, Status } from 'types';
import { style } from './TodoItemStyle';
import { MySelectBox } from 'Components';

interface TodoItemProps {
  removeTodo: (id: number) => void;
  todo: Itodo;
  selectStatusTodo: (id: number, ClickStatus: Status) => void;
}

const TodoItem = ({ removeTodo, todo, selectStatusTodo }: TodoItemProps) => {
  const [dDay, setDday] = useState<number>(0);
  const [status, setStatus] = useState<Status>(todo.status);
  console.log(status);
  useEffect(() => {
    calculateDday(todo.updatedAt);
  }, []);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const calculateDday = (dateString: string) => {
    const dateStringArry: string[] = dateString.split(' ')[0].split('-');
    const dDay: Date = new Date(
      parseInt(dateStringArry[0]),
      parseInt(dateStringArry[1]) - 1,
      parseInt(dateStringArry[2]),
    );
    const today: Date = new Date();
    const gap = dDay.getTime() - today.getTime();
    const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    setDday(result);
  };

  const handleSelectStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    selectStatusTodo(todo.id, ClickStatus);
  };

  return (
    <TodoItemBlock>
      <Text>{todo.taskName}</Text>
      <Text>{dDay > 0 ? `D -${dDay}` : `D +${-dDay}`}</Text>
      <ElementBlock>
        <button style={{ cursor: 'pointer', marginRight: '10px' }}>수정</button>
        <MySelectBox value={status} handleChange={handleSelectStatus} />
        <button style={{ cursor: 'pointer' }} onClick={handleRemove}>
          휴지통
        </button>
      </ElementBlock>
    </TodoItemBlock>
  );
};

export default TodoItem;

const { TodoItemBlock, Text, ElementBlock } = style;
