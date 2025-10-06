import { Outlet, Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export function LandingLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-40 to-slate-100">
            {/* Navigation Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    H
                                </span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">
                                HealthCare Solutions
                            </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-gray-900 font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/services"
                                className="text-gray-600 hover:text-gray-900 font-medium"
                            >
                                Services
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-600 hover:text-gray-900 font-medium"
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-600 hover:text-gray-900 font-medium"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" asChild>
                                <Link to="/login">Sign In</Link>
                            </Button>
                            <Button asChild>
                                <Link to="/signup">Get Started</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                        H
                                    </span>
                                </div>
                                <span className="text-xl font-semibold">
                                    HealthCare Solutions
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Providing comprehensive healthcare solutions for
                                a better tomorrow.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Services</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Primary Care
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Specialists
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Emergency Care
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Telemedicine
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>
                            &copy; 2025 HealthCare Solutions. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
