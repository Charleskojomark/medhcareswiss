"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Medical Partners" },
  { value: "232+", label: "Satisfied Patients" },
  { value: "24/7", label: "Client Support" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="trust-bar" className="bg-white border-b border-gray-100 py-8 sm:py-10 overflow-hidden relative">
      {/* Top border shimmer */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, #3CAA35, #05427B, #3CAA35, transparent)",
          backgroundSize: "200% auto",
        }}
        animate={{ backgroundPosition: ["-100% center", "200% center"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:divide-x sm:divide-gray-200 sm:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              whileHover={{ y: -3, scale: 1.04 }}
              className="text-center py-4 sm:py-4 sm:px-8 cursor-default"
            >
              <motion.div
                className="font-baskerville text-3xl sm:text-4xl font-bold text-[#05427B] mb-1"
                whileHover={{ color: "#3CAA35" }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="font-inter text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
