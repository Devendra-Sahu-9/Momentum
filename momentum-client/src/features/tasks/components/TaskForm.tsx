import { useState } from "react";
import { Button } from "../../../shared/components/ui/Button";
import { Input } from "../../../shared/components/ui/Input";
import { Textarea } from "../../../shared/components/ui/Textarea";
import type { Task } from "../types/task.types";

interface TaskFormProps {
  onClose: () => void;
  onSubmit: (task: Omit<Task, "id">) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSubmit({
      title,
      description,
      isCompleted: false,
    });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Textarea
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>

        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
};
