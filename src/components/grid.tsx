"use client";

import React from "react";
import { motion } from "framer-motion";

const IMAGES = [
  // Column 1 (centered)
  { src: "/t2.jpg", alt: "Column 1", col: 1 },

  // Column 2
  { src: "/class.jpeg", alt: "Classroom", col: 2, order: 1 },
  { src: "/t6.jpg", alt: "Student", col: 2, order: 2 },

  // Column 3
  { src: "/about.jpeg", alt: "About", col: 3, order: 1 },
  { src: "/reception.jpeg", alt: "Reception", col: 3, order: 2 },

  // Column 4 (centered)
  { src: "/c3.jpg", alt: "Column 4", col: 4 },
];

export default function Grid() {
  const cols = [1, 2, 3, 4].map((colNum) => {
    const images = IMAGES.filter((img) => img.col === colNum).sort(
      (a, b) => (a.order ?? 0) - (b.order ?? 0)
    );

    const isCentered = (colNum === 1 || colNum === 4) && images.length === 1;

    return (
      <motion.div
        key={colNum}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: colNum * 0.1 }}
        className={`flex flex-col flex-shrink-0 gap-y-6 lg:gap-y-8 ${
          isCentered ? "justify-center" : ""
        }`}
      >
        {images.map(({ src, alt }, idx) => {
          // Determine dimensions based on column - matching StatsGrid dimensions
          const isPortrait = colNum === 2;
          const isLandscape = colNum === 3;

          // Using the same width and height values as StatsGrid
          const width = isPortrait ? "w-56" : isLandscape ? "w-72" : "w-64";
          const height = isPortrait ? "h-72" : isLandscape ? "h-56" : "h-72";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: colNum * 0.1 + idx * 0.2 }}
              className={`${width} ${height} overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02] hover:-translate-y-1`}
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          );
        })}
      </motion.div>
    );
  });

  return (
    <div className="relative overflow-hidden bg-gradient-custom">
      {/* Abstract Background Elements using theme colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#83338b]/10 blur-[90px]"></div>
        <div className="absolute top-[60%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#a346ae]/15 blur-[80px]"></div>
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-[#c682cf]/20 blur-[70px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[25%] h-[25%] rounded-full bg-[#83338b]/8 blur-[60px]"></div>

        {/* Additional subtle overlays */}
        <div className="absolute top-[5%] right-[20%] w-[20%] h-[20%] rounded-full bg-[#a346ae]/5 blur-[50px]"></div>
        <div className="absolute bottom-[30%] right-[30%] w-[15%] h-[15%] rounded-full bg-[#c682cf]/10 blur-[40px]"></div>

        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="pt-20 pb-24 lg:pt-24 lg:pb-20 relative z-10">
        <div className="flex flex-col space-y-14 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full justify-center text-center"
          >
            <span className="inline-block text-[#83338b] font-semibold bg-[#c682cf]/20 px-4 py-2 rounded-full text-sm tracking-wide mb-3">
              OUR GALLERY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-slate-800">
              Moments at <span className="text-[#83338b]">Legacy85</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-6">
              Explore our journey through visual stories and memorable
              experiences with our community.
            </p>
          </motion.div>

          <div className="w-full overflow-hidden px-4">
            <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap">
              {cols}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center mt-8"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#83338b] text-white rounded-lg font-medium hover:bg-[#a346ae] transition-colors duration-300"
            >
              <span>View All Photos</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(131, 51, 139, 0.1) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        }

        .bg-gradient-custom {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(198, 130, 207, 0.1) 25%,
            rgba(163, 70, 174, 0.05) 50%,
            rgba(198, 130, 207, 0.08) 75%,
            rgba(255, 255, 255, 0.9) 100%
          );
        }
      `}</style>
    </div>
  );
}
