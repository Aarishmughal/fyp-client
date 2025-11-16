import { useState } from "react";
import {
  Stethoscope,
  UserCheck,
  Calendar,
  Clock,
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

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  facility: string;
  patients: number;
  appointments: number;
  status: string;
  avatar: string;
  email?: string;
  phone?: string;
  licenseNumber?: string;
  experienceYears?: number;
}

function Doctors() {
  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Mock data for doctors
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiology",
      facility: "Central Medical Center",
      patients: 45,
      appointments: 12,
      status: "Available",
      avatar: "",
      email: "sarah.johnson@hospital.com",
      phone: "+1 (555) 123-4567",
      licenseNumber: "MD-12345",
      experienceYears: 12,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Pediatrics",
      facility: "North Side Clinic",
      patients: 38,
      appointments: 8,
      status: "In Session",
      avatar: "",
      email: "michael.chen@hospital.com",
      phone: "+1 (555) 234-5678",
      licenseNumber: "MD-23456",
      experienceYears: 8,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Orthopedics",
      facility: "Central Medical Center",
      patients: 52,
      appointments: 15,
      status: "Available",
      avatar: "",
      email: "emily.rodriguez@hospital.com",
      phone: "+1 (555) 345-6789",
      licenseNumber: "MD-34567",
      experienceYears: 15,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "General Medicine",
      facility: "East Community Health",
      patients: 67,
      appointments: 20,
      status: "On Leave",
      avatar: "",
      email: "james.wilson@hospital.com",
      phone: "+1 (555) 456-7890",
      licenseNumber: "MD-45678",
      experienceYears: 20,
    },
    {
      id: 5,
      name: "Dr. Aisha Patel",
      specialization: "Dermatology",
      facility: "North Side Clinic",
      patients: 41,
      appointments: 10,
      status: "Available",
      avatar: "",
      email: "aisha.patel@hospital.com",
      phone: "+1 (555) 567-8901",
      licenseNumber: "MD-56789",
      experienceYears: 10,
    },
  ];

  const stats = [
    {
      title: "Total Doctors",
      value: "5",
      icon: Stethoscope,
      description: "Active practitioners",
    },
    {
      title: "Available Now",
      value: "3",
      icon: UserCheck,
      description: "Ready for appointments",
    },
    {
      title: "Today's Appointments",
      value: "65",
      icon: Calendar,
      description: "Scheduled consultations",
    },
    {
      title: "Avg. Wait Time",
      value: "15 min",
      icon: Clock,
      description: "Current average",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Available":
        return "default";
      case "In Session":
        return "secondary";
      case "On Leave":
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
  const handleView = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // TODO: Implement actual delete logic
    console.log("Deleting doctor:", selectedDoctor?.id);
    setIsDeleteDialogOpen(false);
    setSelectedDoctor(null);
  };

  const handleCreateDoctor = () => {
    // TODO: Implement actual create logic
    console.log("Creating new doctor");
    setIsAddDialogOpen(false);
  };

  const handleUpdateDoctor = () => {
    // TODO: Implement actual update logic
    console.log("Updating doctor:", selectedDoctor?.id);
    setIsEditDialogOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Doctors</h1>
          <p className="text-muted-foreground">
            Manage doctors and healthcare practitioners
          </p>
        </div>
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
                Register a new doctor to the system
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="add-name"
                  placeholder="Dr. John Doe"
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
                  placeholder="doctor@hospital.com"
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
                <Label className="text-right">Specialization</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="general">General Medicine</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
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
                <Label htmlFor="add-license" className="text-right">
                  License Number
                </Label>
                <Input
                  id="add-license"
                  placeholder="MD-00000"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-experience" className="text-right">
                  Experience (Years)
                </Label>
                <Input
                  id="add-experience"
                  type="number"
                  placeholder="0"
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
              <Button onClick={handleCreateDoctor}>Add Doctor</Button>
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

      {/* Doctors Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Doctors</CardTitle>
          <CardDescription>
            View and manage your medical practitioners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Specialization</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Patients</TableHead>
                <TableHead>Appointments</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {doctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={doctor.avatar} alt={doctor.name} />
                        <AvatarFallback>
                          {getInitials(doctor.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{doctor.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{doctor.specialization}</TableCell>
                  <TableCell>{doctor.facility}</TableCell>
                  <TableCell>{doctor.patients}</TableCell>
                  <TableCell>{doctor.appointments}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(doctor.status)}>
                      {doctor.status}
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
                        <DropdownMenuItem onClick={() => handleView(doctor)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEdit(doctor)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(doctor)}
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
            <DialogTitle>Doctor Details</DialogTitle>
            <DialogDescription>
              Detailed information about {selectedDoctor?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedDoctor && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4 pb-4 border-b">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={selectedDoctor.avatar}
                    alt={selectedDoctor.name}
                  />
                  <AvatarFallback className="text-lg">
                    {getInitials(selectedDoctor.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedDoctor.specialization}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Email</Label>
                <div className="col-span-3">{selectedDoctor.email}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Phone</Label>
                <div className="col-span-3">{selectedDoctor.phone}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Facility</Label>
                <div className="col-span-3">{selectedDoctor.facility}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">License</Label>
                <div className="col-span-3">{selectedDoctor.licenseNumber}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Experience</Label>
                <div className="col-span-3">
                  {selectedDoctor.experienceYears} years
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">
                  Active Patients
                </Label>
                <div className="col-span-3">{selectedDoctor.patients}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Appointments</Label>
                <div className="col-span-3">
                  {selectedDoctor.appointments} scheduled
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Status</Label>
                <div className="col-span-3">
                  <Badge variant={getStatusVariant(selectedDoctor.status)}>
                    {selectedDoctor.status}
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
            <DialogTitle>Edit Doctor</DialogTitle>
            <DialogDescription>
              Update information for {selectedDoctor?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedDoctor && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="edit-name"
                  defaultValue={selectedDoctor.name}
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
                  defaultValue={selectedDoctor.email}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="edit-phone"
                  defaultValue={selectedDoctor.phone}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Specialization</Label>
                <Select
                  defaultValue={selectedDoctor.specialization.toLowerCase()}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="general medicine">
                      General Medicine
                    </SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Facility</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={selectedDoctor.facility} />
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
                <Label htmlFor="edit-license" className="text-right">
                  License Number
                </Label>
                <Input
                  id="edit-license"
                  defaultValue={selectedDoctor.licenseNumber}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Status</Label>
                <Select
                  defaultValue={selectedDoctor.status
                    .toLowerCase()
                    .replace(" ", "-")}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="in-session">In Session</SelectItem>
                    <SelectItem value="on-leave">On Leave</SelectItem>
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
            <Button onClick={handleUpdateDoctor}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove {selectedDoctor?.name}?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
              <p className="text-sm text-destructive font-medium mb-2">
                ⚠️ Warning: This action cannot be undone
              </p>
              <p className="text-sm text-muted-foreground">
                Deleting this doctor will remove all associated records,
                appointments, and patient assignments.
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
              Delete Doctor
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Doctors;
