import { Input } from "../../../shared/components/ui/Input";

const TaskFilters = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Input placeholder="Search tasks..." />

      <select className="border rounded-lg px-3 py-2">
        <option>All Priorities</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select className="border rounded-lg px-3 py-2">
        <option>Sort by Due Date</option>
        <option>Sort by Priority</option>
        <option>Sort by Created Date</option>
      </select>
    </div>
  );
};

export default TaskFilters;
