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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.p variants={itemVariants} className="eyebrow mb-3 sm:mb-4">
            About MedHcareSwiss
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="section-heading mb-4 sm:mb-6 relative"
          >
            Medical tourism,{" "}
            <span className="relative inline-block">
              redefined
              {inView && (
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full bg-[#3CAA35] line-reveal"
                  aria-hidden="true"
                />
              )}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-inter text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10"
          >
            A registered medical healthcare company based in Switzerland,
            providing exceptional value-based medical tourism services across
            Europe. Our team ensures a seamless, compassionate experience from
            consultation to recovery.
          </motion.p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -80 : 80,
                  y: 12,
                  rotate: i % 2 === 0 ? -2 : 2,
                  scale: 0.92,
                }}
                animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                whileHover={{ scale: 1.03, x: 4 }}
                className="flex items-center gap-2 sm:gap-3 bg-surface rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border-l-4 border-[#3CAA35] cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#3CAA35] flex-shrink-0" />
                <span className="font-inter font-medium text-brand text-xs sm:text-sm">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Image with parallax tilt */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          whileHover={{ scale: 1.02, rotate: 0.8 }}
          className="relative h-64 sm:h-80 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-first lg:order-last"
          style={{ transformOrigin: "center center" }}
        >
          <Image
            src="/assets/service-1.jpg"
            alt="Post-treatment care patient receiving compassionate medical attention"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/15 to-transparent" />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg animate-glow"
          >
            <p className="font-baskerville text-navy font-bold text-base sm:text-lg">
              Switzerland &amp; Spain
            </p>
            <p className="font-inter text-xs sm:text-sm text-gray-600">
              Premium healthcare destinations
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
