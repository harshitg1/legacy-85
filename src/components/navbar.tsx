"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, LineChart } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center px-8 xl:px-10">
           <Image src={logo} alt="Legacy-85 Logo" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={100} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-slate-900 dark:text-white hover:text-theme-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-slate-900 dark:text-white hover:text-theme-primary transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/pricing"
            className="text-slate-900 dark:text-white hover:text-theme-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/testimonials"
            className="text-slate-900 dark:text-white hover:text-theme-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="text-slate-900 dark:text-white hover:text-theme-primary transition-colors"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-slate-300 dark:border-slate-700 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Log In
          </Button>
          <Button className="bg-theme-primary hover:bg-theme-primary-dark ">
            Sign Up
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-900 dark:text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 w-[300px] p-0"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="bg-theme-primary p-1.5 rounded-md">
                    <LineChart className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    Legacy-85
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5 text-slate-900 dark:text-white" />
                </Button>
              </div>

              <div className="flex-1 overflow-auto py-4 px-6">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="bg-theme-primary p-1.5 rounded-md">
                      <LineChart
                        className="h-5 w-5 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">
                      Legacy-85
                    </span>
                  </Link>
                  <Link
                    href="/courses"
                    className="text-slate-900 dark:text-white hover:text-theme-primary py-2 transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-slate-900 dark:text-white hover:text-theme-primary py-2 transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/testimonials"
                    className="text-slate-900 dark:text-white hover:text-theme-primary py-2 transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/blog"
                    className="text-slate-900 dark:text-white hover:text-theme-primary py-2 transition-colors text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </nav>
              </div>

              <div className="p-6 border-t border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="w-full border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Log In
                  </Button>
                  <Button className="w-full bg-theme-primary hover:bg-theme-primary-dark text-black">
                    Sign Up
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
