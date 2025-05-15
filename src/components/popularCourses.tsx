"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/course-card";
import { motion } from "framer-motion";

export default function PopularCourses() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Popular Trading Courses
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              Comprehensive courses designed to take you from beginner to
              professional trader.
            </p>
          </div>
          <Link
            href="/courses"
            className="mt-4 md:mt-0 inline-flex items-center text-theme-primary hover:text-theme-primary-dark font-medium transition-colors"
          >
            View all courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CourseCard
              title="Forex Trading Fundamentals"
              description="Learn the basics of forex trading, including currency pairs, market analysis, and entry strategies."
              image="/c2.jpg"
              level="Beginner"
              duration="6 weeks"
              rating={4.8}
              students={1243}
              price={99}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CourseCard
              title="Advanced Technical Analysis"
              description="Master chart patterns, indicators, and develop your own trading system based on technical analysis."
              image="/c1.jpg"
              level="Intermediate"
              duration="8 weeks"
              rating={4.9}
              students={876}
              price={149}
              featured={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CourseCard
              title="Algorithmic Trading"
              description="Build and backtest automated trading strategies using Python and popular trading APIs."
              image="/c3.jpg"
              level="Advanced"
              duration="10 weeks"
              rating={4.7}
              students={542}
              price={199}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
