// components/EMEAReportSection.tsx
import React from 'react';

const Ema = () => {
  return (
    <section className="relative w-full h-80 bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 opacity-70" />
      <div className="relative z-10 px-8 py-14 max-w-7xl mx-auto">
        <nav className="text-sm text-gray-400">
          <span className="mr-2">Home</span> &gt; <span className="text-red-500 ml-2">About</span>
        </nav>

        <h1 className="mt-6 text-5xl font-bold">
          <span className="block">2025 EMEA Digital Engagement</span>
          <span className="block italic text-orange-500 mt-2">Benchmarks Report</span>
        </h1>

        <button className="mt-6 px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
          Join Us 
        </button>
      </div>
    </section>
  );
};

export default Ema;
