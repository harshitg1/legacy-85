"use client";

import React from "react";
import Image from "next/image";
import { Users, Monitor, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="bg-gray-50 pt-24 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Main large image - Increased height */}
            <div className="relative">
              <div className="relative w-full h-[550px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/reception.jpeg"
                  alt="Professional man in suit"
                  width={660}
                  height={550}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Overlapping smaller image - Increased height */}
              <div className="absolute bottom-12 -left-12 w-64 h-64">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                  <Image
                    src="/a1.jpeg"
                    alt="Woman working on laptop"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Purple circle with stats - Using theme color */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-[#8b5091] rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                <div className="text-3xl font-bold">1,485+</div>
                <div className="text-sm text-center leading-tight">
                  Trusted Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-[#83338b] rounded-full"></div>
                <span className="text-[#83338b] font-medium">
                  About Company
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We Are The Best Trading{" "}
                <span className="text-[#83338b]">Mentoring Agency</span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                At Legacy85, we are dedicated to providing exceptional trading
                education and mentorship to traders of all experience levels.
                Our team of expert traders combines decades of market experience
                to deliver comprehensive training programs that equip our
                students with the skills needed to navigate today's complex
                financial markets.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {/* Trusted Partner */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c682cf]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#83338b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Trusted Partner
                  </h3>
                  <p className="text-gray-600">
                    With over 1,400 successful students, we've established
                    ourselves as a trusted partner in the trading education
                    industry, maintaining a satisfaction rate of over 96%.
                  </p>
                </div>
              </div>

              {/* Advanced Platform */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c682cf]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-[#83338b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Advanced Platform
                  </h3>
                  <p className="text-gray-600">
                    Our custom-built learning platform combines theoretical
                    knowledge with practical application, allowing students to
                    track their progress and receive personalized feedback.
                  </p>
                </div>
              </div>

              {/* Tested Reliability */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c682cf]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#83338b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tested Reliability
                  </h3>
                  <p className="text-gray-600">
                    Our trading strategies have been rigorously tested across
                    various market conditions, ensuring students learn methods
                    that stand the test of time and market volatility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
