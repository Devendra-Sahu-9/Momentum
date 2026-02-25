import { Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "../features/tasks/pages/TasksPage";
import HomePage from "../features/Home/pages/HomePage";
import LoginPage from "../features/Authentication/pages/LoginPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
