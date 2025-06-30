"use client";

import React from "react";
import Image from "next/image";
import { Users, Monitor, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      <h2 className=" flex  justify-center items-center text-4xl font-bold text-gray-900 mb-6">
        We Are The Best Trading {"  "}
        <span className="text-[#83338b]"> Mentoring Agency</span>
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative mt-14">
            <div className="relative">
              <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/reception.jpeg"
                  alt="Professional man in suit"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="absolute bottom-8 -left-8 w-48 h-48">
                <div className="relative w-full h-full overflow-hidden rounded-xl shadow-md border-4 border-white">
                  <Image
                    src="/a1.jpeg"
                    alt="Woman working on laptop"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#8b5091] rounded-full flex flex-col items-center justify-center text-white shadow-md">
                <div className="text-2xl font-bold">1,485+</div>
                <div className="text-xs text-center leading-tight">
                  Trusted Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}

            <div>




              <p className="text-gray-600 leading-relaxed">
                At Legacy85, we provide top-tier trading education and
                mentorship for traders at all levels. Our expert team brings
                decades of experience to deliver practical training that helps
                students navigate today’s financial markets.
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
                    With 1,400+ successful students and a satisfaction rate
                    above 96%, we’re a trusted partner in trading education.
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
                    Our platform combines theory and practice to help students
                    track their progress, master skills, and receive personal
                    feedback for growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c682cf]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-[#83338b]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tested Reliability
                  </h3>
                  <p className="text-gray-600">
                    Our trading strategies are rigorously tested in various
                    market conditions, ensuring students learn methods that work
                    over time.
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
