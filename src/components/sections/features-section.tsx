"use client";

import {
  BarChart2,
  GraduationCap,
  BookOpen,
  Calendar,
  DollarSign,
  Bell,
  Zap,
  Shield,
} from "lucide-react";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#04150e] to-[#02110b] text-white py-24 relative overflow-hidden">
      {/* Pattern Background Image */}
      <div className="absolute inset-0 z-10 opacity-[5%] pointer-events-none">
        <Image
          src="/pattern.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          priority={false}
          aria-hidden="true"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              School Management
            </span>{" "}
            features
          </h1>
          <p className="text-green-100 text-xl mb-8 font-extralight">
            Discover the comprehensive tools that power Ethiopia&rsquo;s most
            trusted school management system.
          </p>
        </div>
        {/* Bento Grid Features Section - Alternating 1/3 2/3 Sections */}
        <div className="space-y-8">
          {/* Row 1: 1/3 - 2/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1/3 Column */}
            <div className="bg-gradient-to-br from-green-900/20 to-black border border-green-800/30 rounded-2xl p-8 hover:border-green-600/50 transition-all duration-300">
              <div className="p-2 bg-green-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl mb-3 font-medium">Student Management</h3>
              <p className="text-green-100 font-extralight">
                Comprehensive student profiles with academic history, attendance
                records, and performance analytics.
              </p>
            </div>
            {/* 2/3 Column */}
            <div className="md:col-span-2 bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-800/30 rounded-2xl p-8 hover:border-emerald-600/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-emerald-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">
                    Course Management
                  </h3>
                  <p className="text-green-100 font-extralight">
                    Easily create, organize, and manage courses. Assign teachers
                    and monitor curriculum progress.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
                    <div className="relative z-10 bg-gradient-to-br from-emerald-900/40 to-black/60 p-4 rounded-xl border border-emerald-500/30">
                      <div className="w-full h-32 flex items-center justify-center">
                        <BookOpen className="w-20 h-20 text-emerald-400/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2: 2/3 - 1/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2/3 Column */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-900/20 to-black border border-blue-800/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-blue-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">
                    Financial Management
                  </h3>
                  <p className="text-green-100 font-extralight">
                    Manage tuition payments, generate invoices, and track all
                    school financial transactions with ease.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-900/30 to-black/50 p-3 rounded-lg border border-blue-800/30">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-green-100">
                          Paid Invoices
                        </div>
                        <div className="text-blue-300 text-sm">₹2.4M</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/30 to-black/50 p-3 rounded-lg border border-blue-800/30">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-green-100">
                          Pending Payments
                        </div>
                        <div className="text-blue-300 text-sm">₹0.6M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1/3 Column */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-black border border-cyan-800/30 rounded-2xl p-8 hover:border-cyan-600/50 transition-all duration-300">
              <div className="p-2 bg-cyan-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl mb-3 font-medium">Scheduling</h3>
              <p className="text-green-100 font-extralight">
                Intelligent timetable management to optimize classroom usage and
                teacher availability.
              </p>
            </div>
          </div>
          {/* Row 3: 1/3 - 2/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1/3 Column */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-800/30 rounded-2xl p-8 hover:border-emerald-600/50 transition-all duration-300">
              <div className="p-2 bg-emerald-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl mb-3 font-medium">
                Performance Analytics
              </h3>
              <p className="text-green-100 font-extralight">
                Detailed insights into student achievement, teacher
                effectiveness, and overall school performance.
              </p>
            </div>
            {/* 2/3 Column */}
            <div className="md:col-span-2 bg-gradient-to-br from-fuchsia-900/20 to-black border border-fuchsia-800/30 rounded-2xl p-8 hover:border-fuchsia-600/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-fuchsia-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-fuchsia-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl mb-3 font-medium">
                    Transactional Workflows
                  </h3>
                  <p className="text-gray-400 font-extralight">
                    Automate and track major school actions with reliable, auditable workflows.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-fuchsia-500/20 blur-2xl rounded-full"></div>
                    <div className="relative z-10 bg-gradient-to-br from-fuchsia-900/40 to-black/60 p-4 rounded-xl border border-fuchsia-500/30">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-fuchsia-400"></div>
                          <div className="h-1 flex-grow bg-fuchsia-800/50 rounded"></div>
                          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                          <div className="h-1 flex-grow bg-purple-800/50 rounded"></div>
                          <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                          <div className="h-1 flex-grow bg-indigo-800/50 rounded"></div>
                          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row 4: 2/3 - 1/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2/3 Column */}
            <div className="md:col-span-2 bg-gradient-to-br from-rose-900/20 to-black border border-rose-800/30 rounded-2xl p-8 hover:border-rose-600/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-rose-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">
                    Integration Capabilities
                  </h3>
                  <p className="text-green-100 font-extralight">
                    Connect with other educational tools and platforms for a
                    unified experience.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-rose-900/30 to-black/50 p-3 rounded-lg border border-rose-800/30 flex gap-3 items-center justify-center">
                      <Bell className="w-5 h-5 text-rose-300 mb-1" />
                      <div className="text-xs text-green-100 mb-1">
                        Stay updated across all systems.
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-rose-900/30 to-black/50 p-3 rounded-lg border border-rose-800/30 flex gap-3  items-center justify-center">
                      <Shield className="w-5 h-5 text-rose-300 mb-1" />
                      <div className="text-xs text-green-100 mb-1">
                        Advanced data protection.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1/3 Column */}
            <div className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-800/30 rounded-2xl p-8 hover:border-amber-600/50 transition-all duration-300">
              <div className="p-2 bg-amber-800/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Bell className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl mb-3 font-medium">Notifications</h3>
              <p className="text-green-100 font-extralight">
                Automated alerts for important events, deadlines, and
                announcements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
