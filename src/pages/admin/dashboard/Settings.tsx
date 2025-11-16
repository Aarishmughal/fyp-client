import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings as SettingsIcon,
  Database,
  Mail,
  Shield,
  Globe,
  Bell,
  Zap,
  Server,
  Lock,
  Key,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

function Settings() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [twoFactorRequired, setTwoFactorRequired] = useState(false);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">
            Manage system-wide configurations and preferences
          </p>
        </div>
        <Button>
          <SettingsIcon className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>
                Configure general system settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="app-name">Application Name</Label>
                <Input
                  id="app-name"
                  placeholder="Healthcare Management System"
                  defaultValue="Healthcare Management System"
                />
                <p className="text-xs text-muted-foreground">
                  The name displayed throughout the application
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input
                  id="support-email"
                  type="email"
                  placeholder="support@example.com"
                  defaultValue="support@healthcare.com"
                />
                <p className="text-xs text-muted-foreground">
                  Email address for customer support inquiries
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                    <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                    <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                    <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                    <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Default timezone for the entire system
                </p>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-xs text-muted-foreground">
                    Enable maintenance mode to prevent user access
                  </p>
                </div>
                <Switch
                  checked={maintenanceMode}
                  onCheckedChange={setMaintenanceMode}
                />
              </div>

              {maintenanceMode && (
                <div className="rounded-lg bg-amber-50 dark:bg-amber-950 p-4 border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-900 dark:text-amber-100">
                        Maintenance Mode Active
                      </h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                        All tenants will see a maintenance message. Only administrators can access the system.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input
                  id="session-timeout"
                  type="number"
                  placeholder="30"
                  defaultValue="30"
                  min="5"
                  max="120"
                />
                <p className="text-xs text-muted-foreground">
                  Automatic logout after period of inactivity
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Configuration
              </CardTitle>
              <CardDescription>
                Configure SMTP and email notification settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input
                  id="smtp-host"
                  placeholder="smtp.gmail.com"
                  defaultValue="smtp.gmail.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input
                    id="smtp-port"
                    type="number"
                    placeholder="587"
                    defaultValue="587"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-encryption">Encryption</Label>
                  <Select defaultValue="tls">
                    <SelectTrigger id="smtp-encryption">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tls">TLS</SelectItem>
                      <SelectItem value="ssl">SSL</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="smtp-username">SMTP Username</Label>
                <Input
                  id="smtp-username"
                  type="email"
                  placeholder="noreply@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-password">SMTP Password</Label>
                <Input id="smtp-password" type="password" placeholder="••••••••" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Send system notifications via email
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="from-email">From Email Address</Label>
                <Input
                  id="from-email"
                  type="email"
                  placeholder="noreply@healthcare.com"
                  defaultValue="noreply@healthcare.com"
                />
                <p className="text-xs text-muted-foreground">
                  Email address shown as sender in notifications
                </p>
              </div>

              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Send Test Email
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Configure security and authentication settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Require Two-Factor Authentication</Label>
                  <p className="text-xs text-muted-foreground">
                    Enforce 2FA for all admin accounts
                  </p>
                </div>
                <Switch
                  checked={twoFactorRequired}
                  onCheckedChange={setTwoFactorRequired}
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="password-min-length">Minimum Password Length</Label>
                <Input
                  id="password-min-length"
                  type="number"
                  placeholder="8"
                  defaultValue="8"
                  min="6"
                  max="32"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                <Input
                  id="password-expiry"
                  type="number"
                  placeholder="90"
                  defaultValue="90"
                  min="30"
                  max="365"
                />
                <p className="text-xs text-muted-foreground">
                  Users must change password after this period
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                <Input
                  id="max-login-attempts"
                  type="number"
                  placeholder="5"
                  defaultValue="5"
                  min="3"
                  max="10"
                />
                <p className="text-xs text-muted-foreground">
                  Account locked after this many failed attempts
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lockout-duration">Lockout Duration (minutes)</Label>
                <Input
                  id="lockout-duration"
                  type="number"
                  placeholder="30"
                  defaultValue="30"
                  min="5"
                  max="1440"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>JWT Secret Key</Label>
                <div className="flex gap-2">
                  <Input type="password" value="••••••••••••••••••••" readOnly />
                  <Button variant="outline">
                    <Key className="mr-2 h-4 w-4" />
                    Regenerate
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Secret key used for JWT token signing
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Database Settings */}
        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Database Configuration
              </CardTitle>
              <CardDescription>
                Manage database connections and backup settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Database Type</Label>
                <Select defaultValue="postgresql">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="postgresql">PostgreSQL</SelectItem>
                    <SelectItem value="mysql">MySQL</SelectItem>
                    <SelectItem value="mongodb">MongoDB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="db-host">Database Host</Label>
                <Input
                  id="db-host"
                  placeholder="localhost"
                  defaultValue="localhost"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="db-port">Port</Label>
                  <Input
                    id="db-port"
                    type="number"
                    placeholder="5432"
                    defaultValue="5432"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="db-name">Database Name</Label>
                  <Input
                    id="db-name"
                    placeholder="healthcare_db"
                    defaultValue="healthcare_db"
                  />
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatic Backups</Label>
                  <p className="text-xs text-muted-foreground">
                    Enable automated database backups
                  </p>
                </div>
                <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
              </div>

              {autoBackup && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger id="backup-frequency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backup-retention">Retention Period (days)</Label>
                    <Input
                      id="backup-retention"
                      type="number"
                      placeholder="30"
                      defaultValue="30"
                      min="7"
                      max="365"
                    />
                  </div>
                </>
              )}

              <Separator />

              <div className="flex gap-2">
                <Button variant="outline">
                  <Database className="mr-2 h-4 w-4" />
                  Test Connection
                </Button>
                <Button variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Backup Now
                </Button>
              </div>

              <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-3">
                  <Server className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">
                      Database Status: Connected
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Last backup: 2 hours ago • Next scheduled: In 22 hours
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Settings */}
        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                API Configuration
              </CardTitle>
              <CardDescription>
                Configure API settings and rate limiting
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="api-version">API Version</Label>
                <Input id="api-version" defaultValue="v1" readOnly />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-url">API Base URL</Label>
                <Input
                  id="api-url"
                  placeholder="https://api.healthcare.com"
                  defaultValue="https://api.healthcare.com"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="rate-limit">Rate Limit (requests per minute)</Label>
                <Input
                  id="rate-limit"
                  type="number"
                  placeholder="1000"
                  defaultValue="1000"
                  min="100"
                  max="10000"
                />
                <p className="text-xs text-muted-foreground">
                  Maximum API requests per minute per tenant
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="max-payload">Max Payload Size (MB)</Label>
                <Input
                  id="max-payload"
                  type="number"
                  placeholder="10"
                  defaultValue="10"
                  min="1"
                  max="100"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="api-timeout">Request Timeout (seconds)</Label>
                <Input
                  id="api-timeout"
                  type="number"
                  placeholder="30"
                  defaultValue="30"
                  min="5"
                  max="120"
                />
              </div>

              <div className="space-y-2">
                <Label>CORS Allowed Origins</Label>
                <Input
                  placeholder="https://app.healthcare.com, https://admin.healthcare.com"
                  defaultValue="*"
                />
                <p className="text-xs text-muted-foreground">
                  Comma-separated list of allowed origins (* for all)
                </p>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>API Documentation</Label>
                  <p className="text-xs text-muted-foreground">
                    Enable public API documentation
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>API Key Authentication</Label>
                  <p className="text-xs text-muted-foreground">
                    Require API keys for all requests
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Settings;
