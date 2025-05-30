"use client";

import HeroSection from "@/components/heroSection";
import About from "@/components/about";
import TrustedBy from "@/components/trustedBy";
import Features from "@/components/features";
import Grid from "@/components/grid";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
// import PopularCourses from "@/components/popularCourses"; // optional

export default function LandingPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-4 lg:px-12 bg-background overflow-x-hidden mt-[-26px]">
      <HeroSection />
      <About />
      <TrustedBy />
      <Features />
      <Grid />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
