# Dialog Quick Reference Guide

## 🚀 Quick Start

### 1. Import Dialog Components

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

### 2. Add State

```typescript
const [isDialogOpen, setIsDialogOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState<any>(null);
```

### 3. Basic Dialog Structure

```typescript
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleAction}>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## 📋 Common Patterns

### Add/Create Dialog

```typescript
<Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
  <DialogTrigger asChild>
    <Button>
      <Plus className="mr-2 h-4 w-4" />
      Add New
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Add New Item</DialogTitle>
      <DialogDescription>Create a new item</DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" className="col-span-3" />
      </div>
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

### View Details Dialog

```typescript
const handleView = (item: any) => {
  setSelectedItem(item);
  setIsViewDialogOpen(true);
};

<Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Details</DialogTitle>
      <DialogDescription>
        Information about {selectedItem?.name}
      </DialogDescription>
    </DialogHeader>
    {selectedItem && (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right font-semibold">Name</Label>
          <div className="col-span-3">{selectedItem.name}</div>
        </div>
      </div>
    )}
    <DialogFooter>
      <Button onClick={() => setIsViewDialogOpen(false)}>Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Edit Dialog

```typescript
const handleEdit = (item: any) => {
  setSelectedItem(item);
  setIsEditDialogOpen(true);
};

<Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
  <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>Edit Item</DialogTitle>
      <DialogDescription>Update {selectedItem?.name}</DialogDescription>
    </DialogHeader>
    {selectedItem && (
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="edit-name" className="text-right">Name</Label>
          <Input
            id="edit-name"
            defaultValue={selectedItem.name}
            className="col-span-3"
          />
        </div>
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

### Delete Confirmation Dialog

```typescript
const handleDelete = (item: any) => {
  setSelectedItem(item);
  setIsDeleteDialogOpen(true);
};

<Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogDescription>
        Delete {selectedItem?.name}? This cannot be undone.
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

## 🎯 Complete Example with Dropdown Menu

```typescript
import { useState } from "react";
import { Eye, Edit, Trash2, MoreHorizontal } from "lucide-react";

function MyPage() {
  // States
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Handlers
  const handleView = (item: any) => {
    setSelectedItem(item);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (item: any) => {
    setSelectedItem(item);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (item: any) => {
    setSelectedItem(item);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div>
      {/* Table with Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleView(item)}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleEdit(item)}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-red-600"
            onClick={() => handleDelete(item)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialogs here */}
    </div>
  );
}
```

---

## 📏 Dialog Sizes

```typescript
// Small (Confirmations)
<DialogContent className="sm:max-w-[425px]">

// Medium (Forms)
<DialogContent className="sm:max-w-[600px]">

// Large (Detailed Views)
<DialogContent className="sm:max-w-[800px]">

// Extra Large (Complex Forms)
<DialogContent className="sm:max-w-[1000px]">
```

---

## ✅ Best Practices Checklist

- [ ] Use controlled dialogs with `open` and `onOpenChange`
- [ ] Separate state for each dialog type
- [ ] Store selected item when opening dialogs
- [ ] Add descriptive DialogTitle and DialogDescription
- [ ] Include Cancel and Confirm buttons in DialogFooter
- [ ] Use proper button variants (outline for cancel, destructive for delete)
- [ ] Add icons to buttons for better UX
- [ ] Handle loading states for async operations
- [ ] Clear form data when dialog closes
- [ ] Show warnings for destructive actions

---

## 🎨 Form Field Layout

```typescript
<div className="grid gap-4 py-4">
  {/* Standard field */}
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor="field" className="text-right">Field Label</Label>
    <Input id="field" className="col-span-3" />
  </div>

  {/* With Select */}
  <div className="grid grid-cols-4 items-center gap-4">
    <Label className="text-right">Select Field</Label>
    <Select>
      <SelectTrigger className="col-span-3">
        <SelectValue placeholder="Choose..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Read-only (View mode) */}
  <div className="grid grid-cols-4 items-center gap-4">
    <Label className="text-right font-semibold">Label</Label>
    <div className="col-span-3">{value}</div>
  </div>
</div>
```

---

## 🔄 Loading State Example

```typescript
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    await api.createItem(formData);
    setIsDialogOpen(false);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

<DialogFooter>
  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
    Cancel
  </Button>
  <Button onClick={handleSubmit} disabled={isLoading}>
    {isLoading ? "Saving..." : "Save"}
  </Button>
</DialogFooter>
```

---

## 🚨 Error Handling Example

```typescript
import { Alert, AlertDescription } from "@/components/ui/alert";

const [error, setError] = useState<string | null>(null);

<DialogContent>
  <DialogHeader>
    <DialogTitle>Add Item</DialogTitle>
  </DialogHeader>
  
  {error && (
    <Alert variant="destructive">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  )}
  
  {/* Form fields */}
</DialogContent>
```

---

## 📍 Where Dialogs Are Used

### Admin Dashboard
- ✅ Tenants page - Add, View, Edit, Delete tenants
- ✅ System Users - Manage admin users
- ✅ Subscriptions - Change plans, cancel subscriptions
- ✅ All resource pages - CRUD operations

### User Dashboard
- ✅ Doctors - Add, Edit, View doctor profiles
- ✅ Nurses - Manage nursing staff
- ✅ Patients - Patient registration and records
- ✅ Appointments - Schedule, reschedule, cancel
- ✅ Facilities - Add and manage facilities
- ✅ Prescriptions - Create prescriptions
- ✅ Invoices - Generate invoices

---

## 🔗 Related Documentation

- Full Guide: `DIALOG_IMPLEMENTATION_GUIDE.md`
- Example Implementation: `src/pages/admin/dashboard/Tenants.tsx`
- Dialog Component: `src/components/ui/dialog.tsx`

---

## 💡 Quick Tips

1. **Always use controlled dialogs** - Pass `open` and `onOpenChange` props
2. **Store selection first** - Set `selectedItem` before opening view/edit/delete dialogs
3. **Use DialogTrigger** - Wrap buttons that open dialogs
4. **Size appropriately** - Use `sm:max-w-[...]` classes
5. **Add confirmation** - Use delete dialogs for destructive actions
6. **Show loading** - Disable buttons and show loading text during API calls
7. **Handle errors** - Display error messages in Alert components
8. **Clear on close** - Reset form data when dialog closes
9. **Accessible** - Always include DialogTitle and DialogDescription
10. **Icon consistency** - Use lucide-react icons for visual clarity

---

**Example Implementation:** See `src/pages/admin/dashboard/Tenants.tsx` for a complete working example with all CRUD dialogs! 🎉