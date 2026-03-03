import Card from "../../../shared/components/ui/Card";

const ActivityFeed = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>

      <ul className="space-y-3 text-sm text-gray-600">
        <li>✔ Task "Landing Page UI" completed</li>
        <li>💰 Added expense to "Goa Trip"</li>
        <li>🃏 Created new profile card</li>
      </ul>
    </Card>
  );
};

export default ActivityFeed;
