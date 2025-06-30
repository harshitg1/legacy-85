// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import {
//   TrendingUp,
//   CheckCircle,
//   Users,
//   Award,
//   Target,
//   Star,
//   ArrowRight,
//   Zap,
//   BookOpen,
//   GraduationCap,
// } from "lucide-react";

// export default function AboutUs() {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   const dynamicTexts = useMemo(
//     () => [
//       "Trading Education",
//       "Financial Freedom",
//       "Market Mastery",
//       "Investment Success",
//       "Professional Growth",
//     ],
//     []
//   );

//   useEffect(() => {
//     const currentText = dynamicTexts[currentTextIndex];
//     let timeoutId: ReturnType<typeof setTimeout>;

//     if (isTyping) {
//       if (displayText.length < currentText.length) {
//         timeoutId = setTimeout(() => {
//           setDisplayText(currentText.substring(0, displayText.length + 1));
//         }, 100); // Typing speed
//       } else {
//         timeoutId = setTimeout(() => {
//           setIsTyping(false);
//         }, 2000); // Pause before erasing
//       }
//     } else {
//       if (displayText.length > 0) {
//         timeoutId = setTimeout(() => {
//           setDisplayText(displayText.substring(0, displayText.length - 1));
//         }, 50); // Erasing speed
//       } else {
//         setCurrentTextIndex((prevIndex) =>
//           prevIndex === dynamicTexts.length - 1 ? 0 : prevIndex + 1
//         );
//         setIsTyping(true);
//       }
//     }

//     return () => clearTimeout(timeoutId);
//   }, [displayText, isTyping, currentTextIndex, dynamicTexts]);

//   return (
//     <>
//       <section className="relative py-12 md:py-20 overflow-hidden">

//         <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-5/30 via-transparent to-theme-primary-10/30"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//             <div className="lg:col-span-5 space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary-10 rounded-full text-theme-primary font-medium text-sm">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
//                 </span>
//                 Trading Academy Now Live
//               </div>

//               {/* Improved heading structure */}
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
//                 <span className="block">Leading the Future of</span>
//                 <span className="block mt-2 text-theme-primary-dark">
//                   {displayText} <span className="animate-pulse">|</span>
//                 </span>
//                 <span className="block mt-2">Since 2020</span>
//               </h1>

//               <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
//                 We've been empowering traders worldwide with cutting-edge
//                 education, innovative tools, and a supportive community that
//                 drives real results across global markets.
//               </p>

//               <div className="grid grid-cols-3 gap-4 pt-4">
//                 <div className="text-center p-3 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
//                   <div className="text-xl md:text-2xl font-bold text-theme-primary mb-1">
//                     10K+
//                   </div>
//                   <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
//                     Active Students
//                   </p>
//                 </div>
//                 <div className="text-center p-3 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
//                   <div className="text-xl md:text-2xl font-bold text-theme-primary mb-1">
//                     85%
//                   </div>
//                   <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
//                     Success Rate
//                   </p>
//                 </div>
//                 <div className="text-center p-3 bg-white/30 dark:bg-slate-800/30 rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
//                   <div className="text-xl md:text-2xl font-bold text-theme-primary mb-1">
//                     40+
//                   </div>
//                   <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
//                     Countries
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image - 7 columns for more horizontal space */}
//             <div className="lg:col-span-7 relative">
//               {/* Simplified background */}
//               <div className="absolute inset-0 w-full h-full opacity-40">
//                 <div className="absolute -top-12 -right-12 w-64 h-64 bg-theme-primary-20 rounded-full blur-3xl transform rotate-12"></div>
//               </div>

//               {/* Main Image Container - Positioned slightly right and up */}
//               <div className="relative z-10 group overflow-hidden ml-4 -mt-2">
//                 {/* Outer glow effect */}
//                 <div className="absolute -inset-2 bg-gradient-to-r from-theme-primary to-theme-primary-light rounded-3xl opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>

//                 {/* Main image with container - reduced width */}
//                 <div className="relative z-10 group overflow-hidden max-w-2xl mx-auto">
//                   <div className="relative h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700">
//                     {/* Custom border effect */}
//                     <div className="absolute inset-0 rounded-2xl border-4 border-transparent bg-gradient-to-r from-theme-primary via-theme-primary-light to-theme-primary-dark p-[4px] z-10">
//                       <div className="h-full w-full rounded-xl"></div>
//                     </div>

