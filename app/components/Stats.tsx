"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const counters = [
  { value: 232, suffix: "+", label: "Satisfied Patients" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 32, suffix: "+", label: "Expert Team Members" },
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
  const spring = useSpring(count, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) {
      count.set(target);
    }
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
    <section className="py-14 sm:py-20 lg:py-24 bg-[#EEF7EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="text-center bg-white rounded-2xl p-5 sm:p-8 card-shadow"
            >
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
