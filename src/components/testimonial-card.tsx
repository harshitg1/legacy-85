"use client";

import { Star } from "lucide-react";
import Image from "next/image";

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
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-slate-300 dark:text-slate-600"
              }`}
            />
          ))}
        </div>
      </div>

      <blockquote className="relative">
        <svg
          className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-theme-primary-20 opacity-50"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative text-slate-600 dark:text-slate-300 italic">
          "{quote}"
        </p>
      </blockquote>
    </div>
  );
}
