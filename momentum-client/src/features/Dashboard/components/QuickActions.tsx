import { Button } from "../../../shared/components/ui/Button";
import Card from "../../../shared/components/ui/Card";

const QuickActions = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>

      <div className="space-y-3">
        <Button to="/tasks">+ Create Task</Button>
        <Button variant="secondary" to="/expense">
          + Add Expense
        </Button>
        <Button variant="outline" to="/cards">
          + Create Card
        </Button>
      </div>
    </Card>
  );
};

export default QuickActions;
