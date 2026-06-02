"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Doctors",      href: "#specialists" },
  { label: "Appointments", href: "#consultation" },
  { label: "Contact",      href: "#contact" },
];

/** Logo mark + company name, colour-adaptive */
function BrandLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <a
      href="#home"
      aria-label="MedHcareSwiss home"
      className={`flex items-center gap-2.5 transition-all duration-300 ${
        !scrolled
          ? "bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow"
          : ""
      }`}
    >
      {/* Icon mark — always in its natural green + navy colours */}
      <Image
        src="/assets/logo.webp"
        alt="MedHcareSwiss icon"
        width={40}
        height={40}
        className="h-9 w-9 sm:h-10 sm:w-10 object-contain flex-shrink-0"
        priority
      />
      {/* Company name — navy on white bg, white when transparent */}
      <span
        className={`font-inter font-bold text-lg sm:text-xl leading-none tracking-tight transition-colors duration-300 ${
          scrolled ? "text-[#05427B]" : "text-[#05427B]"
        }`}
      >
        medhcareswiss
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* ── Desktop top-bar ── */}
      <div className="hidden lg:flex bg-[#05427B] text-white text-xs font-inter items-center justify-end gap-6 px-6 py-1.5">
        <a href="https://wa.me/41775039088" target="_blank" rel="noopener noreferrer" className="hover:text-[#3CAA35] transition-colors">
          🇨🇭 +41 77 503 90 88
        </a>
        <a href="https://wa.me/34652361449" target="_blank" rel="noopener noreferrer" className="hover:text-[#3CAA35] transition-colors">
          🇪🇸 +34 65 236 14 49
        </a>
        <a href="mailto:Info@medhcareswiss.com" className="hover:text-[#3CAA35] transition-colors">
          Info@medhcareswiss.com
        </a>
      </div>

      {/* ── Main header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

          <BrandLogo scrolled={scrolled} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-inter text-sm font-medium relative group transition-colors duration-200 ${
                  scrolled ? "text-[#1A1A2E] hover:text-[#05427B]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#3CAA35] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#consultation"
            className="hidden lg:inline-flex bg-[#3CAA35] text-white font-inter font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-[#2e8f29] hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Consultation
          </a>

          {/* Mobile: quick-call + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="https://wa.me/34652361449"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Call MedHcareSwiss"
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#05427B] bg-[#05427B]/10" : "text-white bg-white/20"
              }`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#05427B] bg-[#05427B]/10" : "text-white bg-white/20"
              }`}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          drawerOpen ? "visible" : "invisible pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(320px,85vw)] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header — white bg, so logo colours show perfectly */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <Image
                src="/assets/logo.webp"
                alt="MedHcareSwiss icon"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-inter font-bold text-lg text-[#05427B] leading-none">
                medhcareswiss
              </span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-[#05427B]" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-5 py-6 flex flex-col gap-1 overflow-y-auto" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="font-inter text-[15px] font-medium text-[#1A1A2E] hover:text-[#05427B] hover:bg-gray-50 py-3 px-3 rounded-xl border-b border-gray-50 last:border-0 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-5 pb-8 pt-4 border-t border-gray-100 space-y-3">
            <a
              href="#consultation"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center bg-[#3CAA35] text-white font-inter font-semibold text-sm w-full py-3.5 rounded-full hover:bg-[#2e8f29] transition-all duration-300"
            >
              Book Consultation
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a href="https://wa.me/41775039088" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-xs font-inter text-[#05427B] bg-[#05427B]/8 py-2.5 px-3 rounded-xl hover:bg-[#05427B]/15 transition-colors">
                🇨🇭 Switzerland
              </a>
              <a href="https://wa.me/34652361449" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-xs font-inter text-[#05427B] bg-[#05427B]/8 py-2.5 px-3 rounded-xl hover:bg-[#05427B]/15 transition-colors">
                🇪🇸 Spain
              </a>
            </div>
            <a
              href="mailto:Info@medhcareswiss.com"
              className="block text-center text-xs font-inter text-gray-400 hover:text-[#05427B] transition-colors"
            >
              Info@medhcareswiss.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