//                     {/* Horizontal image */}
//                     <div className="absolute inset-0">
//                       <Image
//                         src="/reception.jpeg"
//                         alt="Trading Expertise"
//                         fill
//                         className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
//                         priority
//                       />

//                       {/* Gradient overlays for depth */}
//                       <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80"></div>
//                       <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/20 via-transparent to-theme-primary-light/20"></div>

//                       {/* Animated strips effect */}
//                       <div className="absolute inset-0 opacity-20">
//                         {[...Array(5)].map((_, i) => (
//                           <div
//                             key={i}
//                             className="absolute h-[2px] w-full animate-pulse"
//                             style={{
//                               top: `${20 * (i + 1)}%`,
//                               animationDelay: `${i * 0.3}s`,
//                               opacity: 0.3 + i * 0.1,
//                             }}
//                           ></div>
//                         ))}
//                       </div>

//                       {/* Content overlay */}
//                       <div className="absolute inset-0 flex flex-col justify-end p-8">
//                         <div className="bg-black/30 backdrop-blur-xs p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                           <h3 className="text-xl font-bold text-white mb-2">
//                             Legacy 85 Mentoring
//                           </h3>
//                           <p className="text-white/80 text-sm">
//                             An Institute committed to making a difference &
//                             enriching lives
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Multiple Floating Achievement Cards */}
//               <div className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 z-20 min-w-[180px] transform hover:rotate-2 transition-transform duration-300">
//                 <div className="flex items-center gap-2">
//                   <div className="p-2 rounded-full bg-gradient-to-r from-theme-primary to-theme-primary-light">
//                     <TrendingUp className="h-5 w-5 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-0.5">
//                       Market Leader
//                     </h4>
//                     <div className="flex items-center gap-1">
//                       <div className="flex space-x-0.5">
//                         <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                         <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                         <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                         <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                         <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                       </div>
//                       <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
//                         5.0
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional achievement badge */}
//               <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 z-20 transform hover:rotate-12 transition-transform duration-300">
//                 <div className="p-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500">
//                   <Award className="h-5 w-5 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  TrendingUp,
  CheckCircle,
  Users,
  Award,
  Target,
  Star,
  ArrowRight,
  Zap,
  BookOpen,
  GraduationCap,
  Play,
} from "lucide-react";

