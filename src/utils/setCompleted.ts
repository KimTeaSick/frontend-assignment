import {QuestionType} from '../modules/week/index.d';

export const setCompleted = (items: QuestionType[]): number => {
  let count = 0;
  items.map(item => item.checked && count++);
  return count;
};
