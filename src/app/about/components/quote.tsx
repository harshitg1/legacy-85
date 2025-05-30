'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const sections = [
  { 
    id: 'curriculum', 
    title: 'One-of-a-Kind Curriculum', 
    subtitle: 'Designed for True Market Mastery',
    icon: '🎯',
    content: [
      "Our curriculum has been thoughtfully crafted by our Mentor to deliver a level of market understanding that goes far beyond conventional teaching. Built from real-world experience and years of market expertise, this program offers a unique learning journey that you won't find anywhere else.",
      "This comprehensive approach empowers students to build deep, lasting knowledge and practical trading skills that translate directly to market success. Every module is designed with precision to ensure maximum learning retention and practical application."
    ]
  },
  { 
    id: 'mentorship', 
    title: 'Personalized One-on-One Mentorship', 
    subtitle: 'Confidence Through Guidance',
    icon: '🤝',
    content: [
      "We understand that building confidence in trading requires more than just knowledge—it demands consistent guidance and personalized support. That's why we offer dedicated one-on-one mentoring sessions with our faculty members.",
      "Each student receives the attention, clarity, and encouragement needed to navigate the markets with conviction. Our mentors work closely with you to identify strengths, address challenges, and accelerate your learning journey."
    ]
  },
  { 
    id: 'live-analysis', 
    title: 'Progressive Learning Through Live Market Analysis', 
    subtitle: 'Real-Time Application of Course Concepts',
    icon: '📈',
    content: [
      "We believe in learning by doing. That's why all our live market analysis sessions apply only the strategies taught in our courses—ensuring transparency, reinforcing concepts, and creating a progressive, real-time learning experience.",
      "This hands-on approach bridges the gap between theoretical knowledge and practical application, giving you the confidence to execute trades with precision and understanding in real market conditions."
    ]
  },
  { 
    id: 'methodology', 
    title: 'Our Teaching Methodology', 
    subtitle: 'Structured Learning for Maximum Impact',
    icon: '🎓',
    content: [
      "Our teaching methodology combines structured curriculum delivery with practical market exposure. We follow a systematic approach that builds knowledge progressively, ensuring each concept is thoroughly understood before moving to advanced topics.",
      "This methodology has been refined through years of teaching experience and market analysis, creating an optimal learning environment that produces consistently successful traders."
    ]
  },
  { 
    id: 'success-factors', 
    title: 'Key Success Factors', 
    subtitle: 'What Sets Our Students Apart',
    icon: '⭐',
    content: [
      "Our students succeed because they receive comprehensive education that combines theoretical knowledge with practical application. The personalized attention ensures that learning gaps are quickly identified and addressed.",
      "The integration of live market analysis with course content creates a unique learning ecosystem where students can immediately see the practical application of their studies, leading to faster skill development and greater confidence."
    ]
  },
  { 
    id: 'commitment', 
    title: 'Our Commitment to Excellence', 
    subtitle: 'Building Tomorrow\'s Market Leaders',
    icon: '🏆',
    content: [
      "We are committed to delivering an educational experience that transforms students into confident, skilled traders. Our approach goes beyond traditional education to create a comprehensive support system for long-term success.",
      "Every aspect of our program is designed with the student's success in mind, from curriculum development to ongoing mentorship, ensuring that graduates are well-prepared to excel in the dynamic world of trading."
    ]
  },
];

const QuoteCard = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current = '';
      
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            current = section.id;
          }
        }
      });
      
      if (current !== activeId) {
        setActiveId(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Sidebar - Table of Contents */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg: top-20 ">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 ">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
                Our Approach
              </h2>
              
              <nav className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>
                
                <div className="space-y-1">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="relative"
                    >
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`group relative flex items-center gap-1 py-4 px-4 w-full text-left transition-all duration-300 rounded-lg ${
                          activeId === section.id
                            ? 'text-theme-primary bg-theme-primary/5'
                            : 'text-slate-600 dark:text-slate-400 hover:text-theme-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        {/* Active indicator line */}
                        <div 
                          className={`absolute left-0 top-0 bottom-0 w-[3px] bg-theme-primary transition-all duration-300  ${
                            activeId === section.id 
                              ? 'opacity-100 scale-y-100' 
                              : 'opacity-0 scale-y-50'
                          }`}
                        />
                        
                        {/* Icon */}
                        <span className={`text-xl transition-transform duration-300 ${
                          activeId === section.id ? 'scale-110' : 'group-hover:scale-105'
                        }`}>
                          {section.icon}
                        </span>
                        
                        {/* Text */}
                        <div className="flex-1">
                          <span className={`block font-medium text-base leading-snug transition-all duration-300 ${
                            activeId === section.id 
                              ? 'font-semibold' 
                              : 'group-hover:translate-x-1'
                          }`}>
                            {section.title}
                          </span>
                          <span className="block text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {section.subtitle}
                          </span>
                        </div>
                        
                        {/* Arrow */}
                        <ChevronRight 
                          className={`w-4 h-4 transition-all duration-300 ${
                            activeId === section.id 
                              ? 'rotate-90 text-theme-primary' 
                              : 'group-hover:translate-x-1 group-hover:text-theme-primary'
                          }`} 
                        />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-2/3 space-y-8">
          {sections.map((section, index) => (
            <motion.section
              id={section.id}
              key={section.id}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="bg-white dark:bg-slate-900 p-4 lg:p-6  transition-shadow duration-200">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2 bg-theme-primary/10 rounded-lg flex-shrink-0">
                    <span className="text-lg">{section.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-1">
                      {section.title}
                    </h2>
                    <h3 className="text-lg text-theme-primary font-medium mb-3">
                      {section.subtitle}
                    </h3>
                    <div className="w-12 h-0.5 bg-theme-primary rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default QuoteCard ; 