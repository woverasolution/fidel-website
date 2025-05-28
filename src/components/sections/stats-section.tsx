import React from "react";

export function StatsSection() {
  return (
    <section className="w-full py-24 bg-[#f6fffb] text-gray-900 relative overflow-hidden">
      {/* Soft gradient accent background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200/60 to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="text-green-700 font-medium">Our Commitment</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900">
            Making school management simple in Ethiopia
          </h2>
          <p className="text-gray-500 text-lg max-w-[800px] mx-auto">
            Discover how Fidel is streamlining operations for educational
            institutions across Ethiopia with tailored workflows and automation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 bg-white border border-green-100 p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-green-700">50+</h3>
            <p className="text-gray-500">Schools Supported</p>
          </div>
          <div className="space-y-2 bg-white border border-green-100 p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-green-700">30K+</h3>
            <p className="text-gray-500">Students Managed</p>
          </div>
          <div className="space-y-2 bg-white border border-green-100 p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-green-700">95%</h3>
            <p className="text-gray-500">Client Retention</p>
          </div>
          <div className="space-y-2 bg-white border border-green-100 p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-4xl font-bold text-green-700">100%</h3>
            <p className="text-gray-500">Customizable Workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
