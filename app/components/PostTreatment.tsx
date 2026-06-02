"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PostTreatment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start"
      >
        {/* Left: Main image — fully visible, no parts cut off */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10 bg-gold text-white font-inter font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
            100% Recovery Focus
          </div>

          {/* Primary image — full natural height, nothing cropped */}
          <div className="rounded-3xl overflow-hidden shadow-2xl w-full">
            <Image
              src="/assets/service-2.jpg"
              alt="Patient relaxing after medical treatment — post-care recovery suite"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              style={{ display: "block" }}
            />
          </div>

          {/* Second stacked image below */}
          <div className="mt-4 rounded-2xl overflow-hidden shadow-lg w-full hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
              alt="Relaxation and wellness therapy area for post-treatment patients"
              className="w-full h-48 object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-8 lg:pt-16"
        >
          <p className="eyebrow mb-4">Post-Treatment Experience</p>
          <h2 className="section-heading mb-6">
            Your care continues after treatment
          </h2>
          <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
            At our center, your experience goes beyond just treatment. We believe
            true care includes moments of comfort, calm and restoration. Once
            your session is complete, we invite you to enjoy a dedicated leisure
            space designed exclusively for your relaxation.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Dedicated recovery suites with premium amenities",
              "Physiotherapy and rehabilitation coordination",
              "Personalised follow-up schedule",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-inter text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <a href="#consultation" className="btn-gold">
            Book a consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
