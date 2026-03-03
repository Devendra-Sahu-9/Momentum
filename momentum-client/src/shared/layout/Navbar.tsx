import { Menu } from "lucide-react";
import { useAppDispatch } from "../../app/hooks";
import { Button } from "../components/ui/Button";
import { logout } from "../../features/Authentication/authSlice";

interface Props {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* Hamburger (Mobile Only) */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>

        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* Right Side */}
      <Button variant="danger" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </header>
  );
};

export default Navbar;
