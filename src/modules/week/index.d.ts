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
  showUndoToast: boolean;
  fixToDo: ToDoType | null;
  toDoList: ToDoType[];
  prevList: ToDoType[];
};
