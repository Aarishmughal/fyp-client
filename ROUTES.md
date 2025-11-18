# Application Routes Documentation

This document provides a comprehensive overview of all routes in the Healthcare Management System.

## Route Structure Overview

The application uses React Router for client-side routing with role-based layouts and access control.

---

## Public Routes

### Landing & Marketing
- `/` - Landing page with product information
- `/present` - Presentation/pitch deck

### Authentication Routes

#### User Authentication
- `/login` - User login page
- `/signup` - User registration page

#### Admin Authentication
- `/admin/login` - Admin login page
- `/admin/signup` - Admin registration page

---

## Admin Dashboard Routes

**Base Path:** `/admin/dashboard`  
**Layout:** `AdminDashboardLayout`  
**Access:** System Administrators

### Available Routes
- `/admin/dashboard` - Admin overview and analytics
- `/admin/dashboard/analytics` - Detailed analytics and reports
- `/admin/dashboard/tenants` - Tenant management
- `/admin/dashboard/users` - System-wide user management
- `/admin/dashboard/subscriptions` - Subscription management (Coming Soon)
- `/admin/dashboard/facilities` - All facilities overview (Coming Soon)
- `/admin/dashboard/doctors` - All doctors in system (Coming Soon)
- `/admin/dashboard/nurses` - All nurses in system (Coming Soon)
- `/admin/dashboard/patients` - All patients in system (Coming Soon)
- `/admin/dashboard/appointments` - All appointments (Coming Soon)
- `/admin/dashboard/prescriptions` - All prescriptions (Coming Soon)
- `/admin/dashboard/invoices` - All invoices (Coming Soon)
- `/admin/dashboard/settings` - Admin settings
- `/admin/dashboard/notifications` - Notifications (Coming Soon)
- `/admin/dashboard/api-config` - API configuration (Coming Soon)
- `/admin/dashboard/security` - Security settings (Coming Soon)

---

## General Healthcare Dashboard Routes

**Base Path:** `/dashboard`  
**Layout:** `DashboardLayout`  
**Access:** Healthcare facility administrators/managers

### Available Routes
- `/dashboard` - Main overview
- `/dashboard/facilities` - Facility management
- `/dashboard/doctors` - Doctor management
- `/dashboard/nurses` - Nurse management
- `/dashboard/patients` - Patient management
- `/dashboard/appointments` - Appointment scheduling
- `/dashboard/prescriptions` - Prescription management
- `/dashboard/invoices` - Invoice and billing
- `/dashboard/users` - User management
- `/dashboard/settings` - Settings and configuration

---

## Role-Based Routes (Temporary - Development)

### Doctor Routes

**Base Path:** `/doctor`  
**Layout:** `DoctorLayout`  
**Access:** Medical Doctors and Physicians  
**User Profile:** Dr. Sarah Smith (Cardiologist)

#### Navigation Structure

**Overview**
- `/doctor/dashboard` ✅ - Doctor dashboard with appointments and statistics

**Patient Care**
- `/doctor/appointments` 🔲 - My appointment schedule
- `/doctor/patients` 🔲 - My patients list
- `/doctor/queue` 🔲 - Patient queue management

**Medical**
- `/doctor/prescriptions` 🔲 - Prescription management
- `/doctor/lab-results` 🔲 - Lab results review
- `/doctor/medical-records` 🔲 - Patient medical records

**Communication**
- `/doctor/messages` 🔲 - Secure messaging

**Configuration**
- `/doctor/settings` 🔲 - Doctor account settings

---

### Nurse Routes

**Base Path:** `/nurse`  
**Layout:** `NurseLayout`  
**Access:** Registered Nurses and Nursing Staff  
**User Profile:** Nurse Johnson (RN - Day Shift)

#### Navigation Structure

**Overview**
- `/nurse/dashboard` ✅ - Nurse dashboard with patient vitals and tasks

**Patient Care**
- `/nurse/patients` 🔲 - Assigned patients
- `/nurse/vitals` 🔲 - Vitals monitoring dashboard
- `/nurse/medications` 🔲 - Medication administration schedule

**Tasks & Schedule**
- `/nurse/tasks` 🔲 - Task checklist
- `/nurse/alerts` 🔲 - Patient alerts and notifications
- `/nurse/schedule` 🔲 - Shift schedule

**Records**
- `/nurse/notes` 🔲 - Patient care notes
- `/nurse/handover` 🔲 - Shift handover documentation

**Configuration**
- `/nurse/settings` 🔲 - Nurse account settings

---

### Patient Routes

**Base Path:** `/patient`  
**Layout:** `PatientLayout`  
**Access:** Patients and Healthcare Recipients  
**User Profile:** John Anderson (Patient ID: P-2024-156)

#### Navigation Structure

**Overview**
- `/patient/dashboard` ✅ - Patient health dashboard

**Health Management**
- `/patient/appointments` 🔲 - My appointments
- `/patient/prescriptions` 🔲 - Active prescriptions
- `/patient/lab-results` 🔲 - Lab test results
- `/patient/records` 🔲 - Complete health records

**Communication**
- `/patient/messages` 🔲 - Messages with healthcare providers

**Billing**
- `/patient/billing` 🔲 - Billing and payment history

**Configuration**
- `/patient/settings` 🔲 - Patient account settings

