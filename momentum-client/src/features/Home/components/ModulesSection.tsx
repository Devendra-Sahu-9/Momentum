const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-16">Core Modules</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Task Management */}
        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Task Management</h3>
          <p className="text-gray-600 mb-4">
            Create, track and prioritize tasks with scalable backend
            architecture.
          </p>
          <span className="text-blue-600 font-medium">
            Kanban • Deadlines • Analytics
          </span>
        </div>

        {/* Expense Split */}
        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Expense Split</h3>
          <p className="text-gray-600 mb-4">
            Manage shared expenses and settlements like Splitwise.
          </p>
          <span className="text-blue-600 font-medium">
            Groups • Settlements • Tracking
          </span>
        </div>

        {/* Card Creator */}
        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Card Creator</h3>
          <p className="text-gray-600 mb-4">
            Design structured data cards or customizable modules.
          </p>
          <span className="text-blue-600 font-medium">
            Templates • Dynamic UI
          </span>
        </div>
      </div>
    </section>
  );
};
export default ModulesSection;
