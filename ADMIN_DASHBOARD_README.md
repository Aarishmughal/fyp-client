# Admin Dashboard Documentation

## Overview

The Admin Dashboard is a comprehensive system management interface that allows administrators to monitor and control the entire healthcare management application. It provides system-wide metrics, tenant management, analytics, and configuration options.

## Features

### 1. **Admin Dashboard Overview**
The main dashboard provides:
- **System Metrics**: Total tenants, users, subscriptions, and revenue
- **Resource Metrics**: Aggregated counts of facilities, doctors, nurses, and patients across all tenants
- **Real-time Activity Feed**: Latest system-wide activities
- **Appointment Metrics**: Today's appointment statistics across all tenants
- **Top Performing Tenants**: Ranked by user count and activity

### 2. **Analytics**
Comprehensive system analytics including:
- **KPI Metrics**:
  - User Growth Rate
  - Tenant Acquisition Rate
  - Revenue Growth
  - System Uptime
- **Visual Charts**:
  - User Growth Trends (Monthly)
  - Tenant Growth Trends (Monthly)
  - Revenue Growth Trends (Monthly)
- **Subscription Plan Distribution**: Breakdown by Enterprise, Professional, and Basic plans
- **Performance Indicators**:
  - Total API Calls
  - Active Sessions
  - Average Response Time
  - Error Rate
- **Additional Insights**:
  - Average Users per Tenant
  - Customer Retention Rate
  - Average Revenue per User

### 3. **Tenant Management**
Complete tenant lifecycle management:
- **Tenant List**: Searchable table with all tenant organizations
- **Tenant Details**:
  - Organization name and contact email
  - Subscription plan (Enterprise/Professional/Basic)
  - Status (Active/Trial/Suspended)
  - User count and facility count
  - Join date and last active timestamp
  - Monthly revenue contribution
- **Actions**:
  - View tenant details
  - Edit tenant information
  - Manage tenant users
  - View tenant-specific analytics
  - Change subscription plan
  - Suspend/Activate tenant
  - Delete tenant

### 4. **System Settings**
Five comprehensive configuration tabs:

#### General Settings
- Application name configuration
- Support email address
- Default timezone
- Maintenance mode toggle
- Session timeout configuration

#### Email Configuration
- SMTP host, port, and encryption settings
- SMTP credentials
- Email notification toggle
- From email address
- Test email functionality

#### Security Settings
- Two-factor authentication enforcement
- Password policy configuration:
  - Minimum password length
  - Password expiry period
- Login attempt limits
- Account lockout settings
- JWT secret key management

#### Database Configuration
- Database type selection (PostgreSQL/MySQL/MongoDB)
- Connection settings (host, port, database name)
- Automatic backup configuration:
  - Backup frequency (Hourly/Daily/Weekly)
  - Retention period
- Manual backup trigger
- Connection testing

#### API Configuration
- API version and base URL
- Rate limiting (requests per minute per tenant)
- Maximum payload size
- Request timeout settings
- CORS configuration
- API documentation toggle
- API key authentication settings

### 5. **Navigation Structure**

The admin sidebar is organized into logical groups:

**Overview**
- Dashboard
- Analytics

**System Management**
- Tenants
- System Users
- Subscriptions

**Resource Management** (Across all tenants)
- All Facilities
- All Doctors
- All Nurses
- All Patients

**Data Management**
- Appointments
- Prescriptions
- Invoices

**Configuration**
- System Settings
- Notifications
- API Configuration
- Security

## Key Differences: Admin Dashboard vs User Dashboard

### Admin Dashboard
- **Scope**: System-wide, multi-tenant view
- **Metrics**: Aggregated across all tenants
- **Purpose**: Platform management and monitoring
- **Users**: System administrators
- **Color Scheme**: Uses destructive/red accents to differentiate from user dashboard
- **Access**: Requires admin authentication

### User Dashboard (Tenant Dashboard)
- **Scope**: Single-tenant view
- **Metrics**: Tenant-specific only
- **Purpose**: Healthcare organization management
- **Users**: Tenant administrators and staff
- **Color Scheme**: Primary blue/green accents
- **Access**: Requires user authentication with tenant association

## User Dashboard Updates

The user dashboard (tenant dashboard) has been updated to show tenant-specific information:

### Overview Metrics
- Total Doctors in the organization
- Total Nurses in the organization
- Total Patients registered
- Today's Appointments count
- Tenant information (name, plan, facilities, users)

### Recent Activity
Shows organization-specific activities:
- New appointments scheduled
- New patients registered
- Staff members added
- Completed appointments

### Department Performance
Displays metrics by department:
- Patient count per department
- Doctor count per department
- Utilization percentage
- Color-coded performance indicators

### Appointment Status
Real-time breakdown of today's appointments:
- Completed (green)
- Pending (yellow)
- Cancelled (red)

## Installation Notes

### Missing Dependencies
The Tabs component requires the following package to be installed:

```bash
npm install @radix-ui/react-tabs
```

### Required UI Components
All necessary UI components are already in place:
- Badge
- Button
- Card
- Input
- Label
- Select
- Switch
- Table
- Separator
- Dropdown Menu
- Avatar
- Sidebar

## API Endpoints

The following admin-specific API endpoints have been defined:

### Metrics & Analytics
- `GET /admin/metrics` - System-wide metrics
- `GET /admin/analytics` - Detailed analytics data

