"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";

type CourseCardProps = {
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  students: number;
  price: number;
  featured?: boolean;
};

export default function CourseCard({
  title,
  description,
  image,
  level,
  duration,
  rating,
  students,
  price,
  featured = false,
}: CourseCardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border ${
        featured
          ? "border-theme-primary"
          : "border-slate-200 dark:border-slate-700"
      }`}
    >
      {/* Image with consistent height */}
      <div className="relative h-[220px]">
        {" "}
        {/* Increased height */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <Badge
            className={`
              ${level === "Beginner" ? "bg-blue-500" : ""}
              ${level === "Intermediate" ? "bg-yellow-500" : ""}
              ${level === "Advanced" ? "bg-pink-500" : ""}
              text-white font-medium px-3 py-1
            `}
          >
            {level}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-theme-primary text-white font-medium px-3 py-1">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star
              className="h-4 w-4 text-yellow-500 mr-1"
              fill="currentColor"
            />
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {rating}
            </span>
          </div>
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <Users className="h-4 w-4 mr-1" />
            {students}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            ${price}
          </span>
          <button className="px-4 py-2 bg-theme-primary hover:bg-theme-primary-dark text-white rounded-full text-sm font-medium transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
