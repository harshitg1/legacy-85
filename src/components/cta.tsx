"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-theme-primary-5"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-theme-primary-10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Join thousands of successful traders who have transformed their
              trading with our educational platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-12 px-8 text-base rounded-full bg-theme-primary hover:bg-theme-primary-dark text-black font-medium group transition-all duration-300 transform hover:translate-y-[-2px]">
              Get Started Today
              <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 text-base rounded-full border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2" />
                <span className="text-slate-700 dark:text-slate-300">
                  30-day money-back guarantee
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2" />
                <span className="text-slate-700 dark:text-slate-300">
                  Lifetime access to materials
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-theme-primary mr-2" />
                <span className="text-slate-700 dark:text-slate-300">
                  Certificate of completion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
