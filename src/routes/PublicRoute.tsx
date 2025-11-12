import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "./config";

export const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.DASHBOARD} replace />
  );
};
