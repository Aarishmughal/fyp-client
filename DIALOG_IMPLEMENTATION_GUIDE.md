# Dialog Implementation Guide

## Overview

This guide demonstrates how to implement Dialog components across dashboard pages for creating, editing, viewing, and deleting entities. The Dialog UI component provides a consistent, accessible modal experience throughout the application.

## Table of Contents

1. [Basic Dialog Structure](#basic-dialog-structure)
2. [Common Dialog Patterns](#common-dialog-patterns)
3. [Implementation Examples](#implementation-examples)
4. [Best Practices](#best-practices)
5. [Complete Code Examples](#complete-code-examples)

---

## Basic Dialog Structure

### Required Imports

```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
```

### Basic Dialog Pattern

```typescript
const [isDialogOpen, setIsDialogOpen] = useState(false);

<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description goes here.</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => setIsDialogOpen(false)}>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Common Dialog Patterns

### 1. Create/Add Dialog

**Use Case:** Adding new entities (patients, doctors, appointments, etc.)

```typescript
const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

<Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
  <DialogTrigger asChild>
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Add New
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Add New Entity</DialogTitle>
      <DialogDescription>
        Create a new entity by filling in the details below.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" className="col-span-3" />
      </div>
      {/* More fields */}
    </div>
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleCreate}>Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### 2. View/Details Dialog

**Use Case:** Viewing detailed information about an entity

```typescript
const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<any>(null);

const handleView = (item: any) => {
  setSelectedItem(item);
  setIsViewDialogOpen(true);
};

<Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Details</DialogTitle>
      <DialogDescription>
        Detailed information about {selectedItem?.name}
      </DialogDescription>
    </DialogHeader>
    {selectedItem && (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right font-semibold">Name</Label>
          <div className="col-span-3">{selectedItem.name}</div>
        </div>
        {/* More read-only fields */}
      </div>
    )}
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
        Close
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### 3. Edit Dialog

**Use Case:** Editing existing entities

```typescript
const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<any>(null);

const handleEdit = (item: any) => {
  setSelectedItem(item);
  setIsEditDialogOpen(true);
};

<Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Edit Entity</DialogTitle>
      <DialogDescription>
        Update information for {selectedItem?.name}
      </DialogDescription>
    </DialogHeader>
    {selectedItem && (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="edit-name" className="text-right">
            Name
          </Label>
          <Input
            id="edit-name"
            defaultValue={selectedItem.name}
            className="col-span-3"
          />
        </div>
        {/* More editable fields */}
      </div>
    )}
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleUpdate}>Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### 4. Delete Confirmation Dialog

**Use Case:** Confirming destructive actions

```typescript
const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<any>(null);

const handleDelete = (item: any) => {
  setSelectedItem(item);
  setIsDeleteDialogOpen(true);
};

<Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Delete Confirmation</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete {selectedItem?.name}? This action
        cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
        <p className="text-sm text-destructive font-medium">
          ⚠️ Warning: This action is permanent
        </p>
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
        Cancel
      </Button>
      <Button variant="destructive" onClick={handleConfirmDelete}>
        Delete
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## Implementation Examples

### Example 1: Doctors Page with CRUD Dialogs

```typescript
// src/pages/dashboard/doctors/Doctors.tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Eye, Edit, Trash2 } from "lucide-react";

function Doctors() {
  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  // Handlers
  const handleView = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Doctors</h1>
        
        {/* Add Doctor Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Doctor
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Doctor</DialogTitle>
              <DialogDescription>
                Register a new doctor in the system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Full Name</Label>
                <Input id="name" placeholder="Dr. John Smith" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="specialization" className="text-right">Specialization</Label>
                <Input id="specialization" placeholder="Cardiology" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" type="email" placeholder="doctor@hospital.com" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">Phone</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>Add Doctor</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table with action buttons - triggers View, Edit, Delete dialogs */}
      {/* View, Edit, Delete Dialog implementations here */}
    </div>
  );
}
```

### Example 2: Appointments Page with Scheduling Dialog

```typescript
// src/pages/dashboard/appointments/Appointments.tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function Appointments() {
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-4">
      <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
        <DialogTrigger asChild>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Appointment
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Schedule New Appointment</DialogTitle>
            <DialogDescription>
              Book an appointment for a patient with a doctor.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="patient" className="text-right">Patient</Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select patient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">John Doe</SelectItem>
                  <SelectItem value="2">Jane Smith</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="doctor" className="text-right">Doctor</Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Dr. Sarah Johnson</SelectItem>
                  <SelectItem value="2">Dr. Mike Anderson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Date & Time</Label>
              <div className="col-span-3">
                <Input type="datetime-local" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reason" className="text-right">Reason</Label>
              <Input id="reason" placeholder="Regular checkup" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsScheduleDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsScheduleDialogOpen(false)}>Schedule</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

### Example 3: Patients Page with Medical History Dialog

```typescript
// src/pages/dashboard/patients/Patients.tsx
function Patients() {
  const [isMedicalHistoryDialogOpen, setIsMedicalHistoryDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  return (
    <Dialog open={isMedicalHistoryDialogOpen} onOpenChange={setIsMedicalHistoryDialogOpen}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Medical History - {selectedPatient?.name}</DialogTitle>
          <DialogDescription>
            Complete medical records and history
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Allergies</h4>
              <div className="flex gap-2">
                <Badge>Penicillin</Badge>
                <Badge>Peanuts</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Current Medications</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Aspirin 81mg - Daily</li>
                <li>Lisinopril 10mg - Daily</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Past Conditions</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Hypertension - 2020</li>
                <li>Type 2 Diabetes - 2018</li>
              </ul>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsMedicalHistoryDialogOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

---

## Best Practices

### 1. State Management

```typescript
// ✅ Good: Separate state for each dialog
const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<any>(null);

// ❌ Bad: Single state for multiple dialogs
const [dialogState, setDialogState] = useState({ type: '', open: false });
```

### 2. Controlled vs Uncontrolled

```typescript
// ✅ Good: Controlled dialog
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  {/* Content */}
</Dialog>

// ❌ Bad: Uncontrolled without state management
<Dialog>
  {/* Content */}
</Dialog>
```

### 3. Form Handling

```typescript
// ✅ Good: Clear form data when dialog closes
const handleDialogChange = (open: boolean) => {
  setIsDialogOpen(open);
  if (!open) {
    // Clear form data
    setFormData({});
  }
};

<Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
```

### 4. Accessibility

```typescript
// ✅ Good: Descriptive titles and descriptions
<DialogHeader>
  <DialogTitle>Delete Patient Record</DialogTitle>
  <DialogDescription>
    Are you sure you want to delete John Doe's record? This action cannot be undone.
  </DialogDescription>
</DialogHeader>

// ❌ Bad: Generic or missing descriptions
<DialogHeader>
  <DialogTitle>Delete</DialogTitle>
</DialogHeader>
```

### 5. Button Actions

```typescript
// ✅ Good: Clear action handlers
<DialogFooter>
  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
    Cancel
  </Button>
  <Button onClick={handleSubmit}>
    {isLoading ? <Spinner /> : 'Save Changes'}
  </Button>
</DialogFooter>

// ❌ Bad: Inline complex logic
<Button onClick={() => {
  // 50 lines of logic
}}>Save</Button>
```

### 6. Dialog Sizes

```typescript
// Small dialogs (confirmations)
<DialogContent className="sm:max-w-[425px]">

// Medium dialogs (forms)
<DialogContent className="sm:max-w-[600px]">

// Large dialogs (detailed views)
<DialogContent className="sm:max-w-[800px]">

// Extra large dialogs (complex forms)
<DialogContent className="sm:max-w-[1000px]">
```

### 7. Loading States

```typescript
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    await api.createItem(formData);
    setIsDialogOpen(false);
  } catch (error) {
    // Handle error
  } finally {
    setIsLoading(false);
  }
};