---

### Team Member Routes

**Base Path:** `/team`  
**Layout:** `TeamLayout`  
**Access:** Administrative and Support Staff  
**User Profile:** Alex Johnson (Healthcare Administrator)

#### Navigation Structure

**Overview**
- `/team/dashboard` ✅ - Team member work dashboard

**Work Management**
- `/team/tasks` 🔲 - My assigned tasks
- `/team/meetings` 🔲 - Meeting schedule
- `/team/schedule` 🔲 - Work schedule

**Team**
- `/team/members` 🔲 - Team directory
- `/team/approvals` 🔲 - Approval workflow

**Reports**
- `/team/reports` 🔲 - Generate and view reports

**Communication**
- `/team/messages` 🔲 - Team messaging

**Configuration**
- `/team/settings` 🔲 - Account settings

---

## Route Status Legend

- ✅ **Implemented** - Route is fully functional with complete UI
- 🔲 **Placeholder** - Route exists but shows "Coming Soon" message
- ❌ **Not Implemented** - Route not yet created

---

## Route Protection Strategy

### Current Implementation
All routes are currently accessible for development purposes.

### Planned Implementation

#### Authentication Flow
```
User Login → Token Verification → Role Identification → Route Access
```

#### Protected Route Wrapper
```typescript
<ProtectedRoute requiredRole="doctor">
  <Route path="/doctor/*" element={<DoctorLayout />}>
    {/* Doctor routes */}
  </Route>
</ProtectedRoute>
```

#### Role-Based Access Control (RBAC)
- **Admin** - Full system access
- **Doctor** - Medical records, prescriptions, appointments
- **Nurse** - Patient care, vitals, medications
- **Patient** - Personal health records only
- **Team Member** - Administrative functions, reports

---

## Navigation Patterns

### Breadcrumb Navigation
All layouts implement automatic breadcrumb generation:
```
Dashboard > Patients > Patient Details > Edit
```

### Sidebar Navigation
- Collapsible sidebar (icon mode)
- Active route highlighting
- Grouped menu items
- Tooltips on hover
- Keyboard navigation support

---

## Route Naming Conventions

### Best Practices
1. **Kebab-case** for URLs: `/lab-results`, `/medical-records`
2. **Plural nouns** for collections: `/patients`, `/appointments`
3. **Descriptive paths**: `/patient/lab-results` vs `/patient/labs`
4. **Consistent structure**: `/{role}/{resource}`

### Examples
✅ Good:
- `/doctor/my-patients`
- `/nurse/medication-schedule`
- `/patient/health-records`

❌ Avoid:
- `/doctor/pts`
- `/nurse/meds`
- `/patient/records123`

---

## Deep Linking

All routes support deep linking for direct access:

```
Direct Dashboard Access:
- https://app.example.com/doctor/dashboard
- https://app.example.com/nurse/dashboard
- https://app.example.com/patient/dashboard

Specific Feature Access:
- https://app.example.com/doctor/patients/12345
- https://app.example.com/nurse/vitals/room-302
- https://app.example.com/patient/appointments/upcoming
```

---

## Error Handling

### 404 - Not Found
Catch-all route redirects to home: `<Route path="*" element={<Navigate to="/" replace />} />`

### 403 - Forbidden
Planned: Redirect to appropriate dashboard when accessing unauthorized routes

### 401 - Unauthorized
Planned: Redirect to login when authentication expires

---

## Route Testing

### Manual Testing Checklist
- [ ] All navigation links work correctly
- [ ] Breadcrumbs update on navigation
- [ ] Active states highlight correctly
- [ ] Browser back/forward buttons work
- [ ] Deep links load correctly
- [ ] Mobile navigation responsive

### Automated Testing
```typescript
// Example route test
describe('Doctor Routes', () => {
  it('should render doctor dashboard', () => {
    render(<App />, { route: '/doctor/dashboard' });
    expect(screen.getByText('Doctor Dashboard')).toBeInTheDocument();
  });
});
```

---

## Migration Path

### Phase 1: Development (Current)
- All routes accessible
- Placeholder pages for incomplete features
- Testing and development

### Phase 2: Authentication
- Implement JWT token authentication
- Add protected route wrappers
- Role verification

### Phase 3: Authorization
- Fine-grained permissions
- Feature flags
- Audit logging

### Phase 4: Production
- Full RBAC implementation
- Route monitoring
- Performance optimization

---

## Quick Reference

### Access Routes by Role

**I am a Doctor:**
Visit: `/doctor/dashboard`

**I am a Nurse:**
Visit: `/nurse/dashboard`

**I am a Patient:**
Visit: `/patient/dashboard`

**I am a Team Member:**
Visit: `/team/dashboard`

**I am an Admin:**
Visit: `/admin/dashboard`

**I am a Facility Manager:**
Visit: `/dashboard`

---

## Related Documentation

- `src/layouts/roles/README.md` - Role-based layouts documentation
- `src/pages/dashboards/README.md` - Dashboard features documentation
- `src/routes/config.ts` - Route configuration constants

---

## Support

For route-related issues:
1. Check this documentation
2. Verify layout is correctly imported
3. Ensure route path matches exactly
4. Check browser console for errors
5. Contact development team

---

**Last Updated:** 2024
**Version:** 1.0.0
**Status:** Development