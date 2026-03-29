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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
    window.location.href = 'https://app.rankett.com/sign-in';
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
            className={cn(
              "p-2 hover:text-white transition-colors",
              isMobileMenuOpen ? "text-white" : "text-slate-300"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-20 z-40 transition-all duration-300",
        isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}>
        {/* Gradient border line */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="bg-slate-950/98 backdrop-blur-2xl h-full flex flex-col">
          {/* Nav links - centered */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-2xl font-bold text-slate-400 hover:text-white active:text-white transition-all duration-200 py-3 flex items-center gap-4 group"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(12px)'
                }}
              >
                <span className="w-1 h-6 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bottom CTA area */}
          <div className="px-8 pb-12 pt-4 border-t border-slate-800/50">
            <button
              onClick={handleLogin}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-[0.98]"
              style={{
                transitionDelay: isMobileMenuOpen ? '300ms' : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(12px)'
              }}
            >
              <LogIn className="w-4 h-4" />
              Partner Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}