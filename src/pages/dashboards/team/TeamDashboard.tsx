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
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  CheckCircle,
  Users,
  ClipboardList,
  MessageSquare,
  Bell,
  TrendingUp,
  FileText,
  AlertCircle,
  CalendarCheck,
  Target,
} from "lucide-react";

// Test Data
const teamMemberInfo = {
  name: "Alex Johnson",
  role: "Healthcare Administrator",
  department: "Operations",
  shift: "Day Shift (9:00 AM - 5:00 PM)",
  employeeId: "TM-2024-156",
};

const todayStats = {
  tasksCompleted: 12,
  totalTasks: 18,
  meetingsScheduled: 4,
  pendingApprovals: 7,
  messagesUnread: 5,
  hoursWorked: "6.5h",
};

const myTasks = [
  {
    id: 1,
    title: "Review patient admission forms",
    priority: "high",
    dueTime: "10:00 AM",
    category: "Documentation",
    status: "pending",
    assignedBy: "Sarah Miller",
  },
  {
    id: 2,
    title: "Coordinate with IT for system maintenance",
    priority: "medium",
    dueTime: "11:30 AM",
    category: "Technical",
    status: "in-progress",
    assignedBy: "Mark Davis",
  },
  {
    id: 3,
    title: "Prepare weekly facility report",
    priority: "high",
    dueTime: "2:00 PM",
    category: "Reporting",
    status: "pending",
    assignedBy: "Jennifer Lee",
  },
  {
    id: 4,
    title: "Schedule staff training session",
    priority: "medium",
    dueTime: "3:00 PM",
    category: "HR",
    status: "pending",
    assignedBy: "Self-assigned",
  },
  {
    id: 5,
    title: "Process supply requisitions",
    priority: "low",
    dueTime: "4:00 PM",
    category: "Procurement",
    status: "pending",
    assignedBy: "Operations Team",
  },
  {
    id: 6,
    title: "Update patient transport schedule",
    priority: "high",
    dueTime: "End of day",
    category: "Logistics",
    status: "pending",
    assignedBy: "Transport Coordinator",
  },
];

const upcomingMeetings = [
  {
    id: 1,
    title: "Daily Operations Standup",
    time: "10:00 AM",
    duration: "30 mins",
    attendees: ["Sarah Miller", "Mark Davis", "3 others"],
    location: "Conference Room A",
    type: "team",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Patient Care Quality Review",
    time: "1:00 PM",
    duration: "1 hour",
    attendees: ["Dr. Smith", "Nurse Johnson", "5 others"],
    location: "Board Room",
    type: "review",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Budget Planning Discussion",
    time: "3:30 PM",
    duration: "45 mins",
    attendees: ["Finance Director", "Operations Manager"],
    location: "Virtual - Zoom",
    type: "planning",
    status: "upcoming",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Sarah Miller",
    role: "Operations Manager",
    status: "available",
    avatar: "/avatars/team1.jpg",
    department: "Operations",
  },
  {
    id: 2,
    name: "Mark Davis",
    role: "IT Coordinator",
    status: "in-meeting",
    avatar: "/avatars/team2.jpg",
    department: "Technology",
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "HR Specialist",
    status: "available",
    avatar: "/avatars/team3.jpg",
    department: "Human Resources",
  },
  {
    id: 4,
    name: "Robert Chen",
    role: "Facilities Manager",
    status: "busy",
    avatar: "/avatars/team4.jpg",
    department: "Facilities",
  },
  {
    id: 5,
    name: "Emily White",
    role: "Quality Assurance",
    status: "away",
    avatar: "/avatars/team5.jpg",
    department: "Quality",
  },
];

const recentNotifications = [
  {
    id: 1,
    message: "New task assigned: Review patient admission forms",
    time: "5 minutes ago",
    type: "task",
    priority: "high",
  },
  {
    id: 2,
    message: "Meeting reminder: Daily Operations Standup in 15 mins",
    time: "15 minutes ago",
    type: "meeting",
    priority: "medium",
  },
  {
    id: 3,
    message: "Sarah Miller approved your request",
    time: "1 hour ago",
    type: "approval",
    priority: "low",
  },
  {
    id: 4,
    message: "System maintenance scheduled for tonight",
    time: "2 hours ago",
    type: "system",
    priority: "medium",
  },
];

