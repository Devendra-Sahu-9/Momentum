import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TaskStatus = "todo" | "inProgress" | "done";

export interface Task {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
}

interface TasksState {
  tasks: Record<string, Task>;
  columns: Record<TaskStatus, string[]>;
}

const initialState: TasksState = {
  tasks: {
    "1": { id: "1", title: "Design Dashboard UI", priority: "high" },
    "2": { id: "2", title: "Setup Redux Store", priority: "medium" },
    "3": { id: "3", title: "Deploy Application", priority: "low" },
  },
  columns: {
    todo: ["1"],
    inProgress: ["2"],
    done: ["3"],
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    moveTask: (
      state,
      action: PayloadAction<{
        sourceCol: TaskStatus;
        destCol: TaskStatus;
        sourceIndex: number;
        destIndex: number;
      }>,
    ) => {
      const { sourceCol, destCol, sourceIndex, destIndex } = action.payload;

      const sourceTasks = state.columns[sourceCol];
      const [movedTaskId] = sourceTasks.splice(sourceIndex, 1);

      state.columns[destCol].splice(destIndex, 0, movedTaskId);
    },
  },
});

export const { moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
