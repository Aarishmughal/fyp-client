import { Routes, Route } from "react-router-dom";
import { LandingLayout, AuthLayout } from "./layouts";
import { Landing } from "./pages/main";
import { Login, Signup } from "./pages/auth";
import { AdminLogin, AdminSignup } from "./pages/admin";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ADMIN_ROUTES, AUTH_ROUTES, PUBLIC_ROUTES } from "./routes/config";
import "./styles/App.css";
import FaisalMoversPitch from "./pages/main/Presentation";

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
        <Route path={ADMIN_ROUTES.DASHBOARD} element={<AdminSignup />} />

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

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path={ADMIN_ROUTES.DASHBOARD}
          element={"This is a Protected Route"}
        />
      </Route>

      {/* Catch-all route - redirect to home */}
      <Route path="*" element={"404 Not Found"} />
    </Routes>
  );
}

export default App;
