import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Palette, Lock, AlertTriangle } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";

function Settings() {
  const { theme, setTheme } = useTheme();
  const [isCompactMode, setIsCompactMode] = useState(() => {
    const stored = localStorage.getItem("compact-mode");
    return stored === "true";
  });

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const handleDarkModeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleCompactModeToggle = (checked: boolean) => {
    setIsCompactMode(checked);
    localStorage.setItem("compact-mode", checked.toString());
    if (checked) {
      document.documentElement.classList.add("compact-mode");
    } else {
      document.documentElement.classList.remove("compact-mode");
    }
  };

  useEffect(() => {
    if (isCompactMode) {
      document.documentElement.classList.add("compact-mode");
    } else {
      document.documentElement.classList.remove("compact-mode");
    }
  }, [isCompactMode]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Profile Settings</CardTitle>
            </div>
            <CardDescription>
              Update your personal information and profile details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                defaultValue="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Acme Inc." />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between space-x-2">
              <label htmlFor="email-notifications" className="self-start">
                <div className="flex flex-col space-y-1">
                  <span>Email Notifications</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive email updates about your account activity
                  </span>
                </div>
              </label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-start justify-between space-x-2">
              <label htmlFor="marketing-emails" className="self-start">
                <div className="flex flex-col space-y-1">
                  <span>Marketing Emails</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive emails about new features and updates
                  </span>
                </div>
              </label>
              <Switch id="marketing-emails" />
            </div>
            <Separator />
            <div className="flex items-start justify-between space-x-2">
              <label htmlFor="push-notifications" className="self-start">
                <div className="flex flex-col space-y-1">
                  <span>Push Notifications</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Receive push notifications on your devices
                  </span>
                </div>
              </label>
              <Switch id="push-notifications" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>
              Customize the look and feel of your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between space-x-2">
              <label htmlFor="dark-mode" className="self-start">
                <div className="flex flex-col space-y-1">
                  <span>Dark Mode</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Enable dark mode for better viewing in low light
                  </span>
                </div>
              </label>
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={handleDarkModeToggle}
              />
            </div>

            <Separator />

            <div className="flex items-start justify-between space-x-2">
              <label htmlFor="compact-mode" className="self-start">
                <div className="flex flex-col space-y-1">
                  <span>Compact Mode</span>
                  <span className="font-normal text-sm text-muted-foreground">
                    Reduce spacing for a more compact interface
                  </span>
                </div>
              </label>
              <Switch
                id="compact-mode"
                checked={isCompactMode}
                onCheckedChange={handleCompactModeToggle}
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <CardTitle>Privacy & Security</CardTitle>
            </div>
            <CardDescription>
              Manage your privacy and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
            </div>
            <CardDescription>
              Irreversible actions that affect your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Delete Account</p>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Settings;
