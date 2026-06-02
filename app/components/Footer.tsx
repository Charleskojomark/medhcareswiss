"use client";

import Image from "next/image";

const serviceLinks = [
  "Concierge Services",
  "Consultation and Assessment",
  "Post-Treatment Care",
  "Comprehensive Diagnostics",
  "Genetic Research and Testing",
];

const quickLinks = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Doctors",  href: "#specialists" },
  { label: "Contact",  href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

        {/* Col 1 — Brand */}
        <div className="sm:col-span-2 lg:col-span-1">

          {/* Logo mark + company name — same pattern as navbar */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white rounded-xl p-1.5 flex-shrink-0">
              <Image
                src="/assets/logo.webp"
                alt="MedHcareSwiss icon"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
            </div>
            <span className="font-inter font-bold text-xl text-white leading-none tracking-tight">
              medhcareswiss
            </span>
          </div>

          <p className="font-inter text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
            Your premium partner in value-based medical healthcare tourism across Europe.
          </p>

          <address className="font-inter text-sm text-gray-400 not-italic leading-relaxed mb-6">
            Route de Chatel-St Denis 107,<br />
            1808, Les Monts-de-Corsier,<br />
            Vaud Canton, Switzerland
          </address>

          <div className="space-y-1.5 mb-6">
            <p className="font-inter text-xs text-gray-500">
              <span className="text-gray-400 font-medium">Company Reg:</span>{" "}
              CH55011945149
            </p>
            <p className="font-inter text-xs text-gray-500">
              <span className="text-gray-400 font-medium">Tax Code:</span>{" "}
              CHE-218.696.442
            </p>
          </div>

          {/* Contact links */}
          <div className="space-y-2">
            <a
              href="https://wa.me/41775039088"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-[#3CAA35] transition-colors"
            >
              🇨🇭 +41 77 503 90 88
            </a>
            <a
              href="https://wa.me/34652361449"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-[#3CAA35] transition-colors"
            >
              🇪🇸 +34 65 236 14 49
            </a>
            <a
              href="mailto:Info@medhcareswiss.com"
              className="flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-[#3CAA35] transition-colors"
            >
              ✉ Info@medhcareswiss.com
            </a>
          </div>
        </div>

        {/* Col 2 — Services */}
        <div>
          <h3 className="font-inter font-semibold text-white mb-5 uppercase text-xs tracking-widest">
            Services
          </h3>
          <ul className="space-y-3">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="font-inter text-sm text-gray-400 hover:text-[#3CAA35] transition-colors duration-200 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3CAA35] flex-shrink-0 mt-2" />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Quick Links + Social */}
        <div>
          <h3 className="font-inter font-semibold text-white mb-5 uppercase text-xs tracking-widest">
            Quick Links
          </h3>
          <ul className="space-y-3 mb-8">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-inter text-sm text-gray-400 hover:text-[#3CAA35] transition-colors duration-200 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#05427B] flex-shrink-0 mt-2" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <h4 className="font-inter font-semibold text-white mb-4 uppercase text-xs tracking-widest">
            Follow Us
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3CAA35]/20 hover:text-[#3CAA35] transition-all duration-300"
              aria-label="MedHcareSwiss on LinkedIn"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3CAA35]/20 hover:text-[#3CAA35] transition-all duration-300"
              aria-label="MedHcareSwiss on Instagram"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} MedHcareSwiss SNC. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Legal Notice"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-xs text-gray-500 hover:text-[#3CAA35] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
