# Healthcare SAAS Routes Implementation

## Overview

This document describes all the routes implemented for the Healthcare Portal Management System.

## Route Structure

All dashboard routes are nested under `/dashboard` using the `DashboardLayout` component, which provides:
- Persistent sidebar navigation
- Dynamic breadcrumb navigation
- User profile menu
- Theme toggle (light/dark mode)

## Implemented Routes

### Main Dashboard
- **Path**: `/dashboard`
- **Component**: `Overview`
- **Description**: Main dashboard landing page with key metrics and quick actions
- **Access Level**: All authenticated users

### Facilities Management
- **Path**: `/dashboard/facilities`
- **Component**: `Facilities`
- **Description**: Manage healthcare facilities and locations
- **Features**:
  - View all facilities
  - Add new facilities
  - Edit facility details
  - Track facility statistics (staff count, patient count)
  - Facility status management

### Doctors Management
- **Path**: `/dashboard/doctors`
- **Component**: `Doctors`
- **Description**: Manage doctors and medical practitioners
- **Features**:
  - View all doctors
  - Add new doctors
  - Track doctor specializations
  - Monitor doctor availability
  - View assigned patients and appointments
  - Doctor profile management

### Nurses Management
- **Path**: `/dashboard/nurses`
- **Component**: `Nurses`
- **Description**: Manage nursing staff
- **Features**:
  - View all nurses
  - Add new nurses
  - Assign nurses to facilities
  - Track shift schedules
  - Monitor patient assignments
  - Department assignment

### Patients Management
- **Path**: `/dashboard/patients`
- **Component**: `Patients`
- **Description**: Manage patient records and information
- **Features**:
  - Patient registration
  - View patient demographics
  - Track medical history
  - Manage patient status (Active, Critical, Inactive)
  - View assigned doctors
  - Track appointments and last visits

### Appointments
- **Path**: `/dashboard/appointments`
- **Component**: `Appointments`
- **Description**: Schedule and manage patient appointments
- **Features**:
  - Create new appointments
  - View upcoming appointments
  - Appointment status tracking (Confirmed, Pending, Urgent, Cancelled)
  - Appointment type categorization (Consultation, Follow-up, Emergency, etc.)
  - Reschedule appointments
  - Calendar view integration (future)

### Prescriptions
- **Path**: `/dashboard/prescriptions`
- **Component**: `Prescriptions`
- **Description**: Manage patient prescriptions and medications
- **Features**:
  - Create new prescriptions
  - Track medication details (dosage, duration, refills)
  - Monitor prescription status (Active, Expiring Soon, Expired)
  - Prescription renewal
  - View prescription history
  - Doctor and patient assignment

### Invoices & Billing
- **Path**: `/dashboard/invoices`
- **Component**: `Invoices`
- **Description**: Manage billing and payment records
- **Features**:
  - Create new invoices
  - Track invoice status (Paid, Pending, Overdue)
  - Monitor revenue statistics
  - Payment method tracking
  - Invoice download/print (future)
  - Payment reminders

### Team Members / Users
- **Path**: `/dashboard/users`
- **Component**: `Users`
- **Description**: Manage administrative and support staff
- **Features**:
  - Invite new users
  - Role-based access control (Admin, Manager, Receptionist, Billing Staff)
  - Facility assignment
  - User status management (Active, Inactive)
  - Track last login activity
  - User permissions management

### Settings
- **Path**: `/dashboard/settings`
- **Component**: `Settings`
- **Description**: System and tenant configuration
- **Features**:
  - Tenant profile settings
  - Notification preferences
  - Integration settings
  - User preferences

## Route Protection

Currently, all dashboard routes are accessible. To add authentication:

```tsx
// Wrap dashboard routes with ProtectedRoute
<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<DashboardLayout />}>
    {/* All nested routes */}
  </Route>
</Route>
```

## Navigation Groups

The sidebar organizes routes into logical groups:

### 1. Overview
- Dashboard
- Facilities

### 2. Staff Management
- Doctors
- Nurses
- Team Members

### 3. Patient Care
- Patients
- Appointments
- Prescriptions

### 4. Billing
- Invoices

### 5. Configuration
- Settings

## Mock Data

All pages currently use mock data for demonstration purposes. Each page includes:
- Statistics cards showing key metrics
- Data tables with sample records
- Action buttons (View, Edit, etc.)
- Status badges and indicators

## Component Structure

Each page follows a consistent structure:

```
PageComponent/
├── Stats Grid (4 metric cards)
├── Action Header (title + primary action button)
└── Data Table
    ├── Table Header
    ├── Table Rows (mock data)
    └── Action Buttons
```

## Icons Used

All icons are from `lucide-react`:

- **Building2**: Facilities
- **Stethoscope**: Doctors
- **HeartPulse**: Nurses, Healthcare branding
- **UserRound**: Patients
- **Calendar**: Appointments
- **Pill**: Prescriptions
- **FileText**: Invoices
- **UsersRound**: Team Members
- **Settings**: Configuration

## Breadcrumb Navigation

All routes automatically generate breadcrumbs:
- `/dashboard` → "Dashboard"
- `/dashboard/facilities` → "Dashboard / Facilities"
- `/dashboard/patients` → "Dashboard / Patients"

## Next Steps

1. **Backend Integration**
   - Replace mock data with API calls
   - Implement data fetching hooks
   - Add loading states

2. **CRUD Operations**
   - Implement create forms
   - Add edit functionality
   - Implement delete with confirmation
   - Add search and filter

3. **Authentication**
   - Add route protection
   - Implement role-based access
   - Add permission checks

4. **Real-time Features**
   - WebSocket notifications
   - Live appointment updates
   - Real-time status changes

5. **Advanced Features**
   - Calendar view for appointments
   - PDF invoice generation
   - Email notifications
   - Data export functionality
   - Advanced analytics dashboard

## File Structure

```
src/pages/dashboard/
├── facilities/
│   ├── Facilities.tsx
│   └── index.ts
├── doctors/
│   ├── Doctors.tsx
│   └── index.ts
├── nurses/
│   ├── Nurses.tsx
│   └── index.ts
├── patients/
│   ├── Patients.tsx
│   └── index.ts
├── appointments/
│   ├── Appointments.tsx
│   └── index.ts
├── prescriptions/
│   ├── Prescriptions.tsx
│   └── index.ts
├── invoices/
│   ├── Invoices.tsx
│   └── index.ts
├── users/
│   ├── Users.tsx
│   └── index.ts
├── Overview.tsx
├── Settings.tsx
└── index.ts
```

## Styling & UI

All pages use:
- **shadcn/ui** components (Card, Table, Button, Badge, etc.)
- **Tailwind CSS** for styling
- **Responsive design** patterns
- **Dark mode** support via theme provider

## Accessibility

All pages include:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly tables
- High contrast badges and status indicators