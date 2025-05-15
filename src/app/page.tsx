"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import About from "@/components/about";
import TrustedBy from "@/components/trustedBy";
import Features from "@/components/features";
import PopularCourses from "@/components/popularCourses";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

// Simple loading component
function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-16 w-16 border-t-4 border-theme-primary rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingState />;
  }

  return (
    <div className="">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-2 md:px-4 lg:px-12 min-h-screen bg-background overflow-x-hidden mt-[-26px]">
        <HeroSection />
        <About />
        <TrustedBy />
        <Features />
        <PopularCourses />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
