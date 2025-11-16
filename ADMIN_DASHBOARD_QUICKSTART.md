# Admin Dashboard Quick Start Guide

## 🚀 Quick Setup

### 1. Install Missing Dependency

Before running the admin dashboard, install the required Tabs component:

```bash
npm install @radix-ui/react-tabs
```

### 2. Access the Admin Dashboard

The admin dashboard is accessible at:
```
http://localhost:5173/admin/dashboard
```

**Note**: You must first log in through the admin login page:
```
http://localhost:5173/admin/login
```

## 📋 What's Included

### ✅ Completed Pages

1. **Admin Overview** (`/admin/dashboard`)
   - System-wide metrics (tenants, users, subscriptions, revenue)
   - Resource metrics (facilities, doctors, nurses, patients)
   - Recent system activity feed
   - Today's appointment statistics
   - Top performing tenants

2. **Analytics** (`/admin/dashboard/analytics`)
   - KPI metrics with growth indicators
   - User growth chart (6 months)
   - Tenant growth chart (6 months)
   - Revenue growth chart (6 months)
   - Subscription plan distribution
   - Performance metrics (API calls, sessions, response time, error rate)
   - Additional insights (avg users per tenant, retention, ARPU)

3. **Tenants Management** (`/admin/dashboard/tenants`)
   - Complete tenant list with search
   - Tenant statistics (total, active, trial, revenue)
   - Detailed tenant information table
   - Plan badges (Enterprise/Professional/Basic)
   - Status badges (Active/Trial/Suspended)
   - Action menu per tenant
   - User and facility counts

4. **System Settings** (`/admin/dashboard/settings`)
   - **General**: App name, support email, timezone, maintenance mode, session timeout
   - **Email**: SMTP configuration, email notifications
   - **Security**: 2FA, password policies, login attempts, JWT key
   - **Database**: Connection settings, auto-backup configuration
   - **API**: Rate limiting, CORS, timeout, API documentation

### 🚧 Placeholder Pages (Coming Soon)

These routes are defined but show placeholder content:
- System Users (`/admin/dashboard/users`)
- Subscriptions (`/admin/dashboard/subscriptions`)
- All Facilities (`/admin/dashboard/facilities`)
- All Doctors (`/admin/dashboard/doctors`)
- All Nurses (`/admin/dashboard/nurses`)
- All Patients (`/admin/dashboard/patients`)
- All Appointments (`/admin/dashboard/appointments`)
- All Prescriptions (`/admin/dashboard/prescriptions`)
- All Invoices (`/admin/dashboard/invoices`)
- Notifications (`/admin/dashboard/notifications`)
- API Configuration (`/admin/dashboard/api-config`)
- Security (`/admin/dashboard/security`)

## 🎨 Design Features

### Admin Dashboard Characteristics
- **Color Scheme**: Red/destructive accents for admin branding
- **Icon**: Shield icon in sidebar header
- **Layout**: Collapsible sidebar with grouped navigation
- **Breadcrumbs**: Auto-generated based on route
- **Theme Toggle**: Light/dark mode support

### User Dashboard vs Admin Dashboard

| Feature | User Dashboard | Admin Dashboard |
|---------|----------------|-----------------|
| Scope | Single tenant | All tenants |
| Color | Primary (blue/green) | Destructive (red) |
| Icon | HeartPulse | Shield |
| Metrics | Tenant-specific | System-wide |
| Purpose | Operations | Administration |

## 📊 Updated User Dashboard

The user dashboard (`/dashboard`) has been updated to show **tenant-specific** information:

### New Features:
- Tenant name and plan display in header
- Doctors, Nurses, Patients counts (for the tenant only)
- Today's appointments (tenant-specific)
- Facility and team member counts
- Recent activity feed (tenant operations)
- Department performance metrics
- Appointment status breakdown (completed/pending/cancelled)

### Removed:
- Generic "Total Revenue" and "Active Projects" metrics
- Generic "Tasks Completed" progress bars
- Non-healthcare related statistics

## 🔌 API Integration

### Current Status
All pages use **mock data** for demonstration purposes.

### To Connect to Backend:

1. **Update API calls in components**:
   ```typescript
   // Replace mock data with:
   import { apiClient } from '@/api';
   import { API_ENDPOINTS } from '@/api/endpoints';
   
   const fetchMetrics = async () => {
     const response = await apiClient.get(API_ENDPOINTS.ADMIN.METRICS);
     return response.data;
   };
   ```

