import React, { useState, useEffect } from 'react';
import { Itodo } from 'types';
import { style } from './TodoItemStyle';

interface TodoItemProps {
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ removeTodo, todo }: TodoItemProps) => {
  const [done, setDone] = useState(todo.status);
  const [dDay, setDday] = useState<number>(0);

  useEffect(() => {
    calculateDday(todo.updatedAt);
  }, []);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const calculateDday = (dateString: string) => {
    const dateStringArry: string[] = dateString.split(' ')[0].split('-');
    console.log(dateStringArry);
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
  return (
    <TodoItemBlock>
      <Text>{todo.taskName}</Text>
      <Text>{dDay > 0 ? `D -${dDay}` : `D +${-dDay}`}</Text>
      <ElementBlock>
        <button style={{ cursor: 'pointer', marginRight: '10px' }}>수정</button>
        <div style={{ cursor: 'pointer', marginRight: '10px' }}>selectBox</div>
        <button style={{ cursor: 'pointer' }} onClick={handleRemove}>
          휴지통
        </button>
      </ElementBlock>
    </TodoItemBlock>
  );
};

export default TodoItem;

const { TodoItemBlock, Text, ElementBlock } = style;
