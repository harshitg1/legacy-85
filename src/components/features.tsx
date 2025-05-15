"use client";

import { CheckCircle, Settings, ClipboardList, Users } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Our Trading Academy
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Learn from industry experts and develop the skills you need to
            succeed in today's financial markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-14 h-14 bg-theme-primary-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-theme-primary-50 transition-colors">
              <Settings
                className="h-7 w-7 text-theme-primary"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Advanced Trading Strategies
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Learn proven strategies from professional traders with years of
              market experience.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Risk management techniques
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Technical analysis mastery
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Trend identification
                </span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-14 h-14 bg-theme-primary-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-theme-primary-50 transition-colors">
              <ClipboardList
                className="h-7 w-7 text-theme-primary"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Real-Time Market Analysis
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Access daily market insights and analysis to help you make
              informed trading decisions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Daily market briefings
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Expert commentary
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Economic calendar alerts
                </span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-14 h-14 bg-theme-primary-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-theme-primary-50 transition-colors">
              <Users className="h-7 w-7 text-theme-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Community Support
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Join a community of like-minded traders to share ideas,
              strategies, and support.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Private community forum
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Weekly live Q&A sessions
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Trading challenges & contests
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
