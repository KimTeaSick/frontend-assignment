type ToDoType = {
  weekNumber: number;
  content: string;
  checked: boolean;
};

export type WeekInitialStateType = {
  prevWeek: number;
  activeWeek: number;
  writeMode: boolean;
  editMode: boolean;
  toDoList: ToDoType[];
};
