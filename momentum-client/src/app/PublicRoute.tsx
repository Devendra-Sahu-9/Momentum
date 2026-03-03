import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "./hooks";

const PublicRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.accessToken);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
