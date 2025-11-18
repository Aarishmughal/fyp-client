# Role-Based Dashboards

This directory contains specialized dashboard views for different user roles in the healthcare system. Each dashboard is tailored to the specific needs and workflows of its intended user type.

## Available Dashboards

### 1. Doctor Dashboard (`/doctor/dashboard`)
**Target User:** Medical Doctors and Physicians

**Features:**
- Today's appointment schedule with patient details
- Quick access to patient vitals and conditions
- Pending medical tasks (prescriptions, lab results review, etc.)
- Recent patient history and follow-ups
- Patient satisfaction metrics
- Quick actions for common medical tasks

**Key Components:**
- Appointment queue with patient information
- Task management for medical responsibilities
- Patient status overview
- Statistics on consultations and patient load

### 2. Nurse Dashboard (`/nurse/dashboard`)
**Target User:** Registered Nurses and Nursing Staff

**Features:**
- Assigned patient monitoring with real-time vitals
- Medication administration schedule
- Shift information and progress tracking
- Critical alerts and patient notifications
- Task checklist for nursing duties
- Team collaboration tools

**Key Components:**
- Patient vitals monitoring (BP, HR, Temperature, O2 levels)
- Medication schedule with administration tracking
- Alert system for critical patient conditions
- Shift-based task management
- Quick actions for common nursing tasks

### 3. Patient Dashboard (`/patient/dashboard`)
**Target User:** Patients and Healthcare Recipients

**Features:**
- Personal health metrics and trends
- Upcoming appointments with doctors
- Active prescriptions and refill requests
- Lab results and medical records
- Medical history overview
- Secure messaging with healthcare providers

**Key Components:**
- Health metrics display (Blood Pressure, Heart Rate, etc.)
- Appointment management
- Prescription tracking
- Lab results access
- Provider communication portal

### 4. Team Member Dashboard (`/team/dashboard`)
**Target User:** Administrative and Support Staff

**Features:**
- Task management and assignments
- Meeting schedule and calendar
- Team member availability status
- Pending approvals workflow
- Weekly progress tracking
- Department notifications

**Key Components:**
- Task board with priority management
- Meeting scheduler with attendees
- Team member status indicators
- Approval workflow management
- Progress analytics

## Routing Structure

All dashboards use temporary routes for development purposes:

```
/doctor/dashboard   - Doctor's view (uses DoctorLayout)
/nurse/dashboard    - Nurse's view (uses NurseLayout)
/patient/dashboard  - Patient's view (uses PatientLayout)
/team/dashboard     - Team member's view (uses TeamLayout)
```

## Role-Specific Layouts

Each user role has a dedicated layout with custom navigation tailored to their needs:

### DoctorLayout
**Navigation Items:**
- Dashboard
- Patient Care: My Appointments, My Patients, Patient Queue
- Medical: Prescriptions, Lab Results, Medical Records
- Communication: Messages
- Settings

### NurseLayout
**Navigation Items:**
- Dashboard
- Patient Care: My Patients, Vitals Monitoring, Medication Schedule
- Tasks & Schedule: Tasks & Checklist, Alerts, Shift Schedule
- Records: Patient Notes, Shift Handover
- Settings

### PatientLayout
**Navigation Items:**
- Dashboard
- Health Management: My Appointments, My Prescriptions, Lab Results, Health Records
- Communication: Messages
- Billing: Billing & Payments
- Settings

### TeamLayout
**Navigation Items:**
- Dashboard
- Work Management: My Tasks, Meetings, Schedule
- Team: Team Members, Approvals
- Reports
- Communication: Messages
- Settings

## Implementation Notes

### Current Status
- ✅ All dashboards are implemented with comprehensive test data
- ✅ Role-specific layouts with tailored navigation
- ✅ Responsive layouts for mobile and desktop
- ✅ Consistent UI/UX using shadcn/ui components
- ✅ Collapsible sidebar with icon mode
- ✅ Breadcrumb navigation
- ⏳ Role-based authentication (to be implemented)
- ⏳ Real-time data integration (to be implemented)

### Next Steps
1. Implement role-based authentication system
2. Add protected route middleware
3. Connect to backend APIs for real data
4. Add real-time updates using WebSockets
5. Implement role-based access control (RBAC)

### Test Data
Each dashboard currently displays test data for demonstration purposes:
- Mock patient information
- Sample appointments and schedules
- Simulated vitals and metrics
- Demo tasks and notifications

### Design Patterns
All dashboards follow these patterns:
- **Consistent Layout:** Header with stats cards, main content grid, sidebar widgets
- **Color Coding:** Status indicators using consistent color schemes
- **Quick Actions:** Context-specific action buttons for common tasks
- **Real-time Feel:** Timestamps and status updates to simulate live data

## Technology Stack

- **React Router:** For client-side routing
- **TypeScript:** For type safety
- **Tailwind CSS:** For styling
- **shadcn/ui:** For UI components (Cards, Badges, Buttons, etc.)
- **Lucide Icons:** For iconography

## File Structure

```
dashboards/
├── doctor/
│   ├── DoctorDashboard.tsx
│   └── index.ts
├── nurse/
│   ├── NurseDashboard.tsx
│   └── index.ts
├── patient/
│   ├── PatientDashboard.tsx
│   └── index.ts
├── team/
│   ├── TeamDashboard.tsx
│   └── index.ts
├── index.ts
└── README.md

layouts/roles/
├── DoctorLayout.tsx
├── NurseLayout.tsx
├── PatientLayout.tsx
├── TeamLayout.tsx
└── index.ts
```

## Contributing

When adding new features to these dashboards:
1. Maintain consistent UI patterns across all dashboards
2. Update test data to reflect realistic scenarios
3. Ensure responsive design for all screen sizes
4. Add appropriate TypeScript types
5. Follow existing naming conventions

## Future Enhancements

### Planned Features
- [ ] Customizable dashboard widgets
- [ ] Dark mode optimization
- [ ] Print-friendly views
- [ ] Export functionality for reports
- [ ] Advanced filtering and search
- [ ] Mobile app integration
- [ ] Push notifications
- [ ] Accessibility improvements (WCAG 2.1 AA)

### Integration Points
- Authentication service for role verification
- Backend API for real-time data
- WebSocket connection for live updates
- Analytics service for metrics tracking
- Notification service for alerts