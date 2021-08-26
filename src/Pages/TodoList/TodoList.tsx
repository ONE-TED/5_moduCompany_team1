import React, { useState, useEffect, useRef } from 'react';
import Header from 'Components/Header';
import { Todocreate, TodoItem } from 'Components/Todo';
import { useDragAndDrop } from 'Hooks/useDragAndDrop';
import { useTodo } from 'Hooks/useTodo';
import { style } from './TodoListStyle';
import { Itodo, Status } from 'types';

const TodoList: React.FC = () => {
  const {
    todoState,
    setTodoState,
    nextIdState,
    incrementNextId,
    removeTodo,
    createTodo,
    selectStatusTodo,
  } = useTodo();

  const { handleOnDragStart, handleOnDragOver, handleOnDragEnd } =
    useDragAndDrop({ todoState, setTodoState });

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
          {todoState.map((item: Itodo, index: number) => (
            <TodoItem
              key={`item-${item.id}`}
              removeTodo={removeTodo}
              todo={item}
              selectStatusTodo={selectStatusTodo}
              onDragStart={(e) => {
                handleOnDragStart(e, index);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                handleOnDragOver(e, index);
              }}
              onDragEnd={(e) => {
                handleOnDragEnd(e);
              }}
            />
          ))}
        </TodoItemsLayout>
      </TodoListTemplate>
    </>
  );
};
export default TodoList;

const { TodoListTemplate, TodoItemsLayout } = style;
