import React, { useState } from 'react';
import { Itodo } from 'types';
import { style } from './TodoItemStyle';

interface TodoItemProps {
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ removeTodo, todo }: TodoItemProps) => {
  const [done, setDone] = useState(todo.status);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <TodoItemBlock>
      <Text>{todo.taskName}</Text>
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