### Tenant Management
- `GET /admin/tenants` - List all tenants
- `GET /admin/tenants/:id` - Get tenant details
- `POST /admin/tenants` - Create new tenant
- `PUT /admin/tenants/:id` - Update tenant
- `DELETE /admin/tenants/:id` - Delete tenant
- `POST /admin/tenants/:id/suspend` - Suspend tenant
- `POST /admin/tenants/:id/activate` - Activate tenant
- `GET /admin/tenants/:id/stats` - Tenant statistics
- `GET /admin/tenants/:id/users` - Tenant users

### System Users
- `GET /admin/users` - List all system users
- `GET /admin/users/:id` - Get user details
- `POST /admin/users` - Create user
- `PUT /admin/users/:id` - Update user
- `DELETE /admin/users/:id` - Delete user
- `POST /admin/users/:id/suspend` - Suspend user
- `POST /admin/users/:id/activate` - Activate user

### Subscriptions
- `GET /admin/subscriptions` - List all subscriptions
- `GET /admin/subscriptions/:id` - Get subscription details
- `PUT /admin/subscriptions/:id` - Update subscription
- `POST /admin/subscriptions/:id/cancel` - Cancel subscription
- `POST /admin/subscriptions/:id/renew` - Renew subscription

### Resources (All Tenants)
- `GET /admin/facilities` - All facilities
- `GET /admin/tenants/:tenantId/facilities` - Tenant facilities
- `GET /admin/doctors` - All doctors
- `GET /admin/tenants/:tenantId/doctors` - Tenant doctors
- `GET /admin/nurses` - All nurses
- `GET /admin/tenants/:tenantId/nurses` - Tenant nurses
- `GET /admin/patients` - All patients
- `GET /admin/tenants/:tenantId/patients` - Tenant patients
- `GET /admin/appointments` - All appointments
- `GET /admin/tenants/:tenantId/appointments` - Tenant appointments

### System Configuration
- `GET /admin/settings` - Get system settings
- `PUT /admin/settings` - Update system settings
- `GET /admin/notifications` - Notification settings
- `GET /admin/api-config` - API configuration
- `GET /admin/security` - Security settings

## Routing

### Admin Routes
```
/admin/login - Admin login page
/admin/signup - Admin signup page
/admin/dashboard - Admin dashboard overview (protected)
/admin/dashboard/analytics - Analytics page (protected)
/admin/dashboard/tenants - Tenant management (protected)
/admin/dashboard/users - System users (protected)
/admin/dashboard/subscriptions - Subscriptions (protected)
/admin/dashboard/facilities - All facilities (protected)
/admin/dashboard/doctors - All doctors (protected)
/admin/dashboard/nurses - All nurses (protected)
/admin/dashboard/patients - All patients (protected)
/admin/dashboard/appointments - All appointments (protected)
/admin/dashboard/prescriptions - All prescriptions (protected)
/admin/dashboard/invoices - All invoices (protected)
/admin/dashboard/settings - System settings (protected)
/admin/dashboard/notifications - Notifications (protected)
/admin/dashboard/api-config - API configuration (protected)
/admin/dashboard/security - Security settings (protected)
```

### User Routes
```
/dashboard - User dashboard overview
/dashboard/facilities - Tenant facilities
/dashboard/doctors - Tenant doctors
/dashboard/nurses - Tenant nurses
/dashboard/patients - Tenant patients
/dashboard/appointments - Tenant appointments
/dashboard/prescriptions - Tenant prescriptions
/dashboard/invoices - Tenant invoices
/dashboard/users - Tenant team members
/dashboard/settings - Tenant settings
```

## Authentication

Admin authentication is separate from user authentication:
- Admins use `/admin/login` endpoint
- Users use `/login` endpoint
- Both use the same `AuthContext` but with different roles
- Protected routes check authentication status
- Admin routes should also check for admin role (to be implemented)

## Next Steps

To complete the admin dashboard:

1. **Install Dependencies**:
   ```bash
   npm install @radix-ui/react-tabs
   ```

2. **Implement Remaining Pages**:
   - System Users management
   - Subscriptions management
   - All Facilities (cross-tenant view)
   - All Doctors (cross-tenant view)
   - All Nurses (cross-tenant view)
   - All Patients (cross-tenant view)
   - All Appointments (cross-tenant view)
   - Notifications page
   - API Configuration page
   - Security page

3. **Connect to Backend**:
   - Replace mock data with actual API calls
   - Implement error handling
   - Add loading states
   - Add pagination for large datasets

4. **Add Role-Based Access Control**:
   - Extend AuthContext to include user roles
   - Create AdminProtectedRoute component
   - Restrict admin routes to admin users only

5. **Enhance Features**:
   - Add charts library (Recharts is already installed)
   - Implement real-time updates using WebSockets
   - Add export functionality (CSV, PDF)
   - Implement advanced filtering and sorting
   - Add bulk operations

## Design Decisions

1. **Separate Layouts**: Admin and user dashboards use different layouts to clearly distinguish administrative functions from tenant operations.

2. **Color Coding**: Admin dashboard uses red/destructive accents while user dashboard uses primary blue/green to visually differentiate the two interfaces.

3. **Mock Data**: All pages currently use mock data to demonstrate functionality. This should be replaced with actual API calls.

4. **Scalability**: The structure is designed to handle multiple tenants and large datasets with pagination and filtering.

5. **Security First**: Settings page includes comprehensive security configurations including 2FA, password policies, and API security.

6. **Modularity**: Each page is a separate component making it easy to maintain and extend functionality.

## Support

For questions or issues related to the admin dashboard, please refer to:
- API documentation: `/admin/api-docs` (when implemented)
- System logs: Available in admin settings
- Backend documentation: See backend repository