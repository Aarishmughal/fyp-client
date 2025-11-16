import { useState } from "react";
import {
  HeartPulse,
  UserCheck,
  Clock,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface Nurse {
  id: number;
  name: string;
  department: string;
  facility: string;
  shift: string;
  patients: number;
  status: string;
  avatar: string;
  email?: string;
  phone?: string;
  employeeId?: string;
  certification?: string;
}

function Nurses() {
  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedNurse, setSelectedNurse] = useState<Nurse | null>(null);

  // Mock data for nurses
  const nurses: Nurse[] = [
    {
      id: 1,
      name: "Jennifer Smith",
      department: "Emergency",
      facility: "Central Medical Center",
      shift: "Day Shift",
      patients: 8,
      status: "On Duty",
      avatar: "",
      email: "jennifer.smith@hospital.com",
      phone: "+1 (555) 111-2222",
      employeeId: "NRS-001",
      certification: "RN, BSN",
    },
    {
      id: 2,
      name: "Maria Garcia",
      department: "Pediatrics",
      facility: "North Side Clinic",
      shift: "Day Shift",
      patients: 6,
      status: "On Duty",
      avatar: "",
      email: "maria.garcia@hospital.com",
      phone: "+1 (555) 222-3333",
      employeeId: "NRS-002",
      certification: "RN, MSN",
    },
    {
      id: 3,
      name: "Robert Taylor",
      department: "ICU",
      facility: "Central Medical Center",
      shift: "Night Shift",
      patients: 5,
      status: "Off Duty",
      avatar: "",
      email: "robert.taylor@hospital.com",
      phone: "+1 (555) 333-4444",
      employeeId: "NRS-003",
      certification: "RN, CCRN",
    },
    {
      id: 4,
      name: "Linda Brown",
      department: "Surgery",
      facility: "East Community Health",
      shift: "Day Shift",
      patients: 4,
      status: "On Duty",
      avatar: "",
      email: "linda.brown@hospital.com",
      phone: "+1 (555) 444-5555",
      employeeId: "NRS-004",
      certification: "RN, CNOR",
    },
    {
      id: 5,
      name: "Patricia Lee",
      department: "Cardiology",
      facility: "Central Medical Center",
      shift: "Day Shift",
      patients: 7,
      status: "Break",
      avatar: "",
      email: "patricia.lee@hospital.com",
      phone: "+1 (555) 555-6666",
      employeeId: "NRS-005",
      certification: "RN, CVRN",
    },
    {
      id: 6,
      name: "David Martinez",
      department: "General Ward",
      facility: "North Side Clinic",
      shift: "Evening Shift",
      patients: 9,
      status: "On Duty",
      avatar: "",
      email: "david.martinez@hospital.com",
      phone: "+1 (555) 666-7777",
      employeeId: "NRS-006",
      certification: "RN",
    },
  ];

  const stats = [
    {
      title: "Total Nurses",
      value: "6",
      icon: HeartPulse,
      description: "Active nursing staff",
    },
    {
      title: "On Duty",
      value: "4",
      icon: UserCheck,
      description: "Currently working",
    },
    {
      title: "Assigned Patients",
      value: "39",
      icon: Activity,
      description: "Total patient load",
    },
    {
      title: "Avg. Patient Load",
      value: "6.5",
      icon: Clock,
      description: "Patients per nurse",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "On Duty":
        return "default";
      case "Break":
        return "secondary";
      case "Off Duty":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Dialog handlers
  const handleView = (nurse: Nurse) => {
    setSelectedNurse(nurse);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (nurse: Nurse) => {
    setSelectedNurse(nurse);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (nurse: Nurse) => {
    setSelectedNurse(nurse);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // TODO: Implement actual delete logic
    console.log("Deleting nurse:", selectedNurse?.id);
    setIsDeleteDialogOpen(false);
    setSelectedNurse(null);
  };

  const handleCreateNurse = () => {
    // TODO: Implement actual create logic
    console.log("Creating new nurse");
    setIsAddDialogOpen(false);
  };

  const handleUpdateNurse = () => {
    // TODO: Implement actual update logic
    console.log("Updating nurse:", selectedNurse?.id);
    setIsEditDialogOpen(false);
    setSelectedNurse(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nurses</h1>
          <p className="text-muted-foreground">
            Manage nursing staff and assignments
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Nurse
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Nurse</DialogTitle>
              <DialogDescription>
                Register a new nurse to the system
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="add-name"
                  placeholder="Jane Doe"
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
                  placeholder="nurse@hospital.com"
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
                <Label htmlFor="add-employee-id" className="text-right">
                  Employee ID
                </Label>
                <Input
                  id="add-employee-id"
                  placeholder="NRS-000"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Department</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="icu">ICU</SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="general">General Ward</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Facility</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select facility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central">
                      Central Medical Center
                    </SelectItem>
                    <SelectItem value="north">North Side Clinic</SelectItem>
                    <SelectItem value="east">East Community Health</SelectItem>
                    <SelectItem value="west">West End Medical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Shift</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select shift" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day Shift</SelectItem>
                    <SelectItem value="evening">Evening Shift</SelectItem>
                    <SelectItem value="night">Night Shift</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-certification" className="text-right">
                  Certification
                </Label>
                <Input
                  id="add-certification"
                  placeholder="RN, BSN"
                  className="col-span-3"
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
              <Button onClick={handleCreateNurse}>Add Nurse</Button>
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

      {/* Nurses Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Nurses</CardTitle>
          <CardDescription>View and manage your nursing staff</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nurse</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Shift</TableHead>
                <TableHead>Patients</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nurses.map((nurse) => (
                <TableRow key={nurse.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={nurse.avatar} alt={nurse.name} />
                        <AvatarFallback>
                          {getInitials(nurse.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{nurse.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{nurse.department}</TableCell>
                  <TableCell>{nurse.facility}</TableCell>
                  <TableCell>{nurse.shift}</TableCell>
                  <TableCell>{nurse.patients}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(nurse.status)}>
                      {nurse.status}
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
                        <DropdownMenuItem onClick={() => handleView(nurse)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEdit(nurse)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(nurse)}
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
            <DialogTitle>Nurse Details</DialogTitle>
            <DialogDescription>
              Detailed information about {selectedNurse?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedNurse && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4 pb-4 border-b">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={selectedNurse.avatar}
                    alt={selectedNurse.name}
                  />
                  <AvatarFallback className="text-lg">
                    {getInitials(selectedNurse.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedNurse.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedNurse.department}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Email</Label>
                <div className="col-span-3">{selectedNurse.email}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Phone</Label>
                <div className="col-span-3">{selectedNurse.phone}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Employee ID</Label>
                <div className="col-span-3">{selectedNurse.employeeId}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Facility</Label>
                <div className="col-span-3">{selectedNurse.facility}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Shift</Label>
                <div className="col-span-3">{selectedNurse.shift}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">
                  Certification
                </Label>
                <div className="col-span-3">{selectedNurse.certification}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">
                  Assigned Patients
                </Label>
                <div className="col-span-3">{selectedNurse.patients}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Status</Label>
                <div className="col-span-3">
                  <Badge variant={getStatusVariant(selectedNurse.status)}>
                    {selectedNurse.status}
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
            <DialogTitle>Edit Nurse</DialogTitle>
            <DialogDescription>
              Update information for {selectedNurse?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedNurse && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="edit-name"
                  defaultValue={selectedNurse.name}
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
                  defaultValue={selectedNurse.email}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="edit-phone"
                  defaultValue={selectedNurse.phone}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Department</Label>
                <Select defaultValue={selectedNurse.department.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="icu">ICU</SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="general ward">General Ward</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Facility</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={selectedNurse.facility} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="central">
                      Central Medical Center
                    </SelectItem>
                    <SelectItem value="north">North Side Clinic</SelectItem>
                    <SelectItem value="east">East Community Health</SelectItem>
                    <SelectItem value="west">West End Medical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Shift</Label>
                <Select
                  defaultValue={selectedNurse.shift
                    .toLowerCase()
                    .replace(" shift", "")}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day Shift</SelectItem>
                    <SelectItem value="evening">Evening Shift</SelectItem>
                    <SelectItem value="night">Night Shift</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Status</Label>
                <Select
                  defaultValue={selectedNurse.status
                    .toLowerCase()
                    .replace(" ", "-")}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="on-duty">On Duty</SelectItem>
                    <SelectItem value="break">Break</SelectItem>
                    <SelectItem value="off-duty">Off Duty</SelectItem>
                  </SelectContent>
                </Select>
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
            <Button onClick={handleUpdateNurse}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove {selectedNurse?.name}?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
              <p className="text-sm text-destructive font-medium mb-2">
                ⚠️ Warning: This action cannot be undone
              </p>
              <p className="text-sm text-muted-foreground">
                Deleting this nurse will remove all associated records and
                patient assignments.
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
              Delete Nurse
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Nurses;
