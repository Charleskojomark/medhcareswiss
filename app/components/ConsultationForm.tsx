"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ConsultationForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 bg-surface">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">Expert Consultation</p>
          <h2 className="section-heading mb-6">Need expert medical advice?</h2>
          <ul className="space-y-4 mb-8">
            {[
              "Personalized treatment recommendations",
              "Second opinion from European specialists",
              "No-obligation initial assessment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-inter text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="font-baskerville text-navy text-lg font-bold mb-1">
              Fast, confidential response
            </p>
            <p className="font-inter text-sm text-gray-600">
              Our team responds within 24 hours. No spam, ever.
            </p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-baskerville text-xl font-bold text-navy mb-2">
                Request received!
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="consult-name"
                  className="block font-inter text-sm font-medium text-brand mb-1.5"
                >
                  Full Name <span aria-hidden="true" className="text-gold">*</span>
                </label>
                <input
                  id="consult-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  aria-required="true"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="consult-email"
                  className="block font-inter text-sm font-medium text-brand mb-1.5"
                >
                  Email <span aria-hidden="true" className="text-gold">*</span>
                </label>
                <input
                  id="consult-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  aria-required="true"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="consult-date"
                  className="block font-inter text-sm font-medium text-brand mb-1.5"
                >
                  Preferred Date
                </label>
                <input
                  id="consult-date"
                  type="date"
                  aria-label="Preferred consultation date"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="consult-message"
                  className="block font-inter text-sm font-medium text-brand mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="consult-message"
                  rows={4}
                  placeholder="Briefly describe your medical situation or query..."
                  aria-label="Consultation message or medical query"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy font-inter font-semibold py-3.5 rounded-xl hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit consultation request
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-inter text-xs text-gray-400 text-center">
                Our team responds within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