2. **API Endpoints are already defined** in `src/api/endpoints.ts`:
   - `/admin/metrics` - System metrics
   - `/admin/analytics` - Analytics data
   - `/admin/tenants` - Tenant management
   - `/admin/users` - System users
   - `/admin/subscriptions` - Subscriptions
   - And many more...

## 🔐 Authentication Flow

### Admin Login
1. Navigate to `/admin/login`
2. Enter admin credentials
3. Upon success, redirected to `/admin/dashboard`
4. Token stored in localStorage

### User Login
1. Navigate to `/login`
2. Enter tenant user credentials
3. Upon success, redirected to `/dashboard`
4. Token stored in localStorage

### Logout
- Click on admin avatar in sidebar
- Select "Log out" from dropdown
- Redirected to `/admin/login`

## 🧭 Navigation Structure

```
Admin Dashboard
├── Overview
│   ├── Dashboard (main overview)
│   └── Analytics
├── System Management
│   ├── Tenants
│   ├── System Users
│   └── Subscriptions
├── Resource Management
│   ├── All Facilities
│   ├── All Doctors
│   ├── All Nurses
│   └── All Patients
├── Data Management
│   ├── Appointments
│   ├── Prescriptions
│   └── Invoices
└── Configuration
    ├── System Settings
    ├── Notifications
    ├── API Configuration
    └── Security
```

## 🛠️ Customization Guide

### Change Color Scheme
In `AdminDashboardLayout.tsx`:
```typescript
// Change from destructive to another variant
<div className="... bg-destructive text-destructive-foreground">
  <Shield className="size-4" />
</div>
```

### Add New Admin Page
1. Create component in `src/pages/admin/dashboard/`
2. Export from `src/pages/admin/dashboard/index.ts`
3. Add to `src/pages/admin/index.ts`
4. Add route in `src/App.tsx`
5. Add navigation item in `AdminDashboardLayout.tsx`

### Modify Metrics
Edit the mock data in each component:
```typescript
const systemMetrics = {
  totalTenants: 45,
  tenantGrowth: 12.5,
  // ... add or modify metrics
};
```

## 📱 Responsive Design

All admin pages are fully responsive:
- **Desktop**: Full sidebar, multi-column layouts
- **Tablet**: Collapsible sidebar, 2-column layouts
- **Mobile**: Icon-only sidebar, single-column layouts

## 🎯 Next Steps

### Immediate (Required for functionality):
1. ✅ Install @radix-ui/react-tabs
2. Test admin login flow
3. Connect to backend API
4. Add loading states
5. Implement error handling

### Short-term (Enhance features):
1. Complete placeholder pages
2. Add pagination for tables
3. Implement search and filtering
4. Add data export (CSV/PDF)
5. Create charts with Recharts

### Long-term (Advanced features):
1. Real-time updates (WebSockets)
2. Role-based access control (RBAC)
3. Audit logging
4. Advanced analytics dashboards
5. Automated reports

## ❗ Important Notes

1. **Mock Data**: All data is currently hardcoded. Replace with API calls for production.

2. **Protected Routes**: Admin routes use `ProtectedRoute` but don't verify admin role yet. Add role check:
   ```typescript
   const { isAuthenticated, user } = useAuth();
   if (!isAuthenticated || user.role !== 'admin') {
     return <Navigate to="/admin/login" />;
   }
   ```

3. **Maintenance Mode**: The maintenance mode toggle in settings needs backend implementation to actually block tenant access.

4. **Security**: All sensitive settings (SMTP password, JWT secret) should be handled securely on the backend.

5. **Rate Limiting**: API rate limits configured in settings need backend enforcement.

## 🐛 Troubleshooting

### Issue: Tabs not working
**Solution**: Install the missing dependency:
```bash
npm install @radix-ui/react-tabs
```

### Issue: Can't access admin dashboard
**Solution**: 
1. Check if you're logged in as admin
2. Verify token in localStorage
3. Check ProtectedRoute logic

### Issue: Mock data not updating
**Solution**: Mock data is static. To see real updates, connect to backend API.

### Issue: Sidebar not collapsing
**Solution**: Check if lucide-react icons are properly installed.

## 📚 Related Documentation

- [Full Admin Dashboard Documentation](./ADMIN_DASHBOARD_README.md)
- [API Setup Guide](./API_SETUP.md)
- [Dashboard Changes](./DASHBOARD_CHANGES.md)
- [General Dashboard Guide](./DASHBOARD_README.md)

## 🤝 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all dependencies are installed
3. Review the full documentation
4. Check backend API status
5. Ensure authentication tokens are valid

---

**Ready to go!** Just run `npm install @radix-ui/react-tabs` and start the dev server! 🎉