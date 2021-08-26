import React, { useState } from 'react';
import Header from 'Components/Header';
import data from 'data.json';
import TodoCreate from 'Components/Todo/Create';
import { useTodo } from 'Hooks/useTodo';
import { style } from './TodoListStyle';
import { Itodo } from 'types';
import Filter from 'Components/Filter';
import useFilter from 'Hooks/useFilter';

const TodoList: React.FC = () => {
  const { todoState, nextIdState, incrementNextId, removeTodo, createTodo } =
    useTodo();

  const [list, setList] = useState<Itodo[]>(todoState);
  const { filter, setFilter, applyFilter } = useFilter();

  return (
    <>
      <TodoListTemplate>
        <Header />
        <Filter filter={filter} setFilter={setFilter} />
        <TodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoItemsLayout>
          <ul style={{ padding: '20px' }}>
            {applyFilter(list, filter).map((item: Itodo) => (
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
    </>
  );
};
export default TodoList;

const { TodoListTemplate, Li, TodoItemsLayout } = style;
