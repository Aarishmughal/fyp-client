import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { USER_ROUTES } from "./config";

export const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={USER_ROUTES.DASHBOARD} replace />
  );
};
