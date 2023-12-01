import {QuestionType} from '../modules/week/index.d';

export const setItem = (
  items: QuestionType[],
  id: number,
): QuestionType[] | [] => {
  const paramaterArr = [...items];
  const returnArr: QuestionType[] = [];
  paramaterArr.map(item => item.weekNumber === id && returnArr.push(item));
  return returnArr;
};
