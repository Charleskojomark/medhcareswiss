"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Swiss Quality Standards",
  "Renowned Specialists",
  "Comprehensive Care",
  "End-to-End Support",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3 sm:mb-4">About MedHcareSwiss</p>
          <h2 className="section-heading mb-4 sm:mb-6">
            Medical tourism, redefined
          </h2>
          <p className="font-inter text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            A registered medical healthcare company based in Switzerland,
            providing exceptional value-based medical tourism services across
            Europe. Our team ensures a seamless, compassionate experience from
            consultation to recovery.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-2 sm:gap-3 bg-surface rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border-l-4 border-[#3CAA35]"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#3CAA35] flex-shrink-0" />
                <span className="font-inter font-medium text-brand text-xs sm:text-sm">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative h-64 sm:h-80 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-first lg:order-last"
        >
          <Image
            src="/assets/service-1.jpg"
            alt="Post-treatment care patient receiving compassionate medical attention"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/15 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
            <p className="font-baskerville text-navy font-bold text-base sm:text-lg">
              Switzerland &amp; Spain
            </p>
            <p className="font-inter text-xs sm:text-sm text-gray-600">
              Premium healthcare destinations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
