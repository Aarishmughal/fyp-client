// API Endpoints Configuration
// Centralized location for all API endpoint paths

export const API_ENDPOINTS = {
  // Authentication Endpoints
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
    REFRESH_TOKEN: "/auth/refresh",
    VERIFY_EMAIL: "/auth/verify-email",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },

  // Admin Authentication Endpoints
  ADMIN_AUTH: {
    LOGIN: "/admin/login",
    SIGNUP: "/admin/signup",
    LOGOUT: "/admin/logout",
    REFRESH_TOKEN: "/admin/refresh",
  },

  // User Endpoints
  USERS: {
    GET_ALL: "/users",
    GET_BY_ID: (id: string) => `/users/${id}`,
    CREATE: "/users",
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
    GET_PROFILE: "/users/profile",
    UPDATE_PROFILE: "/users/profile",
  },

  // Admin Endpoints
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    USERS: {
      GET_ALL: "/admin/users",
      GET_BY_ID: (id: string) => `/admin/users/${id}`,
      CREATE: "/admin/users",
      UPDATE: (id: string) => `/admin/users/${id}`,
      DELETE: (id: string) => `/admin/users/${id}`,
      SUSPEND: (id: string) => `/admin/users/${id}/suspend`,
      ACTIVATE: (id: string) => `/admin/users/${id}/activate`,
    },
    SETTINGS: "/admin/settings",
    ANALYTICS: "/admin/analytics",
  },

  // Healthcare Specific Endpoints (examples)
  APPOINTMENTS: {
    GET_ALL: "/appointments",
    GET_BY_ID: (id: string) => `/appointments/${id}`,
    CREATE: "/appointments",
    UPDATE: (id: string) => `/appointments/${id}`,
    DELETE: (id: string) => `/appointments/${id}`,
    UPCOMING: "/appointments/upcoming",
    HISTORY: "/appointments/history",
  },

  PATIENTS: {
    GET_ALL: "/patients",
    GET_BY_ID: (id: string) => `/patients/${id}`,
    CREATE: "/patients",
    UPDATE: (id: string) => `/patients/${id}`,
    DELETE: (id: string) => `/patients/${id}`,
    MEDICAL_RECORDS: (id: string) => `/patients/${id}/records`,
  },

  DOCTORS: {
    GET_ALL: "/doctors",
    GET_BY_ID: (id: string) => `/doctors/${id}`,
    CREATE: "/doctors",
    UPDATE: (id: string) => `/doctors/${id}`,
    DELETE: (id: string) => `/doctors/${id}`,
    AVAILABILITY: (id: string) => `/doctors/${id}/availability`,
  },
} as const;
