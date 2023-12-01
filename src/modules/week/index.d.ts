type QuestionType = {
  weekNumber: number;
  content: string;
  checked: boolean;
};

export type WeekInitialStateType = {
  questionList: QuestionType[];
};
