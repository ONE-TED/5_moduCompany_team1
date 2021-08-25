import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'Components/Header';
import data from 'data.json';
import { Itodo } from 'types';

const TodoList = () => {
  const todoData = data as Itodo[];
  const [list, setList] = useState<Itodo[] | null>(null);

  return (
    <TodoListTemplate>
      <Header />
      <TodoItemsLayout>
        <ul style={{ padding: '20px' }}>
          {todoData.map((item: Itodo) => (
            <Li key={item.id}>
              <span style={{ fontSize: '20px' }}>{item.taskName}</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button>icon</button>
                <div>selectBox</div>
                <button>휴지통</button>
              </div>
            </Li>
          ))}
        </ul>
      </TodoItemsLayout>
    </TodoListTemplate>
  );
};

const TodoListTemplate = styled.div`
  background: white;

  display: flex;
  flex-direction: column;
`;

const TodoItemsLayout = styled.div`
  overflow-y: scroll;
  margin: 2rem;
`;

const Li = styled.li`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

export default TodoList;
