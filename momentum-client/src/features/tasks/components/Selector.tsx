import type { RootState } from "../../../app/store";

export const selectTasksState = (state: RootState) => state.tasks;

export const selectColumnTasks =
  (status: "todo" | "inProgress" | "done") => (state: RootState) => {
    const { tasks, columns } = state.tasks;

    return columns[status].map((id) => tasks[id]);
  };
