import { useState } from "react";
import type { Task } from "../types/task.types";
import { Button } from "../../../shared/components/ui/Button";
import { Modal } from "../../../shared/components/ui/Modal";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";

export const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...task,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>

          <Button onClick={() => setIsOpen(true)}>Add Task</Button>
        </div>

        <TaskList tasks={tasks} onDelete={handleDelete} />
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create New Task"
      >
        <TaskForm onClose={() => setIsOpen(false)} onSubmit={handleAddTask} />
      </Modal>
    </div>
  );
};
