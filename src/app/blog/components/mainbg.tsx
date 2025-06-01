"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, TrendingUp, BarChart3, Target, Play } from "lucide-react";

const MainBgSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      category: "Featured",
      title: "Master the Art of Trading: From Beginner to Professional",
      subtitle:
        "Learn proven strategies that have generated consistent profits for thousands of traders worldwide",
      image: "/reception.jpeg",
      cta: "Start Your Journey",
      accent:
        "Learn how our systematic approach to market analysis can transform your trading results in just 90 days",
    },
    {
      id: 2,
      category: "Success Story",
      title: "How Sarah Transformed $5K into $50K in 12 Months",
      subtitle:
        "Real student success story with documented trading results and strategy breakdown",
      image: "/class.jpeg",
      cta: "Watch Her Story",
      accent:
        "Discover the exact 3-step process Sarah used to achieve consistent monthly profits",
    },
    {
      id: 3,
      category: "Market Insight",
      title: "Current Market Opportunities: Where Smart Money is Moving",
      subtitle:
        "Expert analysis on emerging trends and high-probability trading setups for 2024",
      image: "/reception.jpeg",
      cta: "Get Market Report",
      accent:
        "Access exclusive market intelligence used by institutional traders and hedge funds",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen overflow-hidden bg-slate-900 rounded-3xl">
      {/* Background Image with Enhanced Blur, Overlay and Rounded Corners */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          sizes="100vw"
          className="object-cover blur-md scale-110 transition-all duration-1000 ease-in-out"
          priority
        />
        {/* Multi-layer overlay for depth and better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/80"></div>
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-20 right-20 w-64 h-64 bg-theme-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-16 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary/20 backdrop-blur-sm border border-theme-primary/30 rounded-full">
                <TrendingUp className="w-4 h-4 text-theme-primary" />
                <span className="text-sm font-semibold text-theme-primary tracking-wider uppercase">
                  {currentSlideData.category}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {currentSlideData.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed max-w-2xl">
                {currentSlideData.subtitle}
              </p>

              {/* Accent Text */}
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl border-l-4 border-theme-primary pl-4 italic">
                {currentSlideData.accent}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-theme-primary hover:bg-theme-primary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <span>{currentSlideData.cta}</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-black/30 hover:border-black text-black font-semibold rounded-xl backdrop-blur-sm hover:bg-black/10 transition-all duration-300">
                  <Play className="mr-2 w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 pt-8">
                {[
                  { icon: BarChart3, label: "Success Rate", value: "92%" },
                  { icon: Target, label: "Active Traders", value: "15K+" },
                  { icon: TrendingUp, label: "Avg. Monthly ROI", value: "18%" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-theme-primary/20 backdrop-blur-sm rounded-lg">
                      <stat.icon className="w-5 h-5 text-theme-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-700">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Trading Card/Widget */}
            <div className="lg:justify-self-end">
              <div className="bg-white/95 backdrop-blur-md border border-slate-300/50 rounded-2xl p-8 shadow-2xl max-w-md">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    Live Trading Signal
                  </h3>
                  <p className="text-slate-700 text-sm">
                    Real-time market opportunity
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <div>
                      <div className="text-green-600 font-semibold">
                        EUR/USD
                      </div>
                      <div className="text-black text-lg font-bold">
                        BUY Signal
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 text-sm">+127 pips</div>
                      <div className="text-black font-semibold">1.0892</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-600">Entry</div>
                      <div className="text-black font-semibold">1.0765</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Target</div>
                      <div className="text-green-600 font-semibold">1.0892</div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-theme-primary hover:bg-theme-primary-dark text-white font-semibold rounded-lg transition-colors duration-300">
                    Get More Signals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-theme-primary scale-125"
                  : "bg-black/40 hover:bg-black/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Next Slide Button */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/10 backdrop-blur-sm border border-black/20 rounded-full hover:bg-black/20 transition-all duration-300 group"
      >
        <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </section>
  );
};

export default MainBgSection;
