function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">Momentum</div>
        <div>
          <a
            href="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="/tasks"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Tasks
          </a>
          <a
            href="/settings"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
