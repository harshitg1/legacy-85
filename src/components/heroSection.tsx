"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  TrendingUp,
  CheckCircle,
  Users,
  Award,
  Target,
  Star,
  ArrowRight,
  Zap,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function AboutUs() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const dynamicTexts = useMemo(
    () => [
      "Trading Education",
      "Financial Freedom",
      "Market Mastery",
      "Investment Success",
      "Professional Growth",
    ],
    []
  );

  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause before erasing
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // Erasing speed
      } else {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === dynamicTexts.length - 1 ? 0 : prevIndex + 1
        );
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex, dynamicTexts]);

  return (
    <>
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Clean, subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-5/30 via-transparent to-theme-primary-10/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary-10 rounded-full text-theme-primary font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
                </span>
                Trading Academy Now Live
              </div>

              {/* Improved heading structure */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                <span className="block">Leading the Future of</span>
                <span className="block mt-2 text-theme-primary-dark">
                  {displayText} <span className="animate-pulse">|</span>
                </span>
                <span className="block mt-2">Since 2020</span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                We've been empowering traders worldwide with cutting-edge
                education, innovative tools, and a supportive community that
                drives real results across global markets.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-3 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-xl md:text-2xl font-bold text-theme-primary mb-1">
                    10K+
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    Active Students
                  </p>
                </div>
                <div className="text-center p-3 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-xl md:text-2xl font-bold text-theme-primary mb-1">
                    85%
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    Success Rate
                  </p>
                </div>
                <div className="text-center p-3 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-xl md:text-2xl font-bold text-theme-primary mb-1">
                    40+
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
                    Countries
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image - 7 columns for more horizontal space */}
            <div className="lg:col-span-7 relative">
              {/* Simplified background */}
              <div className="absolute inset-0 w-full h-full opacity-40">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-theme-primary-20 rounded-full blur-3xl transform rotate-12"></div>
              </div>

              {/* Main Image Container - Positioned slightly right and up */}
              <div className="relative z-10 group overflow-hidden ml-4 -mt-2">
                {/* Outer glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-theme-primary to-theme-primary-light rounded-3xl opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Main image with container - reduced width */}
                <div className="relative z-10 group overflow-hidden max-w-2xl mx-auto">
                  <div className="relative h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
                    {/* Custom border effect */}
                    <div className="absolute inset-0 rounded-2xl border-4 border-transparent bg-gradient-to-r from-theme-primary via-theme-primary-light to-theme-primary-dark p-[4px] z-10">
                      <div className="h-full w-full rounded-xl"></div>
                    </div>

                    {/* Horizontal image */}
                    <div className="absolute inset-0">
                      <Image
                        src="/about.jpeg"
                        alt="Trading Expertise"
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                        priority
                      />

                      {/* Gradient overlays for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-80"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/20 via-transparent to-theme-primary-light/20"></div>

                      {/* Animated strips effect */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute h-[2px] w-full bg-white/50 animate-pulse"
                            style={{
                              top: `${20 * (i + 1)}%`,
                              animationDelay: `${i * 0.3}s`,
                              opacity: 0.3 + i * 0.1,
                            }}
                          ></div>
                        ))}
                      </div>

                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <h3 className="text-xl font-bold text-white mb-2">
                            Expert Trading Education
                          </h3>
                          <p className="text-white/80 text-sm">
                            Learn from professionals with real market experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multiple Floating Achievement Cards */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-20 min-w-[180px] transform hover:rotate-2 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-gradient-to-r from-theme-primary to-theme-primary-light">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-0.5">
                      Market Leader
                    </h4>
                    <div className="flex items-center gap-1">
                      <div className="flex space-x-0.5">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional achievement badge */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 z-20 transform hover:rotate-12 transition-transform duration-300">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500">
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
