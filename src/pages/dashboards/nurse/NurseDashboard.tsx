import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  AlertCircle,
  BellRing,
  CheckCircle,
  Clock,
  ClipboardList,
  Heart,
  Thermometer,
  User,
  AlertTriangle,
  Pill,
  Stethoscope
} from "lucide-react";

// Test Data
const shiftStats = {
  currentShift: "Day Shift",
  shiftTime: "8:00 AM - 4:00 PM",
  hoursRemaining: "3h 45m",
  assignedPatients: 8,
  completedTasks: 24,
  pendingTasks: 6,
  criticalAlerts: 2
};

const assignedPatients = [
  {
    id: 1,
    name: "Margaret Thompson",
    age: 67,
    room: "302-A",
    condition: "Post-operative care",
    lastVitals: "15 mins ago",
    bloodPressure: "138/85",
    heartRate: "78",
    temperature: "37.2°C",
    oxygenLevel: "96%",
    status: "stable",
    alerts: 0,
    avatar: "/avatars/patient1.jpg"
  },
  {
    id: 2,
    name: "Robert Williams",
    age: 54,
    room: "305-B",
    condition: "Diabetes management",
    lastVitals: "5 mins ago",
    bloodPressure: "142/90",
    heartRate: "92",
    temperature: "37.8°C",
    oxygenLevel: "94%",
    status: "monitoring",
    alerts: 1,
    avatar: "/avatars/patient2.jpg"
  },
  {
    id: 3,
    name: "Patricia Davis",
    age: 72,
    room: "308-A",
    condition: "Pneumonia",
    lastVitals: "2 mins ago",
    bloodPressure: "160/95",
    heartRate: "105",
    temperature: "38.5°C",
    oxygenLevel: "89%",
    status: "critical",
    alerts: 3,
    avatar: "/avatars/patient3.jpg"
  },
  {
    id: 4,
    name: "John Martinez",
    age: 48,
    room: "310-B",
    condition: "Recovery",
    lastVitals: "20 mins ago",
    bloodPressure: "125/78",
    heartRate: "72",
    temperature: "36.8°C",
    oxygenLevel: "98%",
    status: "stable",
    alerts: 0,
    avatar: "/avatars/patient4.jpg"
  },
  {
    id: 5,
    name: "Linda Anderson",
    age: 61,
    room: "312-A",
    condition: "Cardiac monitoring",
    lastVitals: "10 mins ago",
    bloodPressure: "145/88",
    heartRate: "88",
    temperature: "37.1°C",
    oxygenLevel: "95%",
    status: "monitoring",
    alerts: 1,
    avatar: "/avatars/patient5.jpg"
  }
];

const medicationSchedule = [
  {
    id: 1,
    patientName: "Margaret Thompson",
    room: "302-A",
    medication: "Amoxicillin 500mg",
    time: "10:00 AM",
    status: "pending",
    type: "Antibiotic"
  },
  {
    id: 2,
    patientName: "Robert Williams",
    room: "305-B",
    medication: "Insulin 10 units",
    time: "10:30 AM",
    status: "pending",
    type: "Injection"
  },
  {
    id: 3,
    patientName: "Patricia Davis",
    room: "308-A",
    medication: "Azithromycin 250mg",
    time: "11:00 AM",
    status: "pending",
    type: "Antibiotic"
  },
  {
    id: 4,
    patientName: "Linda Anderson",
    room: "312-A",
    medication: "Metoprolol 50mg",
    time: "11:30 AM",
    status: "pending",
    type: "Cardiac"
  },
  {
    id: 5,
    patientName: "John Martinez",
    room: "310-B",
    medication: "Ibuprofen 400mg",
    time: "12:00 PM",
    status: "scheduled",
    type: "Pain Relief"
  }
];

const pendingTasks = [
  {
    id: 1,
    task: "Check vitals for Patricia Davis (Room 308-A)",
    priority: "high",
    time: "Now",
    category: "Vitals"
  },
  {
    id: 2,
    task: "Administer medication to Robert Williams",
    priority: "high",
    time: "In 15 mins",
    category: "Medication"
  },
  {
    id: 3,
    task: "Prepare pre-op for incoming patient",
    priority: "medium",
    time: "In 1 hour",
    category: "Preparation"
  },
  {
    id: 4,
    task: "Update patient charts for morning rounds",
    priority: "medium",
    time: "By 12:00 PM",
    category: "Documentation"
  },
  {
    id: 5,
    task: "Wound dressing change - Room 302-A",
    priority: "low",
    time: "After lunch",
    category: "Care"
  },
  {
    id: 6,
    task: "Blood draw for lab tests - Room 312-A",
    priority: "medium",
    time: "In 30 mins",
    category: "Lab Work"
  }
];

