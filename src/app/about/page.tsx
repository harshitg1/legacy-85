"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  TrendingUp,
  BarChart3,
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Ema from "@/components/ema";
import QuoteCard from "./components/quote";

export default function About() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Ema />
      <QuoteCard />
      <Footer />
    </div>
  );
}
