import { appConfig } from "../../../config/appConfig";

const DashboardHeader = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Welcome to {appConfig.appName} 👋
      </h1>
      <p className="text-gray-500 mt-1">
        Here’s an overview of your productivity ecosystem.
      </p>
    </div>
  );
};

export default DashboardHeader;
