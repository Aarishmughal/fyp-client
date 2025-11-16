import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Settings,
  Building2,
  LogOut,
  User,
  ChevronDown,
  Stethoscope,
  HeartPulse,
  UserRound,
  Calendar,
  Pill,
  FileText,
  UsersRound,
  Shield,
  BarChart3,
  Database,
  Bell,
  Globe,
  Lock,
} from "lucide-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useMemo } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { useAuth } from "@/context/AuthContext";

function AdminDashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const overviewItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/admin/dashboard",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      url: "/admin/dashboard/analytics",
    },
  ];

  const systemManagementItems = [
    {
      title: "Tenants",
      icon: Building2,
      url: "/admin/dashboard/tenants",
    },
    {
      title: "System Users",
      icon: UsersRound,
      url: "/admin/dashboard/users",
    },
    {
      title: "Subscriptions",
      icon: Shield,
      url: "/admin/dashboard/subscriptions",
    },
  ];

  const resourceManagementItems = [
    {
      title: "All Facilities",
      icon: Building2,
      url: "/admin/dashboard/facilities",
    },
    {
      title: "All Doctors",
      icon: Stethoscope,
      url: "/admin/dashboard/doctors",
    },
    {
      title: "All Nurses",
      icon: HeartPulse,
      url: "/admin/dashboard/nurses",
    },
    {
      title: "All Patients",
      icon: UserRound,
      url: "/admin/dashboard/patients",
    },
  ];

  const dataManagementItems = [
    {
      title: "Appointments",
      icon: Calendar,
      url: "/admin/dashboard/appointments",
    },
    {
      title: "Prescriptions",
      icon: Pill,
      url: "/admin/dashboard/prescriptions",
    },
    {
      title: "Invoices",
      icon: FileText,
      url: "/admin/dashboard/invoices",
    },
  ];

  const configurationItems = [
    {
      title: "System Settings",
      icon: Settings,
      url: "/admin/dashboard/settings",
    },
    {
      title: "Notifications",
      icon: Bell,
      url: "/admin/dashboard/notifications",
    },
    {
      title: "API Configuration",
      icon: Globe,
      url: "/admin/dashboard/api-config",
    },
    {
      title: "Security",
      icon: Lock,
      url: "/admin/dashboard/security",
    },
  ];

  // Generate breadcrumbs based on current path
  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    const items = [];

    // Always add Admin Dashboard as first item if not on dashboard root
    if (paths.length > 2) {
      items.push({
        label: "Admin Dashboard",
        href: "/admin/dashboard",
        isActive: false,
      });
    }

    // Add remaining path segments (skip 'admin' and 'dashboard')
    for (let i = 2; i < paths.length; i++) {
      const path = `/${paths.slice(0, i + 1).join("/")}`;
      const label = paths[i].charAt(0).toUpperCase() + paths[i].slice(1);
      const isActive = i === paths.length - 1;

      items.push({
        label: label.replace(/-/g, " "),
        href: path,
        isActive,
      });
    }

    return items;
  }, [location.pathname]);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r" collapsible="icon">
          {/* Header Section */}
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <Link to="/admin/dashboard">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-destructive text-destructive-foreground">
                      <Shield className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">Admin Portal</span>
                      <span className="text-xs">System Management</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          {/* Main Navigation Content */}
          <SidebarContent>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              {/* Overview Group */}
              <SidebarGroup>
                <SidebarGroupLabel>Overview</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {overviewItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.url}
                          tooltip={item.title}
                        >
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* System Management Group */}
              <SidebarGroup>
                <SidebarGroupLabel>System Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {systemManagementItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.url}
                          tooltip={item.title}
                        >
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* Resource Management Group */}
              <SidebarGroup>
                <SidebarGroupLabel>Resource Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {resourceManagementItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.url}
                          tooltip={item.title}
                        >
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* Data Management Group */}
              <SidebarGroup>
                <SidebarGroupLabel>Data Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {dataManagementItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.url}
                          tooltip={item.title}
                        >
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarSeparator />

              {/* Configuration Group */}
              <SidebarGroup>
                <SidebarGroupLabel>Configuration</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {configurationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.url}
                          tooltip={item.title}
                        >
                          <Link to={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </ScrollArea>
          </SidebarContent>

          {/* Footer with Admin Profile */}
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src="/admin-avatar.png" alt="Admin" />
                        <AvatarFallback className="rounded-lg bg-destructive text-destructive-foreground">
                          AD
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          System Admin
                        </span>
                        <span className="truncate text-xs">
                          admin@system.com
                        </span>
                      </div>
                      <ChevronDown className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    side="bottom"
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Admin Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content Area with Breadcrumb Header */}
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.length === 0 ? (
                    <BreadcrumbItem>
                      <BreadcrumbPage>Admin Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                  ) : (
                    breadcrumbs.map((crumb, index) => (
                      <span key={crumb.href} className="contents">
                        <BreadcrumbItem
                          className={index === 0 ? "hidden md:block" : ""}
                        >
                          {crumb.isActive ? (
                            <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <Link to={crumb.href}>{crumb.label}</Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && (
                          <BreadcrumbSeparator
                            className={index === 0 ? "hidden md:block" : ""}
                          />
                        )}
                      </span>
                    ))
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="px-4">
              <ModeToggle />
            </div>
          </header>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <Outlet />
            </div>
          </ScrollArea>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default AdminDashboardLayout;
