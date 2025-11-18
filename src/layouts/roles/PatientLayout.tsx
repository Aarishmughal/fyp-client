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
  LogOut,
  User,
  ChevronDown,
  Heart,
  Calendar,
  Pill,
  FileText,
  MessageSquare,
  CreditCard,
  ClipboardList,
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import { useMemo } from "react";
import { ModeToggle } from "@/components/mode-toggle";

function PatientLayout() {
  const location = useLocation();

  const overviewItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/patient/dashboard",
    },
  ];

  const healthItems = [
    {
      title: "My Appointments",
      icon: Calendar,
      url: "/patient/appointments",
    },
    {
      title: "My Prescriptions",
      icon: Pill,
      url: "/patient/prescriptions",
    },
    {
      title: "Lab Results",
      icon: FileText,
      url: "/patient/lab-results",
    },
    {
      title: "Health Records",
      icon: ClipboardList,
      url: "/patient/records",
    },
  ];

  const communicationItems = [
    {
      title: "Messages",
      icon: MessageSquare,
      url: "/patient/messages",
    },
  ];

  const billingItems = [
    {
      title: "Billing & Payments",
      icon: CreditCard,
      url: "/patient/billing",
    },
  ];

  const settingsItems = [
    {
      title: "Settings",
      icon: Settings,
      url: "/patient/settings",
    },
  ];

  // Generate breadcrumbs based on current path
  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    const items = [];

    // Always add Dashboard as first item if not on dashboard root
    if (paths.length > 2) {
      items.push({
        label: "Dashboard",
        href: "/patient/dashboard",
        isActive: false,
      });
    }

    // Add remaining path segments
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
                  <Link to="/patient/dashboard">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Heart className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">Patient Portal</span>
                      <span className="text-xs">My Health</span>
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

              {/* Health Management Group */}
              <SidebarGroup>
                <SidebarGroupLabel>Health Management</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {healthItems.map((item) => (
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

              {/* Communication Group */}
              <SidebarGroup>
                <SidebarGroupLabel>Communication</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {communicationItems.map((item) => (
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
            </ScrollArea>
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
                        <AvatarImage src="/avatar.png" alt="Patient" />
                        <AvatarFallback className="rounded-lg">
                          JA
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">John Anderson</span>
                        <span className="truncate text-xs">
                          Patient ID: P-2024-156
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

export default PatientLayout;
