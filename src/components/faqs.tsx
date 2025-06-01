"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageCircle,
  HelpCircle,
  X,
  CheckCircle,
  PlusCircle,
  MinusCircle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "courses" | "pricing" | "support";
}

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What experience level is required to join Legacy-85?",
      answer:
        "Legacy-85 welcomes traders of all experience levels. Our programs are structured to accommodate beginners with foundational courses, while also providing advanced strategies for experienced traders looking to enhance their skills.",
      category: "general",
    },
    {
      question: "How long does it take to complete the core trading program?",
      answer:
        "The core trading program can be completed in 8-12 weeks if following our recommended schedule. However, all students receive lifetime access to the course materials, allowing you to learn at your own pace and revisit concepts as needed.",
      category: "courses",
    },
    {
      question: "Do you offer mentorship with real traders?",
      answer:
        "Yes, our premium mentorship program connects you directly with professional traders who have proven track records in the markets. These mentors provide personalized guidance, review your trades, and help accelerate your learning curve.",
      category: "courses",
    },
    {
      question: "What trading platforms are compatible with your strategies?",
      answer:
        "Our strategies can be implemented on most major trading platforms including MT4/MT5, TradingView, NinjaTrader, and others. We provide specific setup guides for each platform to ensure seamless implementation of our techniques.",
      category: "support",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day satisfaction guarantee for all our courses. If you're not completely satisfied with the quality of content, you can request a full refund within the first 30 days of purchase.",
      category: "pricing",
    },
    {
      question: "How can I access the community and support?",
      answer:
        "Upon enrollment, you'll receive access to our private community platform where you can interact with fellow traders and instructors. Our support team is available via email and live chat during business hours for any technical or content-related questions.",
      category: "support",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      (selectedCategory ? faq.category === selectedCategory : true) &&
      (searchQuery
        ? faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        : true)
  );

  const categories = [
    { id: null, name: "All Questions" },
    { id: "general", name: "General" },
    { id: "courses", name: "Courses" },
    { id: "pricing", name: "Pricing" },
    { id: "support", name: "Support" },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Large FAQ Text Backdrop */}
        <div className="absolute right-0 top-0 text-[20rem] font-bold text-purple-100 leading-none select-none opacity-70">
          FAQ
        </div>

        {/* Abstract blob shape */}
        <div className="absolute top-1/4 -left-24 w-72 h-72">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-15"
          >
            <path
              fill="#83338b"
              d="M42.8,-65.2C56.9,-56,70.7,-45.7,77.4,-31.5C84.1,-17.4,83.7,0.6,77.2,15C70.8,29.5,58.3,40.4,45.1,49.8C31.9,59.2,18,67.1,1.6,65.1C-14.8,63,-32.6,51,-44.8,37.2C-57,23.4,-63.6,7.8,-63.6,-8C-63.6,-23.9,-57.1,-39.9,-45.9,-49.7C-34.6,-59.4,-18.6,-63,-2,-60C14.6,-57,28.7,-74.4,42.8,-65.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Dotted pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-theme-primary text-white text-sm font-semibold mb-4"
            >
              FAQ
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
            >
              Got Questions?
              <span className="block text-theme-primary mt-2">
                We've Got Answers
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full md:w-72 lg:w-96"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-white shadow-lg border border-slate-200 rounded-xl px-5 py-4 pl-12 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-theme-primary/30"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block relative"
          >
            <div className="sticky top-32 space-y-6">
              {/* Support Card with 3D Question Bubbles */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-white p-8 border border-slate-200 shadow-lg">
                {/* Question Bubbles Image Background */}
                <div className="absolute inset-0">
                  {/* Gradient overlay with less transparency */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/60 z-[1]"></div>

                  {/* Darker background overlay */}
                  <div className="absolute inset-0 bg-black/50 z-[0]"></div>

                  {/* Image with blur effect and full opacity */}
                  <div
                    className="w-full h-full relative"
                    style={{ transform: "scale(1.05)" }}
                  >
                    <Image
                      src="/faqs.jpg"
                      alt="Question Bubbles"
                      fill
                      className="object-cover blur-[3px] brightness-55"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </div>

                {/* Content layout with clean design */}
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 rounded-full bg-theme-primary/10 flex items-center justify-center">
                        <HelpCircle className="w-10 h-10 text-theme-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      Still have questions?
                    </h3>

                    <div className="w-12 h-1 bg-theme-primary/30 rounded-full mb-4" />

                    <p className="text-slate-600 mb-6">
                      Our support team is ready to help you with any specific
                      questions about our trading programs
                    </p>

                    <button className="px-6 py-3 bg-theme-primary hover:bg-theme-primary/90 text-white rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                      <MessageCircle className="w-5 h-5" />
                      <span>Contact Support</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg">
                <h4 className="text-slate-700 font-medium text-sm mb-4 flex items-center">
                  <span className="inline-block w-1 h-4 bg-theme-primary mr-2 rounded-full"></span>
                  Trader Support
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">
                      Average response time
                    </span>
                    <span className="text-slate-900 font-semibold flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      2 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">
                      Support tickets resolved
                    </span>
                    <div className="text-slate-900 font-semibold flex items-center">
                      <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-[98.3%] bg-theme-primary rounded-full"></div>
                      </div>
                      <span className="ml-2">98.3%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Satisfaction rating</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQs */}
          <div className="lg:col-span-2">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow ${
                    selectedCategory === category.id
                      ? "bg-theme-primary text-white shadow-theme-primary/20"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-5">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      onClick={() => toggleFAQ(index)}
                      className={`rounded-xl cursor-pointer transform transition-all duration-300 border ${
                        openIndex === index
                          ? "bg-white shadow-xl border-theme-primary/20 scale-[1.02]"
                          : "bg-white shadow hover:shadow-md border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex justify-between items-center p-6">
                        <h3 className="text-xl font-semibold text-slate-800 pr-8">
                          {faq.question}
                        </h3>
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
                            openIndex === index
                              ? "bg-theme-primary text-white shadow-theme-primary/30"
                              : "bg-white text-slate-400 border border-slate-200"
                          }`}
                        >
                          {openIndex === index ? (
                            <MinusCircle className="w-6 h-6" />
                          ) : (
                            <PlusCircle className="w-6 h-6" />
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 border-t border-slate-100 pt-4 mt-2">
                              <p className="text-slate-600 leading-relaxed">
                                {faq.answer}
                              </p>

                              <div className="mt-6 flex items-center text-slate-500 text-sm">
                                <CheckCircle className="w-4 h-4 mr-2 text-theme-primary" />
                                <span>Was this answer helpful?</span>
                                <button className="ml-4 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">
                                  Yes
                                </button>
                                <button className="ml-2 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">
                                  No
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-slate-200 shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                      <Search className="w-8 h-8 text-slate-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-2">
                    No results found
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your search or filter to find what you're
                    looking for
                  </p>
                </div>
              )}
            </div>

            {/* Mobile Contact Support */}
            <div className="mt-10 lg:hidden">
              <div className="relative bg-white rounded-xl p-6 border border-slate-200 shadow-lg overflow-hidden">
                {/* Question Bubbles Image Background for Mobile */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 z-[1]"></div>
                  <div className="w-full h-full relative">
                    <Image
                      src="/faqs.jpg"
                      alt="Question Bubbles"
                      fill
                      className="object-cover opacity-15"
                      sizes="(max-width: 768px) 100vw, 100vw"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-theme-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                      <MessageCircle className="w-6 h-6 text-theme-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-800">
                      Still need help?
                    </h4>
                  </div>
                  <p className="text-slate-600 mb-4">
                    If you couldn't find the answer to your question, our
                    support team is here to help.
                  </p>
                  <button className="w-full px-5 py-3 bg-theme-primary hover:bg-theme-primary/90 text-white rounded-lg flex items-center justify-center gap-2 transition-all shadow-md">
                    <MessageCircle className="w-5 h-5" />
                    <span>Contact Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
