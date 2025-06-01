"use client";

import dynamic from "next/dynamic";

const LandingPage = dynamic(() => import("@/components/landing"), {
  ssr: false,
  loading: () => <PageLoader />,
});

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="w-6 h-6 border-2 border-theme-primary animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <LandingPage />
    </>
  );
}
