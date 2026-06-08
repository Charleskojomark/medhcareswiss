"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const languages = ["EN", "FR", "DE", "ES", "IT", "AR"];

export default function LanguageSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Rotating orb for depth */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(60,170,53,0.05), transparent, rgba(60,170,53,0.08), transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/language.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading-white mb-6"
        >
          No language barrier, ever
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-inter text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          If there is a language barrier between the patient and the healthcare
          providers, MedHcareSwiss SNC provides full interpretation services to
          facilitate effective communication throughout the medical journey.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {languages.map((lang, i) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.25 + i * 0.07,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(60,170,53,0.25)",
                borderColor: "rgba(60,170,53,0.7)",
                boxShadow: "0 0 20px rgba(60,170,53,0.35)",
                y: -4,
              }}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-inter font-semibold text-white text-sm cursor-default"
            >
              {lang}
            </motion.span>
          ))}

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.25 + languages.length * 0.07,
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            whileHover={{ scale: 1.08, y: -3 }}
            className="px-5 h-14 rounded-full bg-[#3CAA35]/20 border border-[#3CAA35] flex items-center justify-center font-inter font-semibold text-[#3CAA35] text-sm animate-glow"
          >
            12+ languages supported
          </motion.span>
        </div>
      </div>
    </section>
  );
}
