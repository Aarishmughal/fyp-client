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
  DoctorLayout,
  NurseLayout,
  PatientLayout,
  TeamLayout,
} from "./layouts/roles";
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
import {
  DoctorDashboard,
  NurseDashboard,
  PatientDashboard,
  TeamDashboard,
} from "./pages/dashboards";

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

      {/* Role-Based Dashboard Routes - Temporary */}
      {/* Doctor Routes */}
      <Route path="/doctor" element={<DoctorLayout />}>
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route
          path="appointments"
          element={<div className="p-4">My Appointments - Coming Soon</div>}
        />
        <Route
          path="patients"
          element={<div className="p-4">My Patients - Coming Soon</div>}
        />
        <Route
          path="queue"
          element={<div className="p-4">Patient Queue - Coming Soon</div>}
        />
        <Route
          path="prescriptions"
          element={<div className="p-4">Prescriptions - Coming Soon</div>}
        />
        <Route
          path="lab-results"
          element={<div className="p-4">Lab Results - Coming Soon</div>}
        />
        <Route
          path="medical-records"
          element={<div className="p-4">Medical Records - Coming Soon</div>}
        />
        <Route
          path="messages"
          element={<div className="p-4">Messages - Coming Soon</div>}
        />
        <Route
          path="settings"
          element={<div className="p-4">Settings - Coming Soon</div>}
        />
      </Route>

      {/* Nurse Routes */}
      <Route path="/nurse" element={<NurseLayout />}>
        <Route path="dashboard" element={<NurseDashboard />} />
        <Route
          path="patients"
          element={<div className="p-4">My Patients - Coming Soon</div>}
        />
        <Route
          path="vitals"
          element={<div className="p-4">Vitals Monitoring - Coming Soon</div>}
        />
        <Route
          path="medications"
          element={<div className="p-4">Medication Schedule - Coming Soon</div>}
        />
        <Route
          path="tasks"
          element={<div className="p-4">Tasks & Checklist - Coming Soon</div>}
        />
        <Route
          path="alerts"
          element={<div className="p-4">Alerts - Coming Soon</div>}
        />
        <Route
          path="schedule"
          element={<div className="p-4">Shift Schedule - Coming Soon</div>}
        />
        <Route
          path="notes"
          element={<div className="p-4">Patient Notes - Coming Soon</div>}
        />
        <Route
          path="handover"
          element={<div className="p-4">Shift Handover - Coming Soon</div>}
        />
        <Route
          path="settings"
          element={<div className="p-4">Settings - Coming Soon</div>}
        />
      </Route>

      {/* Patient Routes */}
      <Route path="/patient" element={<PatientLayout />}>
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route
          path="appointments"
          element={<div className="p-4">My Appointments - Coming Soon</div>}
        />
        <Route
          path="prescriptions"
          element={<div className="p-4">My Prescriptions - Coming Soon</div>}
        />
        <Route
          path="lab-results"
          element={<div className="p-4">Lab Results - Coming Soon</div>}
        />
        <Route
          path="records"
          element={<div className="p-4">Health Records - Coming Soon</div>}
        />
        <Route
          path="messages"
          element={<div className="p-4">Messages - Coming Soon</div>}
        />
        <Route
          path="billing"
          element={<div className="p-4">Billing & Payments - Coming Soon</div>}
        />
        <Route
          path="settings"
          element={<div className="p-4">Settings - Coming Soon</div>}
        />
      </Route>

      {/* Team Member Routes */}
      <Route path="/team" element={<TeamLayout />}>
        <Route path="dashboard" element={<TeamDashboard />} />
        <Route
          path="tasks"
          element={<div className="p-4">My Tasks - Coming Soon</div>}
        />
        <Route
          path="meetings"
          element={<div className="p-4">Meetings - Coming Soon</div>}
        />
        <Route
          path="schedule"
          element={<div className="p-4">Schedule - Coming Soon</div>}
        />
        <Route
          path="members"
          element={<div className="p-4">Team Members - Coming Soon</div>}
        />
        <Route
          path="approvals"
          element={<div className="p-4">Approvals - Coming Soon</div>}
        />
        <Route
          path="reports"
          element={<div className="p-4">Reports - Coming Soon</div>}
        />
        <Route
          path="messages"
          element={<div className="p-4">Messages - Coming Soon</div>}
        />
        <Route
          path="settings"
          element={<div className="p-4">Settings - Coming Soon</div>}
        />
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
