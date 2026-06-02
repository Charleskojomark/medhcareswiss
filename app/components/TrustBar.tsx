"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
    <section id="trust-bar" className="bg-white border-b border-gray-100 py-8 sm:py-10">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 2-col on mobile, 4-col on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:divide-x sm:divide-gray-200 sm:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center py-4 sm:py-4 sm:px-8"
            >
              <div className="font-baskerville text-3xl sm:text-4xl font-bold text-[#05427B] mb-1">
                {stat.value}
              </div>
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
