"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  TrendingUp,
  BarChart3,
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-2 md:px-4 lg:px-12 min-h-screen bg-background overflow-x-hidden mt-[-26px]">
        <section className="relative overflow-hidden px-4">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-theme-primary-10 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-theme-primary-5 rounded-full blur-[100px] -z-10"></div>

          <div className="container px-2 py-12 md:py-12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-4 py-4 lg:space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary-10 rounded-full text-muted-foreground font-medium text-sm animate-fade-in">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary "></span>
                  </span>
                  About Legacy-85
                </div>

                <h1 className="text-5xl  font-bold text-slate-900 dark:text-white leading-tight animate-fade-in-up">
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
                  <Button className="h-10 px-4 text-base bg-theme-primary hover:bg-theme-primary-dark text-muted group transition-all duration-300 transform hover:translate-y-[-2px]">
                    Start Learning
                    <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 px-4 text-xs rounded-full border-slate-300 dark:border-slate-700 text-muted-foreground dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:translate-y-[-2px]"
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
                    <h3 className="text-3xl font-bold text-theme-primary">
                      10K+
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      Active Students
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
                    <h3 className="text-3xl font-bold text-theme-primary">
                      92%
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      Success Rate
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
                    <h3 className="text-3xl font-bold text-theme-primary">
                      24/7
                    </h3>
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
                  <div className="relative z-10 transition-transform duration-500 hover:transform hover:scale-[1.02] hover:rotate-1 mt-10">
                    <Image
                      src="/heroimg.png"
                      alt="Trading App Interface"
                      width={480} // Increased from 400
                      height={800} // Increased from 800
                      className="rounded-3xl border-4 border-white dark:border-slate-800 shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Floating Card 1 */}
                  <div className="absolute top-10 -left-16 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-[200px] animate-float z-20">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-full bg-theme-primary-20">
                        <TrendingUp
                          className="h-5 w-5 text-theme-primary"
                          strokeWidth={2}
                        />
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
                  <div className="absolute -bottom-5 -right-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-[220px] animate-float-delayed z-20">
                    <div className="flex items-center mb-2">
                      <BarChart3
                        className="h-5 w-5 text-theme-primary mr-2"
                        strokeWidth={2}
                      />
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

        {/* Trading Cards Section with Theme Background */}
        <section className="relative py-16 bg-theme-primary-lighter overflow-hidden">
          {/* Decorative Card Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-32 h-44 bg-white rounded-xl shadow-xl transform rotate-12 animate-float">
              <div className="absolute inset-1 border border-theme-primary-dark/20 rounded-lg"></div>
            </div>
            <div className="absolute top-20 right-1/3 w-40 h-56 bg-white rounded-xl shadow-xl transform -rotate-6 animate-float-delayed">
              <div className="absolute inset-1 border border-theme-primary-dark/20 rounded-lg"></div>
            </div>
            <div className="absolute bottom-10 left-1/3 w-36 h-48 bg-white rounded-xl shadow-xl transform rotate-3 animate-float">
              <div className="absolute inset-1 border border-theme-primary-dark/20 rounded-lg"></div>
            </div>
            <div className="absolute bottom-24 right-1/4 w-28 h-40 bg-white rounded-xl shadow-xl transform -rotate-12 animate-float-delayed">
              <div className="absolute inset-1 border border-theme-primary-dark/20 rounded-lg"></div>
            </div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-60 bg-white rounded-xl shadow-xl rotate-6 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="absolute inset-1 border border-theme-primary-dark/20 rounded-lg"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Start Your Trading Journey Today
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  Join thousands of successful traders who've transformed their
                  financial future with our expert-led courses and community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-theme-primary-10 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Comprehensive Courses
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Learn at your own pace with structured courses designed for
                    all experience levels.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-theme-primary-10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Supportive Community
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Connect with fellow traders and learn from each other's
                    experiences.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-theme-primary-10 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-theme-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Expert Mentorship
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Get guidance directly from professionals with proven track
                    records.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-theme-primary to-theme-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-theme-primary/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
