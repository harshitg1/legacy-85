"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  BookOpen,
  Users,
  LineChart,
  GraduationCap,
  Star,
  Award,
} from "lucide-react";

const sections = [
  {
    id: "curriculum",
    title: "One-of-a-Kind Curriculum",
    subtitle: "Designed for True Market Mastery",
    icon: <BookOpen className="w-5 h-5 text-theme-primary" />,
    content: [
      "Our curriculum has been thoughtfully crafted by our Mentor to deliver a level of market understanding that goes far beyond conventional teaching. Built from real-world experience and years of market expertise, this program offers a unique learning journey that you won't find anywhere else.",
      "This comprehensive approach empowers students to build deep, lasting knowledge and practical trading skills that translate directly to market success. Every module is designed with precision to ensure maximum learning retention and practical application.",
    ],
  },
  {
    id: "mentorship",
    title: "Personalized One-on-One Mentorship",
    subtitle: "Confidence Through Guidance",
    icon: <Users className="w-5 h-5 text-theme-primary" />,
    content: [
      "We understand that building confidence in trading requires more than just knowledge—it demands consistent guidance and personalized support. That's why we offer dedicated one-on-one mentoring sessions with our faculty members.",
      "Each student receives the attention, clarity, and encouragement needed to navigate the markets with conviction. Our mentors work closely with you to identify strengths, address challenges, and accelerate your learning journey.",
    ],
  },
  {
    id: "live-analysis",
    title: "Progressive Learning Through Live Market Analysis",
    subtitle: "Real-Time Application of Course Concepts",
    icon: <LineChart className="w-5 h-5 text-theme-primary" />,
    content: [
      "We believe in learning by doing. That's why all our live market analysis sessions apply only the strategies taught in our courses—ensuring transparency, reinforcing concepts, and creating a progressive, real-time learning experience.",
      "This hands-on approach bridges the gap between theoretical knowledge and practical application, giving you the confidence to execute trades with precision and understanding in real market conditions.",
    ],
  },
  {
    id: "methodology",
    title: "Our Teaching Methodology",
    subtitle: "Structured Learning for Maximum Impact",
    icon: <GraduationCap className="w-5 h-5 text-theme-primary" />,
    content: [
      "Our teaching methodology combines structured curriculum delivery with practical market exposure. We follow a systematic approach that builds knowledge progressively, ensuring each concept is thoroughly understood before moving to advanced topics.",
      "This methodology has been refined through years of teaching experience and market analysis, creating an optimal learning environment that produces consistently successful traders.",
    ],
  },
  {
    id: "success-factors",
    title: "Key Success Factors",
    subtitle: "What Sets Our Students Apart",
    icon: <Star className="w-5 h-5 text-theme-primary" />,
    content: [
      "Our students succeed because they receive comprehensive education that combines theoretical knowledge with practical application. The personalized attention ensures that learning gaps are quickly identified and addressed.",
      "The integration of live market analysis with course content creates a unique learning ecosystem where students can immediately see the practical application of their studies, leading to faster skill development and greater confidence.",
    ],
  },
  {
    id: "commitment",
    title: "Our Commitment to Excellence",
    subtitle: "Building Tomorrow's Market Leaders",
    icon: <Award className="w-5 h-5 text-theme-primary" />,
    content: [
      "We are committed to delivering an educational experience that transforms students into confident, skilled traders. Our approach goes beyond traditional education to create a comprehensive support system for long-term success.",
      "Every aspect of our program is designed with the student's success in mind, from curriculum development to ongoing mentorship, ensuring that graduates are well-prepared to excel in the dynamic world of trading.",
    ],
  },
];

const QuoteCard = () => {
  const [activeId, setActiveId] = useState("curriculum");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            current = section.id;
          }
        }
      });

      if (current !== "" && current !== activeId) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-slate-900 dark:text-white">Our Trading </span>
          <span className="bg-gradient-to-r from-theme-primary to-theme-primary-light bg-clip-text text-transparent">
            Education Approach
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Discover how we transform novice traders into confident market
          professionals through our comprehensive education system.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Table of Contents */}
        <aside className="hidden lg:block lg:w-1/4">
          <div className="lg:sticky lg:top-28">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 ">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Our Educational Philosophy
              </h2>
              <nav className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>

                <div className="space-y-1">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="relative"
                    >
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`group relative flex items-center gap-3 py-3 px-3 w-full text-left transition-all duration-200 rounded-lg ${
                          activeId === section.id
                            ? "text-theme-primary bg-theme-primary/5 shadow-sm"
                            : "text-slate-600 dark:text-slate-400 hover:text-theme-primary hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        }`}
                      >
                        {/* Active indicator line */}
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-[2px] bg-theme-primary transition-all duration-200 ${
                            activeId === section.id
                              ? "opacity-100 scale-y-100"
                              : "opacity-0 scale-y-50"
                          }`}
                        />

                        {/* Icon */}
                        <span
                          className={`flex-shrink-0 transition-transform duration-200 ${
                            activeId === section.id
                              ? "text-theme-primary"
                              : "text-slate-400 group-hover:text-theme-primary-light"
                          }`}
                        >
                          {section.icon}
                        </span>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <span
                            className={`block font-medium text-sm leading-tight transition-all duration-200 ${
                              activeId === section.id
                                ? "font-semibold"
                                : "group-hover:translate-x-0.5"
                            }`}
                          >
                            {section.title}
                          </span>
                          <span className="block text-slate-500 dark:text-slate-400 mt-0.5 text-xs truncate">
                            {section.subtitle}
                          </span>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeId === section.id
                              ? "text-theme-primary opacity-100"
                              : "text-slate-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5"
                          }`}
                        />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 space-y-8">
          {sections.map((section, index) => (
            <motion.section
              id={section.id}
              key={section.id}
              className="scroll-mt-28"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="bg-white dark:bg-slate-900 p-6 lg:p-8  hover:shadow-md transition-shadow duration-300">
                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-3 bg-theme-primary/10 rounded-lg flex-shrink-0">
                    <span className="text-xl text-theme-primary">
                      {section.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
                      {section.title}
                    </h2>
                    <h3 className="text-lg text-theme-primary font-medium mb-3">
                      {section.subtitle}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-theme-primary to-theme-primary-light rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Bottom action */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() =>
                      scrollToSection(
                        sections[(index + 1) % sections.length].id
                      )
                    }
                    className="inline-flex items-center text-sm font-medium text-theme-primary hover:text-theme-primary-dark transition-colors"
                  >
                    {index < sections.length - 1
                      ? "Continue to next section"
                      : "Back to first section"}
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default QuoteCard;
