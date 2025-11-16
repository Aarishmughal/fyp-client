import { useState } from "react";
import {
  UserRound,
  UserCheck,
  Clock,
  AlertCircle,
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
import { Textarea } from "@/components/ui/textarea";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  facility: string;
  doctor: string;
  lastVisit: string;
  nextAppointment: string | null;
  status: string;
  avatar: string;
  email?: string;
  phone?: string;
  address?: string;
  bloodType?: string;
  allergies?: string;
  medicalHistory?: string;
}

function Patients() {
  // Dialog states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  // Mock data for patients
  const patients: Patient[] = [
    {
      id: 1,
      name: "John Anderson",
      age: 45,
      gender: "Male",
      facility: "Central Medical Center",
      doctor: "Dr. Sarah Johnson",
      lastVisit: "2024-01-15",
      nextAppointment: "2024-01-25",
      status: "Active",
      avatar: "",
      email: "john.anderson@email.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, City, State 12345",
      bloodType: "O+",
      allergies: "Penicillin",
      medicalHistory: "Hypertension, managed with medication",
    },
    {
      id: 2,
      name: "Emma Williams",
      age: 32,
      gender: "Female",
      facility: "North Side Clinic",
      doctor: "Dr. Michael Chen",
      lastVisit: "2024-01-18",
      nextAppointment: "2024-01-22",
      status: "Active",
      avatar: "",
      email: "emma.williams@email.com",
      phone: "+1 (555) 234-5678",
      address: "456 Oak Ave, City, State 12345",
      bloodType: "A+",
      allergies: "None",
      medicalHistory: "Routine checkups, no major conditions",
    },
    {
      id: 3,
      name: "Robert Davis",
      age: 58,
      gender: "Male",
      facility: "Central Medical Center",
      doctor: "Dr. Emily Rodriguez",
      lastVisit: "2024-01-10",
      nextAppointment: null,
      status: "Inactive",
      avatar: "",
      email: "robert.davis@email.com",
      phone: "+1 (555) 345-6789",
      address: "789 Pine Rd, City, State 12345",
      bloodType: "B+",
      allergies: "Latex",
      medicalHistory: "Previous knee surgery (2022)",
    },
    {
      id: 4,
      name: "Lisa Thompson",
      age: 27,
      gender: "Female",
      facility: "East Community Health",
      doctor: "Dr. James Wilson",
      lastVisit: "2024-01-20",
      nextAppointment: "2024-01-23",
      status: "Active",
      avatar: "",
      email: "lisa.thompson@email.com",
      phone: "+1 (555) 456-7890",
      address: "321 Elm St, City, State 12345",
      bloodType: "AB+",
      allergies: "Pollen",
      medicalHistory: "Seasonal allergies",
    },
    {
      id: 5,
      name: "Michael Brown",
      age: 41,
      gender: "Male",
      facility: "North Side Clinic",
      doctor: "Dr. Aisha Patel",
      lastVisit: "2024-01-17",
      nextAppointment: "2024-01-28",
      status: "Active",
      avatar: "",
      email: "michael.brown@email.com",
      phone: "+1 (555) 567-8901",
      address: "654 Maple Dr, City, State 12345",
      bloodType: "O-",
      allergies: "None",
      medicalHistory: "Diabetes Type 2, controlled with diet",
    },
    {
      id: 6,
      name: "Sarah Martinez",
      age: 35,
      gender: "Female",
      facility: "Central Medical Center",
      doctor: "Dr. Sarah Johnson",
      lastVisit: "2024-01-12",
      nextAppointment: "2024-01-24",
      status: "Critical",
      avatar: "",
      email: "sarah.martinez@email.com",
      phone: "+1 (555) 678-9012",
      address: "987 Cedar Ln, City, State 12345",
      bloodType: "A-",
      allergies: "Sulfa drugs",
      medicalHistory: "Recent surgery, post-op monitoring required",
    },
  ];

  const stats = [
    {
      title: "Total Patients",
      value: "6",
      icon: UserRound,
      description: "Registered patients",
    },
    {
      title: "Active Patients",
      value: "5",
      icon: UserCheck,
      description: "Currently in care",
    },
    {
      title: "Upcoming Appointments",
      value: "5",
      icon: Clock,
      description: "Next 7 days",
    },
    {
      title: "Critical Cases",
      value: "1",
      icon: AlertCircle,
      description: "Requires attention",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default";
      case "Critical":
        return "destructive";
      case "Inactive":
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

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not scheduled";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Dialog handlers
  const handleView = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsEditDialogOpen(true);
  };

  const handleDelete = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // TODO: Implement actual delete logic
    console.log("Deleting patient:", selectedPatient?.id);
    setIsDeleteDialogOpen(false);
    setSelectedPatient(null);
  };

  const handleRegisterPatient = () => {
    // TODO: Implement actual create logic
    console.log("Registering new patient");
    setIsAddDialogOpen(false);
  };

  const handleUpdatePatient = () => {
    // TODO: Implement actual update logic
    console.log("Updating patient:", selectedPatient?.id);
    setIsEditDialogOpen(false);
    setSelectedPatient(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
          <p className="text-muted-foreground">
            Manage patient records and information
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Register Patient
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Register New Patient</DialogTitle>
              <DialogDescription>
                Add a new patient to the system
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="add-name"
                  placeholder="John Doe"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-age" className="text-right">
                  Age
                </Label>
                <Input
                  id="add-age"
                  type="number"
                  placeholder="30"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Gender</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="add-email"
                  type="email"
                  placeholder="patient@email.com"
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
                <Label htmlFor="add-address" className="text-right">
                  Address
                </Label>
                <Input
                  id="add-address"
                  placeholder="123 Main St, City, State"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Blood Type</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select blood type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="o-">O-</SelectItem>
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
                <Label className="text-right">Assigned Doctor</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="johnson">Dr. Sarah Johnson</SelectItem>
                    <SelectItem value="chen">Dr. Michael Chen</SelectItem>
                    <SelectItem value="rodriguez">
                      Dr. Emily Rodriguez
                    </SelectItem>
                    <SelectItem value="wilson">Dr. James Wilson</SelectItem>
                    <SelectItem value="patel">Dr. Aisha Patel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="add-allergies" className="text-right">
                  Allergies
                </Label>
                <Input
                  id="add-allergies"
                  placeholder="None or list allergies"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="add-history" className="text-right pt-2">
                  Medical History
                </Label>
                <Textarea
                  id="add-history"
                  placeholder="Brief medical history..."
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
              <Button onClick={handleRegisterPatient}>Register Patient</Button>
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

      {/* Patients Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Patients</CardTitle>
          <CardDescription>View and manage patient records</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Age/Gender</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Assigned Doctor</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Next Appointment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={patient.avatar} alt={patient.name} />
                        <AvatarFallback>
                          {getInitials(patient.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{patient.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {patient.age} / {patient.gender}
                  </TableCell>
                  <TableCell>{patient.facility}</TableCell>
                  <TableCell>{patient.doctor}</TableCell>
                  <TableCell>{formatDate(patient.lastVisit)}</TableCell>
                  <TableCell>{formatDate(patient.nextAppointment)}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(patient.status)}>
                      {patient.status}
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
                        <DropdownMenuItem onClick={() => handleView(patient)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleEdit(patient)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(patient)}
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
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Patient Details</DialogTitle>
            <DialogDescription>
              Complete medical record for {selectedPatient?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedPatient && (
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4 pb-4 border-b">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={selectedPatient.avatar}
                    alt={selectedPatient.name}
                  />
                  <AvatarFallback className="text-lg">
                    {getInitials(selectedPatient.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedPatient.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedPatient.age} years old, {selectedPatient.gender}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Email</Label>
                <div className="col-span-3">{selectedPatient.email}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Phone</Label>
                <div className="col-span-3">{selectedPatient.phone}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Address</Label>
                <div className="col-span-3">{selectedPatient.address}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Blood Type</Label>
                <div className="col-span-3">{selectedPatient.bloodType}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Facility</Label>
                <div className="col-span-3">{selectedPatient.facility}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">
                  Assigned Doctor
                </Label>
                <div className="col-span-3">{selectedPatient.doctor}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Allergies</Label>
                <div className="col-span-3">{selectedPatient.allergies}</div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right font-semibold pt-1">
                  Medical History
                </Label>
                <div className="col-span-3 text-sm">
                  {selectedPatient.medicalHistory}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Last Visit</Label>
                <div className="col-span-3">
                  {formatDate(selectedPatient.lastVisit)}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">
                  Next Appointment
                </Label>
                <div className="col-span-3">
                  {formatDate(selectedPatient.nextAppointment)}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Status</Label>
                <div className="col-span-3">
                  <Badge variant={getStatusVariant(selectedPatient.status)}>
                    {selectedPatient.status}
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
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Patient</DialogTitle>
            <DialogDescription>
              Update information for {selectedPatient?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedPatient && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Full Name
                </Label>
                <Input
                  id="edit-name"
                  defaultValue={selectedPatient.name}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-age" className="text-right">
                  Age
                </Label>
                <Input
                  id="edit-age"
                  type="number"
                  defaultValue={selectedPatient.age}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Gender</Label>
                <Select defaultValue={selectedPatient.gender.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-email" className="text-right">
                  Email
                </Label>
                <Input
                  id="edit-email"
                  type="email"
                  defaultValue={selectedPatient.email}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="edit-phone"
                  defaultValue={selectedPatient.phone}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-address" className="text-right">
                  Address
                </Label>
                <Input
                  id="edit-address"
                  defaultValue={selectedPatient.address}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Blood Type</Label>
                <Select defaultValue={selectedPatient.bloodType?.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a+">A+</SelectItem>
                    <SelectItem value="a-">A-</SelectItem>
                    <SelectItem value="b+">B+</SelectItem>
                    <SelectItem value="b-">B-</SelectItem>
                    <SelectItem value="ab+">AB+</SelectItem>
                    <SelectItem value="ab-">AB-</SelectItem>
                    <SelectItem value="o+">O+</SelectItem>
                    <SelectItem value="o-">O-</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Facility</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={selectedPatient.facility} />
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
                <Label className="text-right">Status</Label>
                <Select defaultValue={selectedPatient.status.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-allergies" className="text-right">
                  Allergies
                </Label>
                <Input
                  id="edit-allergies"
                  defaultValue={selectedPatient.allergies}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="edit-history" className="text-right pt-2">
                  Medical History
                </Label>
                <Textarea
                  id="edit-history"
                  defaultValue={selectedPatient.medicalHistory}
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
            <Button onClick={handleUpdatePatient}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove {selectedPatient?.name}?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
              <p className="text-sm text-destructive font-medium mb-2">
                ⚠️ Warning: This action cannot be undone
              </p>
              <p className="text-sm text-muted-foreground">
                Deleting this patient will permanently remove all medical
                records, appointments, and treatment history.
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
              Delete Patient
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Patients;
