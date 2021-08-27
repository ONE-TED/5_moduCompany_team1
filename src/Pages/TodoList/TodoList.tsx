import React, { useState, useEffect, useRef } from 'react';
import Header from 'Components/Header';
import { Todocreate, TodoItem } from 'Components/Todo';
import Modal from 'utils/Modal/Modal';
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
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [removeBtnClickedTodo, setRemoveBtnClickedTodo] = useState<number>(0);
  const [openedFilter, setOpenedFilter] = useState(false);

  return (
    <>
      <TodoListTemplate>
        {modalOpen && (
          <Modal
            setModalOpen={setModalOpen}
            removeTodo={removeTodo}
            removeBtnClickedTodo={removeBtnClickedTodo}
          />
        )}
        <Header
          filter={filter}
          setFilter={setFilter}
          openedFilter={openedFilter}
          setOpenedFilter={setOpenedFilter}
        />
        <BodyContainer>
          <Todocreate
            nextId={nextIdState}
            createTodo={createTodo}
            incrementNextId={incrementNextId}
          />
          <TodoItemsLayout>
            {applyFilter(todoState, filter)?.map(
              (item: Itodo, index: number) => (
                <TodoItem
                  key={`item-${item.id}`}
                  setModalOpen={setModalOpen}
                  setRemoveBtnClickedTodo={setRemoveBtnClickedTodo}
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
              ),
            )}
          </TodoItemsLayout>
        </BodyContainer>
      </TodoListTemplate>
    </>
  );
};
export default TodoList;

const { TodoListTemplate, TodoItemsLayout, BodyContainer } = style;
