import { useState } from "react";
import { apiProvider, type LoginCredentials, type SignupData } from "@/api";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, AUTH_ROUTES } from "@/routes/config";

interface UseAuthReturn {
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => Promise<void>;
  adminLogin: (credentials: LoginCredentials) => Promise<void>;
  adminSignup: (data: SignupData) => Promise<void>;
}

/**
 * Custom hook for handling authentication operations
 * Provides methods for user and admin login/signup/logout
 *
 * @example
 * ```tsx
 * const { login, loading, error } = useAuth();
 *
 * const handleLogin = async () => {
 *   await login({ email: 'user@example.com', password: 'password123' });
 * };
 * ```
 */
export function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  /**
   * User login
   */
  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiProvider.auth.login(credentials);
      const { token, user } = response.data.data;

      // Store authentication token
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate to home or dashboard
      navigate("/dashboard");
    } catch (err: unknown) {
      const errorMessage =
        (err as { response?: { data?: { message?: string } } }).response?.data
          ?.message || "Login failed. Please try again.";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * User signup
   */
  const signup = async (data: SignupData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiProvider.auth.signup(data);
      const { token, user } = response.data.data;

      // Store authentication token
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate to home or dashboard
      navigate("/dashboard");
    } catch (err: unknown) {
      const errorMessage =
        (err as { response?: { data?: { message?: string } } }).response?.data
          ?.message || "Signup failed. Please try again.";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Admin login
   */
  const adminLogin = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiProvider.adminAuth.login(credentials);
      const { token, user } = response.data.data;

      // Store authentication token
      localStorage.setItem("authToken", token);
      localStorage.setItem("adminUser", JSON.stringify(user));

      // Navigate to admin dashboard
      navigate(ADMIN_ROUTES.DASHBOARD);
    } catch (err: unknown) {
      const errorMessage =
        (err as { response?: { data?: { message?: string } } }).response?.data
          ?.message || "Admin login failed. Please try again.";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Admin signup
   */
  const adminSignup = async (data: SignupData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiProvider.adminAuth.signup(data);
      const { token, user } = response.data.data;

      // Store authentication token
      localStorage.setItem("authToken", token);
      localStorage.setItem("adminUser", JSON.stringify(user));

      // Navigate to admin dashboard
      navigate(ADMIN_ROUTES.DASHBOARD);
    } catch (err: unknown) {
      const errorMessage =
        (err as { response?: { data?: { message?: string } } }).response?.data
          ?.message || "Admin signup failed. Please try again.";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout (works for both user and admin)
   */
  const logout = async () => {
    setLoading(true);
    setError(null);

    try {
      // Call logout API
      await apiProvider.auth.logout();

      // Clear stored data
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("adminUser");

      // Navigate to login page
      navigate(AUTH_ROUTES.LOGIN);
    } catch (err: unknown) {
      // Even if API call fails, clear local storage and redirect
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("adminUser");
      navigate(AUTH_ROUTES.LOGIN);

      const errorMessage =
        (err as { response?: { data?: { message?: string } } }).response?.data
          ?.message || "Logout failed.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    login,
    signup,
    logout,
    adminLogin,
    adminSignup,
  };
}
