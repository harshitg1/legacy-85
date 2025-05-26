"use client";
import { useEffect, useState, Suspense, lazy } from "react";
import Navbar from "@/components/navbar";

// Lazy load components
const HeroSection = lazy(() => import("@/components/heroSection"));
const About = lazy(() => import("@/components/about"));
const TrustedBy = lazy(() => import("@/components/trustedBy"));
const Features = lazy(() => import("@/components/features"));
const PopularCourses = lazy(() => import("@/components/popularCourses"));
const Testimonials = lazy(() => import("@/components/testimonials"));
const CTA = lazy(() => import("@/components/cta"));
const Footer = lazy(() => import("@/components/footer"));

// Simple loading component
function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-screen">
   <div className=" relative flex justify-center items-center h-20">
    <div className="rounded animate-spin ease duration-800 w-8 h-8 border-2 border-theme-primary"></div>
</div>

      {/* <div className="h-16 w-16 border-t-4 border-theme-primary rounded-full animate-spin"></div> */}
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
    <div>
      <Suspense fallback={<LoadingState />}>
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
      </Suspense>
    </div>
  );
}