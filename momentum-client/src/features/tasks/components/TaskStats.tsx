import { Card } from "../../../shared/components/ui/Card";

const TaskStats = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card className="p-5">
        <p className="text-sm text-gray-500">Total Tasks</p>
        <h3 className="text-2xl font-bold mt-2">24</h3>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">In Progress</p>
        <h3 className="text-2xl font-bold text-blue-600 mt-2">8</h3>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">Completed</p>
        <h3 className="text-2xl font-bold text-green-600 mt-2">12</h3>
      </Card>

      <Card className="p-5">
        <p className="text-sm text-gray-500">Overdue</p>
        <h3 className="text-2xl font-bold text-red-600 mt-2">4</h3>
      </Card>
    </div>
  );
};

export default TaskStats;
