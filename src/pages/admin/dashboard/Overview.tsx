import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Users,
  Activity,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Hospital,
  UserCheck,
  Calendar,
  AlertCircle,
} from "lucide-react";

function AdminOverview() {
  // Mock data - replace with actual API calls
  const systemMetrics = {
    totalTenants: 45,
    tenantGrowth: 12.5,
    totalUsers: 2847,
    userGrowth: 18.2,
    activeSubscriptions: 42,
    subscriptionGrowth: 8.3,
    totalRevenue: 145890,
    revenueGrowth: 23.1,
  };

  const resourceMetrics = {
    totalFacilities: 156,
    totalDoctors: 432,
    totalNurses: 678,
    totalPatients: 15234,
    todayAppointments: 342,
    pendingAppointments: 89,
    completedToday: 253,
  };

  const recentActivities = [
    {
      id: 1,
      type: "tenant",
      title: "New Tenant Registered",
      description: "City General Hospital joined the platform",
      timestamp: "10 minutes ago",
      icon: Building2,
    },
    {
      id: 2,
      type: "subscription",
      title: "Subscription Upgraded",
      description: "Metro Health upgraded to Enterprise plan",
      timestamp: "1 hour ago",
      icon: TrendingUp,
    },
    {
      id: 3,
      type: "user",
      title: "Bulk User Import",
      description: "150 users imported by Regional Medical Center",
      timestamp: "2 hours ago",
      icon: Users,
    },
    {
      id: 4,
      type: "alert",
      title: "System Alert",
      description: "High API usage detected for tenant #23",
      timestamp: "3 hours ago",
      icon: AlertCircle,
    },
  ];

  const tenantPerformance = [
    { name: "City General Hospital", users: 234, active: true, plan: "Enterprise" },
    { name: "Metro Health", users: 189, active: true, plan: "Enterprise" },
    { name: "Regional Medical Center", users: 167, active: true, plan: "Professional" },
    { name: "Community Clinic", users: 45, active: true, plan: "Basic" },
    { name: "Wellness Center", users: 38, active: true, plan: "Basic" },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            System-wide metrics and application statistics
          </p>
        </div>
      </div>

      {/* System Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemMetrics.totalTenants}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{systemMetrics.tenantGrowth}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemMetrics.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{systemMetrics.userGrowth}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemMetrics.activeSubscriptions}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{systemMetrics.subscriptionGrowth}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${systemMetrics.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{systemMetrics.revenueGrowth}%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Resource Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Facilities</CardTitle>
            <Hospital className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resourceMetrics.totalFacilities}</div>
            <p className="text-xs text-muted-foreground">Across all tenants</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resourceMetrics.totalDoctors}</div>
            <p className="text-xs text-muted-foreground">Active healthcare providers</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Nurses</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resourceMetrics.totalNurses}</div>
            <p className="text-xs text-muted-foreground">Active nursing staff</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resourceMetrics.totalPatients.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Registered patients</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent System Activity</CardTitle>
            <CardDescription>
              Latest activities across the entire platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <activity.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {activity.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Today's Appointments</CardTitle>
            <CardDescription>System-wide appointment metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Today</p>
                  <p className="text-3xl font-bold">{resourceMetrics.todayAppointments}</p>
                </div>
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="font-medium text-green-600">{resourceMetrics.completedToday}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-green-600"
                    style={{ width: `${(resourceMetrics.completedToday / resourceMetrics.todayAppointments) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pending</span>
                  <span className="font-medium text-yellow-600">{resourceMetrics.pendingAppointments}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-yellow-600"
                    style={{ width: `${(resourceMetrics.pendingAppointments / resourceMetrics.todayAppointments) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Tenants Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Tenants</CardTitle>
          <CardDescription>
            Most active tenants by user count
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tenantPerformance.map((tenant, index) => (
              <div key={tenant.name} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-semibold text-primary">
                    #{index + 1}
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">
                      {tenant.name}
                    </p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      tenant.plan === 'Enterprise'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                        : tenant.plan === 'Professional'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                    }`}>
                      {tenant.plan}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tenant.users} active users
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${
                    tenant.active ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <span className="text-sm text-muted-foreground">
                    {tenant.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminOverview;
