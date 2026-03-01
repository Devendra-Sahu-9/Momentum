import { Navigate } from "react-router-dom";
import { useAppSelector } from "./hooks";

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const token = useAppSelector((state) => state.auth.accessToken);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
