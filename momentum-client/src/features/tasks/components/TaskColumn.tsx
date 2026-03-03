import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useAppSelector } from "../../../app/hooks";
import type { TaskStatus } from "../tasksSlice";
import TaskCard from "./TaskCard";
import { Card } from "../../../shared/components/ui/Card";
import { selectColumnTasks } from "./Selector";

interface Props {
  status: TaskStatus;
  title: string;
}

const TaskColumn = ({ status, title }: Props) => {
  const tasks = useAppSelector(selectColumnTasks(status));

  return (
    <Card className="p-4 min-h-[400px]">
      <h3 className="font-semibold mb-4">{title}</h3>

      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  );
};

export default TaskColumn;
