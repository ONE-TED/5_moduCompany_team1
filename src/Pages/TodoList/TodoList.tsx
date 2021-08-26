import React, { useState } from 'react';
import Header from 'Components/Header';
import { Todocreate, TodoItem } from 'Components/Todo';
import { useTodo } from 'Hooks/useTodo';
import { style } from './TodoListStyle';
import { Itodo } from 'types';

const TodoList: React.FC = () => {
  const {
    todoState,
    nextIdState,
    incrementNextId,
    removeTodo,
    createTodo,
    selectStatusTodo,
    modifyTodo,
  } = useTodo();

  const [list, setList] = useState<Itodo[] | null>(null);

  return (
    <>
      <TodoListTemplate>
        <Header />
        <Todocreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoItemsLayout>
          {todoState.map((item: Itodo) => (
            <TodoItem
              key={item.id}
              removeTodo={removeTodo}
              todo={item}
              selectStatusTodo={selectStatusTodo}
              modifyTodo={modifyTodo}
            />
          ))}
        </TodoItemsLayout>
      </TodoListTemplate>
    </>
  );
};
export default TodoList;

const { TodoListTemplate, TodoItemsLayout } = style;
