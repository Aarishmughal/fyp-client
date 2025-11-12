import { Routes, Route } from "react-router-dom";
import { LandingLayout, AuthLayout } from "./layouts";
import { Landing } from "./pages/main";
import { Login, Signup } from "./pages/auth";
import { AdminLogin, AdminSignup } from "./pages/admin";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ROUTES } from "./routes/config";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/admin">
          <Route path="login" element={<AdminLogin />} />
          <Route path="signup" element={<AdminSignup />} />
        </Route>

        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/signup" element={<AuthLayout />}>
          <Route index element={<Signup />} />
        </Route>

        {/* Catch-all route - redirect to home */}
        <Route path={ROUTES.LANDING} element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="*" element={<Landing />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.DASHBOARD} element={"This is a Protected Route"} />
      </Route>
    </Routes>
  );
}

export default App;