export default function AboutUs() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const dynamicTexts = useMemo(
    () => [
      "Trading Education",
      "Financial Freedom",
      "Market Mastery",
      "Investment Success",
      "Professional Growth",
    ],
    []
  );

  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === dynamicTexts.length - 1 ? 0 : prevIndex + 1
        );
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex, dynamicTexts]);

  return (
    <section className="relative mt-14 min-h-[70vh] w-full overflow-hidden rounded-2xl border border-slate-200/20 shadow-2xl  my-6 bg-slate-950/20 backdrop-blur-sm">
      {/* Full Background Image with Diagonal Cut - REDUCED HEIGHT */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        >
          <Image
            src="/reception.jpeg"
            alt="Trading Academy Background"
            fill
            className="object-cover object-center brightness-120 contrast-110 rounded-2xl"
            priority
            quality={100}
            style={{
              transformOrigin: 'center',
              transform: 'scale(1.02)', // Slightly larger to avoid edge gaps
              objectPosition: 'center 25%' // Crop more from bottom, focus higher
            }}
          />
          {/* Better overlays for proper contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent rounded-2xl"></div>
          {/* Very light overlay at bottom for fade effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      {/* Left Side Background Gradient - with rounded corners */}
      <div
        className="absolute inset-0 z-1"
        style={{
          clipPath: 'polygon(0% 0%, 42% 0%, 0% 100%)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-l-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/20 to-transparent rounded-l-2xl"></div>
      </div>

      {/* Diagonal Border Effect - adjusted for rounded corners */}
      <div className="absolute inset-0 z-2">
        <div
          className="absolute inset-0 border-r-4 border-theme-primary/50"
          style={{
            clipPath: 'polygon(40% 0%, 42% 0%, 2% 100%, 0% 100%)',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))'
          }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-3">
        {/* Floating orbs - positioned in cut area */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-theme-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 left-32 w-16 h-16 bg-theme-primary-light/15 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-amber-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        {/* Grid pattern overlay on left side */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            clipPath: 'polygon(0% 0%, 40% 0%, 0% 100%)'
          }}
        >
          <div className="grid grid-cols-6 gap-4 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-l border-white/30 h-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - REDUCED HEIGHT */}
      <div className="relative z-10 py-12 md:py-16 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content - positioned in the cut area */}
            <div className="lg:col-span-5 space-y-5 relative z-20">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span className="text-green-300">Trade with Us </span>
              </div>

              {/* Enhanced heading - REDUCED SIZE */}
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="block text-white drop-shadow-lg">Leading the Future of</span>
                  <span className="block text-theme-primary mt-1 bg-gradient-to-r from-theme-primary via-theme-primary-light to-amber-400 bg-clip-text text-transparent">
                    {displayText}<span className="animate-pulse text-theme-primary">|</span>
                  </span>
                  <span className="block mt-1 text-white/90 drop-shadow-lg">Since 2020</span>
                </h1>
              </div>

              {/* Enhanced Description - More compact & creative with darker colors */}
              <div className="relative max-w-md bg-[#111827]  backdrop-blur-lg rounded-xl p-2.5 overflow-hidden group">
                {/* Accent border with animated gradient - darker variant */}
                <div className="absolute inset-0 border border-slate-700/50 rounded-xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-theme-primary-dark/40 via-theme-primary/30 to-purple-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                {/* Left accent bar - richer colors */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-theme-primary-dark via-theme-primary to-purple-600"></div>

                {/* Content with icon */}
                <div className="flex gap-2.5 items-start pl-2">
                  <div className="shrink-0 mt-0.5">
                    <div className="p-1.5 rounded-full bg-slate-800/80 border border-theme-primary/40">
                      <Zap className="h-3 w-3 text-theme-primary" />
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed pr-2">
                    Empowering traders with <span className="text-theme-primary font-medium">elite education</span> and proven strategies for exceptional market results.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white font-semibold rounded-lg hover:from-theme-primary-dark hover:to-theme-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <BookOpen className="w-4 h-4" />
                  Start Learning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Side - Floating Cards & Elements - positioned over image */}
            <div className="lg:col-span-7 relative">

              {/* Main Feature Card - Sleek Design - REDUCED SIZE */}
              <div className="relative z-20 bg-slate-950/85 rounded-2xl p-5 border border-slate-700 shadow-2xl hover:bg-[#1a2235] transition-all duration-500 group max-w-sm ml-auto mr-16">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-gradient-to-r from-theme-primary to-theme-primary-light shadow-lg shadow-theme-primary/30">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Legacy 85 Mentoring</h3>
                      <p className="text-white/80 text-xs">Premium Trading Education</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-white/90">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs">Live Market Analysis</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-white/90">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs">Personal Mentorship</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-white/90">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs">Proven Strategies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sleek Floating Achievement Cards - DARKENED for visibility - SMALLER */}
              <div className="absolute top-0 right-4 group">
                <div className="relative bg-slate-900 p-3 rounded-xl shadow-xl border border-white/40 z-30 transform hover:rotate-2 hover:scale-105 transition-all duration-300 max-w-[140px]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-md">
                      <Award className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs">Industry Leader</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-300 ml-1">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-20 group">
                <div className="relative bg-slate-900  p-3 rounded-xl shadow-xl border border-white/40 z-30 transform hover:-rotate-2 hover:scale-105 transition-all duration-300 max-w-[140px]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-gradient-to-r from-theme-primary to-blue-600 shadow-md">
                      <TrendingUp className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-xs">Market Growth</h4>
                      <p className="text-[10px] text-gray-300 mt-0.5">+127% ROI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-16  right-11 group">
                <div className="relative bg-slate-800/80 backdrop-blur-lg p-2.5 rounded-full shadow-xl border border-white/40 z-30 transform hover:scale-110 transition-all duration-300">
                  <div className="p-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-md">
                    <Users className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}