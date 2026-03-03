import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { appConfig } from "../../config/appConfig";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  const linkClass = "block px-4 py-2 rounded-lg text-sm font-medium transition";

  return (
    <>
      {/* Overlay (Mobile Only) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 md:static
          top-0 left-0 h-full w-64 bg-white shadow-md p-6
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close Button (Mobile) */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h2 className="text-lg font-bold text-blue-600">
            {appConfig.appName}
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Desktop Title */}
        <h2 className="hidden md:block text-xl font-bold text-blue-600 mb-8">
          {appConfig.appName}
        </h2>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            Tasks
          </NavLink>

          <NavLink
            to="/expense"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            Expense
          </NavLink>

          <NavLink
            to="/cards"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
            onClick={onClose}
          >
            Cards
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
