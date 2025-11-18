# Role-Based Layouts

This directory contains specialized layout components for different user roles in the healthcare management system. Each layout provides role-specific navigation and branding tailored to the user's responsibilities and access level.

## Overview

Instead of a one-size-fits-all dashboard layout, we provide dedicated layouts for each user role:

- **DoctorLayout** - For medical doctors and physicians
- **NurseLayout** - For nursing staff
- **PatientLayout** - For patients
- **TeamLayout** - For administrative and support staff

Each layout includes:
- Custom sidebar navigation with role-appropriate menu items
- Role-specific branding (icon, title, colors)
- User profile information relevant to the role
- Breadcrumb navigation
- Responsive design with collapsible sidebar
- Dark mode support

## Layouts

### DoctorLayout

**File:** `DoctorLayout.tsx`  
**Route:** `/doctor/*`  
**Icon:** Stethoscope  
**Branding:** "Doctor Portal - Medical Dashboard"

**Navigation Structure:**
```
Overview
├── Dashboard

Patient Care
├── My Appointments
├── My Patients
└── Patient Queue

Medical
├── Prescriptions
├── Lab Results
└── Medical Records

Communication
└── Messages

Configuration
└── Settings
```

**User Profile Display:**
- Name: Dr. Sarah Smith
- Specialty: Cardiologist
- Avatar with initials fallback

**Use Cases:**
- View daily appointment schedule
- Access patient medical records
- Prescribe medications
- Review lab results
- Communicate with patients and staff

---

### NurseLayout

**File:** `NurseLayout.tsx`  
**Route:** `/nurse/*`  
**Icon:** HeartPulse  
**Branding:** "Nurse Portal - Care Dashboard"

**Navigation Structure:**
```
Overview
├── Dashboard

Patient Care
├── My Patients
├── Vitals Monitoring
└── Medication Schedule

Tasks & Schedule
├── Tasks & Checklist
├── Alerts
└── Shift Schedule

Records
├── Patient Notes
└── Shift Handover

Configuration
└── Settings
```

**User Profile Display:**
- Name: Nurse Johnson
- Role: RN - Day Shift
- Avatar with initials fallback

**Use Cases:**
- Monitor patient vitals in real-time
- Administer medications on schedule
- Track shift tasks and completion
- Respond to patient alerts
- Document patient care activities

---

### PatientLayout

**File:** `PatientLayout.tsx`  
**Route:** `/patient/*`  
**Icon:** Heart  
**Branding:** "Patient Portal - My Health"

**Navigation Structure:**
```
Overview
├── Dashboard

Health Management
├── My Appointments
├── My Prescriptions
├── Lab Results
└── Health Records

Communication
└── Messages

Billing
└── Billing & Payments

Configuration
└── Settings
```

**User Profile Display:**
- Name: John Anderson
- Patient ID: P-2024-156
- Avatar with initials fallback

**Use Cases:**
- View upcoming appointments
- Access personal health records
- Request prescription refills
- View and download lab results
- Communicate with healthcare providers
- Manage billing and payments

---

### TeamLayout

**File:** `TeamLayout.tsx`  
**Route:** `/team/*`  
**Icon:** UsersRound  
**Branding:** "Team Portal - Work Dashboard"

**Navigation Structure:**
```
Overview
├── Dashboard

Work Management
├── My Tasks
├── Meetings
└── Schedule

Team
├── Team Members
└── Approvals

Reports
└── Reports

Communication
└── Messages

Configuration
└── Settings
```

**User Profile Display:**
- Name: Alex Johnson
- Role: Healthcare Administrator
- Avatar with initials fallback

**Use Cases:**
- Manage administrative tasks
- Schedule and attend meetings
- Coordinate with team members
- Process approvals (leave requests, budget, etc.)
- Generate and review reports
- Track work progress

## Technical Implementation

### Common Features

All layouts share these common features:

1. **Sidebar Navigation**
   - Collapsible to icon-only mode
   - Active state indicators
   - Tooltips on hover (icon mode)
   - Grouped menu items with labels

2. **Header**
   - Sidebar toggle button
   - Breadcrumb navigation
   - Dark/Light mode toggle
   - Responsive design

3. **Footer**
   - User profile dropdown
   - Quick access to profile, settings, logout

4. **Content Area**
   - Scrollable content region
   - Consistent padding and spacing
   - Outlet for nested routes

### Component Structure

```tsx
function RoleLayout() {
  const location = useLocation();
  
  // Menu items definition
  const menuItems = [...];
  
  // Breadcrumb generation
  const breadcrumbs = useMemo(() => {...}, [location.pathname]);
  
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          {/* Logo and branding */}
        </SidebarHeader>
        
        <SidebarContent>
          {/* Navigation groups */}
        </SidebarContent>
        
        <SidebarFooter>
          {/* User profile */}
        </SidebarFooter>
      </Sidebar>
      
      <SidebarInset>
        <header>
          {/* Breadcrumbs and mode toggle */}
        </header>
        <ScrollArea>
          <Outlet /> {/* Child routes render here */}
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
```

