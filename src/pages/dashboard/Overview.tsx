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
  Calendar,
  TrendingUp,
  Stethoscope,
  HeartPulse,
  UserRound,
  Activity,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

function Overview() {
  // Mock data - replace with actual API calls for tenant-specific data
  const tenantInfo = {
    name: "City General Hospital",
    plan: "Enterprise",
    usersCount: 234,
    facilitiesCount: 8,
  };

  const tenantMetrics = {
    totalDoctors: 45,
    doctorGrowth: 8.3,
    totalNurses: 89,
    nurseGrowth: 12.1,
    totalPatients: 1543,
    patientGrowth: 15.7,
    todayAppointments: 127,
    appointmentGrowth: 5.2,
  };

  const appointmentStats = {
    scheduled: 127,
    completed: 98,
    pending: 23,
    cancelled: 6,
  };

  const recentActivities = [
    {
      id: 1,
      type: "appointment",
      title: "New Appointment Scheduled",
      description: "Dr. Sarah Johnson - Patient consultation at 2:00 PM",
      timestamp: "15 minutes ago",
      icon: Calendar,
    },
    {
      id: 2,
      type: "patient",
      title: "New Patient Registered",
      description: "Michael Chen added to the system",
      timestamp: "1 hour ago",
      icon: UserRound,
    },
    {
      id: 3,
      type: "staff",
      title: "Staff Member Added",
      description: "Dr. Emily Roberts joined the cardiology department",
      timestamp: "2 hours ago",
      icon: Stethoscope,
    },
    {
      id: 4,
      type: "appointment",
      title: "Appointment Completed",
      description: "Follow-up consultation with Dr. Mike Anderson",
      timestamp: "3 hours ago",
      icon: CheckCircle,
    },
  ];

  const departmentStats = [
    { name: "Cardiology", patients: 234, doctors: 8, utilization: 87 },
    { name: "Neurology", patients: 189, doctors: 6, utilization: 76 },
    { name: "Pediatrics", patients: 312, doctors: 12, utilization: 92 },
    { name: "Orthopedics", patients: 156, doctors: 7, utilization: 68 },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">
            Welcome to {tenantInfo.name} - Your healthcare management dashboard
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Plan:</span>
          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
            {tenantInfo.plan}
          </span>
        </div>
      </div>

      {/* Tenant Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tenantMetrics.totalDoctors}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">
                +{tenantMetrics.doctorGrowth}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Nurses</CardTitle>
            <HeartPulse className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tenantMetrics.totalNurses}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">
                +{tenantMetrics.nurseGrowth}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Patients
            </CardTitle>
            <UserRound className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tenantMetrics.totalPatients.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">
                +{tenantMetrics.patientGrowth}%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tenantMetrics.todayAppointments}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span className="text-green-500">
                +{tenantMetrics.appointmentGrowth}%
              </span>{" "}
              from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Facility Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Facilities
            </CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {tenantInfo.facilitiesCount}
            </div>
            <p className="text-sm text-muted-foreground">Active locations</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenantInfo.usersCount}</div>
            <p className="text-sm text-muted-foreground">System users</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Excellent</div>
            <p className="text-sm text-muted-foreground">
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest activities in your organization
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
            <CardTitle>Appointment Status</CardTitle>
            <CardDescription>Today's appointment breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground">Completed</span>
                  </div>
                  <span className="font-medium">
                    {appointmentStats.completed}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{
                      width: `${(appointmentStats.completed / appointmentStats.scheduled) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span className="text-muted-foreground">Pending</span>
                  </div>
                  <span className="font-medium">
                    {appointmentStats.pending}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{
                      width: `${(appointmentStats.pending / appointmentStats.scheduled) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span className="text-muted-foreground">Cancelled</span>
                  </div>
                  <span className="font-medium">
                    {appointmentStats.cancelled}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-red-500"
                    style={{
                      width: `${(appointmentStats.cancelled / appointmentStats.scheduled) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Department Performance</CardTitle>
          <CardDescription>
            Overview of department metrics and utilization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {departmentStats.map((dept) => (
              <div key={dept.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{dept.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {dept.patients} patients • {dept.doctors} doctors
                    </p>
                  </div>
                  <span className="text-sm font-medium">
                    {dept.utilization}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full ${
                      dept.utilization >= 85
                        ? "bg-green-500"
                        : dept.utilization >= 70
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${dept.utilization}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Overview;
