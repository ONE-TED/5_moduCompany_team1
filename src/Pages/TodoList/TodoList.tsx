import React, { useState, useEffect, useRef } from 'react';
import Header from 'Components/Header';
import { Todocreate, TodoItem } from 'Components/Todo';
import { useDragAndDrop } from 'Hooks/useDragAndDrop';
import { useTodo } from 'Hooks/useTodo';
import { style } from './TodoListStyle';
import Filter from 'Components/Filter';
import useFilter from 'Hooks/useFilter';
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
    modifyTodo,
  } = useTodo();
  const { handleOnDragStart, handleOnDragOver, handleOnDragEnd } =
    useDragAndDrop({ todoState, setTodoState });
  const [list, setList] = useState<Itodo[]>(todoState);
  const { filter, setFilter, applyFilter } = useFilter();

  return (
    <>
      <TodoListTemplate>
        <Header />
         <Filter filter={filter} setFilter={setFilter} />
        <Todocreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoItemsLayout>
          {applyFilter(list, filter).map((item: Itodo, index: number) => (
            <TodoItem
              key={`item-${item.id}`}
              removeTodo={removeTodo}
              todo={item}
              selectStatusTodo={selectStatusTodo}
              modifyTodo={modifyTodo}
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
