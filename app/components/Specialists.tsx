"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const specialists = [
  {
    name: "Dr. Therese Diane Bikye",
    title: "European Coordinator and Vice President",
    badge: "Swiss Trained Medical Practitioner",
    bio: "A pioneer in personalized public healthcare wellbeing.",
    image: "/assets/specialist-1.png",
    alt: "Dr. Therese Diane Bikye, European Coordinator and Vice President at MedHcareSwiss",
  },
  {
    name: "Emmanuel I. Nebeolisa",
    title: "Chief Operations Officer",
    badge: "Spanish Trained Medical Professional",
    bio: "Expert in personalised public healthcare wellbeing and concierge services.",
    image: "/assets/specialist-2.png",
    alt: "Emmanuel I. Nebeolisa, Chief Operations Officer at MedHcareSwiss",
  },
];

export default function Specialists() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specialists" className="py-14 sm:py-20 lg:py-24 bg-[#F4F9F4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-3 sm:mb-4"
          >
            Meet Our Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="section-heading"
          >
            The experts behind your care
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {specialists.map((specialist, i) => (
            <motion.div
              key={specialist.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden card-shadow group"
            >
              {/* Photo */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={specialist.image}
                  alt={specialist.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6">
                <div className="mb-1">
                  <h3 className="font-baskerville text-lg sm:text-xl font-bold text-[#1A1A2E] border-b-2 border-[#3CAA35] inline-block pb-0.5">
                    {specialist.name}
                  </h3>
                </div>
                <span className="inline-block mt-3 bg-[#05427B] text-white font-inter text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {specialist.title}
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#3CAA35] flex-shrink-0" />
                  <span className="font-inter text-xs text-gray-500 font-medium">
                    {specialist.badge}
                  </span>
                </div>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {specialist.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
