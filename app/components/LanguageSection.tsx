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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-heading-white mb-6"
        >
          No language barrier, ever
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-inter font-semibold text-white text-sm hover:bg-gold/20 hover:border-gold transition-all duration-300"
            >
              {lang}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 + languages.length * 0.07 }}
            className="px-5 h-14 rounded-full bg-gold/20 border border-gold flex items-center justify-center font-inter font-semibold text-gold text-sm"
          >
            12+ languages supported
          </motion.span>
        </div>
      </div>
    </section>
  );
}
