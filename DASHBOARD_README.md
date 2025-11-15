# Dashboard Integration Guide

## Overview

This document explains the dashboard layout integration, its features, and how to work with it effectively.

## Features

### 1. **Collapsible Sidebar**
- Icon-based collapsed mode for more screen space
- Smooth transitions and animations
- Persistent state across page navigations

### 2. **Breadcrumb Navigation**
- Dynamic breadcrumbs based on current route
- Responsive design (hides first breadcrumb on mobile)
- Automatic path parsing and formatting

### 3. **Updated Navigation Icons**
- Main Navigation:
  - Overview (LayoutDashboard)
  - Analytics (TrendingUp)
  - Projects (FolderOpen)
  - Inventory (Package)
- Management:
  - Users (Users)
  - Reports (FileBarChart)
  - Organizations (Building2)
- Configuration:
  - Settings (Settings)

### 4. **No Unnecessary Reloads**
- Uses React Router's `<Outlet />` component
- Layout persists across route changes
- Only content area re-renders on navigation

## File Structure

```
fyp-client/
├── src/
│   ├── layouts/
│   │   └── DashboardLayout.tsx          # Main dashboard layout with sidebar
│   ├── pages/
│   │   └── dashboard/
│   │       ├── index.ts                 # Exports all dashboard pages
│   │       ├── Overview.tsx             # Dashboard home page
│   │       └── Settings.tsx             # Settings page
│   └── App.tsx                          # Route configuration
```

## Usage

### Adding a New Dashboard Page

1. **Create the page component:**

```tsx
// src/pages/dashboard/Analytics.tsx
function Analytics() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Analytics</h1>
      {/* Your page content */}
    </div>
  );
}

export default Analytics;
```

2. **Export it from the index:**

```tsx
// src/pages/dashboard/index.ts
export { default as Analytics } from "./Analytics";
```

3. **Add the route in App.tsx:**

```tsx
import { Analytics } from "./pages/dashboard";

// In the dashboard route section:
<Route path="analytics" element={<Analytics />} />
```

### Updating Sidebar Navigation

Edit the navigation arrays in `DashboardLayout.tsx`:

```tsx
const navigationItems = [
  {
    title: "Your Page",
    icon: YourIcon,  // Import from lucide-react
    url: "/dashboard/your-page",
  },
];
```

### Breadcrumb Customization

Breadcrumbs are automatically generated from the URL path. For custom labels, modify the `breadcrumbs` useMemo hook in `DashboardLayout.tsx`:

```tsx
const breadcrumbs = useMemo(() => {
  // Custom logic here
  // Map specific paths to custom labels
}, [location.pathname]);
```

## Components Used

### UI Components
- `Sidebar`, `SidebarContent`, `SidebarHeader`, etc. - Main sidebar structure
- `Breadcrumb`, `BreadcrumbItem`, `BreadcrumbLink` - Breadcrumb navigation
- `Card`, `CardHeader`, `CardContent` - Content containers
- `Button`, `Input`, `Label`, `Switch` - Form elements
- `Avatar`, `DropdownMenu` - User profile dropdown
- `Separator` - Visual dividers

### Icons (lucide-react)
All icons are imported from `lucide-react`:
- LayoutDashboard, TrendingUp, FolderOpen, Package
- Users, FileBarChart, Building2, Settings
- User, LogOut, ChevronDown

## Routing Structure

```
/dashboard                    → Overview page
/dashboard/analytics          → Analytics page
/dashboard/projects           → Projects page
/dashboard/inventory          → Inventory page
/dashboard/users              → Users management
/dashboard/reports            → Reports page
/dashboard/organizations      → Organizations page
/dashboard/settings           → Settings page
```

## Performance Optimization

### Preventing Reloads

The layout uses React Router's nested routes pattern:

```tsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Overview />} />
  <Route path="analytics" element={<Analytics />} />
</Route>
```

This ensures:
- Layout component mounts once
- Only `<Outlet />` content changes on navigation
- Sidebar state persists across pages
- No full page reloads

### Layout Persistence

The `SidebarProvider` wraps the entire layout, maintaining state:
- Collapse/expand state
- User preferences
- No flickering during navigation

## Responsive Design

### Mobile Considerations
- Breadcrumbs hide first item on small screens (`hidden md:block`)
- Sidebar can collapse to icon mode
- Header height adjusts based on sidebar state
- Touch-friendly click targets

### Breakpoints
- `md:` - Medium screens and up (768px+)
- `lg:` - Large screens and up (1024px+)

## Styling

### Tailwind Classes
The layout uses Tailwind CSS with shadcn/ui conventions:
- `flex`, `grid` for layouts
- `space-y-*`, `gap-*` for spacing
- `bg-muted`, `text-muted-foreground` for subtle backgrounds
- `rounded-lg`, `rounded-xl` for rounded corners

### Custom Transitions
```tsx
className="transition-[width,height] ease-linear"
```

## Future Enhancements

### Authentication Integration
To make routes protected:

```tsx
<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<DashboardLayout />}>
    {/* Protected routes */}
  </Route>
</Route>
```

### User Profile Integration
Update the footer user section in `DashboardLayout.tsx` to use actual user data:

```tsx
<Avatar>
  <AvatarImage src={user.avatar} />
  <AvatarFallback>{user.initials}</AvatarFallback>
</Avatar>
```

### Theme Toggle
Add theme switching in the settings or header:

```tsx
import { ModeToggle } from "@/components/mode-toggle";

<ModeToggle />
```

## Troubleshooting

### Sidebar not showing
- Check that `SidebarProvider` wraps the content
- Verify Tailwind CSS is properly configured
- Ensure sidebar components are imported correctly

### Breadcrumbs not updating
- Verify `useLocation` hook is working
- Check that route paths match the URL structure
- Ensure React Router is properly configured

### Icons not displaying
- Install lucide-react: `npm install lucide-react`
- Verify imports are correct
- Check icon names match available icons

## Best Practices

1. **Keep pages in `/pages/dashboard/`** - Maintain organization
2. **Export through index.ts** - Cleaner imports
3. **Use consistent spacing** - Follow the `space-y-4` pattern
4. **Leverage Card components** - For consistent content blocks
5. **Update breadcrumbs** - Ensure navigation clarity
6. **Test responsiveness** - Check mobile, tablet, desktop views
7. **Follow naming conventions** - Use PascalCase for components

## Additional Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)