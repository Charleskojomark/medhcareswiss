"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "MedHcareSwiss gave our family peace of mind during a very stressful time. The doctors were incredibly thorough, and the nurses treated us with such kindness. We felt cared for every step of the way.",
    name: "Sarah K.",
    origin: "United Kingdom",
    rating: 5,
  },
  {
    text: "Traveling from abroad for surgery was a big decision, but MedHcareSwiss made everything seamless. From airport pickup to world-class care, I couldn't have asked for better treatment.",
    name: "James A.",
    origin: "United States",
    rating: 5,
  },
  {
    text: "I was admitted to MedHcareSwiss after a heart episode, and the emergency team saved my life. Their quick response and advanced equipment made all the difference. Forever thankful.",
    name: "Marie-Claire B.",
    origin: "France",
    rating: 5,
  },
  {
    text: "The entire process from consultation to post-treatment care was exceptional. The medical tourism coordination made what could have been stressful completely worry-free.",
    name: "Oluwaseun O.",
    origin: "Nigeria",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-4"
          >
            Patient Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading"
          >
            Patients are saying
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -100 : 100,
                y: 30,
                rotate: i % 2 === 0 ? -3 : 3,
                scale: 0.9,
                filter: "blur(5px)",
              }}
              animate={inView ? {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: "blur(0px)",
              } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 50px rgba(60,170,53,0.14)",
              }}
              className="bg-surface rounded-2xl p-8 card-shadow relative overflow-hidden cursor-default group"
            >
              {/* Animated gradient shimmer on hover */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(60,170,53,0.05) 0%, transparent 50%)",
                }}
              />

              {/* Large decorative quote */}
              <Quote
                className="absolute top-4 right-4 w-16 h-16 text-[#3CAA35] opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Star rating */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.1 + si * 0.06,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Star className="w-4 h-4 fill-[#3CAA35] text-[#3CAA35]" />
                  </motion.div>
                ))}
              </div>

              <blockquote className="font-inter text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-[#05427B]/10 flex items-center justify-center font-baskerville font-bold text-[#05427B] text-sm flex-shrink-0"
                >
                  {t.name.charAt(0)}
                </motion.div>
                <div>
                  <p className="font-inter font-semibold text-brand text-sm">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-gray-500">{t.origin}</p>
                </div>
                <span className="ml-auto bg-[#3CAA35]/15 text-[#3CAA35] font-inter text-xs font-semibold px-3 py-1 rounded-full">
                  Verified Patient
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
