import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

function Analytics() {
  // Mock data - replace with actual API calls
  const metrics = {
    userGrowth: [
      { month: "Jan", users: 1200 },
      { month: "Feb", users: 1580 },
      { month: "Mar", users: 1890 },
      { month: "Apr", users: 2340 },
      { month: "May", users: 2680 },
      { month: "Jun", users: 2847 },
    ],
    tenantGrowth: [
      { month: "Jan", tenants: 28 },
      { month: "Feb", tenants: 32 },
      { month: "Mar", tenants: 35 },
      { month: "Apr", tenants: 38 },
      { month: "May", tenants: 42 },
      { month: "Jun", tenants: 45 },
    ],
    revenueGrowth: [
      { month: "Jan", revenue: 45000 },
      { month: "Feb", revenue: 52000 },
      { month: "Mar", revenue: 61000 },
      { month: "Apr", revenue: 73000 },
      { month: "May", revenue: 82000 },
      { month: "Jun", revenue: 87456 },
    ],
  };

  const kpiMetrics = [
    {
      title: "User Growth Rate",
      value: "+18.2%",
      change: "+2.3%",
      trend: "up",
      icon: Users,
      description: "vs last month",
    },
    {
      title: "Tenant Acquisition",
      value: "+12.5%",
      change: "+5.1%",
      trend: "up",
      icon: Building2,
      description: "vs last month",
    },
    {
      title: "Revenue Growth",
      value: "+23.1%",
      change: "+8.7%",
      trend: "up",
      icon: DollarSign,
      description: "vs last month",
    },
    {
      title: "System Uptime",
      value: "99.98%",
      change: "+0.02%",
      trend: "up",
      icon: Activity,
      description: "Last 30 days",
    },
  ];

  const planDistribution = [
    { plan: "Enterprise", count: 15, percentage: 33, color: "bg-purple-500" },
    { plan: "Professional", count: 18, percentage: 40, color: "bg-blue-500" },
    { plan: "Basic", count: 12, percentage: 27, color: "bg-gray-500" },
  ];

  const topMetrics = [
    { label: "Total API Calls", value: "12.4M", change: "+15.3%" },
    { label: "Active Sessions", value: "3,456", change: "+8.1%" },
    { label: "Avg Response Time", value: "234ms", change: "-12.5%" },
    { label: "Error Rate", value: "0.03%", change: "-45.2%" },
  ];

  // Chart configurations
  const userChartConfig = {
    users: {
      label: "Users",
      color: "hsl(var(--primary))",
    },
  };

  const tenantChartConfig = {
    tenants: {
      label: "Tenants",
      color: "hsl(217, 91%, 60%)",
    },
  };

  const revenueChartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(142, 76%, 36%)",
    },
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive system-wide analytics and insights
          </p>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span
                  className={
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }
                >
                  {metric.change}
                </span>{" "}
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* User Growth Chart */}
        <Card className="col-span-1 space-y-2">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Monthly user acquisition trend</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={userChartConfig}
              className="h-[200px] w-full"
            >
              <BarChart data={metrics.userGrowth}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="users"
                  fill="var(--color-users)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Tenant Growth Chart */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Tenant Growth</CardTitle>
            <CardDescription>Monthly tenant acquisition</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={tenantChartConfig}
              className="h-[200px] w-full"
            >
              <BarChart data={metrics.tenantGrowth}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="tenants"
                  fill="var(--color-tenants)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Revenue Growth Chart */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
            <CardDescription>Monthly recurring revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={revenueChartConfig}
              className="h-[200px] w-full"
            >
              <BarChart data={metrics.revenueGrowth}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value) => [
                    `$${Number(value).toLocaleString()}`,
                    "Revenue",
                  ]}
                />
                <Bar
                  dataKey="revenue"
                  fill="var(--color-revenue)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Plan Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription Plan Distribution</CardTitle>
            <CardDescription>Breakdown of tenants by plan type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {planDistribution.map((plan) => (
              <div key={plan.plan} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${plan.color}`} />
                    <span className="text-sm font-medium">{plan.plan}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {plan.count} tenants
                    </span>
                    <span className="text-sm font-medium">
                      {plan.percentage}%
                    </span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full ${plan.color} transition-all`}
                    style={{ width: `${plan.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
            <CardDescription>Real-time performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{metric.label}</p>
                    <p className="text-2xl font-bold mt-1">{metric.value}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {metric.change.startsWith("+") ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-green-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        metric.change.startsWith("+") ||
                        (metric.change.startsWith("-") &&
                          metric.label.includes("Error"))
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Insights */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base">Avg. Users per Tenant</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">63.3</div>
            <p className="text-xs text-muted-foreground mt-1">
              +4.2 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base">Customer Retention</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.5%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2.1% from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base">Avg. Revenue per User</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$30.72</div>
            <p className="text-xs text-muted-foreground mt-1">
              +$3.15 from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Analytics;
