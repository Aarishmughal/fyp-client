import { ArrowLeftIcon } from "lucide-react";
import { Outlet, Link } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="flex h-screen">
        {/* Left side - Fixed */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex-col justify-between overflow-hidden">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-2xl font-semibold">
                HealthCare Solutions
              </span>
            </Link>
          </div>

          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">
              Your Health, Our Priority
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Join thousands of patients who trust us with their healthcare
              needs. Access comprehensive medical services, connect with
              specialists, and manage your health journey with ease.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-blue-100">24/7 Medical Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-blue-100">Secure Patient Records</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-blue-100">Expert Medical Team</span>
              </div>
            </div>
          </div>

          <div className="text-blue-200 text-sm">
            <p>
              &copy; {new Date().getFullYear()} HealthCare Solutions. All rights
              reserved.
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 py-12">
            <div className="w-full max-w-md mx-auto">
              <div className="lg:hidden text-center mb-8">
                <Link to="/" className="inline-flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">H</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">
                    HealthCare Solutions
                  </span>
                </Link>
              </div>

              <Outlet />

              <div className="mt-8 text-center">
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium inline-flex items-center"
                >
                  <ArrowLeftIcon className="size-4 mr-2" /> Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
