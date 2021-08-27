import React, { useState, useEffect } from 'react';
import { Itodo, Status } from 'types';
import { style } from './TodoItemStyle';
import { MySelectBox, Mydatepicker } from 'Components';
import { ReactComponent as Trashcan } from 'Assets/icons/trashcan.svg';

interface TodoItemProps {
  setModalOpen: (state: boolean) => void;
  setRemoveBtnClickedTodo: (id: number) => void;
  todo: Itodo;
  selectStatusTodo: (id: number, ClickStatus: Status) => void;
  modifyTodo: (id: number, editedTask: string, editDueDate: Date) => void;
  onDragStart: React.DragEventHandler<HTMLDivElement>;
  onDragOver: React.DragEventHandler<HTMLDivElement>;
  onDragEnd: React.DragEventHandler<HTMLDivElement>;
}

const TodoItem = ({
  setModalOpen,
  setRemoveBtnClickedTodo,
  todo,
  selectStatusTodo,
  modifyTodo,
  onDragStart,
  onDragOver,
  onDragEnd,
}: TodoItemProps) => {
  const [dDay, setDday] = useState<number>(0);
  const [status, setStatus] = useState<Status>(todo.status);
  const [done, setDone] = useState<boolean>(false);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(todo.taskName);
  const [editDueDate, setEditDuedate] = useState<Date>(new Date());

  useEffect(() => {
    if (todo.dueDate) {
      calculateDday(todo.dueDate);
    }
    todo.status === '완료' ? setDone(true) : setDone(false);
    setEditedTask(todo.taskName);
    setStatus(todo.status);
  }, [isEdited, todo]);

  const handleRemoveButtonClicked = () => {
    setModalOpen(true);
    setRemoveBtnClickedTodo(todo.id);
  };

  const calculateDday = (dateString: string) => {
    const dateStringArry: string[] = dateString.split(' ')[0].split('-');
    const dDay: Date = new Date(
      parseInt(dateStringArry[0]),
      parseInt(dateStringArry[1]) - 1,
      parseInt(dateStringArry[2]),
    );
    const today: Date = new Date();
    const gap = dDay.getTime() - today.getTime();
    const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    setDday(result);
  };

  const handleSelectStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.target.value;
    let ClickStatus: Status = Status.NOT_STARTED;
    if (value === '완료') {
      ClickStatus = Status.FINISHED;
      setDone(true);
    } else if (value === '진행중') {
      ClickStatus = Status.ONGOING;
      setDone(false);
    } else {
      ClickStatus = Status.NOT_STARTED;
      setDone(false);
    }
    setStatus(ClickStatus);
    selectStatusTodo(todo.id, ClickStatus);
  };

  const handleModify = () => {
    setIsEdited(!isEdited);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEditedTask(e.target.value);

  const handleEditDuedate = (e: Date) => {
    setEditDuedate(e);
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    modifyTodo(todo.id, editedTask, editDueDate);
    setIsEdited(false);
  };

  return (
    <TodoItemBlock
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {isEdited ? (
        <InsertForm onSubmit={handleEditSubmit}>
          <Input autoFocus value={editedTask} onChange={handleEditChange} />
          <Mydatepicker
            Duedate={editDueDate}
            handleChange={handleEditDuedate}
          />
          <button
            style={{ background: 'black', color: 'white', cursor: 'pointer' }}
          >
            등록하기
          </button>
        </InsertForm>
      ) : (
        <>
          <Text done={done}>{todo.taskName}</Text>
          <Text done={done}>{dDay > 0 ? `D -${dDay}` : `D +${-dDay}`}</Text>
        </>
      )}
      <ElementBlock>
        <button
          style={{ cursor: 'pointer', marginRight: '10px' }}
          onClick={handleModify}
        >
          {isEdited ? `취소` : `수정`}
        </button>
        <MySelectBox value={status} handleChange={handleSelectStatus} />
        <button
          style={{ cursor: 'pointer' }}
          onClick={handleRemoveButtonClicked}
        >
          <Trashcan />
        </button>
      </ElementBlock>
    </TodoItemBlock>
  );
};

export default TodoItem;

const { TodoItemBlock, Text, ElementBlock, Input, InsertForm } = style;
