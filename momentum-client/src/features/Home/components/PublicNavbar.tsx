import { Link } from "react-router-dom";
import { Button } from "../../../shared/components/ui/Button";
import { appConfig } from "../../../config/appConfig";
const PublicNavbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-5 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">{appConfig.appName}</h1>

      <div className="flex items-center gap-4">
        <Link to="/login" className="text-gray-600 hover:text-blue-600">
          Login
        </Link>

        <Link to="/login">
          <Button>Get Started</Button>
        </Link>
      </div>
    </header>
  );
};

export default PublicNavbar;
