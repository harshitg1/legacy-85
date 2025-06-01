"use client";

import React from "react";
import {
  TrendingUp,
  Award,
  Users,
  BarChart2,
  PieChart,
  DollarSign,
} from "lucide-react";

// Define TypeScript types for the stats
type IconType = "award" | "users" | "chart" | "pie" | "trending" | "dollar";

interface TradingStatItem {
  value: string;
  label: string;
  description: string;
  color: string;
  textColor?: string;
  iconType: IconType;
  col: number;
  order?: number;
}

const TRADING_STATS: TradingStatItem[] = [
  // Column 1 (centered)
  {
    value: "16",
    label: "TIMES",
    description:
      "Market prediction accuracy above industry average in the last 10 years",
    color: "bg-purple-100",
    iconType: "award",
    col: 1,
  },

  // Column 2 (tall cards)
  {
    value: "4L+",
    label: "TRADERS",
    description: "eligible for premium trading strategies",
    color: "bg-theme-primary",
    textColor: "text-white",
    iconType: "users",
    col: 2,
    order: 1,
  },
  {
    value: "30K+",
    label: "TRADERS",
    description: "selected for advanced portfolio management",
    color: "bg-white",
    iconType: "chart",
    col: 2,
    order: 2,
  },

  // Column 3 (wide cards)
  {
    value: "37",
    label: "OUT OF 48",
    description: "consecutive profitable quarters in volatile markets",
    color: "bg-white",
    iconType: "pie",
    col: 3,
    order: 1,
  },
  {
    value: "400+",
    label: "RANKS",
    description: "under top 100 in trading competitions in last 10 years",
    color: "bg-theme-primary",
    textColor: "text-white",
    iconType: "trending",
    col: 3,
    order: 2,
  },

  // Column 4 (centered)
  {
    value: "300+",
    label: "RANKS",
    description: "under top 100 in portfolio performance in the last 10 years",
    color: "bg-purple-100",
    iconType: "dollar",
    col: 4,
  },
];

export default function StatsGrid(): React.ReactElement {
  const renderIcon = (
    iconType: IconType,
    isDarkBg: boolean
  ): React.ReactNode => {
    const iconColor = isDarkBg ? "text-white" : "text-theme-primary";
    const iconClasses = `w-14 h-14 ${iconColor} ${
      isDarkBg ? "opacity-80" : ""
    }`;

    switch (iconType) {
      case "award":
        return <Award className={iconClasses} />;
      case "users":
        return <Users className={iconClasses} />;
      case "chart":
        return <BarChart2 className={iconClasses} />;
      case "pie":
        return <PieChart className={iconClasses} />;
      case "trending":
        return <TrendingUp className={iconClasses} />;
      case "dollar":
        return <DollarSign className={iconClasses} />;
      default:
        return <Award className={iconClasses} />;
    }
  };

  const cols = [1, 2, 3, 4].map((colNum) => {
    const stats = TRADING_STATS.filter((stat) => stat.col === colNum).sort(
      (a, b) => (a.order ?? 0) - (b.order ?? 0)
    );

    const isCentered = (colNum === 1 || colNum === 4) && stats.length === 1;

    return (
      <div
        key={colNum}
        className={`flex flex-col flex-shrink-0 gap-y-6 lg:gap-y-8 ${
          isCentered ? "justify-center" : ""
        }`}
      >
        {stats.map((stat, idx) => {
          // Determine dimensions based on column - increased sizes to match image
          const isPortrait = colNum === 2;
          const isLandscape = colNum === 3;

          // Increased width and height values
          const width = isPortrait ? "w-56" : isLandscape ? "w-72" : "w-64";
          const height = isPortrait ? "h-72" : isLandscape ? "h-57" : "h-72";

          // Text colors based on card background
          const isDarkBg = stat.color === "bg-theme-primary";
          const textColor =
            stat.textColor || (isDarkBg ? "text-white" : "text-slate-900");
          const secondaryTextColor = isDarkBg
            ? "text-white/80"
            : "text-slate-700";
          const tertiaryTextColor = isDarkBg
            ? "text-white/70"
            : "text-slate-600";

          return (
            <div
              key={idx}
              className={`${width} ${height} overflow-hidden rounded-2xl ${stat.color} shadow-lg`}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                {/* Stat Content */}
                <div className="flex flex-col">
                  <h3 className={`text-4xl sm:text-5xl font-bold ${textColor}`}>
                    {stat.value}
                  </h3>
                  <p
                    className={`text-lg sm:text-xl font-semibold mt-1 ${secondaryTextColor}`}
                  >
                    {stat.label}
                  </p>
                  <p
                    className={`mt-3 text-sm sm:text-base ${tertiaryTextColor}`}
                  >
                    {stat.description}
                  </p>
                </div>

                {/* Icon */}
                <div className={`mt-6 ${isLandscape ? "self-end" : ""}`}>
                  {renderIcon(stat.iconType, isDarkBg)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="pt-8 pb-80 lg:pt-12 lg:pb-10">
        <div className="flex flex-col space-y-10 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
          <div className="w-full justify-center text-center">
            <h2 className="text-2xl text-theme-primary font-semibold">
              OUR 10-YEAR ACHIEVEMENTS
            </h2>
            <h1 className="text-4xl font-bold mt-2 mb-8">
              Creating impact at a scale
            </h1>
          </div>

          <div>
            <div className="flex items-center justify-center gap-8">{cols}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
