export enum Status {
  FINISHED = '완료',
  ONGOING = '진행중',
  NOT_STARTED = '시작안함',
}

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
}

export enum Sort {
  BASIC = 'basic',
  DUE_DATE = 'due_date',
}

export type All = '전체';

export type Tfilter = {
  sort: Sort;
  progress: Status | All;
};
