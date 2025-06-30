"use client";

import HeroSection from "@/components/heroSection";
import About from "@/components/about";
import TrustedBy from "@/components/trustedBy";
import Features from "@/components/features";
import Grid from "@/components/grid";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Mentoring from "@/components/mentoring";
import FAQs from "@/components/faqs";
import Events from "@/components/events";
import About2 from "@/components/about2";
// import PopularCourses from "@/components/popularCourses"; // optional

export default function LandingPage() {
  return (
    <div className="w-full    overflow-x-hidden bg-background ">
      {/* Container with responsive padding that increases gradually with screen size */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Hero section typically needs full width treatment */}
          <HeroSection />
        <div >
          <About2 />
        </div>
        {/* Content sections with consistent spacing between them */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <About />
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <Mentoring />
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <Events />
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <Grid />
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <Testimonials />
        </div>

        {/* <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <CTA />
    </div> */}

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <FAQs />
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <Contact />
        </div>
      </div>
    </div>
  );
}
