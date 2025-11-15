import { UserRound, UserCheck, Clock, AlertCircle } from "lucide-react";
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

function Patients() {
  // Mock data for patients
  const patients = [
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
      year: "numeric"
    });
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
        <Button>
          <UserRound className="mr-2 h-4 w-4" />
          Register Patient
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

      {/* Patients Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Patients</CardTitle>
          <CardDescription>
            View and manage patient records
          </CardDescription>
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
                        <AvatarFallback>{getInitials(patient.name)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{patient.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{patient.age} / {patient.gender}</TableCell>
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

export default Patients;
