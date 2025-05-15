// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";
// import Navbar from "@/components/navbar";
// import CourseCard from "@/components/course-card";
// import TestimonialCard from "@/components/testimonial-card";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-background px-20">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] -z-10"></div>
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] -z-10"></div>

//         <div className="container px-4 py-12 md:py-16 mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-500 font-medium text-sm animate-fade-in">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//                 </span>
//                 Trading Academy Now Live
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight animate-fade-in-up">
//                 Master the <span className="text-green-500">Markets</span> with
//                 Confidence
//               </h1>
//               <p
//                 className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl animate-fade-in-up"
//                 style={{ animationDelay: "0.1s" }}
//               >
//                 Join our educational trading platform and learn from expert
//                 traders. Get access to real-time market analysis, trading
//                 strategies, and a supportive community.
//               </p>

//               <div
//                 className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
//                 style={{ animationDelay: "0.2s" }}
//               >
//                 <Button className="h-12 px-8 text-base rounded-full bg-green-500 hover:bg-green-600 text-black font-medium group transition-all duration-300 transform hover:translate-y-[-2px]">
//                   Start Learning Now
//                   <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="h-12 px-8 text-base rounded-full border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:translate-y-[-2px]"
//                 >
//                   View Courses
//                 </Button>
//               </div>

//               {/* Stats */}
//               <div
//                 className="grid grid-cols-3 gap-6 pt-4 animate-fade-in-up"
//                 style={{ animationDelay: "0.3s" }}
//               >
//                 <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
//                   <h3 className="text-3xl font-bold text-green-500">10K+</h3>
//                   <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
//                     Active Students
//                   </p>
//                 </div>
//                 <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
//                   <h3 className="text-3xl font-bold text-green-500">92%</h3>
//                   <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
//                     Success Rate
//                   </p>
//                 </div>
//                 <div className="text-center p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 transition-transform duration-300 hover:transform hover:scale-105">
//                   <h3 className="text-3xl font-bold text-green-500">24/7</h3>
//                   <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
//                     Support
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Mobile App Mockup */}
//             <div
//               className="flex justify-center lg:justify-end animate-fade-in-up"
//               style={{ animationDelay: "0.4s" }}
//             >
//               <div className="relative">
//                 {/* Main Mobile Image */}
//                 <div className="relative z-10 transition-transform duration-500 hover:transform hover:scale-[1.02] hover:rotate-1">
//                   <Image
//                     src="/trading-app.jpg"
//                     alt="Trading App Interface"
//                     width={400}
//                     height={800}
//                     className="rounded-3xl border-4 border-white dark:border-slate-800 shadow-2xl"
//                     priority
//                   />
//                 </div>

//                 {/* Floating Card 1 */}
//                 <div className="absolute top-10 -left-16 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-[200px] animate-float z-20">
//                   <div className="flex items-center space-x-2">
//                     <div className="p-2 rounded-full bg-green-500/20">
//                       <svg
//                         className="h-5 w-5 text-green-500"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-slate-900 dark:text-white">
//                         Bitcoin
//                       </h4>
//                       <p className="text-xs text-green-500">+4.26%</p>
//                     </div>
//                   </div>
//                   <div className="mt-2 flex justify-between items-center">
//                     <span className="text-slate-900 dark:text-white font-bold">
//                       $9,290.72
//                     </span>
//                   </div>
//                 </div>

