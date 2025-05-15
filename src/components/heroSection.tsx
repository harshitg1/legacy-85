"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-theme-primary-10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-theme-primary-5 rounded-full blur-[100px] -z-10"></div>

      <div className="container px-4 py-12 md:py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary-10 rounded-full text-theme-primary font-medium text-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
              </span>
              Trading Academy Now Live
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight animate-fade-in-up">
              Master the <span className="text-theme-primary">Markets</span>{" "}
              with Confidence
            </h1>

            <p
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Join our educational trading platform and learn from expert
              traders. Get access to real-time market analysis, trading
              strategies, and a supportive community.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button className="h-12 px-8 text-base rounded-full bg-theme-primary hover:bg-theme-primary-dark text-black font-medium group transition-all duration-300 transform hover:translate-y-[-2px]">
                Start Learning Now
                <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 text-base rounded-full border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                View Courses
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
                <h3 className="text-3xl font-bold text-theme-primary">10K+</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  Active Students
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
                <h3 className="text-3xl font-bold text-theme-primary">92%</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  Success Rate
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
                <h3 className="text-3xl font-bold text-theme-primary">24/7</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Mobile App Mockup */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              {/* Main Mobile Image */}
              <div className="relative z-10 transition-transform duration-500 hover:transform hover:scale-[1.02] hover:rotate-1">
                <Image
                  src="/trading-app.jpg"
                  alt="Trading App Interface"
                  width={400}
                  height={800}
                  className="rounded-3xl border-4 border-white dark:border-slate-800 shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute top-10 -left-16 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-[200px] animate-float z-20">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-theme-primary-20">
                    <svg
                      className="h-5 w-5 text-theme-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Bitcoin
                    </h4>
                    <p className="text-xs text-theme-primary">+4.26%</p>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-slate-900 dark:text-white font-bold">
                    $9,290.72
                  </span>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-5 -right-10 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-[220px] animate-float-delayed z-20">
                <div className="flex items-center mb-2">
                  <svg
                    className="h-5 w-5 text-theme-primary mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Trading Success
                  </h4>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 dark:text-slate-400">
                        Win Rate
                      </span>
                      <span className="text-theme-primary font-semibold">
                        78%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                      <div
                        className="bg-theme-primary h-1.5 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-theme-primary-20 rounded-3xl blur-xl -z-10 transform scale-95"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
