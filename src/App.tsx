import { Routes, Route } from "react-router-dom";
import { LandingLayout, AuthLayout } from "./layouts";
import { Landing, Login, Signup } from "./pages";
import "./App.css";

function App() {
    return (
        <Routes>
            {/* Landing page route with LandingLayout */}
            <Route path="/" element={<LandingLayout />}>
                <Route index element={<Landing />} />
            </Route>

            {/* Authentication routes with AuthLayout */}
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
            </Route>

            {/* Direct auth routes for convenience */}
            <Route path="/login" element={<AuthLayout />}>
                <Route index element={<Login />} />
            </Route>

            <Route path="/signup" element={<AuthLayout />}>
                <Route index element={<Signup />} />
            </Route>

            {/* Catch-all route - redirect to home */}
            <Route path="*" element={<Landing />} />
        </Routes>
    );
}

export default App;
