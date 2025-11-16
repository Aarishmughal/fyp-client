# Dialog Flow Guide - Visual Reference

## 🎯 Quick Visual Reference

This guide provides visual flow diagrams for all dialog interactions implemented in the dashboard.

---

## 📊 Basic Dialog Flow

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│  1. User clicks "Add New" button                             │
│                                                               │
│  2. Dialog opens with empty form                             │
│                                                               │
│  3. User fills in form fields                                │
│                                                               │
│  4. User clicks "Create" or "Cancel"                         │
│                                                               │
│  5. If Create:                                               │
│     - Validate form                                          │
│     - Call API                                               │
│     - Close dialog                                           │
│     - Refresh data                                           │
│     - Show success message                                   │
│                                                               │
│  6. If Cancel:                                               │
│     - Close dialog                                           │
│     - Discard changes                                        │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 CRUD Operations Flow

### Create Flow
```
Page Table
    │
    ├─> Click "Add New" Button
    │       │
    │       ├─> Dialog Opens (isAddDialogOpen = true)
    │       │
    │       ├─> User Fills Form
    │       │
    │       ├─> Click "Create"
    │       │       │
    │       │       ├─> handleCreate()
    │       │       ├─> API Call → POST /resource
    │       │       ├─> Success: Close Dialog, Refresh List
    │       │       └─> Error: Show Error Message
    │       │
    │       └─> Click "Cancel"
    │               └─> Close Dialog (no changes)
    │
    └─> Table Updated ✓
```

### Read/View Flow
```
Page Table Row
    │
    ├─> Click Dropdown Menu
    │       │
    │       ├─> Click "View Details"
    │       │       │
    │       │       ├─> handleView(item)
    │       │       │   - setSelectedItem(item)
    │       │       │   - setIsViewDialogOpen(true)
    │       │       │
    │       │       ├─> Dialog Opens with Data
    │       │       │   - Read-only fields
    │       │       │   - Status badges
    │       │       │   - Complete details
    │       │       │
    │       │       └─> Click "Close"
    │       │               └─> Dialog Closes
    │       │
    │       └─> Return to Table
```

### Update/Edit Flow
```
Page Table Row
    │
    ├─> Click Dropdown Menu
    │       │
    │       ├─> Click "Edit"
    │       │       │
    │       │       ├─> handleEdit(item)
    │       │       │   - setSelectedItem(item)
    │       │       │   - setIsEditDialogOpen(true)
    │       │       │
    │       │       ├─> Dialog Opens with Prefilled Form
    │       │       │   - defaultValue={selectedItem.field}
    │       │       │
    │       │       ├─> User Modifies Fields
    │       │       │
    │       │       ├─> Click "Save Changes"
    │       │       │       │
    │       │       │       ├─> handleUpdate()
    │       │       │       ├─> API Call → PUT /resource/:id
    │       │       │       ├─> Success: Close, Refresh, Show Success
    │       │       │       └─> Error: Show Error, Keep Dialog Open
    │       │       │
    │       │       └─> Click "Cancel"
    │       │               └─> Close (no changes)
    │       │
    │       └─> Table Updated ✓
```

### Delete Flow
```
Page Table Row
    │
    ├─> Click Dropdown Menu
    │       │
    │       ├─> Click "Delete" (Red)
    │       │       │
    │       │       ├─> handleDelete(item)
    │       │       │   - setSelectedItem(item)
    │       │       │   - setIsDeleteDialogOpen(true)
    │       │       │
    │       │       ├─> Confirmation Dialog Opens
    │       │       │   - Shows item details
    │       │       │   - Warning message (red)
    │       │       │   - "Cannot be undone" text
    │       │       │
    │       │       ├─> Click "Delete" (Destructive)
    │       │       │       │
    │       │       │       ├─> handleConfirmDelete()
    │       │       │       ├─> API Call → DELETE /resource/:id
    │       │       │       ├─> Success: Close, Refresh, Show Success
    │       │       │       └─> Error: Show Error, Keep Dialog Open
    │       │       │
    │       │       └─> Click "Cancel"
    │       │               └─> Close (item safe)
    │       │
    │       └─> Item Removed from Table ✓
```

---

## 🎭 Appointment-Specific Flows

### Schedule New Appointment
```
Appointments Page
    │
    ├─> Click "New Appointment"
    │       │
    │       ├─> Schedule Dialog Opens
    │       │
    │       ├─> Select Patient (dropdown)
    │       ├─> Select Doctor (dropdown)
    │       ├─> Select Facility (dropdown)
    │       ├─> Choose Date (date picker)
    │       ├─> Choose Time (time picker)
    │       ├─> Select Type (dropdown)
    │       ├─> Enter Reason (text)
    │       ├─> Add Notes (textarea)
    │       │
    │       ├─> Click "Schedule Appointment"
    │       │       │
    │       │       ├─> Validate availability
    │       │       ├─> Create appointment
    │       │       ├─> Send notifications
    │       │       └─> Refresh calendar
    │       │
    │       └─> Appointment Created ✓
```

