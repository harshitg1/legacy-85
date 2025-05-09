import Link from "next/link";
import { PanelsTopLeft } from "lucide-react";
import { ArrowRightIcon, EnvelopeClosedIcon, GitHubLogoIcon, HamburgerMenuIcon, MixerVerticalIcon, MobileIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

import AuthenticationForm from "@/components/Authentication/AuthenticationForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-20 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <MixerVerticalIcon className="h-6 w-6 text-primary" />
            <span className="font-bold from-neutral-700">Legacy 85</span>
            {/* <span className="sr-only">shadcn/ui sidebar</span> */}
          </Link>
          <nav className="ml-auto  w-3/4 flex justify-around items-center">
            <div className="hidden md:flex items-center gap-10 text-lg ">
              <Link href="/" className=" font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className=" font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/testimonials" className=" font-medium hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/about-us" className=" font-medium hover:text-primary transition-colors">
                About Us
              </Link>
            </div>

            {/* Contact Information */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm">
                <MobileIcon className="h-4 w-4 text-primary" />
                <span>+91 876-567-8950</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <EnvelopeClosedIcon className="h-4 w-4 text-primary" />
                <span>contact@legacy.com</span>
              </div>
            </div>

            {/* Mobile menu button - visible only on mobile */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden rounded-full w-8 h-8 bg-background"
            >
              <HamburgerMenuIcon className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>

            {/* Theme toggle */}
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex flex-col">
        <div className="container relative pb-10 flex flex-col px-36 md:flex-row gap-6">
          {/* Left section (larger) */}
          <div className="w-full md:w-2/3">
            <section className="flex flex-col items-start gap-2 py-8 md:py-12">
              <div className="flex justify-start items-center gap-2  py-1 text-xl tracking-wide font-medium text-primary">
                Welcome to Legacy Academy !
              </div>
              <h1 className="text-3xl font-bold leading-relaxed tracking-wide md:text-5xl lg:leading-[1.1]">
                Start Your Trading <br/> Journey  with Us
              </h1>
              <div className="flex flex-col gap-2 text-lg text-muted-foreground font-semibold">
                <p className="font-light">
                  Leading the way in trading education and resources.
                </p>
                <p className="font-light">
                  Successful in training over <span className="font-semibold text-primary">1000+ students</span> in the last 2 years.
                </p>
                <p className="font-light">
                  We specialize in demystifying the stock market for everyone.
                </p>
              </div>
              <div className="mt-6">
                <AuthenticationForm />
              </div>
            </section>
          </div>

          <div className="w-full md:w-1/3 py-10 flex items-start justify-center">
            <div className="relative overflow-hidden shadow-xl border-2 border-primary rounded-full aspect-square w-[80%] max-w-[320px] bg-zinc-900/40">
              <img
                src="/hero.png"
                alt="Trading visualization"
                className="w-full h-full object-cover object-top scale-125 origin-top"
              />

              {/* Bottom-left corner card */}
              <div className="absolute bottom-7 left-10 bg-black/80 backdrop-blur-sm border border-primary/30 rounded-xl px-3 py-2 max-w-[75%] shadow-lg">
                <div className="flex text-primary text-lg font-bold">7000+ Traders</div>
                <div className="text-xs text-white/80 mb-2">Demystifying stock market for everyone</div>

                {/* Combined row with thumbnails, stars and Google rating */}
                <div className="flex items-center justify-between gap-2">
                  {/* Thumbnails row */}
                  <div className="flex -space-x-2">
                    <div className="w-5 h-5 rounded-full border border-primary/30 bg-slate-700 overflow-hidden">
                      <img src="/thumb1.jpg" alt="Student" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-5 h-5 rounded-full border border-primary/30 bg-slate-700 overflow-hidden">
                      <img src="/thumb2.jpg" alt="Student" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-5 h-5 rounded-full border border-primary/30 bg-slate-700 overflow-hidden">
                      <img src="/thumb3.jpg" alt="Student" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Stars and Google rating */}
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex items-center text-xs text-white/80">
                      <span>4/5</span>
                      <svg className="ml-0.5 w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
