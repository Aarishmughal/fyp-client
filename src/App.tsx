import { Routes, Route, Navigate } from "react-router-dom";
import { LandingLayout, AuthLayout } from "./layouts";
import { Landing } from "./pages/main";
import { Login, Signup } from "./pages/auth";
import { AdminLogin, AdminSignup } from "./pages/admin";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ADMIN_ROUTES, AUTH_ROUTES, PUBLIC_ROUTES } from "./routes/config";
import "./styles/App.css";
import FaisalMoversPitch from "./pages/main/Presentation";
import DashboardLayout from "./layouts/DashboardLayout";
import {
  Overview,
  Settings as DashboardSettings,
  Facilities,
  Doctors,
  Nurses,
  Patients,
  Appointments,
  Prescriptions,
  Invoices,
  Users,
} from "./pages/dashboard";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/present" element={<FaisalMoversPitch />} />

        {/* Admin Auth Routes */}
        <Route path={ADMIN_ROUTES.LOGIN} element={<AuthLayout />}>
          <Route index element={<AdminLogin />} />
        </Route>

        <Route path={ADMIN_ROUTES.SIGNUP} element={<AuthLayout />}>
          <Route index element={<AdminSignup />} />
        </Route>

        {/* User Auth Routes */}
        <Route path={AUTH_ROUTES.LOGIN} element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path={AUTH_ROUTES.SIGNUP} element={<AuthLayout />}>
          <Route index element={<Signup />} />
        </Route>

        {/* Landing Page */}
        <Route path={PUBLIC_ROUTES.LANDING} element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Route>

      {/* Dashboard Routes - Healthcare SAAS */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="nurses" element={<Nurses />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>

      {/* Protected routes - Admin Dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route
          path={ADMIN_ROUTES.DASHBOARD}
          element={<div>Admin Dashboard - Protected Route</div>}
        />
      </Route>

      {/* Catch-all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
