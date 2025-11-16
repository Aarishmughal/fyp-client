import { useState } from "react";
import {
  Building2,
  MapPin,
  Users,
  Activity,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Facility {
  id: number;
  name: string;
  location: string;
  type: string;
  staff: number;
  patients: number;
  status: string;
  email?: string;
  phone?: string;
  capacity?: number;
  operatingHours?: string;
  description?: string;
}

function Facilities() {
  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
    null,
  );

  // Mock data for facilities
  const facilities: Facility[] = [
    {
      id: 1,
      name: "Central Medical Center",
      location: "123 Main St, City",
      type: "Hospital",
      staff: 45,
      patients: 120,
      status: "Active",
      email: "central@hospital.com",
      phone: "+1 (555) 100-1000",
      capacity: 200,
      operatingHours: "24/7",
      description: "Main hospital facility with full emergency services",
    },
    {
      id: 2,
      name: "North Side Clinic",
      location: "456 North Ave, City",
      type: "Clinic",
      staff: 12,
      patients: 35,
      status: "Active",
      email: "north@hospital.com",
      phone: "+1 (555) 200-2000",
      capacity: 50,
      operatingHours: "Mon-Fri 8AM-6PM",
      description: "Outpatient clinic for routine care and consultations",
    },
    {
      id: 3,
      name: "East Community Health",
      location: "789 East Blvd, City",
      type: "Health Center",
      staff: 28,
      patients: 85,
      status: "Active",
      email: "east@hospital.com",
      phone: "+1 (555) 300-3000",
      capacity: 100,
      operatingHours: "Mon-Sat 7AM-8PM",
      description: "Community health center with specialist services",
    },
    {
      id: 4,
      name: "West End Medical",
      location: "321 West St, City",
      type: "Clinic",
      staff: 8,
      patients: 22,
      status: "Inactive",
      email: "west@hospital.com",
      phone: "+1 (555) 400-4000",
      capacity: 40,
      operatingHours: "Mon-Fri 9AM-5PM",
      description: "Small clinic temporarily closed for renovations",
    },
  ];

  const stats = [
    {
      title: "Total Facilities",
      value: "4",
      icon: Building2,
      description: "Across all locations",
    },
    {
      title: "Active Facilities",
      value: "3",
      icon: Activity,
      description: "Currently operational",
    },
    {
      title: "Total Staff",
      value: "93",
      icon: Users,
      description: "Across all facilities",
    },
    {
      title: "Total Patients",
      value: "262",
      icon: Users,
      description: "Currently registered",
    },
  ];

  // Dialog handlers
  const handleView = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (facility: Facility) => {
    setSelectedFacility(facility);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // TODO: Implement actual delete logic
    console.log("Deleting facility:", selectedFacility?.id);
    setIsDeleteDialogOpen(false);
    setSelectedFacility(null);
  };

  const handleCreateFacility = () => {
    // TODO: Implement actual create logic
    console.log("Creating new facility");
    setIsAddDialogOpen(false);
  };

  const handleUpdateFacility = () => {
    // TODO: Implement actual update logic
    console.log("Updating facility:", selectedFacility?.id);
    setIsEditDialogOpen(false);
    setSelectedFacility(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Facilities</h1>
          <p className="text-muted-foreground">
            Manage your healthcare facilities and locations
          </p>
        </div>
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
                Register a new facility to the system
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-name" className="text-right">
                  Facility Name
                </Label>
                <Input
                  id="add-name"
                  placeholder="Medical Center"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Type</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select facility type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hospital">Hospital</SelectItem>
                    <SelectItem value="clinic">Clinic</SelectItem>
                    <SelectItem value="health-center">Health Center</SelectItem>
                    <SelectItem value="urgent-care">Urgent Care</SelectItem>
                    <SelectItem value="specialty">Specialty Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-location" className="text-right">
                  Location
                </Label>
                <Input
                  id="add-location"
                  placeholder="123 Main St, City, State"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="add-email"
                  type="email"
                  placeholder="facility@hospital.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="add-phone"
                  placeholder="+1 (555) 000-0000"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-capacity" className="text-right">
                  Capacity
                </Label>
                <Input
                  id="add-capacity"
                  type="number"
                  placeholder="100"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-hours" className="text-right">
                  Operating Hours
                </Label>
                <Input
                  id="add-hours"
                  placeholder="Mon-Fri 9AM-5PM"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="add-description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea
                  id="add-description"
                  placeholder="Brief description of the facility..."
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateFacility}>Add Facility</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Facilities Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Facilities</CardTitle>
          <CardDescription>
            View and manage all your healthcare facilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Staff</TableHead>
                <TableHead>Patients</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facilities.map((facility) => (
                <TableRow key={facility.id}>
                  <TableCell className="font-medium">{facility.name}</TableCell>
                  <TableCell>{facility.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-3 w-3 text-muted-foreground" />
                      {facility.location}
                    </div>
                  </TableCell>
                  <TableCell>{facility.staff}</TableCell>
                  <TableCell>{facility.patients}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        facility.status === "Active" ? "default" : "secondary"
                      }
                    >
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
              <div className="pb-4 border-b">
                <h3 className="text-lg font-semibold">
                  {selectedFacility.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedFacility.type}
                </p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Location</Label>
                <div className="col-span-3 flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  {selectedFacility.location}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Email</Label>
                <div className="col-span-3">{selectedFacility.email}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Phone</Label>
                <div className="col-span-3">{selectedFacility.phone}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Capacity</Label>
                <div className="col-span-3">
                  {selectedFacility.capacity} patients
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">
                  Operating Hours
                </Label>
                <div className="col-span-3">
                  {selectedFacility.operatingHours}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Staff Count</Label>
                <div className="col-span-3">{selectedFacility.staff}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">
                  Active Patients
                </Label>
                <div className="col-span-3">{selectedFacility.patients}</div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right font-semibold pt-1">
                  Description
                </Label>
                <div className="col-span-3 text-sm">
                  {selectedFacility.description}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Status</Label>
                <div className="col-span-3">
                  <Badge
                    variant={
                      selectedFacility.status === "Active"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {selectedFacility.status}
                  </Badge>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsViewDialogOpen(false)}>Close</Button>
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
                <Label htmlFor="edit-name" className="text-right">
                  Facility Name
                </Label>
                <Input
                  id="edit-name"
                  defaultValue={selectedFacility.name}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Type</Label>
                <Select defaultValue={selectedFacility.type.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hospital">Hospital</SelectItem>
                    <SelectItem value="clinic">Clinic</SelectItem>
                    <SelectItem value="health center">Health Center</SelectItem>
                    <SelectItem value="urgent care">Urgent Care</SelectItem>
                    <SelectItem value="specialty">Specialty Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-location" className="text-right">
                  Location
                </Label>
                <Input
                  id="edit-location"
                  defaultValue={selectedFacility.location}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="edit-email"
                  type="email"
                  defaultValue={selectedFacility.email}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="edit-phone"
                  defaultValue={selectedFacility.phone}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-capacity" className="text-right">
                  Capacity
                </Label>
                <Input
                  id="edit-capacity"
                  type="number"
                  defaultValue={selectedFacility.capacity}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-hours" className="text-right">
                  Operating Hours
                </Label>
                <Input
                  id="edit-hours"
                  defaultValue={selectedFacility.operatingHours}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Status</Label>
                <Select defaultValue={selectedFacility.status.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="edit-description" className="text-right pt-2">
                  Description
                </Label>
                <Textarea
                  id="edit-description"
                  defaultValue={selectedFacility.description}
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleUpdateFacility}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove {selectedFacility?.name}?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
              <p className="text-sm text-destructive font-medium mb-2">
                ⚠️ Warning: This action cannot be undone
              </p>
              <p className="text-sm text-muted-foreground">
                Deleting this facility will remove all associated staff
                assignments, patient records, and operational data.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete Facility
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Facilities;
