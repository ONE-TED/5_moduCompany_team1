import React, { useState, useRef } from 'react';
import Header from 'Components/Header';
import { Todocreate, TodoItem } from 'Components/Todo';
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

  const [list, setList] = useState<Itodo[] | null>(null);
  const dragStartIndex = useRef<number>(0);
  const dragOverIndex = useRef<number>(0);
  const handleOnDragStart = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement },
    index: number,
  ): void => {
    e.target.classList.add('dragging'); //드래그 되는 요소 색상 바꿔주기 위한 용도
    dragStartIndex.current = index;
  };

  const handleOnDragOver = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement },
    index: number,
  ): void => {
    dragOverIndex.current = index;
  };

  const handleOnDragEnd = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement },
  ): void => {
    e.target.classList.remove('dragging'); //드래그 된 요소 색상 다시 원래대로.
    const draggedEl = todoState.slice(
      dragStartIndex.current,
      dragStartIndex.current + 1,
    );
    const frontTodos = todoState.slice(0, dragOverIndex.current);
    const rearTodos = todoState.slice(dragOverIndex.current, todoState.length);

    if (dragOverIndex.current > dragStartIndex.current) {
      frontTodos.splice(dragStartIndex.current, 1);
    } else {
      rearTodos.splice(dragStartIndex.current - dragOverIndex.current, 1);
    }

    const temp = [...frontTodos, ...draggedEl, ...rearTodos];
    setTodoState(temp);
  };

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
              onDragStart={(e: any) => {
                handleOnDragStart(e, index);
              }}
              onDragOver={(e: any) => {
                handleOnDragOver(e, index);
              }}
              onDragEnd={(e: any) => {
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
