import React, { useState } from 'react';
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

  const sortByDuedate = (todos: Itodo[]): Itodo[] => {
    return todos.sort(
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

    let sorted: Itodo[] | null = null;
    if (filter.sort === Sort.DUE_DATE) sorted = sortByDuedate(todos);

    return filterByProgress(sorted || (initialTodo as Itodo[]), filter);
  };

  return { filter, setFilter, applyFilter };
};

export default useFilter;
