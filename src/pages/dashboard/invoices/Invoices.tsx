import { FileText, DollarSign, Clock, CheckCircle } from "lucide-react";
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

function Invoices() {
  // Mock data for invoices
  const invoices = [
    {
      id: 1,
      invoiceNumber: "INV-2024-001",
      patient: "John Anderson",
      facility: "Central Medical Center",
      amount: 350.00,
      issueDate: "2024-01-15",
      dueDate: "2024-02-15",
      status: "Paid",
      paymentMethod: "Credit Card",
    },
    {
      id: 2,
      invoiceNumber: "INV-2024-002",
      patient: "Emma Williams",
      facility: "North Side Clinic",
      amount: 125.00,
      issueDate: "2024-01-18",
      dueDate: "2024-02-18",
      status: "Pending",
      paymentMethod: null,
    },
    {
      id: 3,
      invoiceNumber: "INV-2024-003",
      patient: "Lisa Thompson",
      facility: "East Community Health",
      amount: 480.00,
      issueDate: "2024-01-20",
      dueDate: "2024-02-20",
      status: "Paid",
      paymentMethod: "Insurance",
    },
    {
      id: 4,
      invoiceNumber: "INV-2024-004",
      patient: "Sarah Martinez",
      facility: "Central Medical Center",
      amount: 2150.00,
      issueDate: "2024-01-12",
      dueDate: "2024-02-12",
      status: "Pending",
      paymentMethod: null,
    },
    {
      id: 5,
      invoiceNumber: "INV-2024-005",
      patient: "Michael Brown",
      facility: "North Side Clinic",
      amount: 95.00,
      issueDate: "2024-01-17",
      dueDate: "2024-02-17",
      status: "Paid",
      paymentMethod: "Cash",
    },
    {
      id: 6,
      invoiceNumber: "INV-2024-006",
      patient: "Robert Davis",
      facility: "Central Medical Center",
      amount: 725.00,
      issueDate: "2024-01-05",
      dueDate: "2024-02-05",
      status: "Overdue",
      paymentMethod: null,
    },
  ];

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices
    .filter(inv => inv.status === "Paid")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices
    .filter(inv => inv.status === "Pending")
    .reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = invoices
    .filter(inv => inv.status === "Overdue")
    .reduce((sum, inv) => sum + inv.amount, 0);

  const stats = [
    {
      title: "Total Revenue",
      value: `$${totalAmount.toFixed(2)}`,
      icon: DollarSign,
      description: "All invoices",
    },
    {
      title: "Paid",
      value: `$${paidAmount.toFixed(2)}`,
      icon: CheckCircle,
      description: "Collected payments",
    },
    {
      title: "Pending",
      value: `$${pendingAmount.toFixed(2)}`,
      icon: Clock,
      description: "Awaiting payment",
    },
    {
      title: "Overdue",
      value: `$${overdueAmount.toFixed(2)}`,
      icon: FileText,
      description: "Past due date",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Paid":
        return "default";
      case "Pending":
        return "secondary";
      case "Overdue":
        return "destructive";
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground">
            Manage billing and payment records
          </p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create Invoice
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

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
          <CardDescription>
            View and manage patient invoices and payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice #</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.patient}</TableCell>
                  <TableCell>{invoice.facility}</TableCell>
                  <TableCell className="font-semibold">
                    {formatCurrency(invoice.amount)}
                  </TableCell>
                  <TableCell>{formatDate(invoice.issueDate)}</TableCell>
                  <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                  <TableCell>
                    {invoice.paymentMethod || (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Download
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

export default Invoices;
