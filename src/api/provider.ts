import { apiClient } from "./config";
import { API_ENDPOINTS } from "./endpoints";
import { type AxiosResponse } from "axios";

// Type definitions for API requests and responses
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role?: string;
  };
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
}

// Generic data type for flexible payloads
export type PayloadData = Record<string, unknown>;

// Pagination parameters
export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

// User data type
export interface UserData extends PayloadData {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
}

// Authentication Controller
const authController = {
  // User Authentication
  login: async (
    credentials: LoginCredentials,
  ): Promise<AxiosResponse<ApiResponse<AuthResponse>>> => {
    return apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
  },

  signup: async (
    data: SignupData,
  ): Promise<AxiosResponse<ApiResponse<AuthResponse>>> => {
    return apiClient.post(API_ENDPOINTS.AUTH.SIGNUP, data);
  },

  logout: async (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  refreshToken: async (): Promise<
    AxiosResponse<ApiResponse<{ token: string }>>
  > => {
    return apiClient.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
  },

  verifyEmail: async (token: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { token });
  },

  forgotPassword: async (
    email: string,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  },

  resetPassword: async (
    token: string,
    newPassword: string,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
      token,
      newPassword,
    });
  },
};

// Admin Authentication Controller
const adminAuthController = {
  login: async (
    credentials: LoginCredentials,
  ): Promise<AxiosResponse<ApiResponse<AuthResponse>>> => {
    return apiClient.post(API_ENDPOINTS.ADMIN_AUTH.LOGIN, credentials);
  },

  signup: async (
    data: SignupData,
  ): Promise<AxiosResponse<ApiResponse<AuthResponse>>> => {
    return apiClient.post(API_ENDPOINTS.ADMIN_AUTH.SIGNUP, data);
  },

  logout: async (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.ADMIN_AUTH.LOGOUT);
  },

  refreshToken: async (): Promise<
    AxiosResponse<ApiResponse<{ token: string }>>
  > => {
    return apiClient.post(API_ENDPOINTS.ADMIN_AUTH.REFRESH_TOKEN);
  },
};

// User Controller
const userController = {
  getAll: async (
    params?: PaginationParams,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.USERS.GET_ALL, { params });
  },

  getById: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.USERS.GET_BY_ID(id));
  },

  create: async (data: UserData): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.USERS.CREATE, data);
  },

  update: async (
    id: string,
    data: Partial<UserData>,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.put(API_ENDPOINTS.USERS.UPDATE(id), data);
  },

  delete: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.delete(API_ENDPOINTS.USERS.DELETE(id));
  },

  getProfile: async (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.USERS.GET_PROFILE);
  },

  updateProfile: async (
    data: Partial<UserData>,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.put(API_ENDPOINTS.USERS.UPDATE_PROFILE, data);
  },
};

// Admin Controller
const adminController = {
  getDashboard: async (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.ADMIN.DASHBOARD);
  },

  getSettings: async (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.ADMIN.SETTINGS);
  },

  updateSettings: async (
    data: PayloadData,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.put(API_ENDPOINTS.ADMIN.SETTINGS, data);
  },

  getAnalytics: async (params?: {
    startDate?: string;
    endDate?: string;
  }): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.ADMIN.ANALYTICS, { params });
  },

  users: {
    getAll: async (
      params?: PaginationParams & { status?: string },
    ): Promise<AxiosResponse<ApiResponse>> => {
      return apiClient.get(API_ENDPOINTS.ADMIN.USERS.GET_ALL, { params });
    },

    getById: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
      return apiClient.get(API_ENDPOINTS.ADMIN.USERS.GET_BY_ID(id));
    },

    create: async (data: UserData): Promise<AxiosResponse<ApiResponse>> => {
      return apiClient.post(API_ENDPOINTS.ADMIN.USERS.CREATE, data);
    },

    update: async (
      id: string,
      data: Partial<UserData>,
    ): Promise<AxiosResponse<ApiResponse>> => {
      return apiClient.put(API_ENDPOINTS.ADMIN.USERS.UPDATE(id), data);
    },

    delete: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
      return apiClient.delete(API_ENDPOINTS.ADMIN.USERS.DELETE(id));
    },

    suspend: async (
      id: string,
      reason?: string,
    ): Promise<AxiosResponse<ApiResponse>> => {
      return apiClient.post(API_ENDPOINTS.ADMIN.USERS.SUSPEND(id), { reason });
    },

    activate: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
      return apiClient.post(API_ENDPOINTS.ADMIN.USERS.ACTIVATE(id));
    },
  },
};

// Appointments Controller
const appointmentsController = {
  getAll: async (
    params?: PaginationParams & { status?: string },
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.APPOINTMENTS.GET_ALL, { params });
  },

  getById: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.APPOINTMENTS.GET_BY_ID(id));
  },

  create: async (data: PayloadData): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.APPOINTMENTS.CREATE, data);
  },

  update: async (
    id: string,
    data: PayloadData,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.put(API_ENDPOINTS.APPOINTMENTS.UPDATE(id), data);
  },

  delete: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.delete(API_ENDPOINTS.APPOINTMENTS.DELETE(id));
  },

  getUpcoming: async (): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.APPOINTMENTS.UPCOMING);
  },

  getHistory: async (
    params?: PaginationParams,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.APPOINTMENTS.HISTORY, { params });
  },
};

// Patients Controller
const patientsController = {
  getAll: async (
    params?: PaginationParams,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.PATIENTS.GET_ALL, { params });
  },

  getById: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.PATIENTS.GET_BY_ID(id));
  },

  create: async (data: PayloadData): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.PATIENTS.CREATE, data);
  },

  update: async (
    id: string,
    data: PayloadData,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.put(API_ENDPOINTS.PATIENTS.UPDATE(id), data);
  },

  delete: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.delete(API_ENDPOINTS.PATIENTS.DELETE(id));
  },

  getMedicalRecords: async (
    id: string,
    params?: PaginationParams,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.PATIENTS.MEDICAL_RECORDS(id), {
      params,
    });
  },
};

// Doctors Controller
const doctorsController = {
  getAll: async (
    params?: PaginationParams & { specialty?: string },
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.DOCTORS.GET_ALL, { params });
  },

  getById: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.DOCTORS.GET_BY_ID(id));
  },

  create: async (data: PayloadData): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.post(API_ENDPOINTS.DOCTORS.CREATE, data);
  },

  update: async (
    id: string,
    data: PayloadData,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.put(API_ENDPOINTS.DOCTORS.UPDATE(id), data);
  },

  delete: async (id: string): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.delete(API_ENDPOINTS.DOCTORS.DELETE(id));
  },

  getAvailability: async (
    id: string,
    params?: { date?: string },
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.get(API_ENDPOINTS.DOCTORS.AVAILABILITY(id), { params });
  },

  updateAvailability: async (
    id: string,
    data: PayloadData,
  ): Promise<AxiosResponse<ApiResponse>> => {
    return apiClient.put(API_ENDPOINTS.DOCTORS.AVAILABILITY(id), data);
  },
};

// API Provider - Central entity that provides access to all controllers
export const apiProvider = {
  auth: authController,
  adminAuth: adminAuthController,
  users: userController,
  admin: adminController,
  appointments: appointmentsController,
  patients: patientsController,
  doctors: doctorsController,
};

// Export individual controllers if needed
export {
  authController,
  adminAuthController,
  userController,
  adminController,
  appointmentsController,
  patientsController,
  doctorsController,
};
