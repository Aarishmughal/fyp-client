import { HeartPulse, UserCheck, Clock, Activity } from "lucide-react";
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

function Nurses() {
  // Mock data for nurses
  const nurses = [
    {
      id: 1,
      name: "Jennifer Smith",
      department: "Emergency",
      facility: "Central Medical Center",
      shift: "Day Shift",
      patients: 8,
      status: "On Duty",
      avatar: "",
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
        <Button>
          <HeartPulse className="mr-2 h-4 w-4" />
          Add Nurse
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

      {/* Nurses Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Nurses</CardTitle>
          <CardDescription>
            View and manage your nursing staff
          </CardDescription>
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
                        <AvatarFallback>{getInitials(nurse.name)}</AvatarFallback>
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

export default Nurses;