//                 {/* Floating Card 2 */}
//                 <div className="absolute -bottom-5 -right-10 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-[220px] animate-float-delayed z-20">
//                   <div className="flex items-center mb-2">
//                     <svg
//                       className="h-5 w-5 text-green-500 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                       />
//                     </svg>
//                     <h4 className="font-semibold text-slate-900 dark:text-white">
//                       Trading Success
//                     </h4>
//                   </div>
//                   <div className="space-y-2">
//                     <div>
//                       <div className="flex justify-between text-xs mb-1">
//                         <span className="text-slate-600 dark:text-slate-400">
//                           Win Rate
//                         </span>
//                         <span className="text-green-500 font-semibold">
//                           78%
//                         </span>
//                       </div>
//                       <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
//                         <div
//                           className="bg-green-500 h-1.5 rounded-full"
//                           style={{ width: "78%" }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-xl -z-10 transform scale-95"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trusted By Section */}
//       <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider font-medium">
//               TRUSTED BY TRADERS WORLDWIDE
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
//             {/* Company logos - using placeholder SVGs */}
//             <div className="opacity-70 hover:opacity-100 transition-opacity">
//               <svg
//                 className="h-8 w-auto text-slate-400 dark:text-slate-500"
//                 viewBox="0 0 100 30"
//                 fill="currentColor"
//               >
//                 <rect x="10" y="10" width="80" height="10" rx="5" />
//                 <circle cx="20" cy="15" r="8" />
//               </svg>
//             </div>
//             <div className="opacity-70 hover:opacity-100 transition-opacity">
//               <svg
//                 className="h-8 w-auto text-slate-400 dark:text-slate-500"
//                 viewBox="0 0 100 30"
//                 fill="currentColor"
//               >
//                 <path
//                   d="M10,15 L30,5 L50,15 L70,5 L90,15"
//                   strokeWidth="5"
//                   stroke="currentColor"
//                   fill="none"
//                 />
//               </svg>
//             </div>
//             <div className="opacity-70 hover:opacity-100 transition-opacity">
//               <svg
//                 className="h-8 w-auto text-slate-400 dark:text-slate-500"
//                 viewBox="0 0 100 30"
//                 fill="currentColor"
//               >
//                 <circle cx="50" cy="15" r="12" />
//                 <circle cx="20" cy="15" r="8" />
//                 <circle cx="80" cy="15" r="8" />
//               </svg>
//             </div>
//             <div className="opacity-70 hover:opacity-100 transition-opacity">
//               <svg
//                 className="h-8 w-auto text-slate-400 dark:text-slate-500"
//                 viewBox="0 0 100 30"
//                 fill="currentColor"
//               >
//                 <rect x="10" y="5" width="80" height="20" rx="10" />
//                 <rect
//                   x="25"
//                   y="10"
//                   width="50"
//                   height="10"
//                   rx="5"
//                   fill="white"
//                 />
//               </svg>
//             </div>
//             <div className="opacity-70 hover:opacity-100 transition-opacity">
//               <svg
//                 className="h-8 w-auto text-slate-400 dark:text-slate-500"
//                 viewBox="0 0 100 30"
//                 fill="currentColor"
//               >
//                 <polygon points="50,5 20,25 80,25" />
//                 <polygon points="50,25 20,5 80,5" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white dark:bg-slate-900">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//               Why Choose Our Trading Academy
//             </h2>
//             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               Learn from industry experts and develop the skills you need to
//               succeed in today's financial markets.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Feature 1 */}
//             <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
//                 <svg
//                   className="h-7 w-7 text-green-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
//                 Advanced Trading Strategies
//               </h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-4">
//                 Learn proven strategies from professional traders with years of
//                 market experience.
//               </p>
//               <ul className="space-y-2">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Risk management techniques
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Technical analysis mastery
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Trend identification
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
//                 <svg
//                   className="h-7 w-7 text-green-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
//                 Real-Time Market Analysis
//               </h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-4">
//                 Access daily market insights and analysis to help you make
//                 informed trading decisions.
//               </p>
//               <ul className="space-y-2">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Daily market briefings
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Expert commentary
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Economic calendar alerts
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Feature 3 */}
//             <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
//                 <svg
//                   className="h-7 w-7 text-green-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
//                 Community Support
//               </h3>
//               <p className="text-slate-600 dark:text-slate-400 mb-4">
//                 Join a community of like-minded traders to share ideas,
//                 strategies, and support.
//               </p>
//               <ul className="space-y-2">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Private community forum
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Weekly live Q&A sessions
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Trading challenges & contests
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popular Courses Section */}
//       <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//                 Popular Trading Courses
//               </h2>
//               <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
//                 Comprehensive courses designed to take you from beginner to
//                 professional trader.
//               </p>
//             </div>
//             <Link
//               href="/courses"
//               className="mt-4 md:mt-0 inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors"
//             >
//               View all courses
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <CourseCard
//               title="Forex Trading Fundamentals"
//               description="Learn the basics of forex trading, including currency pairs, market analysis, and entry strategies."
//               image="/placeholder.svg?height=200&width=400"
//               level="Beginner"
//               duration="6 weeks"
//               rating={4.8}
//               students={1243}
//               price={99}
//             />

