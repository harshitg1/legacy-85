"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react"; // Add this import

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating,
}: TestimonialCardProps) {
  // Add client-side only rendering to avoid hydration errors
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-theme-primary-20">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-theme-primary-20">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">
              {author}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
          </div>
        </div>
        {isClient ? ( // Only render stars on the client
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "text-yellow-400"
                    : "text-slate-300 dark:text-slate-600"
                }`}
                fill={i < rating ? "currentColor" : "none"}
              />
            ))}
          </div>
        ) : (
          // Placeholder for server rendering
          <div className="w-20 h-4"></div>
        )}
      </div>

      <blockquote className="relative">
        {isClient && ( // Only render quote icon on client
          <Quote
            className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-theme-primary-20 opacity-50"
            fill="currentColor"
            strokeWidth={0}
          />
        )}
        <p className="relative text-slate-600 dark:text-slate-300 italic pt-4">
          "{quote}"
        </p>
      </blockquote>
    </div>
  );
}
