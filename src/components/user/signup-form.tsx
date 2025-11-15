import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { apiProvider, type SignupData } from "@/api";
import { toast } from "sonner";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Spinner } from "../ui/spinner";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      const credentials: SignupData = {
        displayName: formData.get("displayName") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        passwordConfirm: formData.get("confirm-password") as string,
      };
      if (credentials.password != credentials.passwordConfirm) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }
      const response = await apiProvider.adminAuth.signup(credentials);
      const { accessToken, refreshToken, user } = response.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      console.log("Admin registered:", user.displayName);
      toast.success(`Welcome , ${user.displayName && "Administrator"}!`);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Invalid email or password. Please try again.";

      console.error("Admin register failed:", error);
      toast.error("Registration failed");
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Desktop / Tablet View */}
      <div className="hidden md:block mt-42 lg:mt-20 pb-4">
        <Card>
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>
              Enter your information below to create a new account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Display Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="User"
                    name="display-name"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">
                    Email<span className="text-amber-800">*</span>
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@mrs.com"
                    required
                    name="email"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">
                    Password<span className="text-amber-800">*</span>
                  </FieldLabel>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <Input
                          id="password"
                          type="password"
                          required
                          name="password"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      Must be at least 8 characters long.
                    </TooltipContent>
                  </Tooltip>
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirm-password">
                    Confirm Password<span className="text-amber-800">*</span>
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    name="confirm-password"
                  />
                </Field>
                {error && (
                  <Field>
                    <Alert variant="destructive">
                      <AlertCircleIcon className="h-4 w-4" />
                      <AlertTitle>Registration Failed!</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  </Field>
                )}
                <Field>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? <Spinner /> : "Create Account"}
                  </Button>
                  <FieldDescription className="px-6 text-center">
                    Already have an account? <a href="/login">Log in</a>
                  </FieldDescription>
                </Field>
                <Field>
                  <p className="text-sm text-muted-foreground">
                    By creating an account, you agree to our{" "}
                    <a
                      href="/terms"
                      className="underline hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="underline hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-42 pb-4">
        <div className="space-y-4">
          <CardTitle>Create an Administrator</CardTitle>
          <p className="text-muted-foreground">
            Enter your information below to create a new Administrator account.
          </p>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Display Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Administrator"
                  name="displayName"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">
                  Email<span className="text-amber-800">*</span>
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@mrs.com"
                  required
                  name="email"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">
                  Password<span className="text-amber-800">*</span>
                </FieldLabel>
                <Input id="password" type="password" required name="password" />
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirm Password<span className="text-amber-800">*</span>
                </FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  name="confirm-password"
                />
              </Field>
              {error && (
                <Field>
                  <Alert variant="destructive">
                    <AlertCircleIcon className="h-4 w-4" />
                    <AlertTitle>Registration Failed!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </Field>
              )}
              <Field>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? <Spinner /> : "Create Account"}
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="/login">Log in</a>
                </FieldDescription>
              </Field>
              <Field>
                <p className="text-sm text-muted-foreground">
                  By creating an account, you agree to our{" "}
                  <a
                    href="/terms"
                    className="underline hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="underline hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
}
