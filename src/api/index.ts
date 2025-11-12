// Main API export file
// Import and re-export all API-related modules

export { apiClient, API_CONFIG } from "./config";
export { API_ENDPOINTS } from "./endpoints";
export {
  apiProvider,
  authController,
  adminAuthController,
  userController,
  adminController,
  appointmentsController,
  patientsController,
  doctorsController,
} from "./provider";

// Export types
export type {
  LoginCredentials,
  SignupData,
  AuthResponse,
  ApiResponse,
} from "./provider";

// Default export - apiProvider for convenience
export { apiProvider as default } from "./provider";
