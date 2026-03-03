import { Button } from "../../../shared/components/ui/Button";

const TaskToolbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Task Management</h1>

      <div className="flex gap-3">
        <Button variant="secondary">Bulk Actions</Button>

        <Button>+ Create Task</Button>
      </div>
    </div>
  );
};

export default TaskToolbar;
