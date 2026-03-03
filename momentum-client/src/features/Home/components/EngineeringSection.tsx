const EngineeringSection = () => {
  return (
    <section className="py-24 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Built with Modern Architecture
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 mb-10">
        Developed using React, Redux Toolkit, modular feature-based
        architecture, scalable backend APIs, and clean separation of concerns.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
        <span className="bg-white px-4 py-2 rounded-lg shadow">
          React + Vite
        </span>
        <span className="bg-white px-4 py-2 rounded-lg shadow">
          Redux Toolkit
        </span>
        <span className="bg-white px-4 py-2 rounded-lg shadow">
          Feature-Based Architecture
        </span>
        <span className="bg-white px-4 py-2 rounded-lg shadow">
          .NET Core API
        </span>
        <span className="bg-white px-4 py-2 rounded-lg shadow">JWT Auth</span>
      </div>
    </section>
  );
};
export default EngineeringSection;
