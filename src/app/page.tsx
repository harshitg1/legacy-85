"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import About from "@/components/about";
import TrustedBy from "@/components/trustedBy";
import Features from "@/components/features";
import PopularCourses from "@/components/popularCourses";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <HeroSection />
        <About />
        <TrustedBy />
        <Features />
        <PopularCourses />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
