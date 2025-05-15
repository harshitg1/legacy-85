"use client";
import Link from "next/link";
import {
  LineChart,
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LineChart
                className="h-6 w-6 text-theme-primary"
                strokeWidth={2}
              />
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Legacy-85
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Empowering traders with education, tools, and community since
              2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-theme-primary hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-theme-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-theme-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Trading Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-600 dark:text-slate-400 hover:text-theme-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone
                  className="h-5 w-5 text-theme-primary mr-3 mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-slate-600 dark:text-slate-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start">
                <Mail
                  className="h-5 w-5 text-theme-primary mr-3 mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-slate-600 dark:text-slate-400">
                  contact@Legacy-85.com
                </span>
              </li>
              <li className="flex items-start">
                <MapPin
                  className="h-5 w-5 text-theme-primary mr-3 mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-slate-600 dark:text-slate-400">
                  123 Trading Street, Financial District
                  <br />
                  New York, NY 10004
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400 text-sm">
          <p>
            © {new Date().getFullYear()} Legacy-85 Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
