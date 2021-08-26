import { useState, useEffect } from 'react';
import { Itodo, Status } from 'types';
import data from 'data.json';
import { TodoDate } from 'utils/todoDate';

export const useTodo = () => {
  let initialTodos: Itodo[] = data as Itodo[];

  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(0);
  const date = new TodoDate();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const loadNextId = (initialTodos: Itodo[]) => {
    let MaxId = 0;
    for (let i = 0; i < initialTodos.length; i++) {
      MaxId = Math.max(MaxId, initialTodos[i].id);
    }

    setNextIdState(MaxId + 1);
  };

  const incrementNextId = () => {
    setNextIdState((prevId) => prevId + 1);
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id),
    );
  };

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState,
      }),
    );
  };

  const selectStatusTodo = (id: number, ClickStatus: Status) => {
    const todoSelect = todoState.filter((todo: Itodo) => todo.id === id);
    todoSelect[0].status = ClickStatus;
    todoSelect[0].updatedAt = date.converToString(new Date());

    const noSelectList = todoState.filter((todo: Itodo) => todo.id !== id);
    const todoList = noSelectList.concat(todoSelect);

    todoList.sort((o1, o2) => o1.id - o2.id);
    setTodoState(todoList);
  };

  const modifyTodo = (id: number, editedTask: string, editDueDate: Date) => {
       const todomodify = todoState.filter((todo: Itodo) => todo.id === id);
       todomodify[0].taskName = editedTask;
       todomodify[0].dueDate = date.converToString(editDueDate);

       const noModifyList = todoState.filter((todo: Itodo) => todo.id !== id);
       const todoList = noModifyList.concat(todomodify);

       todoList.sort((o1, o2) => o1.id - o2.id);
       setTodoState(todoList);
  };

  const loadData = () => {
    let data = localStorage.getItem('todos');

    if (!data) {
      data = '';
    } else {
      initialTodos = JSON.parse(data);
    }

    if (initialTodos && initialTodos.length >= 1) {
      loadNextId(initialTodos);
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem('todos', JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    removeTodo,
    createTodo,
    selectStatusTodo,
    modifyTodo,
  };
};
