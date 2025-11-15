import { Calendar, CalendarCheck, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

function Appointments() {
  // Mock data for appointments
  const appointments = [
    {
      id: 1,
      patient: "John Anderson",
      doctor: "Dr. Sarah Johnson",
      facility: "Central Medical Center",
      date: "2024-01-22",
      time: "09:00 AM",
      type: "Consultation",
      status: "Confirmed",
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
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
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
                  <TableCell className="font-medium">{appointment.patient}</TableCell>
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
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Reschedule
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Appointments;
