import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";

export function Landing() {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Your Health, Our Priority
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Experience world-class healthcare with our comprehensive
                        medical services. From primary care to specialized
                        treatments, we're here for you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link to="/signup">Get Started Today</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link to="/services">Explore Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose HealthCare Solutions?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We combine cutting-edge technology with
                            compassionate care to deliver exceptional healthcare
                            experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center border-0 shadow-lg">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Expert Medical Team</CardTitle>
                                <CardDescription>
                                    Board-certified physicians and specialists
                                    with years of experience in their respective
                                    fields.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center border-0 shadow-lg">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>24/7 Care</CardTitle>
                                <CardDescription>
                                    Round-the-clock medical support and
                                    emergency services whenever you need them
                                    most.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="text-center border-0 shadow-lg">
                            <CardHeader>
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-purple-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Secure & Private</CardTitle>
                                <CardDescription>
                                    Your health information is protected with
                                    industry-leading security and privacy
                                    measures.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of patients who trust us with their
                        healthcare needs. Create your account today and
                        experience the difference.
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link to="/signup">Create Your Account</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
