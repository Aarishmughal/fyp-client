import { Building2, MapPin, Users, Activity } from "lucide-react";
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

function Facilities() {
  // Mock data for facilities
  const facilities = [
    {
      id: 1,
      name: "Central Medical Center",
      location: "123 Main St, City",
      type: "Hospital",
      staff: 45,
      patients: 120,
      status: "Active",
    },
    {
      id: 2,
      name: "North Side Clinic",
      location: "456 North Ave, City",
      type: "Clinic",
      staff: 12,
      patients: 35,
      status: "Active",
    },
    {
      id: 3,
      name: "East Community Health",
      location: "789 East Blvd, City",
      type: "Health Center",
      staff: 28,
      patients: 85,
      status: "Active",
    },
    {
      id: 4,
      name: "West End Medical",
      location: "321 West St, City",
      type: "Clinic",
      staff: 8,
      patients: 22,
      status: "Inactive",
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
        <Button>
          <Building2 className="mr-2 h-4 w-4" />
          Add Facility
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
                      variant={facility.status === "Active" ? "default" : "secondary"}
                    >
                      {facility.status}
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

export default Facilities;
