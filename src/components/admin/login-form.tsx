import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { apiProvider, type LoginCredentials } from "@/api";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router";
import { ADMIN_ROUTES } from "@/routes/config";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      const credentials: LoginCredentials = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const response = await apiProvider.adminAuth.login(credentials);
      const { accessToken, refreshToken, user } = response.data.data;

      login(accessToken, refreshToken, user);

      console.log("Admin logged in:", user.displayName);
      toast.success(`Welcome back, ${user.displayName}!`);

      navigate(ADMIN_ROUTES.DASHBOARD);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Invalid email or password. Please try again.";

      console.error("Admin login failed:", error);
      toast.error("Login failed");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="hidden md:block">
        <Card>
          <CardHeader>
            <CardTitle>Administrator Login</CardTitle>
            <CardDescription>
              Enter Email address and Password to login as Admin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">
                    Email<span className="text-amber-800">*</span>
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    name="email"
                    disabled={loading}
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">
                      Password<span className="text-amber-800">*</span>
                    </FieldLabel>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    name="password"
                    disabled={loading}
                  />
                </Field>
                {error && (
                  <Field>
                    <Alert variant="destructive">
                      <AlertCircleIcon className="h-4 w-4" />
                      <AlertTitle>Login Failed!</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  </Field>
                )}
                <Field>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? <Spinner /> : "Log in"}
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="block md:hidden">
        <div className="space-y-4">
          <CardTitle>Administrator Login</CardTitle>
          <p className="text-muted-foreground">
            Enter Email address and Password to login as Admin
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email-mobile">Email</FieldLabel>
                <Input
                  id="email-mobile"
                  type="email"
                  placeholder="m@example.com"
                  required
                  name="email"
                  disabled={loading}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password-mobile">Password</FieldLabel>
                <Input
                  id="password-mobile"
                  type="password"
                  required
                  name="password"
                  disabled={loading}
                />
              </Field>
              {error && (
                <Field>
                  <Alert variant="destructive">
                    <AlertCircleIcon className="h-4 w-4" />
                    <AlertTitle>Login Failed!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </Field>
              )}
              <Field>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? <Spinner /> : "Log in"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
}
