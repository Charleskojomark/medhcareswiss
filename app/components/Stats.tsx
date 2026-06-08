"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const counters = [
  { value: 232, suffix: "+", label: "Satisfied Patients", icon: "🏥" },
  { value: 100, suffix: "%", label: "Satisfaction Rate", icon: "⭐" },
  { value: 10, suffix: "+", label: "Years of Experience", icon: "🎯" },
  { value: 32, suffix: "+", label: "Expert Team Members", icon: "👩‍⚕️" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 50, damping: 18 });

  useEffect(() => {
    if (inView) count.set(target);
  }, [inView, count, target]);

  useEffect(() => {
    const unsub = spring.onChange((v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span className="font-baskerville text-4xl sm:text-5xl font-bold text-[#05427B]">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#EEF7EE] overflow-hidden relative">
      {/* Subtle shimmer line across the top */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3CAA35, transparent)",
          backgroundSize: "200% auto",
        }}
        animate={{ backgroundPosition: ["-200% center", "200% center"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading max-w-3xl mx-auto mb-3 sm:mb-4"
          >
            Plan your medical tourism journey with MedHcareSwiss SNC
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-inter text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
          >
            We are expanding access, advancing solutions and growing a global
            medical community.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px rgba(60,170,53,0.2)",
                scale: 1.03,
              }}
              className="text-center bg-white rounded-2xl p-5 sm:p-8 card-shadow cursor-default relative overflow-hidden"
            >
              {/* Subtle shimmer overlay on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60,170,53,0.04) 0%, transparent 60%)",
                }}
              />
              <div className="text-2xl mb-2" aria-hidden="true">
                {c.icon}
              </div>
              <AnimatedCounter
                target={c.value}
                suffix={c.suffix}
                inView={inView}
              />
              <p className="font-inter text-xs sm:text-sm text-gray-500 mt-2">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
