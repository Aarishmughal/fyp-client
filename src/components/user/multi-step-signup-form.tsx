import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface FormData {
  // User fields
  email: string;
  phone: string;
  displayName: string;
  password: string;
  confirmPassword: string;
  avatar?: string;

  // Tenant fields
  tenantName: string;
  tenantType: "hospital" | "clinic" | "lab" | "individual";
}

const STEPS = [
  { id: 1, name: "Account", description: "Let's get you set up!" },
  { id: 2, name: "Profile", description: "Tell us about yourself" },
  { id: 3, name: "Organization", description: "About your practice" },
  { id: 4, name: "Review", description: "Almost there!" },
];

export function MultiStepSignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    tenantName: "",
    tenantType: "individual",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateStep = (step: number): boolean => {
    setError(null);

    switch (step) {
      case 1: // Account
        if (!formData.email) {
          setError("We'll need your email address to continue");
          return false;
        }
        if (!formData.email.includes("@")) {
          setError("Hmm, that doesn't look like a valid email address");
          return false;
        }
        if (!formData.password) {
          setError("Please create a password to secure your account");
          return false;
        }
        if (formData.password.length < 8) {
          setError(
            "Your password should be at least 8 characters for security",
          );
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError("Oops! Those passwords don't match");
          return false;
        }
        return true;

      case 2: // Profile
        if (!formData.displayName) {
          setError("Please let us know what to call you");
          return false;
        }
        if (formData.phone && !/^\+?[\d\s-()]+$/.test(formData.phone)) {
          setError("That phone number doesn't look quite right");
          return false;
        }
        return true;

      case 3: // Organization
        if (!formData.tenantName) {
          setError("Please tell us your organization's name");
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual API call
      console.log("Submitting form data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Handle successful signup
      // - Store tokens
      // - Redirect to dashboard
      // - Show success message

      alert("Account created successfully! (This is a placeholder)");
    } catch (err) {
      const error = err as Error;
      setError(error?.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">What's your email address?</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                We'll use this for your login
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Create a password</Label>
              <Input
                id="password"
                type="password"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Make it secure! At least 8 characters
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm your password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Type it again to be sure"
                value={formData.confirmPassword}
                onChange={(e) =>
                  updateFormData("confirmPassword", e.target.value)
                }
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">What should we call you?</Label>
              <Input
                id="displayName"
                type="text"
                placeholder="Your full name"
                value={formData.displayName}
                onChange={(e) => updateFormData("displayName", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                This is how you'll appear to your team and patients
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number (optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                We'll use this for important notifications
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tenantName">
                What's your organization called?
              </Label>
              <Input
                id="tenantName"
                type="text"
                placeholder="e.g., City General Hospital"
                value={formData.tenantName}
                onChange={(e) => updateFormData("tenantName", e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                This could be your clinic, hospital, or practice name
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tenantType">What best describes you?</Label>
              <Select
                value={formData.tenantType}
                onValueChange={(value) =>
                  updateFormData("tenantType", value as FormData["tenantType"])
                }
              >
                <SelectTrigger id="tenantType">
                  <SelectValue placeholder="Choose your organization type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hospital">🏥 Hospital</SelectItem>
                  <SelectItem value="clinic">🏪 Clinic</SelectItem>
                  <SelectItem value="lab">🔬 Laboratory</SelectItem>
                  <SelectItem value="individual">
                    👨‍⚕️ Individual Practitioner
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                You can always update this later
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <p className="text-muted-foreground">
                Looking good! Here's what we've got:
              </p>
            </div>

            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-semibold text-sm">Your Account</h3>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-semibold text-sm">Your Profile</h3>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{formData.displayName}</span>
                </div>
                {formData.phone && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-semibold text-sm">Your Organization</h3>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{formData.tenantName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium capitalize">
                    {formData.tenantType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan:</span>
                  <span className="font-medium">
                    Free (You can upgrade anytime!)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4 mb-4">
              <p className="text-xs text-muted-foreground">
                By clicking "Create Account", you agree to our{" "}
                <a
                  href="/terms"
                  className="underline hover:text-primary"
                  target="_blank"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="underline hover:text-primary"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome! Let's Get Started 👋</CardTitle>
          <CardDescription>
            Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1].name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Progress Bar */}
          <div className="mb-6">
            <Progress
              value={(currentStep / STEPS.length) * 100}
              className="h-2"
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {STEPS[currentStep - 1].description}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step Content */}
            <div className="min-h-[300px]">{renderStepContent()}</div>

            {/* Error Message */}
            {error && (
              <Alert variant="destructive" className="my-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1 || loading}
              >
                <ChevronLeft />
                Back
              </Button>

              {currentStep < STEPS.length ? (
                <Button type="button" onClick={handleNext} disabled={loading}>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" disabled={loading}>
                  {loading ? "Creating your account..." : "Create My Account"}
                </Button>
              )}
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Log in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
