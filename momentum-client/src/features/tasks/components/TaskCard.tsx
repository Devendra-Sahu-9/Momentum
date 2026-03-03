import { Card } from "../../../shared/components/ui/Card";
import type { Task } from "../tasksSlice";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const priorityColor =
    task.priority === "high"
      ? "bg-red-100 text-red-600"
      : task.priority === "medium"
        ? "bg-yellow-100 text-yellow-600"
        : "bg-green-100 text-green-600";

  return (
    <Card className="p-4 cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">{task.title}</h4>

        <span className={`text-xs px-2 py-1 rounded ${priorityColor}`}>
          {task.priority}
        </span>
      </div>
    </Card>
  );
};

export default TaskCard;
