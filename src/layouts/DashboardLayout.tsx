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
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import { useMemo } from "react";
import { ModeToggle } from "@/components/mode-toggle";

function DashboardLayout() {
  const location = useLocation();

  const overviewItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/dashboard",
    },
    {
      title: "Facilities",
      icon: Building2,
      url: "/dashboard/facilities",
    },
  ];

  const staffItems = [
    {
      title: "Doctors",
      icon: Stethoscope,
      url: "/dashboard/doctors",
    },
    {
      title: "Nurses",
      icon: HeartPulse,
      url: "/dashboard/nurses",
    },
    {
      title: "Team Members",
      icon: UsersRound,
      url: "/dashboard/users",
    },
  ];

  const patientCareItems = [
    {
      title: "Patients",
      icon: UserRound,
      url: "/dashboard/patients",
    },
    {
      title: "Appointments",
      icon: Calendar,
      url: "/dashboard/appointments",
    },
    {
      title: "Prescriptions",
      icon: Pill,
      url: "/dashboard/prescriptions",
    },
  ];

  const billingItems = [
    {
      title: "Invoices",
      icon: FileText,
      url: "/dashboard/invoices",
    },
  ];

  const settingsItems = [
    {
      title: "Settings",
      icon: Settings,
      url: "/dashboard/settings",
    },
  ];

  // Generate breadcrumbs based on current path
  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    const items = [];

    // Always add Dashboard as first item if not on dashboard root
    if (paths.length > 1) {
      items.push({
        label: "Dashboard",
        href: "/dashboard",
        isActive: false,
      });
    }

    // Add remaining path segments
    for (let i = 1; i < paths.length; i++) {
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
        <Sidebar className="border-r overflow-x-hidden" collapsible="icon">
          {/* Header Section */}
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <Link to="/dashboard">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <HeartPulse className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">Healthcare Portal</span>
                      <span className="text-xs">Management System</span>
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          {/* Main Navigation Content */}
          <SidebarContent className="overflow-x-hidden">
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

            {/* Staff Management Group */}
            <SidebarGroup>
              <SidebarGroupLabel>Staff Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {staffItems.map((item) => (
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

            {/* Patient Care Group */}
            <SidebarGroup>
              <SidebarGroupLabel>Patient Care</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {patientCareItems.map((item) => (
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

            {/* Billing Group */}
            <SidebarGroup>
              <SidebarGroupLabel>Billing</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {billingItems.map((item) => (
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

            {/* Settings Group */}
            <SidebarGroup>
              <SidebarGroupLabel>Configuration</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {settingsItems.map((item) => (
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
          </SidebarContent>

          {/* Footer with User Profile */}
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
                        <AvatarImage src="/avatar.png" alt="User" />
                        <AvatarFallback className="rounded-lg">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">John Doe</span>
                        <span className="truncate text-xs">
                          john@example.com
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
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
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
                      <BreadcrumbPage>Dashboard</BreadcrumbPage>
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
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
