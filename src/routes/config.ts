// Authentication Routes
export const AUTH_ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup",
} as const;

export const USER_ROUTES = {
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
} as const;

// Admin Routes
export const ADMIN_ROUTES = {
  BASE: "/admin",
  LOGIN: "/admin/login",
  SIGNUP: "/admin/signup",
  DASHBOARD: "/admin/dashboard",
  USERS: "/admin/users",
  SETTINGS: "/admin/settings",
} as const;

// Public Routes
export const PUBLIC_ROUTES = {
  LANDING: "/",
} as const;

// Combined Routes - for easy access
export const ROUTES = {
  ...PUBLIC_ROUTES,
  AUTH: AUTH_ROUTES,
  ADMIN: ADMIN_ROUTES,
} as const;
