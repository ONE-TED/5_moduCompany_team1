import { useState, useEffect } from 'react';
import {Itodo} from 'types';

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(0);

  useEffect(() => {
    loadData();
  }, []);
  
  useEffect(() => {
    saveData();
  },[todoState]);

  const loadNextId = (initialTodos : Itodo[]) => {
    let MaxId = 0;
    for(let i=0; i<initialTodos.length; i++) {
      MaxId = Math.max(MaxId, initialTodos[i].id);
    }

    setNextIdState(MaxId + 1);
  }

  const increamentNextID = () => {
    setNextIdState((prevId) => prevId + 1);
  }

  const removeTodo = (id: number) => {
    setTodoState((prevState) => 
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  }

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) => prevState.concat({
      ...todo,
      id:nextIdState
      })
    );
  }

  const loadData = () => {
    let data = localStorage.getItem("todos");

    if(data === undefined) data = "";
    initialTodos = JSON.parse(data!);

    if(initialTodos && initialTodos.length >= 1) {
      loadNextId(initialTodos);
    }
    setTodoState(initialTodos);
  }

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  }

  return {
    todoState,
    nextIdState,
    increamentNextID,
    removeTodo,
    createTodo
  }
}

