import TaskBoard from "../components/TaskBoard";
import TaskFilters from "../components/TaskFilters";
import TaskStats from "../components/TaskStats";
import TaskToolbar from "../components/TaskToolbar";

const TasksPage = () => {
  return (
    <div className="space-y-8">
      <TaskToolbar />
      <TaskStats />
      <TaskFilters />
      <TaskBoard />
    </div>
  );
};

export default TasksPage;
