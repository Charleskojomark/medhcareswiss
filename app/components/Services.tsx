"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Stethoscope,
  CalendarCheck,
  Sparkles,
  HeartPulse,
  Plane,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consultation & Assessment",
    description:
      "Helping patients understand their condition and connecting them with the right specialists.",
    image: null,
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Coordinating with doctors, surgeons, and specialists to meet your medical needs efficiently.",
    image: null,
  },
  {
    icon: Sparkles,
    title: "Concierge Services",
    description:
      "Sightseeing, leisure activities, visa assistance, and personal support throughout your stay.",
    image: null,
  },
  {
    icon: HeartPulse,
    title: "Post-Treatment Care",
    description:
      "Coordinating follow-up appointments, rehabilitation, and physical therapy sessions.",
    image: "/assets/service-1.jpg",
  },
  {
    icon: Plane,
    title: "Travel & Accommodation",
    description:
      "Flights, local transport, and accommodation near your healthcare facility, handled for you.",
    image: "/assets/service-2.jpg",
  },
  {
    icon: FileText,
    title: "Medical Records & Reports",
    description:
      "Secure transfer of records, test results, and documents between countries.",
    image: "/assets/service-3.jpg",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="section-heading max-w-2xl mx-auto"
          >
            Comprehensive care, tailored to your needs
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 gold-top-border"
              >
                {service.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} — MedHcareSwiss service`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-baskerville text-lg font-bold text-brand mb-2">
                    {service.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
