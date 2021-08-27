import React, { useRef } from 'react';
import { Itodo } from 'types';

interface IparameterUseDragAndDrop {
  todoState: Itodo[];
  setTodoState: React.Dispatch<React.SetStateAction<Itodo[]>>;
}

export const useDragAndDrop = ({
  todoState,
  setTodoState,
}: IparameterUseDragAndDrop) => {
  const dragStartIndex = useRef<number>(0);
  const dragOverIndex = useRef<number>(0);

  const handleOnDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ): void => {
    (e.target as HTMLDivElement).classList.add('dragging');
    dragStartIndex.current = index;
  };

  const handleOnDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ): void => {
    dragOverIndex.current = index;
  };

  const handleOnDragEnd = (e: React.DragEvent<HTMLDivElement>): void => {
    (e.target as HTMLElement).classList.remove('dragging');
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
    const temp: Itodo[] = [...frontTodos, ...draggedEl, ...rearTodos];
    for (let i = 0; i < temp.length; i++) {
      temp[i] = {
        ...temp[i],
        id: i,
      };
    }
    setTodoState(temp);
  };

  return {
    dragStartIndex,
    dragOverIndex,
    handleOnDragStart,
    handleOnDragOver,
    handleOnDragEnd,
  };
};

export default useDragAndDrop;
