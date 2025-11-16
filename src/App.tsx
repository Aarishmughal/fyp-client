import { Routes, Route, Navigate } from "react-router-dom";
import { LandingLayout, AuthLayout, AdminDashboardLayout } from "./layouts";
import { Landing } from "./pages/main";
import { Login, Signup } from "./pages/auth";
import {
  AdminLogin,
  AdminSignup,
  AdminOverview,
  Tenants,
  Analytics,
  AdminSettings,
} from "./pages/admin";
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
      <Route element={<PublicRoute />}>
        <Route path="/admin/dashboard" element={<AdminDashboardLayout />}>
          <Route index element={<AdminOverview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="users" element={<div>System Users - Coming Soon</div>} />
          <Route
            path="subscriptions"
            element={<div>Subscriptions - Coming Soon</div>}
          />
          <Route
            path="facilities"
            element={<div>All Facilities - Coming Soon</div>}
          />
          <Route
            path="doctors"
            element={<div>All Doctors - Coming Soon</div>}
          />
          <Route path="nurses" element={<div>All Nurses - Coming Soon</div>} />
          <Route
            path="patients"
            element={<div>All Patients - Coming Soon</div>}
          />
          <Route
            path="appointments"
            element={<div>All Appointments - Coming Soon</div>}
          />
          <Route
            path="prescriptions"
            element={<div>All Prescriptions - Coming Soon</div>}
          />
          <Route
            path="invoices"
            element={<div>All Invoices - Coming Soon</div>}
          />
          <Route path="settings" element={<AdminSettings />} />
          <Route
            path="notifications"
            element={<div>Notifications - Coming Soon</div>}
          />
          <Route
            path="api-config"
            element={<div>API Configuration - Coming Soon</div>}
          />
          <Route
            path="security"
            element={<div>Security Settings - Coming Soon</div>}
          />
        </Route>
      </Route>

      {/* Catch-all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
