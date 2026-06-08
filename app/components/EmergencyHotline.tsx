"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

export default function EmergencyHotline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=2070"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-dark/70" />

      {/* Pulse rings — decorative only */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-red-500/10 pointer-events-none"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-red-500/15 pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Emergency label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span
            className="relative flex h-3 w-3"
            aria-label="Live emergency support indicator"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
          <span className="font-inter text-xs font-semibold uppercase tracking-widest text-red-400">
            Emergency Support
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-baskerville text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          Emergency Hotline
        </motion.h2>

        {/* Animated phone icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
          className="flex justify-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center animate-heartbeat">
            <Phone className="w-7 h-7 text-red-400" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              flag: "🇨🇭",
              country: "Switzerland",
              number: "+41 77 503 90 88",
              href: "https://wa.me/41775039088",
            },
            {
              flag: "🇪🇸",
              country: "Spain",
              number: "+34 65 236 14 49",
              href: "https://wa.me/34652361449",
            },
          ].map((item, i) => (
            <motion.a
              key={item.country}
              href={item.href}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.35 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 30px rgba(60,170,53,0.3), inset 0 0 0 1px rgba(60,170,53,0.4)",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
              className="group flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-8 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp MedHcareSwiss ${item.country} line at ${item.number}`}
            >
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                {item.flag}
              </motion.span>
              <span className="font-inter text-sm text-gray-400">
                {item.country}
              </span>
              <div className="flex items-center gap-2">
                {/* WhatsApp icon */}
                <svg className="w-5 h-5 text-[#3CAA35]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-baskerville text-xl font-bold text-white group-hover:text-[#3CAA35] transition-colors">
                  {item.number}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