const pendingApprovals = [
  {
    id: 1,
    type: "Leave Request",
    requestedBy: "John Martinez",
    date: "April 15-17, 2024",
    reason: "Personal Leave",
    status: "pending",
  },
  {
    id: 2,
    type: "Budget Approval",
    requestedBy: "Facilities Team",
    amount: "$2,500",
    reason: "Equipment Purchase",
    status: "pending",
  },
  {
    id: 3,
    type: "Schedule Change",
    requestedBy: "Night Shift Team",
    date: "Next Week",
    reason: "Shift Swap",
    status: "pending",
  },
];

const weeklyProgress = [
  { day: "Mon", completed: 15, total: 18 },
  { day: "Tue", completed: 18, total: 20 },
  { day: "Wed", completed: 16, total: 19 },
  { day: "Thu", completed: 12, total: 18 },
  { day: "Fri", completed: 0, total: 15 },
];

const TeamDashboard = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500 bg-red-500/10";
      case "medium":
        return "text-yellow-500 bg-yellow-500/10";
      case "low":
        return "text-green-500 bg-green-500/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "in-meeting":
        return "bg-yellow-500";
      case "away":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "in-progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "task":
        return <ClipboardList className="h-4 w-4" />;
      case "meeting":
        return <Calendar className="h-4 w-4" />;
      case "approval":
        return <CheckCircle className="h-4 w-4" />;
      case "system":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const completionRate =
    (todayStats.tasksCompleted / todayStats.totalTasks) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, {teamMemberInfo.name} - {teamMemberInfo.role}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
            <Badge className="ml-2" variant="destructive">
              {todayStats.messagesUnread}
            </Badge>
          </Button>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Tasks</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.tasksCompleted}/{todayStats.totalTasks}
            </div>
            <Progress value={completionRate} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {Math.round(completionRate)}% completion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Meetings Today
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.meetingsScheduled}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Next meeting at 10:00 AM
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Approvals
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todayStats.pendingApprovals}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Requiring your attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Worked</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.hoursWorked}</div>
            <Progress value={72} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              1.5h remaining in shift
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Tasks and Meetings */}
        <div className="lg:col-span-2 space-y-6">
          {/* My Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                My Tasks
              </CardTitle>
              <CardDescription>Tasks assigned to you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {myTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="font-semibold">{task.title}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {task.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getPriorityColor(task.priority)}`}
                        >
                          {task.priority}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getTaskStatusColor(task.status)}`}
                        >
                          {task.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        <Clock className="inline h-3 w-3 mr-1" />
                        {task.dueTime}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Assigned by: {task.assignedBy}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                    {task.status !== "completed" && (
                      <Button size="sm" className="flex-1">
                        Mark Complete
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Meetings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarCheck className="h-5 w-5" />
                Today's Meetings
              </CardTitle>
              <CardDescription>Your scheduled meetings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="font-semibold">{meeting.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {meeting.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {meeting.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {meeting.time}
                    </div>
                    <div>Duration: {meeting.duration}</div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">
                      {meeting.attendees.join(", ")}
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Join Meeting
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Weekly Progress
              </CardTitle>
              <CardDescription>Task completion this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weeklyProgress.map((day, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{day.day}</span>
                      <span className="text-muted-foreground">
                        {day.completed}/{day.total} tasks
                      </span>
                    </div>
                    <Progress value={(day.completed / day.total) * 100} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Team, Approvals, and Notifications */}
        <div className="space-y-6">
          {/* Team Members */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Members
              </CardTitle>
              <CardDescription>Your department team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(member.status)}`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{member.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {member.role}
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Pending Approvals
              </CardTitle>
              <CardDescription>Requests awaiting action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingApprovals.map((approval) => (
                <div
                  key={approval.id}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-sm">
                        {approval.type}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        From: {approval.requestedBy}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {approval.status}
                    </Badge>
                  </div>
                  <div className="text-sm mb-2">{approval.reason}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Decline
                    </Button>
                    <Button size="sm" className="flex-1">
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>Recent updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <div
                      className={`p-1 rounded ${getPriorityColor(notification.priority)}`}
                    >
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">{notification.message}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {notification.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                View All Notifications
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
                <ClipboardList className="mr-2 h-4 w-4" />
                Create New Task
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Submit Report
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Request Time Off
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamDashboard;
