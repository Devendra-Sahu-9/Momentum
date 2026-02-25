import type { Task } from "../types/task.types";
import { Button } from "../../../shared/components/ui/Button";
import { Card } from "../../../shared/components/ui/Card";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <Card>
        <p className="text-gray-500">No tasks yet.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-500">{task.description}</p>
            </div>

            <Button variant="danger" onClick={() => onDelete(task.id)}>
              Delete
            </Button>
            <Button variant="primary" onClick={() => onDelete(task.id)}>
              Edit
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
