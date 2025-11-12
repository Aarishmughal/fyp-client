# API Provider Documentation

This directory contains the centralized API configuration and provider for making HTTP requests to the backend.

## 📁 Structure

```
api/
├── config.ts       # Axios instance configuration, interceptors
├── endpoints.ts    # API endpoint paths
├── provider.ts     # API methods organized by feature
├── index.ts        # Main exports
└── README.md       # This file
```

## 🚀 Quick Start

### Basic Import

```typescript
import { apiProvider } from '@/api';
```

### Using API Methods

```typescript
// In a component or service
import { apiProvider } from '@/api';

// User Authentication
const handleLogin = async (email: string, password: string) => {
  try {
    const response = await apiProvider.auth.login({ email, password });
    const { token, user } = response.data.data;
    
    // Store token
    localStorage.setItem('authToken', token);
    
    console.log('Logged in as:', user.name);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

// Admin Authentication
const handleAdminLogin = async (email: string, password: string) => {
  try {
    const response = await apiProvider.adminAuth.login({ email, password });
    const { token, user } = response.data.data;
    
    localStorage.setItem('authToken', token);
    console.log('Admin logged in:', user.name);
  } catch (error) {
    console.error('Admin login failed:', error);
  }
};
```

## 📖 Available Controllers

### 1. **Authentication** (`apiProvider.auth`)

```typescript
// User Login
await apiProvider.auth.login({ email, password });

// User Signup
await apiProvider.auth.signup({ name, email, password });

// Logout
await apiProvider.auth.logout();

// Refresh Token
await apiProvider.auth.refreshToken();

// Verify Email
await apiProvider.auth.verifyEmail(token);

// Forgot Password
await apiProvider.auth.forgotPassword(email);

// Reset Password
await apiProvider.auth.resetPassword(token, newPassword);
```

### 2. **Admin Authentication** (`apiProvider.adminAuth`)

```typescript
// Admin Login
await apiProvider.adminAuth.login({ email, password });

// Admin Signup
await apiProvider.adminAuth.signup({ name, email, password });

// Admin Logout
await apiProvider.adminAuth.logout();

// Refresh Admin Token
await apiProvider.adminAuth.refreshToken();
```

### 3. **Users** (`apiProvider.users`)

```typescript
// Get all users (with pagination)
await apiProvider.users.getAll({ page: 1, limit: 10, search: 'john' });

// Get user by ID
await apiProvider.users.getById('user-id-123');

// Create user
await apiProvider.users.create({ name, email, password, role });

// Update user
await apiProvider.users.update('user-id-123', { name: 'New Name' });

// Delete user
await apiProvider.users.delete('user-id-123');

// Get current user profile
await apiProvider.users.getProfile();

// Update current user profile
await apiProvider.users.updateProfile({ name, phone, address });
```

### 4. **Admin** (`apiProvider.admin`)

```typescript
// Get dashboard data
await apiProvider.admin.getDashboard();

// Get settings
await apiProvider.admin.getSettings();

// Update settings
await apiProvider.admin.updateSettings({ siteName, theme });

// Get analytics
await apiProvider.admin.getAnalytics({ 
  startDate: '2024-01-01', 
  endDate: '2024-12-31' 
});

// Admin user management
await apiProvider.admin.users.getAll({ page: 1, limit: 10, status: 'active' });
await apiProvider.admin.users.getById('user-id-123');
await apiProvider.admin.users.create({ name, email, password });
await apiProvider.admin.users.update('user-id-123', { role: 'admin' });
await apiProvider.admin.users.delete('user-id-123');
await apiProvider.admin.users.suspend('user-id-123', 'Violation of terms');
await apiProvider.admin.users.activate('user-id-123');
```

### 5. **Appointments** (`apiProvider.appointments`)

```typescript
// Get all appointments
await apiProvider.appointments.getAll({ page: 1, limit: 10, status: 'pending' });

// Get appointment by ID
await apiProvider.appointments.getById('appointment-id-123');

// Create appointment
await apiProvider.appointments.create({ 
  patientId, 
  doctorId, 
  date, 
  time 
});

// Update appointment
await apiProvider.appointments.update('appointment-id-123', { status: 'confirmed' });

// Delete appointment
await apiProvider.appointments.delete('appointment-id-123');

// Get upcoming appointments
await apiProvider.appointments.getUpcoming();

// Get appointment history
await apiProvider.appointments.getHistory({ page: 1, limit: 10 });
```

### 6. **Patients** (`apiProvider.patients`)

