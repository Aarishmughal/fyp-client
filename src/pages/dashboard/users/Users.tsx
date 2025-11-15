import { UsersRound, UserCheck, Shield, Clock } from "lucide-react";
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

function Users() {
  // Mock data for team members
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@healthcare.com",
      role: "Admin",
      facility: "All Facilities",
      status: "Active",
      lastLogin: "2024-01-20 09:30 AM",
      avatar: "",
    },
    {
      id: 2,
      name: "Bob Williams",
      email: "bob.williams@healthcare.com",
      role: "Manager",
      facility: "Central Medical Center",
      status: "Active",
      lastLogin: "2024-01-21 08:15 AM",
      avatar: "",
    },
    {
      id: 3,
      name: "Carol Martinez",
      email: "carol.martinez@healthcare.com",
      role: "Receptionist",
      facility: "North Side Clinic",
      status: "Active",
      lastLogin: "2024-01-21 10:45 AM",
      avatar: "",
    },
    {
      id: 4,
      name: "David Lee",
      email: "david.lee@healthcare.com",
      role: "Billing Staff",
      facility: "East Community Health",
      status: "Active",
      lastLogin: "2024-01-20 03:20 PM",
      avatar: "",
    },
    {
      id: 5,
      name: "Emily Chen",
      email: "emily.chen@healthcare.com",
      role: "Manager",
      facility: "Central Medical Center",
      status: "Inactive",
      lastLogin: "2024-01-10 02:15 PM",
      avatar: "",
    },
    {
      id: 6,
      name: "Frank Rodriguez",
      email: "frank.rodriguez@healthcare.com",
      role: "Receptionist",
      facility: "North Side Clinic",
      status: "Active",
      lastLogin: "2024-01-21 09:00 AM",
      avatar: "",
    },
  ];

  const stats = [
    {
      title: "Total Users",
      value: "6",
      icon: UsersRound,
      description: "Team members",
    },
    {
      title: "Active Users",
      value: "5",
      icon: UserCheck,
      description: "Currently active",
    },
    {
      title: "Admins",
      value: "1",
      icon: Shield,
      description: "Administrator access",
    },
    {
      title: "Last 24 Hours",
      value: "4",
      icon: Clock,
      description: "Recent logins",
    },
  ];

  const getRoleVariant = (role: string) => {
    switch (role) {
      case "Admin":
        return "default";
      case "Manager":
        return "secondary";
      case "Receptionist":
        return "outline";
      case "Billing Staff":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getStatusVariant = (status: string) => {
    return status === "Active" ? "default" : "outline";
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
          <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
          <p className="text-muted-foreground">
            Manage users and access permissions
          </p>
        </div>
        <Button>
          <UsersRound className="mr-2 h-4 w-4" />
          Invite User
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

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Team Members</CardTitle>
          <CardDescription>
            View and manage user accounts and permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Facility</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={getRoleVariant(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.facility}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.lastLogin}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(user.status)}>
                      {user.status}
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

export default Users;
