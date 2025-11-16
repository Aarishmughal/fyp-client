# Admin Dashboard Installation Guide

## Required Installation Step

Before using the admin dashboard, you **MUST** install the missing Radix UI Tabs component:

```bash
npm install @radix-ui/react-tabs
```

## Why is this needed?

The System Settings page (`/admin/dashboard/settings`) uses a tabbed interface that requires the `@radix-ui/react-tabs` package. This component provides accessible, customizable tabs for organizing the five configuration sections:

1. General Settings
2. Email Configuration
3. Security Settings
4. Database Configuration
5. API Configuration

## Verification

After installation, verify the package was added:

```bash
npm list @radix-ui/react-tabs
```

You should see:
```
@radix-ui/react-tabs@1.x.x
```

## Start Development Server

Once installed, start the development server:

```bash
npm run dev
```

## Access Admin Dashboard

Navigate to:
- **Admin Login**: http://localhost:5173/admin/login
- **Admin Dashboard**: http://localhost:5173/admin/dashboard

## Troubleshooting

### If you see "Module not found" error:
1. Ensure you're in the correct directory: `cd fyp-client`
2. Run the installation command again
3. Clear node_modules and reinstall if needed:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm install @radix-ui/react-tabs
   ```

### If tabs don't render properly:
1. Check browser console for errors
2. Verify the import in Settings.tsx:
   ```typescript
   import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
   ```
3. Ensure the tabs.tsx component exists in `src/components/ui/`

## What's Already Installed

Your project already has these Radix UI components:
- ✅ @radix-ui/react-avatar
- ✅ @radix-ui/react-checkbox
- ✅ @radix-ui/react-collapsible
- ✅ @radix-ui/react-dialog
- ✅ @radix-ui/react-dropdown-menu
- ✅ @radix-ui/react-label
- ✅ @radix-ui/react-progress
- ✅ @radix-ui/react-radio-group
- ✅ @radix-ui/react-select
- ✅ @radix-ui/react-separator
- ✅ @radix-ui/react-slot
- ✅ @radix-ui/react-switch
- ✅ @radix-ui/react-tooltip

Only **@radix-ui/react-tabs** needs to be added.

## Next Steps After Installation

1. ✅ Install @radix-ui/react-tabs (this file)
2. 📖 Read ADMIN_DASHBOARD_QUICKSTART.md
3. 🔌 Connect admin pages to your backend API
4. 🎨 Customize as needed
5. 🚀 Deploy!

---

**That's it!** Just one command and you're ready to use the full admin dashboard.