### Reschedule Appointment
```
Appointment Row
    │
    ├─> Click "Reschedule"
    │       │
    │       ├─> Reschedule Dialog Opens
    │       │   - Shows current details
    │       │   - Pre-filled form
    │       │
    │       ├─> Modify Date/Time/Doctor
    │       │
    │       ├─> Click "Reschedule Appointment"
    │       │       │
    │       │       ├─> Check new slot availability
    │       │       ├─> Update appointment
    │       │       ├─> Notify patient & doctor
    │       │       └─> Refresh list
    │       │
    │       └─> Appointment Updated ✓
```

### Cancel Appointment
```
Appointment Row
    │
    ├─> Click "Cancel"
    │       │
    │       ├─> Cancel Dialog Opens
    │       │   - Shows appointment details
    │       │   - Warning about notifications
    │       │
    │       ├─> Click "Cancel Appointment"
    │       │       │
    │       │       ├─> Mark as cancelled
    │       │       ├─> Send cancellation emails/SMS
    │       │       ├─> Free up time slot
    │       │       └─> Refresh list
    │       │
    │       └─> Appointment Cancelled ✓
```

---

## 🏥 Patient Registration Flow

```
Patients Page
    │
    ├─> Click "Register Patient"
    │       │
    │       ├─> Registration Dialog Opens (Large - 700px)
    │       │
    │       ├─> Fill Personal Info
    │       │   - Name, Age, Gender
    │       │   - Email, Phone
    │       │   - Address
    │       │
    │       ├─> Fill Medical Info
    │       │   - Blood Type (select)
    │       │   - Allergies (text)
    │       │   - Medical History (textarea)
    │       │
    │       ├─> Assign Facility & Doctor
    │       │
    │       ├─> Click "Register Patient"
    │       │       │
    │       │       ├─> Create patient record
    │       │       ├─> Assign unique ID
    │       │       ├─> Link to facility/doctor
    │       │       └─> Generate patient profile
    │       │
    │       └─> Patient Registered ✓
```

---

## 👨‍⚕️ Doctor Management Flow

```
Doctors Page
    │
    ├─> View All Doctors (Table)
    │   - Avatar + Name
    │   - Specialization
    │   - Facility
    │   - Patient Count
    │   - Appointment Count
    │   - Status Badge
    │   - Actions Menu
    │
    ├─> Add Doctor
    │   - Personal info
    │   - Specialization
    │   - License number
    │   - Experience years
    │   - Facility assignment
    │
    ├─> View Doctor
    │   - Full profile display
    │   - Contact information
    │   - Professional details
    │   - Current assignments
    │   - Status
    │
    ├─> Edit Doctor
    │   - Update any field
    │   - Change facility
    │   - Update status
    │   - Modify specialization
    │
    └─> Delete Doctor
        - Confirmation required
        - Warning about patients
        - Reassignment needed
```

---

## 🏢 Facility Management Flow

```
Facilities Page
    │
    ├─> View All Facilities (Table)
    │   - Name & Type
    │   - Location (with icon)
    │   - Staff count
    │   - Patient count
    │   - Status
    │   - Actions
    │
    ├─> Add Facility
    │   - Name
    │   - Type (Hospital/Clinic/etc)
    │   - Location address
    │   - Contact info
    │   - Capacity
    │   - Operating hours
    │   - Description
    │
    ├─> View Facility
    │   - All details
    │   - Operational info
    │   - Stats
    │
    ├─> Edit Facility
    │   - Update any field
    │   - Change status
    │   - Modify capacity
    │
    └─> Delete Facility
        - Check for active patients
        - Warning about staff
        - Reassignment required
```

---

## 🎨 Dialog State Management

```
Component State
├─── isAddDialogOpen: boolean
├─── isViewDialogOpen: boolean
├─── isEditDialogOpen: boolean
├─── isDeleteDialogOpen: boolean
└─── selectedItem: Type | null

Dialog Lifecycle
├─── CLOSED (default)
│
├─── OPENING
│    - Set dialog state to true
│    - Set selectedItem (if edit/view/delete)
│
├─── OPEN
│    - Display dialog
│    - User interaction
│
├─── SUBMITTING (optional)
│    - Loading state
│    - API call in progress
│
└─── CLOSING
     - Set dialog state to false
     - Clear selectedItem
     - Reset form (if needed)
```

---

## 🔐 Form Validation Flow (Ready for Implementation)

