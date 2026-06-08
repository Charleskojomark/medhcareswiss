"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Heart, Globe } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "State-of-the-Art Facilities",
    description:
      "Access cutting-edge medical facilities delivering exceptional care and innovative treatments.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Comprehensive, personalized assistance for a smooth and stress-free medical journey.",
  },
  {
    icon: Globe,
    title: "Premier European Destinations",
    description:
      "Choose from leading medical destinations with a comfortable, memorable stay.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#3CAA35]/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#05427B]/60 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background image overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-4"
          >
            Why MedHcareSwiss
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading-white max-w-2xl mx-auto"
          >
            World-class care, without the complexity
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(255,255,255,0.12)",
                boxShadow: "0 0 40px rgba(60,170,53,0.2), inset 0 0 0 1px rgba(60,170,53,0.35)",
              }}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300 cursor-default"
              >
                {/* Icon with floating animation */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 bg-[#3CAA35]/15 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Icon className="w-8 h-8 text-[#3CAA35]" />
                </motion.div>
                <h3 className="font-baskerville text-xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="font-inter text-gray-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
