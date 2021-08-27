import React, { useState } from 'react';
import { useEffect } from 'react';
import { Itodo, Sort, Tfilter } from 'types';
import { TodoDate } from 'utils/todoDate';

const initialFilter: Tfilter = {
  sort: Sort.BASIC,
  progress: '전체',
};

const useFilter = () => {
  const date = new TodoDate();
  const [filter, setFilter] = useState<Tfilter>(initialFilter);
  const [initialTodo, setInitialTodo] = useState<Itodo[] | null>(null);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (initialTodo !== null) setIsFirst(false);
  }, [initialTodo]);

  const sortByDuedate = (todos: Itodo[]): Itodo[] => {
    const newTodos = JSON.parse(JSON.stringify(todos)) as Itodo[];
    return newTodos.sort(
      (a, b) =>
        date.convertToNumber(a.dueDate) - date.convertToNumber(b.dueDate),
    );
  };

  const filterByProgress = (todos: Itodo[], filter: Tfilter): Itodo[] => {
    if (filter.progress === '전체') return todos;
    return todos.filter((todo: Itodo) => filter.progress === todo.status);
  };

  const applyFilter = (todos: Itodo[], filter: Tfilter): Itodo[] => {
    if (initialTodo === null) setInitialTodo(todos);

    let data: Itodo[] | null = null;

    if (filter.sort === Sort.DUE_DATE) data = sortByDuedate(todos);
    else if (!isFirst && filter.sort === Sort.BASIC) data = todos;

    return filterByProgress(data || (initialTodo as Itodo[]), filter);
  };

  return { filter, setFilter, applyFilter };
};

export default useFilter;
