import { useState } from "react";
import {
  Calendar,
  CalendarCheck,
  Clock,
  Users,
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

interface Appointment {
  id: number;
  patient: string;
  doctor: string;
  facility: string;
  date: string;
  time: string;
  type: string;
  status: string;
  patientPhone?: string;
  patientEmail?: string;
  notes?: string;
  reason?: string;
}

function Appointments() {
  // Dialog states
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isRescheduleDialogOpen, setIsRescheduleDialogOpen] = useState(false);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  // Mock data for appointments
  const appointments: Appointment[] = [
    {
      id: 1,
      patient: "John Anderson",
      doctor: "Dr. Sarah Johnson",
      facility: "Central Medical Center",
      date: "2024-01-22",
      time: "09:00 AM",
      type: "Consultation",
      status: "Confirmed",
      patientPhone: "+1 (555) 123-4567",
      patientEmail: "john.anderson@email.com",
      reason: "Annual checkup",
      notes: "Patient reports no major concerns",
    },
    {
      id: 2,
      patient: "Emma Williams",
      doctor: "Dr. Michael Chen",
      facility: "North Side Clinic",
      date: "2024-01-22",
      time: "10:30 AM",
      type: "Follow-up",
      status: "Confirmed",
      patientPhone: "+1 (555) 234-5678",
      patientEmail: "emma.williams@email.com",
      reason: "Post-treatment follow-up",
      notes: "Review test results from previous visit",
    },
    {
      id: 3,
      patient: "Lisa Thompson",
      doctor: "Dr. James Wilson",
      facility: "East Community Health",
      date: "2024-01-23",
      time: "02:00 PM",
      type: "Check-up",
      status: "Pending",
      patientPhone: "+1 (555) 456-7890",
      patientEmail: "lisa.thompson@email.com",
      reason: "Routine health screening",
      notes: "Fasting required before appointment",
    },
    {
      id: 4,
      patient: "Sarah Martinez",
      doctor: "Dr. Sarah Johnson",
      facility: "Central Medical Center",
      date: "2024-01-24",
      time: "11:00 AM",
      type: "Emergency",
      status: "Urgent",
      patientPhone: "+1 (555) 678-9012",
      patientEmail: "sarah.martinez@email.com",
      reason: "Chest pain assessment",
      notes: "Requires immediate attention",
    },
    {
      id: 5,
      patient: "Michael Brown",
      doctor: "Dr. Aisha Patel",
      facility: "North Side Clinic",
      date: "2024-01-25",
      time: "03:30 PM",
      type: "Consultation",
      status: "Confirmed",
      patientPhone: "+1 (555) 567-8901",
      patientEmail: "michael.brown@email.com",
      reason: "Skin condition consultation",
      notes: "Bring previous medication list",
    },
    {
      id: 6,
      patient: "Robert Davis",
      doctor: "Dr. Emily Rodriguez",
      facility: "Central Medical Center",
      date: "2024-01-26",
      time: "01:00 PM",
      type: "Surgery Consultation",
      status: "Cancelled",
      patientPhone: "+1 (555) 345-6789",
      patientEmail: "robert.davis@email.com",
      reason: "Pre-operative consultation",
      notes: "Cancelled by patient",
    },
  ];

  const stats = [
    {
      title: "Total Appointments",
      value: "6",
      icon: Calendar,
      description: "This week",
    },
    {
      title: "Confirmed",
      value: "3",
      icon: CalendarCheck,
      description: "Ready to proceed",
    },
    {
      title: "Pending",
      value: "1",
      icon: Clock,
      description: "Awaiting confirmation",
    },
    {
      title: "Unique Patients",
      value: "6",
      icon: Users,
      description: "Different patients",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "default";
      case "Pending":
        return "secondary";
      case "Urgent":
        return "destructive";
      case "Cancelled":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Emergency":
        return "text-red-600 dark:text-red-400";
      case "Surgery Consultation":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-muted-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Dialog handlers
  const handleView = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsViewDialogOpen(true);
  };

  const handleReschedule = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsRescheduleDialogOpen(true);
  };

  const handleCancel = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsCancelDialogOpen(true);
  };

  const handleConfirmCancel = () => {
    // TODO: Implement actual cancel logic
    console.log("Cancelling appointment:", selectedAppointment?.id);
    setIsCancelDialogOpen(false);
    setSelectedAppointment(null);
  };

  const handleScheduleAppointment = () => {
    // TODO: Implement actual schedule logic
    console.log("Scheduling new appointment");
    setIsScheduleDialogOpen(false);
  };

  const handleUpdateAppointment = () => {
    // TODO: Implement actual reschedule logic
    console.log("Rescheduling appointment:", selectedAppointment?.id);
    setIsRescheduleDialogOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">
            Schedule and manage patient appointments
          </p>
        </div>
        <Dialog
          open={isScheduleDialogOpen}
          onOpenChange={setIsScheduleDialogOpen}
        >
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
              <DialogDescription>
                Create a new appointment for a patient
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Patient</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anderson">John Anderson</SelectItem>
                    <SelectItem value="williams">Emma Williams</SelectItem>
                    <SelectItem value="thompson">Lisa Thompson</SelectItem>
                    <SelectItem value="martinez">Sarah Martinez</SelectItem>
                    <SelectItem value="brown">Michael Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Doctor</Label>
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
                <Label htmlFor="schedule-date" className="text-right">
                  Date
                </Label>
                <Input id="schedule-date" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="schedule-time" className="text-right">
                  Time
                </Label>
                <Input id="schedule-time" type="time" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Type</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="follow-up">Follow-up</SelectItem>
                    <SelectItem value="check-up">Check-up</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="surgery">
                      Surgery Consultation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="schedule-reason" className="text-right">
                  Reason
                </Label>
                <Input
                  id="schedule-reason"
                  placeholder="Reason for visit"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="schedule-notes" className="text-right pt-2">
                  Notes
                </Label>
                <Textarea
                  id="schedule-notes"
                  placeholder="Additional notes..."
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsScheduleDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleScheduleAppointment}>
                Schedule Appointment
              </Button>
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

      {/* Appointments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>
            View and manage scheduled appointments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-medium">
                    {appointment.patient}
                  </TableCell>
                  <TableCell>{appointment.doctor}</TableCell>
                  <TableCell>{appointment.facility}</TableCell>
                  <TableCell>{formatDate(appointment.date)}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>
                    <span className={getTypeColor(appointment.type)}>
                      {appointment.type}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(appointment.status)}>
                      {appointment.status}
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
                        <DropdownMenuItem
                          onClick={() => handleView(appointment)}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleReschedule(appointment)}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Reschedule
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleCancel(appointment)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Cancel
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
            <DialogTitle>Appointment Details</DialogTitle>
            <DialogDescription>
              Complete information about this appointment
            </DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="grid gap-4 py-4">
              <div className="pb-4 border-b">
                <h3 className="text-lg font-semibold">
                  {selectedAppointment.patient}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedAppointment.type} Appointment
                </p>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Patient</Label>
                <div className="col-span-3">{selectedAppointment.patient}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Phone</Label>
                <div className="col-span-3">
                  {selectedAppointment.patientPhone}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Email</Label>
                <div className="col-span-3">
                  {selectedAppointment.patientEmail}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Doctor</Label>
                <div className="col-span-3">{selectedAppointment.doctor}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Facility</Label>
                <div className="col-span-3">{selectedAppointment.facility}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Date & Time</Label>
                <div className="col-span-3">
                  {formatDate(selectedAppointment.date)} at{" "}
                  {selectedAppointment.time}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Type</Label>
                <div className="col-span-3">{selectedAppointment.type}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Reason</Label>
                <div className="col-span-3">{selectedAppointment.reason}</div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right font-semibold pt-1">Notes</Label>
                <div className="col-span-3 text-sm">
                  {selectedAppointment.notes}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Status</Label>
                <div className="col-span-3">
                  <Badge variant={getStatusVariant(selectedAppointment.status)}>
                    {selectedAppointment.status}
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

      {/* Reschedule Dialog */}
      <Dialog
        open={isRescheduleDialogOpen}
        onOpenChange={setIsRescheduleDialogOpen}
      >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Reschedule Appointment</DialogTitle>
            <DialogDescription>
              Update appointment time for {selectedAppointment?.patient}
            </DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Patient</Label>
                <div className="col-span-3 font-medium">
                  {selectedAppointment.patient}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Doctor</Label>
                <Select defaultValue={selectedAppointment.doctor}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dr. Sarah Johnson">
                      Dr. Sarah Johnson
                    </SelectItem>
                    <SelectItem value="Dr. Michael Chen">
                      Dr. Michael Chen
                    </SelectItem>
                    <SelectItem value="Dr. Emily Rodriguez">
                      Dr. Emily Rodriguez
                    </SelectItem>
                    <SelectItem value="Dr. James Wilson">
                      Dr. James Wilson
                    </SelectItem>
                    <SelectItem value="Dr. Aisha Patel">
                      Dr. Aisha Patel
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Facility</Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder={selectedAppointment.facility} />
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
                <Label htmlFor="reschedule-date" className="text-right">
                  New Date
                </Label>
                <Input
                  id="reschedule-date"
                  type="date"
                  defaultValue={selectedAppointment.date}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reschedule-time" className="text-right">
                  New Time
                </Label>
                <Input
                  id="reschedule-time"
                  type="time"
                  defaultValue={selectedAppointment.time}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Type</Label>
                <Select defaultValue={selectedAppointment.type.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="follow-up">Follow-up</SelectItem>
                    <SelectItem value="check-up">Check-up</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="surgery consultation">
                      Surgery Consultation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="reschedule-notes" className="text-right pt-2">
                  Notes
                </Label>
                <Textarea
                  id="reschedule-notes"
                  defaultValue={selectedAppointment.notes}
                  className="col-span-3"
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsRescheduleDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleUpdateAppointment}>
              Reschedule Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cancel Confirmation Dialog */}
      <Dialog open={isCancelDialogOpen} onOpenChange={setIsCancelDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cancel Appointment</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this appointment?
            </DialogDescription>
          </DialogHeader>
          {selectedAppointment && (
            <div className="py-4">
              <div className="rounded-lg bg-muted p-4 mb-4">
                <div className="text-sm space-y-2">
                  <div>
                    <span className="font-semibold">Patient:</span>{" "}
                    {selectedAppointment.patient}
                  </div>
                  <div>
                    <span className="font-semibold">Doctor:</span>{" "}
                    {selectedAppointment.doctor}
                  </div>
                  <div>
                    <span className="font-semibold">Date & Time:</span>{" "}
                    {formatDate(selectedAppointment.date)} at{" "}
                    {selectedAppointment.time}
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
                <p className="text-sm text-destructive font-medium mb-2">
                  ⚠️ Warning: This action cannot be undone
                </p>
                <p className="text-sm text-muted-foreground">
                  The patient will be notified of the cancellation via email and
                  SMS.
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCancelDialogOpen(false)}
            >
              Keep Appointment
            </Button>
            <Button variant="destructive" onClick={handleConfirmCancel}>
              Cancel Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Appointments;
