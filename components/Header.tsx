"use client";

import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open

    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      const isHomePage = window.location.pathname === '/';
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/${href}`); // Use router.push for hash links on other pages
      }
    } else {
      router.push(href); // Use router.push for internal navigation
    }
  };

  const handleLogin = () => {
    // TODO: Update with actual login URL
    const toolBaseUrl = process.env.NEXT_PUBLIC_TOOL_URL || 'http://localhost:3001';
    window.location.href = toolBaseUrl;
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-md border-slate-800/50" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        {/* Desktop: 3-column grid for perfect centering */}
        <div className="hidden lg:grid lg:grid-cols-3 items-center h-full">
          {/* Logo - Left */}
          <div className="justify-self-start">
            <Link href="/" className="flex items-center hover:opacity-90 transition-all duration-300">
              <img
                src="/images/Rankett_Logo.png"
                alt="Rankett"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="justify-self-center flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Right */}
          <div className="justify-self-end">
            <Button
              onClick={handleLogin}
              variant="primary"
            >
              <LogIn className="w-4 h-4 mr-2 text-white/70" />
              Login
            </Button>
          </div>
        </div>

        {/* Mobile: Simple flex layout */}
        <div className="lg:hidden flex items-center justify-between h-full">
          <Link href="/" className="flex items-center hover:opacity-90 transition-all duration-300">
            <img
              src="/images/Rankett_Logo.png"
              alt="Rankett"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-4 absolute w-full shadow-2xl">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-slate-300 hover:text-white py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={handleLogin}
              className="w-full bg-white text-slate-950 hover:bg-slate-200 font-bold mt-4"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}