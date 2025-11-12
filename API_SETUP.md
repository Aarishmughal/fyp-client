# API Configuration Setup - Complete Guide

## 📋 Overview

Your API configuration is now set up with a clean, scalable architecture. This document provides a quick reference for using the `apiProvider` entity to make API calls from your forms and components.

## 🗂️ File Structure

```
src/
├── api/
│   ├── config.ts          # Axios instance, interceptors, base configuration
│   ├── endpoints.ts       # All API endpoint paths
│   ├── provider.ts        # API methods organized by feature (controllers)
│   ├── index.ts           # Main exports
│   └── README.md          # Detailed documentation
├── hooks/
│   ├── useAuth.ts         # Authentication hook example
│   └── index.ts           # Hooks exports
└── routes/
    └── config.ts          # Route paths configuration
```

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env` file in your project root:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### 2. Import and Use

```typescript
import { apiProvider } from '@/api';
```

## 📝 Common Usage Examples

### Example 1: Login Form with apiProvider

```typescript
import { useState } from 'react';
import { apiProvider } from '@/api';

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await apiProvider.auth.login({ email, password });
      const { token, user } = response.data.data;

      // Store token
      localStorage.setItem('authToken', token);
      
      // Success! Redirect or update state
      console.log('Logged in:', user);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### Example 2: Admin Signup with useAuth Hook

```typescript
import { useAuth } from '@/hooks';

function AdminSignupForm() {
  const { adminSignup, loading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      await adminSignup(data);
      // Automatically redirects to admin dashboard on success
    } catch (err) {
      // Error is handled by the hook
      console.error('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input name="name" type="text" required />
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>
    </form>
  );
}
```

### Example 3: Fetching Data (Users List)

```typescript
import { useEffect, useState } from 'react';
import { apiProvider } from '@/api';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiProvider.users.getAll({ page: 1, limit: 10 });
        setUsers(response.data.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Example 4: Create/Update Operations

```typescript
import { apiProvider } from '@/api';

// Create a new patient
async function createPatient(data: any) {
  try {
    const response = await apiProvider.patients.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
    });
    
    console.log('Patient created:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Failed to create patient:', error);
    throw error;
  }
}

// Update an appointment
async function updateAppointment(id: string, status: string) {
  try {
    const response = await apiProvider.appointments.update(id, { status });
    console.log('Appointment updated:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Failed to update appointment:', error);
    throw error;
  }
}
```

## 🎯 Available API Methods

### Authentication
```typescript
apiProvider.auth.login({ email, password })
apiProvider.auth.signup({ name, email, password })
apiProvider.auth.logout()
apiProvider.auth.refreshToken()
apiProvider.auth.verifyEmail(token)
apiProvider.auth.forgotPassword(email)
apiProvider.auth.resetPassword(token, newPassword)
```

### Admin Authentication
```typescript
apiProvider.adminAuth.login({ email, password })
apiProvider.adminAuth.signup({ name, email, password })
apiProvider.adminAuth.logout()
apiProvider.adminAuth.refreshToken()
```

### Users
```typescript
apiProvider.users.getAll({ page, limit, search })
apiProvider.users.getById(id)
apiProvider.users.create(data)
apiProvider.users.update(id, data)
apiProvider.users.delete(id)
apiProvider.users.getProfile()
apiProvider.users.updateProfile(data)
```

### Admin Operations
```typescript
apiProvider.admin.getDashboard()
apiProvider.admin.getSettings()
apiProvider.admin.updateSettings(data)
apiProvider.admin.getAnalytics({ startDate, endDate })

