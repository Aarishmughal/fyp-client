import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building2,
  MoreHorizontal,
  Plus,
  Search,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { useState } from "react";

function Tenants() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<any>(null);

  // Mock data - replace with actual API calls
  const tenants = [
    {
      id: 1,
      name: "City General Hospital",
      email: "admin@citygeneral.com",
      plan: "Enterprise",
      status: "active",
      users: 234,
      facilities: 8,
      joinDate: "2024-01-15",
      lastActive: "2 minutes ago",
      revenue: 2499,
    },
    {
      id: 2,
      name: "Metro Health",
      email: "contact@metrohealth.com",
      plan: "Enterprise",
      status: "active",
      users: 189,
      facilities: 5,
      joinDate: "2024-02-03",
      lastActive: "5 minutes ago",
      revenue: 2499,
    },
    {
      id: 3,
      name: "Regional Medical Center",
      email: "info@regionalmed.com",
      plan: "Professional",
      status: "active",
      users: 167,
      facilities: 4,
      joinDate: "2024-02-20",
      lastActive: "1 hour ago",
      revenue: 999,
    },
    {
      id: 4,
      name: "Community Clinic",
      email: "admin@communityclinic.com",
      plan: "Basic",
      status: "active",
      users: 45,
      facilities: 2,
      joinDate: "2024-03-10",
      lastActive: "3 hours ago",
      revenue: 299,
    },
    {
      id: 5,
      name: "Wellness Center",
      email: "contact@wellnesscenter.com",
      plan: "Basic",
      status: "trial",
      users: 38,
      facilities: 1,
      joinDate: "2024-03-25",
      lastActive: "1 day ago",
      revenue: 0,
    },
    {
      id: 6,
      name: "Downtown Medical",
      email: "admin@downtownmed.com",
      plan: "Professional",
      status: "suspended",
      users: 78,
      facilities: 3,
      joinDate: "2024-01-28",
      lastActive: "1 week ago",
      revenue: 999,
    },
  ];

  const stats = {
    totalTenants: 45,
    activeTenants: 42,
    trialTenants: 3,
    monthlyRevenue: 87456,
  };

  const filteredTenants = tenants.filter(
    (tenant) =>
      tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return (
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300">
            Enterprise
          </Badge>
        );
      case "Professional":
        return (
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
            Professional
          </Badge>
        );
      case "Basic":
        return (
          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            Basic
          </Badge>
        );
      default:
        return <Badge variant="outline">{plan}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300">
            Active
          </Badge>
        );
      case "trial":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300">
            Trial
          </Badge>
        );
      case "suspended":
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300">
            Suspended
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleViewTenant = (tenant: any) => {
    setSelectedTenant(tenant);
    setIsViewDialogOpen(true);
  };

  const handleEditTenant = (tenant: any) => {
    setSelectedTenant(tenant);
    setIsEditDialogOpen(true);
  };

  const handleDeleteTenant = (tenant: any) => {
    setSelectedTenant(tenant);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tenants</h1>
          <p className="text-muted-foreground">
            Manage all tenant organizations and subscriptions
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Tenant
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Tenant</DialogTitle>
              <DialogDescription>
                Create a new tenant organization. Fill in the details below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Organization Name
                </Label>
                <Input
                  id="name"
                  placeholder="City General Hospital"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="plan" className="text-right">
                  Subscription Plan
                </Label>
                <Select defaultValue="basic">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="facilities" className="text-right">
                  Facilities
                </Label>
                <Input
                  id="facilities"
                  type="number"
                  placeholder="1"
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
              <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>
                Create Tenant
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalTenants}</div>
            <p className="text-xs text-muted-foreground">
              All registered organizations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Tenants
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeTenants}</div>
            <p className="text-xs text-muted-foreground">
              With active subscriptions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Trial Accounts
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.trialTenants}</div>
            <p className="text-xs text-muted-foreground">
              Currently in trial period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Revenue
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${stats.monthlyRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Recurring revenue (MRR)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tenants Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Tenants</CardTitle>
              <CardDescription>
                View and manage all tenant organizations
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tenants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 w-[300px]"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Facilities</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTenants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8">
                    <div className="flex flex-col items-center gap-2">
                      <Building2 className="h-8 w-8 text-muted-foreground" />
                      <p className="text-muted-foreground">No tenants found</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredTenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{tenant.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {tenant.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getPlanBadge(tenant.plan)}</TableCell>
                    <TableCell>{getStatusBadge(tenant.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{tenant.users}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span>{tenant.facilities}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">${tenant.revenue}/mo</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {tenant.lastActive}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem
                            onClick={() => handleViewTenant(tenant)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleEditTenant(tenant)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Tenant
                          </DropdownMenuItem>
                          <DropdownMenuItem>Manage Users</DropdownMenuItem>
                          <DropdownMenuItem>View Analytics</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Change Plan</DropdownMenuItem>
                          <DropdownMenuItem>
                            {tenant.status === "suspended"
                              ? "Activate"
                              : "Suspend"}
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDeleteTenant(tenant)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Tenant
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Tenant Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Tenant Details</DialogTitle>
            <DialogDescription>
              Detailed information about {selectedTenant?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedTenant && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Organization</Label>
                <div className="col-span-3">{selectedTenant.name}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Email</Label>
                <div className="col-span-3">{selectedTenant.email}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Plan</Label>
                <div className="col-span-3">
                  {getPlanBadge(selectedTenant.plan)}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Status</Label>
                <div className="col-span-3">
                  {getStatusBadge(selectedTenant.status)}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Users</Label>
                <div className="col-span-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  {selectedTenant.users}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Facilities</Label>
                <div className="col-span-3 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  {selectedTenant.facilities}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Revenue</Label>
                <div className="col-span-3">${selectedTenant.revenue}/mo</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Join Date</Label>
                <div className="col-span-3">{selectedTenant.joinDate}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right font-semibold">Last Active</Label>
                <div className="col-span-3">{selectedTenant.lastActive}</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsViewDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Tenant Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Tenant</DialogTitle>
            <DialogDescription>
              Update tenant information for {selectedTenant?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedTenant && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">
                  Organization Name
                </Label>
                <Input
                  id="edit-name"
                  defaultValue={selectedTenant.name}
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
                  defaultValue={selectedTenant.email}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-plan" className="text-right">
                  Subscription Plan
                </Label>
                <Select defaultValue={selectedTenant.plan.toLowerCase()}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-facilities" className="text-right">
                  Facilities
                </Label>
                <Input
                  id="edit-facilities"
                  type="number"
                  defaultValue={selectedTenant.facilities}
                  className="col-span-3"
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
            <Button type="submit" onClick={() => setIsEditDialogOpen(false)}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Tenant</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedTenant?.name}? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-destructive/10 p-4 border border-destructive/20">
              <p className="text-sm text-destructive font-medium">
                ⚠️ Warning: This will permanently delete:
              </p>
              <ul className="mt-2 text-sm text-destructive/80 list-disc list-inside space-y-1">
                <li>{selectedTenant?.users} users</li>
                <li>{selectedTenant?.facilities} facilities</li>
                <li>All associated data and records</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                // Handle delete logic here
                setIsDeleteDialogOpen(false);
              }}
            >
              Delete Tenant
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Tenants;
