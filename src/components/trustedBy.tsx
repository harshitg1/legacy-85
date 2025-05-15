"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type CounterProps = {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
};

const Counter = ({ end, suffix, label, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold text-theme-primary mb-2 flex items-baseline">
        {count}
        <span className="ml-1">{suffix}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-center">{label}</p>
    </div>
  );
};

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join our growing community of successful traders and investors who
            have transformed their financial journey with Legacy-85.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-10">
          <Counter end={15} suffix="K+" label="Active Traders" />
          <Counter end={92} suffix="%" label="Success Rate" duration={2.5} />
          <Counter end={120} suffix="+" label="Countries" duration={1.5} />
          <Counter end={4} suffix="M" label="Trades Executed" duration={3} />
        </div>

        <motion.div
          className="mt-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 py-6 px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium text-center md:text-left mb-4 md:mb-0">
              Ready to join thousands of successful traders?
            </p>
            <button className="px-8 py-3 bg-theme-primary hover:bg-theme-primary-dark text-black font-medium rounded-full transition-all transform hover:translate-y-[-2px]">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