const recentAlerts = [
  {
    id: 1,
    message: "High temperature detected - Patricia Davis (Room 308-A)",
    time: "2 minutes ago",
    severity: "critical"
  },
  {
    id: 2,
    message: "Blood pressure elevated - Robert Williams (Room 305-B)",
    time: "5 minutes ago",
    severity: "warning"
  },
  {
    id: 3,
    message: "Medication reminder - Margaret Thompson",
    time: "10 minutes ago",
    severity: "info"
  }
];

const NurseDashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-green-500/10 text-green-500";
      case "monitoring":
        return "bg-yellow-500/10 text-yellow-500";
      case "critical":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "info":
        return <BellRing className="h-4 w-4 text-blue-500" />;
      default:
        return <BellRing className="h-4 w-4" />;
    }
  };

  const getMedicationStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "scheduled":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nurse Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome, Nurse Johnson. Current shift: {shiftStats.currentShift}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            {shiftStats.shiftTime}
          </Button>
          <Button variant="destructive">
            <AlertTriangle className="mr-2 h-4 w-4" />
            {shiftStats.criticalAlerts} Alerts
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assigned Patients</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{shiftStats.assignedPatients}</div>
            <Progress value={(3 / 8) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              3 require immediate attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{shiftStats.pendingTasks}</div>
            <Progress value={(shiftStats.completedTasks / (shiftStats.completedTasks + shiftStats.pendingTasks)) * 100} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {shiftStats.completedTasks} completed today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Shift Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{shiftStats.hoursRemaining}</div>
            <Progress value={60} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Remaining in current shift
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{shiftStats.criticalAlerts}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Require immediate response
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Patient List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Assigned Patients */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Assigned Patients
              </CardTitle>
              <CardDescription>Real-time patient vitals and status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {assignedPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={patient.avatar} />
                        <AvatarFallback>
                          {patient.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{patient.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Room {patient.room} • Age {patient.age}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {patient.condition}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(patient.status)}>
                        {patient.status}
                      </Badge>
                      {patient.alerts > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {patient.alerts} Alert{patient.alerts > 1 ? 's' : ''}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 text-sm">
                    <div className="flex items-center gap-2 p-2 bg-background rounded">
                      <Heart className="h-4 w-4 text-red-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">BP</div>
                        <div className="font-medium">{patient.bloodPressure}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-background rounded">
                      <Activity className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">HR</div>
                        <div className="font-medium">{patient.heartRate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-background rounded">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Temp</div>
                        <div className="font-medium">{patient.temperature}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-background rounded">
                      <Stethoscope className="h-4 w-4 text-green-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">O2</div>
                        <div className="font-medium">{patient.oxygenLevel}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="text-xs text-muted-foreground">
                      Last checked: {patient.lastVitals}
                    </div>
                    <Button size="sm" variant="outline">
                      Update Vitals
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Medication Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5" />
                Medication Schedule
              </CardTitle>
              <CardDescription>Upcoming medication administration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {medicationSchedule.map((med) => (
                  <div
                    key={med.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{med.patientName}</span>
                        <Badge variant="outline" className="text-xs">
                          {med.room}
                        </Badge>
                      </div>
                      <div className="text-sm mt-1">{med.medication}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {med.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          <Clock className="inline h-3 w-3 mr-1" />
                          {med.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getMedicationStatusColor(med.status)}>
                        {med.status}
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Tasks and Alerts */}
        <div className="space-y-6">
          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BellRing className="h-5 w-5" />
                Recent Alerts
              </CardTitle>
              <CardDescription>Latest notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    {getSeverityIcon(alert.severity)}
                    <div className="flex-1">
                      <div className="text-sm font-medium">{alert.message}</div>
                      <div className="text-xs text-muted-foreground mt-1">{alert.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Pending Tasks
              </CardTitle>
              <CardDescription>Tasks to complete</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className={`h-4 w-4 mt-1 ${getPriorityColor(task.priority)}`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{task.task}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {task.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{task.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="w-full mt-2 h-6 text-xs">
                    Mark Complete
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Activity className="mr-2 h-4 w-4" />
                Record Vitals
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Pill className="mr-2 h-4 w-4" />
                Administer Medication
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ClipboardList className="mr-2 h-4 w-4" />
                Update Patient Notes
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <AlertCircle className="mr-2 h-4 w-4" />
                Report Incident
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NurseDashboard;
