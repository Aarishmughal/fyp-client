import { Pill, FileText, Calendar, AlertTriangle } from "lucide-react";
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

function Prescriptions() {
  // Mock data for prescriptions
  const prescriptions = [
    {
      id: 1,
      patient: "John Anderson",
      doctor: "Dr. Sarah Johnson",
      medication: "Lisinopril 10mg",
      dosage: "Once daily",
      duration: "30 days",
      issueDate: "2024-01-15",
      expiryDate: "2024-02-14",
      status: "Active",
      refills: 2,
    },
    {
      id: 2,
      patient: "Emma Williams",
      doctor: "Dr. Michael Chen",
      medication: "Amoxicillin 500mg",
      dosage: "Three times daily",
      duration: "7 days",
      issueDate: "2024-01-18",
      expiryDate: "2024-01-25",
      status: "Active",
      refills: 0,
    },
    {
      id: 3,
      patient: "Lisa Thompson",
      doctor: "Dr. James Wilson",
      medication: "Metformin 850mg",
      dosage: "Twice daily",
      duration: "90 days",
      issueDate: "2024-01-10",
      expiryDate: "2024-04-10",
      status: "Active",
      refills: 3,
    },
    {
      id: 4,
      patient: "Sarah Martinez",
      doctor: "Dr. Sarah Johnson",
      medication: "Atorvastatin 20mg",
      dosage: "Once daily at bedtime",
      duration: "90 days",
      issueDate: "2024-01-20",
      expiryDate: "2024-04-20",
      status: "Active",
      refills: 5,
    },
    {
      id: 5,
      patient: "Michael Brown",
      doctor: "Dr. Aisha Patel",
      medication: "Hydrocortisone Cream 1%",
      dosage: "Apply twice daily",
      duration: "14 days",
      issueDate: "2024-01-17",
      expiryDate: "2024-01-31",
      status: "Expiring Soon",
      refills: 0,
    },
    {
      id: 6,
      patient: "Robert Davis",
      doctor: "Dr. Emily Rodriguez",
      medication: "Ibuprofen 400mg",
      dosage: "As needed for pain",
      duration: "30 days",
      issueDate: "2023-12-15",
      expiryDate: "2024-01-14",
      status: "Expired",
      refills: 0,
    },
  ];

  const stats = [
    {
      title: "Total Prescriptions",
      value: "6",
      icon: Pill,
      description: "All prescriptions",
    },
    {
      title: "Active",
      value: "4",
      icon: FileText,
      description: "Currently valid",
    },
    {
      title: "Expiring Soon",
      value: "1",
      icon: Calendar,
      description: "Within 7 days",
    },
    {
      title: "Expired",
      value: "1",
      icon: AlertTriangle,
      description: "Requires renewal",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "default";
      case "Expiring Soon":
        return "secondary";
      case "Expired":
        return "outline";
      default:
        return "secondary";
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
          <h1 className="text-3xl font-bold tracking-tight">Prescriptions</h1>
          <p className="text-muted-foreground">
            Manage patient prescriptions and medications
          </p>
        </div>
        <Button>
          <Pill className="mr-2 h-4 w-4" />
          New Prescription
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

      {/* Prescriptions Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Prescriptions</CardTitle>
          <CardDescription>
            View and manage patient prescriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Refills</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prescriptions.map((prescription) => (
                <TableRow key={prescription.id}>
                  <TableCell className="font-medium">{prescription.patient}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{prescription.medication}</span>
                      <span className="text-xs text-muted-foreground">
                        {prescription.duration}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{prescription.dosage}</TableCell>
                  <TableCell>{prescription.doctor}</TableCell>
                  <TableCell>{formatDate(prescription.issueDate)}</TableCell>
                  <TableCell>{formatDate(prescription.expiryDate)}</TableCell>
                  <TableCell>{prescription.refills} remaining</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(prescription.status)}>
                      {prescription.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Renew
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

export default Prescriptions;
