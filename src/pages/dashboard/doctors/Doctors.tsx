import { Stethoscope, UserCheck, Calendar, Clock } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Doctors() {
  // Mock data for doctors
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiology",
      facility: "Central Medical Center",
      patients: 45,
      appointments: 12,
      status: "Available",
      avatar: "",
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
        <Button>
          <Stethoscope className="mr-2 h-4 w-4" />
          Add Doctor
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
                        <AvatarFallback>{getInitials(doctor.name)}</AvatarFallback>
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
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
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

export default Doctors;