// Admin user management
apiProvider.admin.users.getAll({ page, limit, status })
apiProvider.admin.users.suspend(id, reason)
apiProvider.admin.users.activate(id)
```

### Appointments
```typescript
apiProvider.appointments.getAll({ page, limit, status })
apiProvider.appointments.getById(id)
apiProvider.appointments.create(data)
apiProvider.appointments.update(id, data)
apiProvider.appointments.delete(id)
apiProvider.appointments.getUpcoming()
apiProvider.appointments.getHistory({ page, limit })
```

### Patients
```typescript
apiProvider.patients.getAll({ page, limit, search })
apiProvider.patients.getById(id)
apiProvider.patients.create(data)
apiProvider.patients.update(id, data)
apiProvider.patients.delete(id)
apiProvider.patients.getMedicalRecords(id, { page, limit })
```

### Doctors
```typescript
apiProvider.doctors.getAll({ page, limit, specialty, search })
apiProvider.doctors.getById(id)
apiProvider.doctors.create(data)
apiProvider.doctors.update(id, data)
apiProvider.doctors.delete(id)
apiProvider.doctors.getAvailability(id, { date })
apiProvider.doctors.updateAvailability(id, data)
```

## 🔐 Authentication Flow

1. **Login/Signup**: Token is automatically stored in localStorage
2. **API Calls**: Token is automatically added to all requests via interceptor
3. **401 Response**: User is automatically redirected to login page
4. **Logout**: Token is cleared from localStorage

## ✨ Key Features

### Automatic Token Management
```typescript
// Token is automatically added to all requests
// No need to manually add Authorization header
```

### Error Handling
```typescript
// Common errors are handled automatically:
// - 401: Redirects to login
// - 403: Logs forbidden error
// - 404: Logs not found error
// - 500: Logs server error
```

### Request/Response Logging (Development)
```typescript
// All API calls are logged in development mode
// Helps with debugging
```

### TypeScript Support
```typescript
import type { LoginCredentials, SignupData, AuthResponse } from '@/api';
```

## 📦 Adding New Endpoints

To add a new API endpoint:

1. **Add to `endpoints.ts`:**
```typescript
export const API_ENDPOINTS = {
  // ... existing endpoints
  PRESCRIPTIONS: {
    GET_ALL: '/prescriptions',
    GET_BY_ID: (id: string) => `/prescriptions/${id}`,
  },
};
```

2. **Add to `provider.ts`:**
```typescript
const prescriptionsController = {
  getAll: async (params?: any) => {
    return apiClient.get(API_ENDPOINTS.PRESCRIPTIONS.GET_ALL, { params });
  },
  getById: async (id: string) => {
    return apiClient.get(API_ENDPOINTS.PRESCRIPTIONS.GET_BY_ID(id));
  },
};

// Add to apiProvider
export const apiProvider = {
  // ... existing controllers
  prescriptions: prescriptionsController,
};
```

3. **Use it:**
```typescript
const prescriptions = await apiProvider.prescriptions.getAll();
```

## 🛠️ Configuration

### Change Base URL
Edit `.env`:
```env
VITE_API_BASE_URL=https://api.yourdomain.com
```

### Change Timeout
Edit `api/config.ts`:
```typescript
const API_CONFIG = {
  TIMEOUT: 60000, // 60 seconds
};
```

### Custom Headers
Edit `api/config.ts`:
```typescript
const API_CONFIG = {
  HEADERS: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value',
  },
};
```

## 🎨 Best Practices

1. ✅ Always handle errors with try-catch
2. ✅ Show loading states to users
3. ✅ Use TypeScript types for type safety
4. ✅ Store sensitive data securely
5. ✅ Use the provided `useAuth` hook for authentication
6. ✅ Keep API logic separate from component logic

## 📚 Next Steps

1. Update your forms to use `apiProvider`
2. Test with your backend API
3. Add custom hooks for common operations
4. Implement proper error messages for users
5. Consider using React Query or SWR for advanced data fetching

## 🔗 Related Files

- Route Configuration: `src/routes/config.ts`
- API Documentation: `src/api/README.md`
- Auth Hook: `src/hooks/useAuth.ts`

---

**Questions?** Check the detailed documentation in `src/api/README.md`
