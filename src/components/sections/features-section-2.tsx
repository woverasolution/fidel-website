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

export function FeaturesSection2() {
  return (
    <section className="w-full min-h-screen bg-white text-gray-900 py-24 relative overflow-hidden">
      {/* Pattern Background Image */}
      <div className="absolute inset-0 z-10 opacity-[2%] pointer-events-none">
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
        <div className="text-center max-w-3xl mx-auto mb-20 font-bold">
          <h1 className="text-5xl md:text-6xl tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">
              Fidel
            </span>{" "}
            features
          </h1>
          <p className="text-gray-500 text-xl mb-8 font-light">
            Discover the comprehensive tools that power Ethiopia&rsquo;s most
            trusted school management system.
          </p>
        </div>
        {/* Minimal Green Bento Grid */}
        <div className="space-y-8">
          {/* Row 1: 1/3 - 2/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1/3 Column */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl mb-3 font-medium">Student Management</h3>
              <p className="text-gray-600 font-light">
                Comprehensive student profiles with academic history, attendance
                records, and performance analytics.
              </p>
            </div>
            {/* 2/3 Column */}
            <div className="md:col-span-2 relativebg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <BookOpen className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">
                    Course Management
                  </h3>
                  <p className="text-gray-600 font-light">
                    Easily create, organize, and manage courses. Assign teachers
                    and monitor curriculum progress.
                  </p>
                </div>
                <div className="relative ">
                  <BookOpen className="absolute -mr-[250px] -mt-7 z-50 size-16 text-green-500 right-0 top-0" />
                </div>
                <div className="md:w-1/2 md:pl-8 flex justify-center items-center">
                  <div className="relative w-64 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl border border-green-100 bg-green-50" />
                    <div className="relative z-10 w-full flex flex-col gap-4 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <span className="w-3 h-3 rounded-full bg-green-300" />
                        <span className="flex-1 h-1 mx-2 rounded bg-green-100" />
                        <span className="w-3 h-3 rounded-full bg-green-100" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="w-3 h-3 rounded-full bg-green-100" />
                        <span className="flex-1 h-1 mx-2 rounded bg-green-100" />
                        <span className="w-3 h-3 rounded-full bg-green-200" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="w-3 h-3 rounded-full bg-green-200" />
                        <span className="flex-1 h-1 mx-2 rounded bg-green-100" />
                        <span className="w-3 h-3 rounded-full bg-green-300" />
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
            <div className="md:col-span-2 bg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-green-500"
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
                  <p className="text-gray-600 font-light">
                    Automate and track major school actions with reliable,
                    auditable workflows.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-100 blur-2xl rounded-full"></div>
                    <div className="relative z-10 bg-green-50 p-4 rounded-xl border border-green-100">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-300"></div>
                          <div className="h-1 flex-grow bg-green-100 rounded"></div>
                          <div className="w-3 h-3 rounded-full bg-green-200"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-200"></div>
                          <div className="h-1 flex-grow bg-green-100 rounded"></div>
                          <div className="w-3 h-3 rounded-full bg-green-100"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-100"></div>
                          <div className="h-1 flex-grow bg-green-100 rounded"></div>
                          <div className="w-3 h-3 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1/3 Column */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl mb-3 font-medium">Scheduling</h3>
              <p className="text-gray-600 font-light">
                Intelligent timetable management to optimize classroom usage and
                teacher availability.
              </p>
            </div>
          </div>
          {/* Row 3: 1/3 - 2/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1/3 Column */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl mb-3 font-medium">
                Performance Analytics
              </h3>
              <p className="text-gray-600 font-light">
                Detailed insights into student achievement, teacher
                effectiveness, and overall school performance.
              </p>
            </div>
            {/* 2/3 Column */}
            <div className="md:col-span-2 bg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <DollarSign className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">
                    Financial Management
                  </h3>
                  <p className="text-gray-600 font-light">
                    Manage tuition payments, generate invoices, and track all
                    school financial transactions with ease.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8 flex flex-col gap-3">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-5 py-3">
                      <span className="text-sm text-gray-800 font-medium">
                        Paid Invoices
                      </span>
                      <span className="text-sm text-gray-700 font-semibold">
                        ₹2.4M
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg px-5 py-3">
                      <span className="text-sm text-gray-800 font-medium">
                        Pending Payments
                      </span>
                      <span className="text-sm text-gray-700 font-semibold">
                        ₹0.6M
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row 4: 2/3 - 1/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2/3 Column */}
            <div className="md:col-span-2 bg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl mb-3 font-medium">
                    Integration Capabilities
                  </h3>
                  <p className="text-gray-600 font-light">
                    Connect with other educational tools and platforms for a
                    unified experience.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex gap-3 items-center justify-center">
                      <Bell className="w-5 h-5 text-green-400 mb-1" />
                      <div className="text-xs text-gray-700 mb-1">
                        Stay updated across all systems.
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100 flex gap-3 items-center justify-center">
                      <Shield className="w-5 h-5 text-green-400 mb-1" />
                      <div className="text-xs text-gray-700 mb-1">
                        Advanced data protection.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 1/3 Column */}
            <div className="bg-white border border-green-100 rounded-2xl p-8 hover:border-green-300 shadow-sm transition-all duration-300">
              <div className="p-2 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Bell className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl mb-3 font-medium">Notifications</h3>
              <p className="text-gray-600 font-light">
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
