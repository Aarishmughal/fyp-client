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
  FileText,
  Heart,
  Activity,
  Pill,
  User,
  Download,
  MessageSquare,
  TrendingUp,
  CalendarCheck,
  ClipboardList,
} from "lucide-react";

// Test Data
const patientInfo = {
  name: "John Anderson",
  age: 42,
  gender: "Male",
  bloodType: "A+",
  height: "5'10\"",
  weight: "165 lbs",
  primaryDoctor: "Dr. Sarah Smith",
  lastVisit: "March 15, 2024",
  nextAppointment: "April 5, 2024",
};

const healthMetrics = {
  bloodPressure: { value: "120/80", status: "Normal", trend: "stable" },
  heartRate: { value: "72 bpm", status: "Normal", trend: "stable" },
  bloodSugar: { value: "95 mg/dL", status: "Normal", trend: "stable" },
  bmi: { value: "23.5", status: "Normal", trend: "down" },
};

const upcomingAppointments = [
  {
    id: 1,
    doctorName: "Dr. Sarah Smith",
    specialty: "General Practitioner",
    date: "April 5, 2024",
    time: "10:00 AM",
    type: "Follow-up Consultation",
    location: "Main Clinic - Room 204",
    status: "confirmed",
    avatar: "/avatars/doctor1.jpg",
  },
  {
    id: 2,
    doctorName: "Dr. Michael Chen",
    specialty: "Cardiologist",
    date: "April 12, 2024",
    time: "2:30 PM",
    type: "Cardiac Checkup",
    location: "Cardiology Department",
    status: "confirmed",
    avatar: "/avatars/doctor2.jpg",
  },
  {
    id: 3,
    doctorName: "Dr. Emily Rodriguez",
    specialty: "Endocrinologist",
    date: "April 20, 2024",
    time: "11:00 AM",
    type: "Diabetes Management",
    location: "Endocrinology Wing",
    status: "pending",
    avatar: "/avatars/doctor3.jpg",
  },
];

const activePrescriptions = [
  {
    id: 1,
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Sarah Smith",
    startDate: "March 1, 2024",
    refillsLeft: 3,
    instructions: "Take with water in the morning",
  },
  {
    id: 2,
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedBy: "Dr. Emily Rodriguez",
    startDate: "February 15, 2024",
    refillsLeft: 2,
    instructions: "Take with meals",
  },
  {
    id: 3,
    medication: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily at bedtime",
    prescribedBy: "Dr. Sarah Smith",
    startDate: "January 10, 2024",
    refillsLeft: 5,
    instructions: "Take at bedtime",
  },
];

const recentLabResults = [
  {
    id: 1,
    testName: "Complete Blood Count (CBC)",
    date: "March 15, 2024",
    status: "Normal",
    orderedBy: "Dr. Sarah Smith",
  },
  {
    id: 2,
    testName: "Lipid Panel",
    date: "March 15, 2024",
    status: "Normal",
    orderedBy: "Dr. Sarah Smith",
  },
  {
    id: 3,
    testName: "HbA1c",
    date: "March 10, 2024",
    status: "Borderline",
    orderedBy: "Dr. Emily Rodriguez",
  },
  {
    id: 4,
    testName: "Thyroid Function Test",
    date: "February 28, 2024",
    status: "Normal",
    orderedBy: "Dr. Sarah Smith",
  },
];

const medicalHistory = [
  {
    id: 1,
    condition: "Hypertension",
    diagnosedDate: "January 2022",
    status: "Managed",
  },
  {
    id: 2,
    condition: "Pre-diabetes",
    diagnosedDate: "June 2023",
    status: "Monitoring",
  },
  {
    id: 3,
    condition: "Seasonal Allergies",
    diagnosedDate: "April 2020",
    status: "Active",
  },
];

const recentMessages = [
  {
    id: 1,
    from: "Dr. Sarah Smith",
    subject: "Lab Results Available",
    preview: "Your recent lab results are ready for review...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    from: "Clinic Reception",
    subject: "Appointment Reminder",
    preview: "This is a reminder for your upcoming appointment...",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 3,
    from: "Dr. Michael Chen",
    subject: "Follow-up Instructions",
    preview: "Please review the following care instructions...",
    time: "3 days ago",
    unread: false,
  },
];

const PatientDashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "cancelled":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getLabStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "normal":
        return "bg-green-500/10 text-green-500";
      case "borderline":
        return "bg-yellow-500/10 text-yellow-500";
      case "abnormal":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getConditionStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "managed":
        return "bg-green-500/10 text-green-500";
      case "monitoring":
        return "bg-yellow-500/10 text-yellow-500";
      case "active":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-3 w-3 text-red-500" />;
      case "down":
        return <TrendingUp className="h-3 w-3 text-green-500 rotate-180" />;
      default:
        return <span className="text-xs">→</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            My Health Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, {patientInfo.name}. Here's your health overview.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
            <Badge className="ml-2" variant="destructive">
              3
            </Badge>
          </Button>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Patient Info Card */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <CardContent className="pt-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/avatars/patient.jpg" />
              <AvatarFallback className="text-2xl">
                {patientInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{patientInfo.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                <div>
                  <div className="text-xs text-muted-foreground">Age</div>
                  <div className="font-semibold">{patientInfo.age} years</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Blood Type
                  </div>
                  <div className="font-semibold">{patientInfo.bloodType}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Height / Weight
                  </div>
                  <div className="font-semibold">
                    {patientInfo.height} / {patientInfo.weight}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Primary Doctor
                  </div>
                  <div className="font-semibold">
                    {patientInfo.primaryDoctor}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Blood Pressure
            </CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {healthMetrics.bloodPressure.value}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-green-500/10 text-green-500"
              >
                {healthMetrics.bloodPressure.status}
              </Badge>
              {getTrendIcon(healthMetrics.bloodPressure.trend)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {healthMetrics.heartRate.value}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-green-500/10 text-green-500"
              >
                {healthMetrics.heartRate.status}
              </Badge>
              {getTrendIcon(healthMetrics.heartRate.trend)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blood Sugar</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {healthMetrics.bloodSugar.value}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-green-500/10 text-green-500"
              >
                {healthMetrics.bloodSugar.status}
              </Badge>
              {getTrendIcon(healthMetrics.bloodSugar.trend)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">BMI</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthMetrics.bmi.value}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant="outline"
                className="text-xs bg-green-500/10 text-green-500"
              >
                {healthMetrics.bmi.status}
              </Badge>
              {getTrendIcon(healthMetrics.bmi.trend)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Appointments and Prescriptions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarCheck className="h-5 w-5" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled visits</CardDescription>
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
                        {appointment.doctorName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">
                        {appointment.doctorName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.specialty}
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
                    <div className="text-sm font-medium">
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {appointment.time}
                    </div>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule New Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Active Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5" />
                Active Prescriptions
              </CardTitle>
              <CardDescription>Current medications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {activePrescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold">
                        {prescription.medication}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {prescription.dosage} - {prescription.frequency}
                      </div>
                    </div>
                    <Badge variant="outline">
                      {prescription.refillsLeft} refills left
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {prescription.instructions}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      Prescribed by {prescription.prescribedBy}
                    </div>
                    <Button size="sm" variant="ghost">
                      Request Refill
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Lab Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Lab Results
              </CardTitle>
              <CardDescription>Test results and reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentLabResults.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium">{result.testName}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {result.date} • Ordered by {result.orderedBy}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getLabStatusColor(result.status)}>
                        {result.status}
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Medical History and Messages */}
        <div className="space-y-6">
          {/* Medical History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Medical History
              </CardTitle>
              <CardDescription>Conditions and diagnoses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {medicalHistory.map((item) => (
                <div key={item.id} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="font-medium">{item.condition}</div>
                    <Badge className={getConditionStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Diagnosed: {item.diagnosedDate}
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                View Full History
              </Button>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Messages
              </CardTitle>
              <CardDescription>Communication with providers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer ${
                    message.unread ? "bg-blue-500/5 border-blue-500/20" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-medium text-sm">{message.from}</div>
                    {message.unread && (
                      <Badge variant="destructive" className="text-xs">
                        New
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm font-medium">{message.subject}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {message.preview}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    {message.time}
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                View All Messages
              </Button>
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
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Pill className="mr-2 h-4 w-4" />
                Request Prescription Refill
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                View Medical Records
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message Doctor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
