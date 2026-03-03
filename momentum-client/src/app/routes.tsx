import { Routes, Route } from "react-router-dom";
import { HomePage } from "../features/Home/pages/HomePage";
import PublicRoute from "./PublicRoute";
import LoginPage from "../features/Authentication/pages/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardPage from "../features/Dashboard/DashboardPage";
import MainLayout from "../shared/layout/MainLayout";
import TasksPage from "../features/tasks/pages/TasksPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC HOME */}
      <Route path="/" element={<HomePage />} />

      {/* LOGIN */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* PRIVATE ROUTES */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/expense" element={<div>Expense Page</div>} />
          <Route path="/cards" element={<div>Cards Page</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
