"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?w=2070"
        aria-hidden="true"
      >
        <source src="/assets/medh.mp4" type="video/mp4" />
      </video>

      {/* Overlay — translucent so video shows through */}
      <div className="absolute inset-0 bg-navy/50" aria-hidden="true" />

      {/* Content — pt-24 clears the fixed navbar on mobile */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="eyebrow text-[#3CAA35] mb-4 sm:mb-6"
        >
          Premium Medical Tourism · Switzerland &amp; Spain
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-baskerville text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
        >
          Caring for{" "}
          <em className="not-italic font-normal text-[#3CAA35]">
            a better life
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-inter text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          Your premium partner in value-based medical healthcare tourism
          services across Europe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a href="#about" className="btn-gold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 w-full xs:w-auto max-w-xs">
            Plan your journey
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#services" className="btn-outline-white text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 w-full xs:w-auto max-w-xs">
            Learn more
          </a>
        </motion.div>
      </div>

      {/* Bounce Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow"
        aria-hidden="true"
      >
        <a href="#trust-bar">
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white/70" />
        </a>
      </motion.div>
    </section>
  );
}