### Breadcrumb Logic

Breadcrumbs are automatically generated based on the current route:

```typescript
const breadcrumbs = useMemo(() => {
  const paths = location.pathname.split("/").filter(Boolean);
  const items = [];

  if (paths.length > 2) {
    items.push({
      label: "Dashboard",
      href: "/[role]/dashboard",
      isActive: false,
    });
  }

  for (let i = 2; i < paths.length; i++) {
    const path = `/${paths.slice(0, i + 1).join("/")}`;
    const label = paths[i].charAt(0).toUpperCase() + paths[i].slice(1);
    const isActive = i === paths.length - 1;

    items.push({
      label: label.replace(/-/g, " "),
      href: path,
      isActive,
    });
  }

  return items;
}, [location.pathname]);
```

## Customization Guide

### Adding New Menu Items

To add a new menu item to a layout:

```typescript
const newMenuItem = {
  title: "New Feature",
  icon: IconComponent,
  url: "/role/new-feature",
};

// Add to appropriate group array
const groupItems = [
  // ... existing items
  newMenuItem,
];
```

### Creating a New Role Layout

1. Copy an existing layout file as a template
2. Update the branding (icon, title, subtitle)
3. Define role-specific menu items
4. Update user profile information
5. Adjust breadcrumb base path
6. Export from `index.ts`
7. Add routes in `App.tsx`

### Styling Customization

Layouts use Tailwind CSS and shadcn/ui components. To customize:

```typescript
// Change sidebar background
<Sidebar className="bg-custom-color border-r">

// Modify header styling
<header className="custom-header-classes">

// Adjust content padding
<div className="flex flex-1 flex-col gap-4 p-6">
```

## Integration with Routes

In `App.tsx`:

```typescript
import {
  DoctorLayout,
  NurseLayout,
  PatientLayout,
  TeamLayout,
} from "./layouts/roles";

// Define routes
<Route path="/doctor/dashboard" element={<DoctorLayout />}>
  <Route index element={<DoctorDashboard />} />
</Route>

<Route path="/nurse/dashboard" element={<NurseLayout />}>
  <Route index element={<NurseDashboard />} />
</Route>

<Route path="/patient/dashboard" element={<PatientLayout />}>
  <Route index element={<PatientDashboard />} />
</Route>

<Route path="/team/dashboard" element={<TeamLayout />}>
  <Route index element={<TeamDashboard />} />
</Route>
```

## Future Enhancements

### Planned Features
- [ ] Dynamic menu item badges (notification counts)
- [ ] User preference persistence (sidebar state)
- [ ] Quick action shortcuts
- [ ] Recent pages navigation
- [ ] Keyboard shortcuts
- [ ] Multi-language support
- [ ] Custom themes per role

### Authentication Integration
When implementing authentication:

```typescript
// Example: Protect routes and layouts
<ProtectedRoute requiredRole="doctor">
  <Route path="/doctor/*" element={<DoctorLayout />}>
    {/* ... */}
  </Route>
</ProtectedRoute>
```

### Permission-Based Menu Items
Show/hide menu items based on user permissions:

```typescript
const menuItems = [
  {
    title: "Admin Panel",
    icon: Settings,
    url: "/doctor/admin",
    requiredPermission: "admin",
  },
].filter(item => 
  !item.requiredPermission || 
  userHasPermission(item.requiredPermission)
);
```

## Dependencies

- **React Router** - For routing and navigation
- **shadcn/ui** - UI component library
  - Sidebar components
  - Avatar
  - Dropdown Menu
  - Breadcrumb
  - Scroll Area
  - Separator
- **Lucide React** - Icons
- **Tailwind CSS** - Styling

## Best Practices

1. **Consistency**: Keep navigation patterns consistent across all role layouts
2. **Accessibility**: Ensure keyboard navigation and screen reader support
3. **Performance**: Use `useMemo` for expensive calculations like breadcrumbs
4. **Responsiveness**: Test layouts on mobile, tablet, and desktop
5. **User Feedback**: Provide visual feedback for active states and interactions
6. **Documentation**: Keep menu items well-organized and self-explanatory

## Troubleshooting

### Sidebar not collapsing
- Check `SidebarProvider` is properly wrapping the layout
- Ensure `collapsible="icon"` prop is set on Sidebar

### Breadcrumbs not updating
- Verify `useLocation()` hook is imported from react-router
- Check breadcrumb logic in `useMemo` dependency array

### Icons not displaying
- Confirm Lucide React icons are imported correctly
- Check icon component names are capitalized

### Menu items not active
- Verify `location.pathname` matches menu item URL exactly
- Check `isActive` prop logic on `SidebarMenuButton`

## Support

For questions or issues related to role-based layouts, please:
1. Check this documentation
2. Review the implementation in existing layout files
3. Consult the shadcn/ui sidebar documentation
4. Contact the development team