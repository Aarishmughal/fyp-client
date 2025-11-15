import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Plus, Search, MoreVertical } from "lucide-react";
import { Input } from "@/components/ui/input";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website with modern design",
      status: "active",
      progress: 75,
      team: 5,
      dueDate: "2024-02-15",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Native mobile application for iOS and Android",
      status: "active",
      progress: 45,
      team: 8,
      dueDate: "2024-03-30",
    },
    {
      id: 3,
      name: "API Integration",
      description: "Third-party API integration for payment processing",
      status: "completed",
      progress: 100,
      team: 3,
      dueDate: "2024-01-10",
    },
    {
      id: 4,
      name: "Database Migration",
      description: "Migrate from legacy database to modern cloud solution",
      status: "planning",
      progress: 15,
      team: 4,
      dueDate: "2024-04-20",
    },
    {
      id: 5,
      name: "Security Audit",
      description: "Comprehensive security review and implementation",
      status: "active",
      progress: 60,
      team: 6,
      dueDate: "2024-02-28",
    },
    {
      id: 6,
      name: "Customer Portal",
      description: "Self-service portal for customer management",
      status: "planning",
      progress: 10,
      team: 7,
      dueDate: "2024-05-15",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "completed":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "planning":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            Manage and track all your projects in one place
          </p>
        </div>
        <Button className="w-fit">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Projects
            </CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <p className="text-xs text-muted-foreground">Across all teams</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter((p) => p.status === "active").length}
            </div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <div className="h-2 w-2 rounded-full bg-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter((p) => p.status === "completed").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Successfully finished
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Planning</CardTitle>
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter((p) => p.status === "planning").length}
            </div>
            <p className="text-xs text-muted-foreground">In planning phase</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-10" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Status Badge */}
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className={getStatusColor(project.status)}
                >
                  {project.status.charAt(0).toUpperCase() +
                    project.status.slice(1)}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {project.team} members
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Due Date */}
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  Due:{" "}
                  <span className="font-medium text-foreground">
                    {project.dueDate}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
