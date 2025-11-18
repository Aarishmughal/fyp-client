import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Calendar,
  Clock,
  User,
  Activity,
  FileText,
  TrendingUp,
  AlertCircle,
  Users,
  Stethoscope,
} from "lucide-react";

// Test Data
const doctorStats = {
  todayAppointments: 12,
  completedToday: 7,
  pendingConsultations: 5,
  totalPatients: 248,
  avgConsultationTime: "18 mins",
  satisfactionRate: "4.8/5.0",
};

const upcomingAppointments = [
  {
    id: 1,
    patientName: "Sarah Johnson",
    patientAge: 34,
    time: "10:00 AM",
    type: "Follow-up",
    condition: "Hypertension",
    status: "confirmed",
    avatar: "/avatars/patient1.jpg",
  },
  {
    id: 2,
    patientName: "Michael Chen",
    patientAge: 45,
    time: "10:30 AM",
    type: "New Consultation",
    condition: "Chest Pain",
    status: "waiting",
    avatar: "/avatars/patient2.jpg",
  },
  {
    id: 3,
    patientName: "Emily Rodriguez",
    patientAge: 28,
    time: "11:00 AM",
    type: "Checkup",
    condition: "Diabetes Management",
    status: "confirmed",
    avatar: "/avatars/patient3.jpg",
  },
  {
    id: 4,
    patientName: "James Wilson",
    patientAge: 52,
    time: "11:30 AM",
    type: "Follow-up",
    condition: "Post-Surgery",
    status: "confirmed",
    avatar: "/avatars/patient4.jpg",
  },
  {
    id: 5,
    patientName: "Aisha Patel",
    patientAge: 41,
    time: "2:00 PM",
    type: "New Consultation",
    condition: "Migraine",
    status: "confirmed",
    avatar: "/avatars/patient5.jpg",
  },
];

const recentPatients = [
  {
    id: 1,
    name: "Robert Brown",
    lastVisit: "2 days ago",
    diagnosis: "Asthma",
    nextAppointment: "Next week",
    status: "stable",
  },
  {
    id: 2,
    name: "Lisa Anderson",
    lastVisit: "1 week ago",
    diagnosis: "Type 2 Diabetes",
    nextAppointment: "In 3 days",
    status: "monitoring",
  },
  {
    id: 3,
    name: "David Martinez",
    lastVisit: "3 days ago",
    diagnosis: "Hypertension",
    nextAppointment: "Tomorrow",
    status: "critical",
  },
  {
    id: 4,
    name: "Jennifer Lee",
    lastVisit: "5 days ago",
    diagnosis: "Anxiety Disorder",
    nextAppointment: "In 2 weeks",
    status: "stable",
  },
];

const pendingTasks = [
  {
    id: 1,
    task: "Review lab results for Sarah Johnson",
    priority: "high",
    time: "Due in 1 hour",
  },
  {
    id: 2,
    task: "Sign prescription for Michael Chen",
    priority: "medium",
    time: "Due today",
  },
  {
    id: 3,
    task: "Complete discharge summary for Room 302",
    priority: "high",
    time: "Due in 2 hours",
  },
  {
    id: 4,
    task: "Respond to consultation request",
    priority: "low",
    time: "Due tomorrow",
  },
  {
    id: 5,
    task: "Update treatment plan for Emily Rodriguez",
    priority: "medium",
    time: "Due today",
  },
];

const DoctorDashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "waiting":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getPatientStatusColor = (status: string) => {
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Doctor Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Dr. Smith. Here's your schedule for today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            New Prescription
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {doctorStats.todayAppointments}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {doctorStats.completedToday} completed,{" "}
              {doctorStats.pendingConsultations} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Patients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {doctorStats.totalPatients}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">+12</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Consultation
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {doctorStats.avgConsultationTime}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">-2 mins</span> from average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Satisfaction Rate
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {doctorStats.satisfactionRate}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on 156 reviews
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Appointments and Patients */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5" />
                Today's Appointments
              </CardTitle>
              <CardDescription>Your schedule for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={appointment.avatar} />
                      <AvatarFallback>
                        {appointment.patientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">
                        {appointment.patientName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Age: {appointment.patientAge} • {appointment.condition}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {appointment.type}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getStatusColor(appointment.status)}`}
                        >
                          {appointment.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Patients
              </CardTitle>
              <CardDescription>Patients who need follow-up</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-semibold">{patient.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {patient.diagnosis}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Last visit: {patient.lastVisit}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getPatientStatusColor(patient.status)}>
                        {patient.status}
                      </Badge>
                      <Button size="sm" variant="ghost">
                        View Chart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Pending Tasks */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Pending Tasks
              </CardTitle>
              <CardDescription>Tasks requiring your attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle
                      className={`h-4 w-4 mt-1 ${getPriorityColor(task.priority)}`}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{task.task}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {task.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge
                      variant="outline"
                      className={`text-xs ${getPriorityColor(task.priority)}`}
                    >
                      {task.priority}
                    </Badge>
                    <Button size="sm" variant="ghost" className="h-6 text-xs">
                      Complete
                    </Button>
                  </div>
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
                <FileText className="mr-2 h-4 w-4" />
                Write Prescription
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <User className="mr-2 h-4 w-4" />
                Add Patient Notes
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Request Lab Tests
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Activity className="mr-2 h-4 w-4" />
                Review Test Results
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
