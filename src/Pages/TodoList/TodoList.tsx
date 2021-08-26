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
    e.target.classList.add('.dragging'); //드래그 되는 요소 색상 바꿔주기 위한 용도
    //드래깅 되고 있는 엘리먼트 인덱스 저장
    dragStartIndex.current = index;
  };

  const handleOnDragOver = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement },
    index: number,
  ): void => {
    //드래그 오버된 엘리먼트 인덱스 저장
    dragOverIndex.current = index;
  };

  const handleOnDragEnd = (
    e: React.DragEvent<HTMLDivElement> & { target: HTMLDivElement },
  ): void => {
    e.target.classList.remove('.dragging'); //드래그 된 요소 색상 다시 원래대로.
    const tempList = [...todoState];
    const dummyItem = {
      id: 0,
      taskName: '',
      status: Status.FINISHED,
      createdAt: '',
      updatedAt: '',
    };
    const draggedItem = tempList.splice(dragStartIndex.current, 1, dummyItem);
    tempList.splice(dragOverIndex.current, 0, draggedItem[0]);
    tempList.splice(dragStartIndex.current, 1);
    setTodoState(tempList);
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
              key={item.id}
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