//             <CourseCard
//               title="Advanced Technical Analysis"
//               description="Master chart patterns, indicators, and develop your own trading system based on technical analysis."
//               image="/placeholder.svg?height=200&width=400"
//               level="Intermediate"
//               duration="8 weeks"
//               rating={4.9}
//               students={876}
//               price={149}
//               featured={true}
//             />

//             <CourseCard
//               title="Algorithmic Trading"
//               description="Build and backtest automated trading strategies using Python and popular trading APIs."
//               image="/placeholder.svg?height=200&width=400"
//               level="Advanced"
//               duration="10 weeks"
//               rating={4.7}
//               students={542}
//               price={199}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-white dark:bg-slate-900">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//               What Our Students Say
//             </h2>
//             <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               Hear from traders who have transformed their trading journey with
//               our academy.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <TestimonialCard
//               quote="The strategies I learned helped me achieve consistent profits for the first time in my trading career."
//               author="Michael Johnson"
//               role="Forex Trader"
//               avatar="/placeholder.svg?height=80&width=80"
//               rating={5}
//             />

//             <TestimonialCard
//               quote="The community support is incredible. Having mentors available to answer questions made all the difference."
//               author="Sarah Williams"
//               role="Stock Trader"
//               avatar="/placeholder.svg?height=80&width=80"
//               rating={5}
//             />

//             <TestimonialCard
//               quote="I went from losing trades to a 72% win rate in just 3 months after applying what I learned in the courses."
//               author="David Chen"
//               role="Crypto Trader"
//               avatar="/placeholder.svg?height=80&width=80"
//               rating={4}
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-green-500/5"></div>
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -z-10"></div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//                 Ready to Start Your Trading Journey?
//               </h2>
//               <p className="text-slate-600 dark:text-slate-300 text-lg">
//                 Join thousands of successful traders who have transformed their
//                 trading with our educational platform.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="h-12 px-8 text-base rounded-full bg-green-500 hover:bg-green-600 text-black font-medium group transition-all duration-300 transform hover:translate-y-[-2px]">
//                 Get Started Today
//                 <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="h-12 px-8 text-base rounded-full border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:translate-y-[-2px]"
//               >
//                 Learn More
//               </Button>
//             </div>

//             <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
//               <div className="flex flex-wrap justify-center gap-6">
//                 <div className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     30-day money-back guarantee
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Lifetime access to materials
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                   <span className="text-slate-700 dark:text-slate-300">
//                     Certificate of completion
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <svg
//                   className="h-6 w-6 text-green-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//                   />
//                 </svg>
//                 <span className="text-lg font-bold text-slate-900 dark:text-white">
//                   Legacy-85
//                 </span>
//               </div>
//               <p className="text-slate-600 dark:text-slate-400 mb-4">
//                 Empowering traders with education, tools, and community since
//                 2020.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-green-500 hover:text-white transition-colors"
//                 >
//                   <svg
//                     className="h-5 w-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-green-500 hover:text-white transition-colors"
//                 >
//                   <svg
//                     className="h-5 w-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-green-500 hover:text-white transition-colors"
//                 >
//                   <svg
//                     className="h-5 w-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
//                 Quick Links
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="/"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/courses"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Courses
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/testimonials"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Testimonials
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/about-us"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
//                 Resources
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="/blog"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/resources"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Trading Tools
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/faq"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     FAQ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/support"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Support
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/terms"
//                     className="text-slate-600 dark:text-slate-400 hover:text-green-500 transition-colors"
//                   >
//                     Terms of Service
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
//                 Contact Us
//               </h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <svg
//                     className="h-5 w-5 text-green-500 mr-3 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                   <span className="text-slate-600 dark:text-slate-400">
//                     +1 (555) 123-4567
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     className="h-5 w-5 text-green-500 mr-3 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <span className="text-slate-600 dark:text-slate-400">
//                     contact@Legacy-85.com
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg
//                     className="h-5 w-5 text-green-500 mr-3 mt-0.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   <span className="text-slate-600 dark:text-slate-400">
//                     123 Trading Street, Financial District
//                     <br />
//                     New York, NY 10004
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400 text-sm">
//             <p>
//               © {new Date().getFullYear()} Legacy-85 Academy. All rights
//               reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }