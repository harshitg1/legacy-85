"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className=" py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            About Us
          </h2>
          <div className="mt-3 w-20 h-1 bg-theme-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with decreased height */}
          <div className="relative ">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl h-[490px]">
              <Image
                src="/class.jpeg"
                alt="Trading Expertise"
                width={500}
                height={300}
                className="w-full h-full object-fill"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-theme-primary-20 rounded-full z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-theme-primary-20 rounded-full z-0"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-theme-primary-10 text-theme-primary">
              Our Story
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Who We Are and Our Mission
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
            Legacy-85 Academy was founded in 2020 by a team of professional
              traders with over 30 years of combined experience in global
              financial markets.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Our mission is to demystify trading and make professional-grade
              financial education accessible to everyone. We believe that with
              the right knowledge and tools, anyone can learn to navigate the
              markets successfully.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-theme-primary">
                  5,000+
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Graduates
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-theme-primary">
                  30+
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Expert Instructors
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-theme-primary">
                  20+
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Trading Courses
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-theme-primary">
                  24/7
                </span>
                <span className="text-slate-600 dark:text-slate-400">
                  Support
                </span>
              </div>
            </div>
            <div className="pt-3">
              <Button className="h-12 px-8 text-base rounded-full bg-theme-primary hover:bg-theme-primary-dark text-black font-medium transition-all duration-300 transform hover:translate-y-[-2px]">
                Learn More About Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