<Button onClick={handleSubmit} disabled={isLoading}>
  {isLoading ? 'Creating...' : 'Create'}
</Button>
```

### 8. Error Handling

```typescript
const [error, setError] = useState<string | null>(null);

<DialogContent>
  <DialogHeader>
    <DialogTitle>Add New Doctor</DialogTitle>
  </DialogHeader>
  {error && (
    <Alert variant="destructive">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  )}
  {/* Form content */}
</DialogContent>
```

---

## Complete Code Examples

### Full CRUD Implementation for Facilities Page

```typescript
// src/pages/dashboard/facilities/Facilities.tsx
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, Trash2, MoreHorizontal, Building2 } from "lucide-react";

function Facilities() {
  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<any>(null);

  // Mock data
  const facilities = [
    {
      id: 1,
      name: "Main Hospital",
      address: "123 Medical Center Dr",
      city: "New York",
      type: "Hospital",
      capacity: 500,
      status: "active",
    },
    // More facilities...
  ];

  // Handlers
  const handleView = (facility: any) => {
    setSelectedFacility(facility);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (facility: any) => {
    setSelectedFacility(facility);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (facility: any) => {
    setSelectedFacility(facility);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Facilities</h1>
          <p className="text-muted-foreground">Manage healthcare facilities</p>
        </div>

        {/* Add Facility Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Facility
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Facility</DialogTitle>
              <DialogDescription>
                Register a new healthcare facility in the system.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Facility Name</Label>
                <Input id="name" placeholder="Main Hospital" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">Address</Label>
                <Input id="address" placeholder="123 Medical Center Dr" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="city" className="text-right">City</Label>
                <Input id="city" placeholder="New York" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="capacity" className="text-right">Capacity</Label>
                <Input id="capacity" type="number" placeholder="500" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Add Facility
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Facilities Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Facilities</CardTitle>
          <CardDescription>A list of all registered facilities</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facilities.map((facility) => (
                <TableRow key={facility.id}>
                  <TableCell className="font-medium">{facility.name}</TableCell>
                  <TableCell>{facility.city}</TableCell>
                  <TableCell>{facility.type}</TableCell>
                  <TableCell>{facility.capacity}</TableCell>
                  <TableCell>
                    <Badge variant={facility.status === "active" ? "default" : "secondary"}>
                      {facility.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleView(facility)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEdit(facility)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(facility)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Facility Details</DialogTitle>
            <DialogDescription>
              Complete information about {selectedFacility?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedFacility && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Name</Label>
                <div className="col-span-3">{selectedFacility.name}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Address</Label>
                <div className="col-span-3">{selectedFacility.address}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">City</Label>
                <div className="col-span-3">{selectedFacility.city}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Type</Label>
                <div className="col-span-3">{selectedFacility.type}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Capacity</Label>
                <div className="col-span-3">{selectedFacility.capacity} beds</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Facility</DialogTitle>
            <DialogDescription>
              Update information for {selectedFacility?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedFacility && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">Name</Label>
                <Input
                  id="edit-name"
                  defaultValue={selectedFacility.name}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-address" className="text-right">Address</Label>
                <Input
                  id="edit-address"
                  defaultValue={selectedFacility.address}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-capacity" className="text-right">Capacity</Label>
                <Input
                  id="edit-capacity"
                  type="number"
                  defaultValue={selectedFacility.capacity}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsEditDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Facility</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedFacility?.name}? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
              <p className="text-sm text-destructive font-medium">
                ⚠️ Warning: This will permanently delete all facility data
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Delete Facility
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Facilities;
```

---

## Summary

### Key Takeaways

1. **Use controlled dialogs** with `open` and `onOpenChange` props
2. **Separate state** for each dialog type (add, view, edit, delete)
3. **Store selected item** when opening view/edit/delete dialogs
4. **Clear form data** when dialog closes
5. **Use proper sizes** based on content (425px, 600px, 800px)
6. **Add loading states** for async operations
7. **Include error handling** with Alert components
8. **Make dialogs accessible** with descriptive titles and descriptions
9. **Use DialogTrigger** for buttons that open dialogs
10. **Implement confirmation** for destructive actions

### Where to Use Dialogs

- ✅ Creating new entities (Add Doctor, Add Patient, etc.)
- ✅ Editing existing records
- ✅ Viewing detailed information
- ✅ Confirming deletions
- ✅ Scheduling appointments
- ✅ Assigning roles/permissions
- ✅ Changing status/state
- ✅ Quick forms and inputs
- ❌ Full-page forms (use dedicated pages instead)
- ❌ Complex multi-step processes (use wizards/stepper components)

---

## Additional Resources

- [Dialog Component Documentation](../src/components/ui/dialog.tsx)
- [Radix UI Dialog Docs](https://www.radix-ui.com/docs/primitives/components/dialog)
- [Tenants Page Example](../src/pages/admin/dashboard/Tenants.tsx) - Complete implementation