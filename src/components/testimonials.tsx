"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "The strategies I learned helped me achieve consistent profits for the first time in my trading career. I've increased my win rate from 42% to 78% in just 6 months.",
    author: "Michael Johnson",
    role: "Forex Trader",
    location: "Chicago, IL",
    avatar: "/t1.jpg", // Add real images to public folder
    rating: 5,
    metric: "+187% Portfolio Growth",
    chart: "/chart-growth1.png", // Optional performance chart
  },
  {
    id: 2,
    quote:
      "The community support is incredible. Having mentors available to answer questions made all the difference. I never thought I could replace my full-time income with trading.",
    author: "Sarah Williams",
    role: "Stock Trader",
    location: "Austin, TX",
    avatar: "/t2.jpg",
    rating: 5,
    metric: "+$4,800 Monthly Profit",
    chart: "/chart-growth2.png",
  },
  {
    id: 3,
    quote:
      "I went from losing trades to a 72% win rate in just 3 months after applying what I learned in the courses. The risk management techniques alone were worth the investment.",
    author: "David Chen",
    role: "Crypto Trader",
    location: "San Francisco, CA",
    avatar: "/t3.jpg",
    rating: 5,
    metric: "+412% ROI in 1 Year",
    chart: "/chart-growth3.png",
  },
  {
    id: 4,
    quote:
      "I went from losing trades to a 72% win rate in just 3 months after applying what I learned in the courses. The risk management techniques alone were worth the investment.",
    author: "David Chen",
    role: "Crypto Trader",
    location: "San Francisco, CA",
    avatar: "/t4.jpg",
    rating: 5,
    metric: "+412% ROI in 1 Year",
    chart: "/chart-growth3.png",
  },
  {
    id: 5,
    quote:
      "I went from losing trades to a 72% win rate in just 3 months after applying what I learned in the courses. The risk management techniques alone were worth the investment.",
    author: "David Chen",
    role: "Crypto Trader",
    location: "San Francisco, CA",
    avatar: "/t5.jpg",
    rating: 5,
    metric: "+412% ROI in 1 Year",
    chart: "/chart-growth3.png",
  },
  {
    id: 6,
    quote:
      "I went from losing trades to a 72% win rate in just 3 months after applying what I learned in the courses. The risk management techniques alone were worth the investment.",
    author: "David Chen",
    role: "Crypto Trader",
    location: "San Francisco, CA",
    avatar: "/t6.jpg",
    rating: 5,
    metric: "+412% ROI in 1 Year",
    chart: "/chart-growth3.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  });

  return (
    <section className="py-18 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-theme-primary-20 dark:bg-theme-primary-20 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-theme-primary-20 dark:bg-theme-primary-20 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-4 bg-theme-primary-10 dark:bg-theme-primary-20 text-theme-primary dark:text-theme-primary-light rounded-full text-sm font-medium mb-3">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Traders Who <span className="text-theme-primary">Transformed</span>{" "}
            Their Results
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real stories from our community members who turned their trading
            challenges into consistent success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col lg:flex-row">
                {/* Left: Portrait Image with info */}
                <div className="lg:w-5/12">
                  <div className="relative h-[300px] lg:h-full overflow-hidden">
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        isAnimating
                          ? direction === "right"
                            ? "-translate-x-full"
                            : "translate-x-full"
                          : "translate-x-0"
                      }`}
                    >
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                        <h4 className="text-2xl font-bold">
                          {testimonials[currentIndex].author}
                        </h4>
                        <p className="text-theme-primary-light">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-white/80 text-sm">
                          {testimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Testimonial content */}
                <div className="lg:w-7/12 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-theme-primary">
                        <Quote size={48} className="opacity-20" />
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonials[currentIndex].rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        isAnimating
                          ? direction === "right"
                            ? "-translate-x-12 opacity-0"
                            : "translate-x-12 opacity-0"
                          : "translate-x-0 opacity-100"
                      }`}
                    >
                      <blockquote className="text-xl leading-relaxed text-slate-700 dark:text-slate-200 italic mb-8">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                    </div>
                  </div>

                  <div className="mt-auto">
                    {/* Result metric */}
                    <div className="bg-theme-primary-5 dark:bg-theme-primary-10 border border-theme-primary-20 dark:border-theme-primary-20 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-theme-primary text-white">
                            <ChevronRight size={24} />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Trading Performance
                          </p>
                          <p className="text-xl font-bold text-theme-primary dark:text-theme-primary-light">
                            {testimonials[currentIndex].metric}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-between items-center">
                      <div className="text-slate-500 dark:text-slate-400 text-sm">
                        {currentIndex + 1} of {testimonials.length} Stories
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={goToPrev}
                          className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-theme-primary hover:text-white hover:border-theme-primary transition-colors"
                          disabled={isAnimating}
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={goToNext}
                          className="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-theme-primary hover:text-white hover:border-theme-primary transition-colors"
                          disabled={isAnimating}
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails - Small profile pictures of other testimonials */}
            <div className="hidden md:flex mt-4 justify-center space-x-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => {
                    setDirection(index > currentIndex ? "right" : "left");
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }}
                  className={`relative h-12 w-12 rounded-full overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? "border-theme-primary scale-110"
                      : "border-white dark:border-slate-700 opacity-60"
                  }`}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