```
User Fills Form
    │
    ├─> Field Change Event
    │       │
    │       ├─> Run Field Validation
    │       │   - Check required
    │       │   - Check format (email, phone)
    │       │   - Check length
    │       │   - Custom rules
    │       │
    │       ├─> Show Error (if invalid)
    │       │   - Red border
    │       │   - Error message below field
    │       │
    │       └─> Clear Error (if valid)
    │
    ├─> User Clicks Submit
    │       │
    │       ├─> Validate All Fields
    │       │
    │       ├─> If Invalid:
    │       │   - Highlight first error
    │       │   - Show all errors
    │       │   - Prevent submission
    │       │
    │       └─> If Valid:
    │           - Enable submit button
    │           - Proceed with API call
    │
    └─> Submit to API
```

---

## ⚡ API Integration Flow (To Implement)

```
Dialog Submit
    │
    ├─> handleCreate/Update/Delete()
    │       │
    │       ├─> Set Loading State
    │       │   - isLoading = true
    │       │   - Disable buttons
    │       │   - Show spinner/text
    │       │
    │       ├─> Try API Call
    │       │   │
    │       │   ├─> Success
    │       │   │   - Close dialog
    │       │   │   - Refresh data
    │       │   │   - Show success toast
    │       │   │   - Clear form
    │       │   │
    │       │   └─> Error
    │       │       - Keep dialog open
    │       │       - Show error message
    │       │       - Enable retry
    │       │
    │       └─> Finally
    │           - isLoading = false
    │           - Re-enable buttons
    │
    └─> Return to Page
```

---

## 🎯 User Interaction Paths

### Happy Path (Success)
```
Click Button → Dialog Opens → Fill Form → Submit → 
Success → Dialog Closes → Data Refreshes → Toast Shown → Done ✓
```

### Error Path
```
Click Button → Dialog Opens → Fill Form → Submit → 
Error → Show Error → User Fixes → Retry → Success ✓
```

### Cancel Path
```
Click Button → Dialog Opens → Fill Form → Click Cancel → 
Confirm Discard → Dialog Closes → No Changes Made ✓
```

### Validation Error Path
```
Click Button → Dialog Opens → Fill Form → Submit → 
Validation Error → Highlight Fields → User Fixes → 
Validation Passes → Submit → Success ✓
```

---

## 📱 Responsive Behavior

```
Desktop (>768px)
├─── Dialog: sm:max-w-[600px]
├─── Full form visible
├─── Side-by-side layout
└─── All features available

Tablet (768px)
├─── Dialog: sm:max-w-[425px]
├─── Stacked form layout
├─── Scrollable content
└─── Touch-friendly buttons

Mobile (<768px)
├─── Dialog: full width
├─── Single column layout
├─── Scrollable dialog
└─── Large touch targets
```

---

## 🎨 Visual States

```
Button States
├─── Default: Primary color
├─── Hover: Slightly darker
├─── Active: Pressed effect
├─── Loading: Spinner + disabled
├─── Disabled: Grayed out
└─── Focus: Outline ring

Dialog States
├─── Closed: Not in DOM
├─── Opening: Fade in animation
├─── Open: Fully visible
├─── Closing: Fade out animation
└─── Closed: Removed from DOM

Field States
├─── Empty: Placeholder shown
├─── Filled: Value displayed
├─── Focus: Border highlight
├─── Error: Red border + message
├─── Valid: Green indicator
└─── Disabled: Gray background
```

---

## 🔄 Data Flow

```
User Action
    ↓
State Update
    ↓
Dialog Opens
    ↓
User Input
    ↓
Form Data
    ↓
Validation
    ↓
API Call
    ↓
Response
    ↓
State Update
    ↓
UI Refresh
    ↓
Dialog Close
    ↓
Complete
```

---

## 📋 Checklist for Each Dialog

- [ ] State variables defined
- [ ] Handler functions created
- [ ] Dialog components added
- [ ] Form fields implemented
- [ ] Validation prepared
- [ ] API integration ready
- [ ] Loading states added
- [ ] Error handling included
- [ ] Success feedback shown
- [ ] TypeScript types defined

---

## 🎓 Quick Tips

1. **Always close dialogs after successful actions**
2. **Clear selectedItem when closing**
3. **Show loading states during API calls**
4. **Display clear error messages**
5. **Confirm destructive actions**
6. **Use appropriate dialog sizes**
7. **Include cancel options**
8. **Make forms accessible**
9. **Test all paths (success, error, cancel)**
10. **Keep patterns consistent**

---

**Reference:** See `DIALOG_QUICK_REFERENCE.md` for code examples
**Complete Guide:** See `DIALOG_IMPLEMENTATION_GUIDE.md`
**Implementation Status:** See `DIALOGS_IMPLEMENTED.md`
