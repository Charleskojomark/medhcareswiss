"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "MedHcareSwiss gave our family peace of mind during a very stressful time. The doctors were incredibly thorough, and the nurses treated us with such kindness. We felt cared for every step of the way.",
    name: "Sarah K.",
    origin: "United Kingdom",
  },
  {
    text: "Traveling from abroad for surgery was a big decision, but MedHcareSwiss made everything seamless. From airport pickup to world-class care, I couldn't have asked for better treatment.",
    name: "James A.",
    origin: "United States",
  },
  {
    text: "I was admitted to MedHcareSwiss after a heart episode, and the emergency team saved my life. Their quick response and advanced equipment made all the difference. Forever thankful.",
    name: "Marie-Claire B.",
    origin: "France",
  },
  {
    text: "The entire process from consultation to post-treatment care was exceptional. The medical tourism coordination made what could have been stressful completely worry-free.",
    name: "Oluwaseun O.",
    origin: "Nigeria",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white">
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
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="section-heading"
          >
            Patients are saying
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="bg-surface rounded-2xl p-8 card-shadow relative overflow-hidden"
            >
              <Quote
                className="absolute top-6 right-6 w-12 h-12 text-gold opacity-20"
                aria-hidden="true"
              />
              <Quote
                className="w-8 h-8 text-gold mb-4"
                aria-hidden="true"
              />
              <blockquote className="font-inter text-gray-700 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center font-baskerville font-bold text-navy text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-inter font-semibold text-brand text-sm">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-gray-500">
                    {t.origin}
                  </p>
                </div>
                <span className="ml-auto bg-gold/15 text-gold font-inter text-xs font-semibold px-3 py-1 rounded-full">
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
