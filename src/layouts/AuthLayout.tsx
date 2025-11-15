import { Toaster } from "@/components/ui/sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home } from "lucide-react";
import { Outlet, useNavigate } from "react-router";

export function AuthLayout() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-10 relative">
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => navigate("/")}
            className="fixed left-6 top-6 md:left-10 md:top-10 inline-flex items-center justify-center rounded-md bg-background p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Go home"
            type="button"
          >
            <Home className="h-5 w-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent>Go home</TooltipContent>
      </Tooltip>
      <Outlet />
      <Toaster />
    </div>
  );
}
