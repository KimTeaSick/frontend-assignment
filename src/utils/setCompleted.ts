import {ToDoType} from '../modules/week/index.d';

export const setCompleted = (items: ToDoType[]): number => {
  let count = 0;
  items.map(item => item.checked && count++);
  return count;
};
