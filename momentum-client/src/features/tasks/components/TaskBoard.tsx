import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { useAppDispatch } from "../../../app/hooks";
import TaskColumn from "./TaskColumn";
import { moveTask } from "../tasksSlice";
import type { TaskStatus } from "../tasksSlice";

const TaskBoard = () => {
  const dispatch = useAppDispatch();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sourceCol = result.source.droppableId as TaskStatus;
    const destCol = result.destination.droppableId as TaskStatus;

    dispatch(
      moveTask({
        sourceCol,
        destCol,
        sourceIndex: result.source.index,
        destIndex: result.destination.index,
      }),
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid md:grid-cols-3 gap-6">
        <TaskColumn status="todo" title="Todo" />
        <TaskColumn status="inProgress" title="In Progress" />
        <TaskColumn status="done" title="Done" />
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
