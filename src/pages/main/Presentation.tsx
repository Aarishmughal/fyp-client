import React, { useState } from "react";
import {
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  Brain,
  Package,
  DollarSign,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FaisalMoversPitch = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Data for charts
  const marketGrowthData = [
    { year: "2023", value: 512.5 },
    { year: "2024", value: 566.7 },
    { year: "2025", value: 654 },
    { year: "2026", value: 750 },
    { year: "2030", value: 1260 },
    { year: "2033", value: 1377 },
  ];

  const aiLogisticsGrowth = [
    { year: "2023", value: 12 },
    { year: "2024", value: 20.1 },
    { year: "2025", value: 35 },
    { year: "2028", value: 120 },
    { year: "2031", value: 280 },
    { year: "2033", value: 549 },
  ];

  const bookingPlatformData = [
    { name: "Mobile App", value: 52, color: "#3b82f6" },
    { name: "Desktop/Web", value: 48, color: "#8b5cf6" },
  ];

  const customerPreferenceData = [
    { name: "Online Booking", value: 72, color: "#10b981" },
    { name: "Traditional Agencies", value: 12, color: "#ef4444" },
    { name: "Direct/Other", value: 16, color: "#f59e0b" },
  ];

  const aiAdoptionData = [
    { category: "Route Optimization", improvement: 35 },
    { category: "Fleet Planning", improvement: 36 },
    { category: "Operational Efficiency", improvement: 34 },
    { category: "Fuel Savings", improvement: 40 },
    { category: "Cost Reduction", improvement: 50 },
  ];

  const globalStats = [
    {
      icon: <Globe className="w-8 h-8" />,
      value: "$1.26T",
      label: "Global Online Travel Market by 2030",
      color: "bg-blue-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "72%",
      label: "Travelers Prefer Online Booking",
      color: "bg-green-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      value: "57%",
      label: "Bookings via Mobile Devices",
      color: "bg-purple-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      value: "70%",
      label: "Companies Adopting AI in Logistics",
      color: "bg-orange-500",
    },
  ];

  const aiImpactStats = [
    { metric: "Transit Time Reduction", value: "22%", icon: <Clock /> },
    { metric: "Shipping Cost Decrease", value: "15%", icon: <DollarSign /> },
    { metric: "Delivery Efficiency", value: "45%", icon: <Package /> },
    { metric: "AI Market Growth (CAGR)", value: "46.7%", icon: <TrendingUp /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Global Digital Technology Statistics
          </h1>
          <p className="text-2xl text-blue-200">
            Transportation & Logistics Industry 2024-2025
          </p>
          <div className="mt-4 inline-block bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400">
            <p className="text-white font-semibold">
              Prepared for Faisal Movers
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["overview", "booking", "ai-adoption", "roi"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {tab
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${stat.color}`} // Assuming stat.color is a string like "bg-blue-500"
                  >
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Market Growth Chart */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Online Travel Market Growth (USD Billions)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={marketGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    name="Market Value ($B)"
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-blue-200 text-center mt-4">
                CAGR: 12.99% (2024-2032)
              </p>
            </div>
          </div>
        )}

        {activeTab === "booking" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Customer Preference */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Customer Booking Preferences 2024
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={customerPreferenceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label
                    >
                      {customerPreferenceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 text-center text-blue-200">
                  <p className="font-semibold">
                    72% prefer online booking vs 12% traditional agencies
                  </p>
                </div>
              </div>

              {/* Platform Distribution */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Booking Platform Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={bookingPlatformData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label
                    >
                      {bookingPlatformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 text-center text-blue-200">
                  <p className="font-semibold">
                    Mobile bookings dominate with 52-57% market share
                  </p>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Key Digital Booking Insights
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      Transportation bookings: 41% of all online travel
                    </p>
                    <p className="text-blue-200 text-sm">
                      Flights, buses, and car rentals dominate online bookings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      Mobile bookings growing at 11.92% CAGR
                    </p>
                    <p className="text-blue-200 text-sm">
                      Smartphone adoption driving digital transformation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      53% cite speed as primary online booking reason
                    </p>
                    <p className="text-blue-200 text-sm">
                      Last-minute bookings and instant confirmation valued
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      70% of travel revenue through online channels
                    </p>
                    <p className="text-blue-200 text-sm">
                      Digital platforms becoming primary revenue source
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ai-adoption" && (
          <div className="space-y-8">
            {/* AI Market Growth */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                AI in Logistics Market Growth (USD Billions)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={aiLogisticsGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    name="AI Market Value ($B)"
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-blue-200 text-center mt-4">
                Explosive CAGR: 46.7% - AI transforming logistics globally
              </p>
            </div>

            {/* AI Improvements Bar Chart */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                AI-Driven Improvements in Transportation
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={aiAdoptionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis
                    dataKey="category"
                    stroke="#fff"
                    angle={-15}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    stroke="#fff"
                    label={{
                      value: "Improvement %",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#fff",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="improvement" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* AI Adoption Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">
                  Current AI Adoption
                </h4>
                <div className="space-y-3 text-white">
                  <p>
                    •{" "}
                    <span className="font-bold text-2xl text-orange-400">
                      70%
                    </span>{" "}
                    of logistics companies use AI (up 17% from 2024)
                  </p>
                  <p>
                    •{" "}
                    <span className="font-bold text-2xl text-orange-400">
                      65%
                    </span>{" "}
                    of companies implementing AI in operations by 2024
                  </p>
                  <p>
                    •{" "}
                    <span className="font-bold text-2xl text-orange-400">
                      93%
                    </span>{" "}
                    agree AI improves organizational resilience
                  </p>
                  <p>
                    •{" "}
                    <span className="font-bold text-2xl text-orange-400">
                      91%
                    </span>{" "}
                    believe AI adopters better positioned for growth
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold text-white mb-4">
                  AI Use Cases
                </h4>
                <div className="space-y-3 text-white">
                  <p>
                    • <span className="font-bold">Route Optimization:</span> 50%
                    increase in adoption (2022-2024)
                  </p>
                  <p>
                    • <span className="font-bold">Demand Forecasting:</span> 55%
                    planning implementation
                  </p>
                  <p>
                    • <span className="font-bold">Fleet Management:</span>{" "}
                    Real-time monitoring & predictive maintenance
                  </p>
                  <p>
                    • <span className="font-bold">Customer Service:</span> AI
                    chatbots for 24/7 support
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "roi" && (
          <div className="space-y-8">
            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiImpactStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform"
                >
                  <div className="text-green-400 mb-4">
                    {React.cloneElement(stat.icon, { className: "w-12 h-12" })}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.metric}</div>
                </div>
              ))}
            </div>

            {/* ROI Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Proven ROI & Business Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">
                    Operational Efficiency
                  </h4>
                  <div className="space-y-3 text-white">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>Fuel consumption reduction</span>
                      <span className="font-bold text-green-400">15%+</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>Empty miles reduction</span>
                      <span className="font-bold text-green-400">45%</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>Delivery time optimization</span>
                      <span className="font-bold text-green-400">22%</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>Route optimization savings</span>
                      <span className="font-bold text-green-400">15%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">
                    Customer Experience
                  </h4>
                  <div className="space-y-3 text-white">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>First-attempt delivery success</span>
                      <span className="font-bold text-green-400">
                        Increased
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>Customer service automation</span>
                      <span className="font-bold text-green-400">24/7</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>Real-time tracking adoption</span>
                      <span className="font-bold text-green-400">
                        Essential
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                      <span>Online booking preference</span>
                      <span className="font-bold text-green-400">72%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Opportunity */}
            <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Pakistan Market Opportunity
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    Growing
                  </div>
                  <p className="text-lg font-semibold">E-commerce Boom</p>
                  <p className="text-blue-200 text-sm">
                    Digital payments & online shopping accelerating rapidly
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    Young
                  </div>
                  <p className="text-lg font-semibold">Tech-Savvy Population</p>
                  <p className="text-blue-200 text-sm">
                    Millennials & Gen-Z (45-50% market) drive digital adoption
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    First-Mover
                  </div>
                  <p className="text-lg font-semibold">Competitive Advantage</p>
                  <p className="text-blue-200 text-sm">
                    Early AI adoption differentiates from competitors
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                The Time to Act is NOW
              </h3>
              <p className="text-xl text-white mb-6">
                Companies investing 15%+ in AI training & change management
                report 2.8x higher adoption rates and 3.5x higher ROI
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
                  <p className="font-bold text-2xl text-white">$1.26T</p>
                  <p className="text-sm text-white">Market by 2030</p>
                </div>
                <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
                  <p className="font-bold text-2xl text-white">46.7%</p>
                  <p className="text-sm text-white">AI CAGR</p>
                </div>
                <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
                  <p className="font-bold text-2xl text-white">70%</p>
                  <p className="text-sm text-white">Online Revenue</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-blue-200 text-sm">
          <p>
            Sources: Grand View Research, Mordor Intelligence, DHL, FedEx,
            Penske Transportation Survey 2025, McKinsey & Company
          </p>
          <p className="mt-2">
            Data compiled for Faisal Movers - November 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaisalMoversPitch;