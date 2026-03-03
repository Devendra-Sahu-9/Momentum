import DashboardHeader from "./components/DashboardHeader";
import StatCard from "./components/StatCard";
import ModuleShortcutCard from "./components/ModuleShortcutCard";
import ActivityFeed from "./components/ActivityFeed";
import QuickActions from "./components/QuickActions";

const DashboardPage = () => {
  return (
    <div className="space-y-10">
      <DashboardHeader />

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Active Tasks" value={12} color="text-blue-600" />
        <StatCard
          title="Pending Settlements"
          value={4}
          color="text-yellow-500"
        />
        <StatCard title="Created Cards" value={9} color="text-green-600" />
      </div>

      {/* Modules */}
      <div className="grid md:grid-cols-3 gap-6">
        <ModuleShortcutCard
          title="Tasks"
          description="Manage tasks & deadlines"
          to="/tasks"
        />

        <ModuleShortcutCard
          title="Expense Split"
          description="Track shared expenses"
          to="/expense"
        />

        <ModuleShortcutCard
          title="Card Creator"
          description="Create dynamic smart cards"
          to="/cards"
        />
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <ActivityFeed />
        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardPage;
