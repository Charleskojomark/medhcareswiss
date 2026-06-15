"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef, MouseEvent } from "react";

function MagneticButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMove(e: MouseEvent) {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

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
        <source src="/assets/medhswiss.mp4" type="video/mp4" />
      </video>

      {/* Subtle gradient overlay — keeps text legible without covering video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />

      {/* Floating ambient orbs — GPU composited, no layout shifts */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[15%] left-[8%] w-64 h-64 rounded-full bg-[#3CAA35]/8 blur-3xl pointer-events-none"
        animate={{ y: [-20, 20, -20], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[20%] right-[6%] w-80 h-80 rounded-full bg-[#05427B]/15 blur-3xl pointer-events-none"
        animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-[55%] left-[55%] w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none"
        animate={{ y: [-10, 15, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16"
      >
        <motion.p
          variants={itemVariants}
          className="eyebrow text-[#3CAA35] mb-4 sm:mb-6 tracking-widest"
        >
          Premium Medical Tourism · Switzerland &amp; Spain
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-baskerville text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
        >
          Caring for{" "}
          <span
            className="not-italic font-normal"
            style={{
              background:
                "linear-gradient(90deg, #3CAA35, #7ede76, #3CAA35, #2e8f29)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}
          >
            a better life
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-inter text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          Your premium partner in value-based medical healthcare tourism
          services across Europe.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <MagneticButton
            href="#about"
            className="btn-gold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 w-full xs:w-auto max-w-xs shadow-[0_0_24px_rgba(60,170,53,0.5)] hover:shadow-[0_0_36px_rgba(60,170,53,0.7)]"
          >
            Plan your journey
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href="#services"
            className="btn-outline-white text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 w-full xs:w-auto max-w-xs"
          >
            Learn more
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden="true"
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-inter text-xs text-white/50 uppercase tracking-widest"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#trust-bar">
            <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white/60" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