```typescript
// Get all patients
await apiProvider.patients.getAll({ page: 1, limit: 10, search: 'smith' });

// Get patient by ID
await apiProvider.patients.getById('patient-id-123');

// Create patient
await apiProvider.patients.create({ name, email, phone, dateOfBirth });

// Update patient
await apiProvider.patients.update('patient-id-123', { phone: '123-456-7890' });

// Delete patient
await apiProvider.patients.delete('patient-id-123');

// Get patient medical records
await apiProvider.patients.getMedicalRecords('patient-id-123', { page: 1, limit: 10 });
```

### 7. **Doctors** (`apiProvider.doctors`)

```typescript
// Get all doctors
await apiProvider.doctors.getAll({ 
  page: 1, 
  limit: 10, 
  specialty: 'cardiology',
  search: 'johnson' 
});

// Get doctor by ID
await apiProvider.doctors.getById('doctor-id-123');

// Create doctor
await apiProvider.doctors.create({ name, email, specialty, licenseNumber });

// Update doctor
await apiProvider.doctors.update('doctor-id-123', { specialty: 'neurology' });

// Delete doctor
await apiProvider.doctors.delete('doctor-id-123');

// Get doctor availability
await apiProvider.doctors.getAvailability('doctor-id-123', { date: '2024-03-15' });

// Update doctor availability
await apiProvider.doctors.updateAvailability('doctor-id-123', { 
  slots: ['09:00', '10:00', '11:00'] 
});
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_ENV=development
VITE_API_TIMEOUT=30000
VITE_ENABLE_API_LOGGING=true
```

### Customizing Config

Edit `api/config.ts` to modify:
- Base URL
- Request timeout
- Default headers
- Request/response interceptors
- Error handling

## 🎯 Usage in React Components

### Example: Login Form

```typescript
import { useState } from 'react';
import { apiProvider, LoginCredentials } from '@/api';

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError('');

    try {
      const response = await apiProvider.auth.login(credentials);
      const { token, user } = response.data.data;

      // Store token
      localStorage.setItem('authToken', token);
      
      // Redirect or update state
      console.log('Login successful:', user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  // ... render form
}
```

### Example: Admin Signup

```typescript
import { apiProvider, SignupData } from '@/api';

export function AdminSignupForm() {
  const handleSignup = async (data: SignupData) => {
    try {
      const response = await apiProvider.adminAuth.signup(data);
      const { token, user } = response.data.data;

      localStorage.setItem('authToken', token);
      // Redirect to admin dashboard
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  // ... render form
}
```

### Example: Fetch Data with Pagination

```typescript
import { useState, useEffect } from 'react';
import { apiProvider } from '@/api';

export function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await apiProvider.users.getAll({ 
          page, 
          limit: 10 
        });
        setUsers(response.data.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  // ... render users list
}
```

## 🔒 Authentication

The API client automatically:
- Adds `Authorization: Bearer <token>` header to requests
- Retrieves token from `localStorage.getItem('authToken')`
- Redirects to login on 401 Unauthorized responses
- Clears token on logout

## 🐛 Error Handling

The API client handles common HTTP errors:
- **401 Unauthorized**: Clears token and redirects to login
- **403 Forbidden**: Logs access forbidden error
- **404 Not Found**: Logs resource not found error
- **500 Server Error**: Logs server error
- **Network Errors**: Logs network connectivity issues

## 📝 TypeScript Support

All API methods are fully typed:

```typescript
import type { 
  LoginCredentials, 
  SignupData, 
  AuthResponse, 
  ApiResponse 
} from '@/api';
```

## 🌟 Best Practices

1. **Always handle errors** in try-catch blocks
2. **Use loading states** for better UX
3. **Store sensitive data securely** (tokens in httpOnly cookies preferred)
4. **Don't expose API keys** in client-side code
5. **Use environment variables** for configuration
6. **Implement proper error messages** for users

## 🔄 Adding New Endpoints

1. Add endpoint path to `endpoints.ts`
2. Create controller method in `provider.ts`
3. Add to `apiProvider` object
4. Export from `index.ts`

Example:

```typescript
// 1. endpoints.ts
export const API_ENDPOINTS = {
  PRESCRIPTIONS: {
    GET_ALL: '/prescriptions',
    GET_BY_ID: (id: string) => `/prescriptions/${id}`,
  },
};

// 2. provider.ts
const prescriptionsController = {
  getAll: async () => {
    return apiClient.get(API_ENDPOINTS.PRESCRIPTIONS.GET_ALL);
  },
};

// 3. Add to apiProvider
export const apiProvider = {
  // ... other controllers
  prescriptions: prescriptionsController,
};
```

## 📚 Additional Resources

- [Axios Documentation](https://axios-http.com/)
- [React Query](https://tanstack.com/query/latest) - Recommended for data fetching
- [SWR](https://swr.vercel.app/) - Alternative data fetching library