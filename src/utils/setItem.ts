import {ToDoType} from '../modules/week/index.d';

export const setItem = (items: ToDoType[], id: number): ToDoType[] | [] => {
  const paramaterArr = [...items];
  const returnArr: ToDoType[] = [];
  paramaterArr.map(item => item.weekNumber === id && returnArr.push(item));
  return returnArr;
};
