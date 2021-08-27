import React, { useState } from 'react';
import { Itodo, Sort, Tfilter } from 'types';
import { TodoDate } from 'utils/todoDate';

const initialFilter: Tfilter = {
  sort: Sort.CREATED,
  progress: '전체',
};

const useFilter = () => {
  const date = new TodoDate();
  const [filter, setFilter] = useState<Tfilter>(initialFilter);

  const sortTodo = (todos: Itodo[], filter: Tfilter): Itodo[] => {
    if (filter.sort === Sort.CREATED) {
      return todos.sort(
        (a, b) =>
          date.convertToNumber(b.createdAt) - date.convertToNumber(a.createdAt),
      );
    } else {
      return todos.sort(
        (a, b) =>
          date.convertToNumber(b.updatedAt) - date.convertToNumber(a.updatedAt),
      );
    }
  };

  const filterByProgress = (todos: Itodo[], filter: Tfilter): Itodo[] => {
    if (filter.progress === '전체') return todos;
    return todos.filter((todo: Itodo) => filter.progress === todo.status);
  };

  const applyFilter = (todos: Itodo[], filter: Tfilter): Itodo[] => {
    const sorted = sortTodo(todos, filter);
    return filterByProgress(sorted, filter);
  };

  return { filter, setFilter, applyFilter };
};

export default useFilter;
