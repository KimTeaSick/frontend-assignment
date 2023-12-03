type ToDoType = {
  weekNumber: number;
  content: string;
  checked: boolean;
};

export type WeekInitialStateType = {
  activeWeek: number;
  writeMode: boolean;
  editMode: boolean;
  toDoList: ToDoType[];
};
