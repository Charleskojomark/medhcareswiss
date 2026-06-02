"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

// Spain WhatsApp number (no + or spaces)
const WA_NUMBER = "34652361449";

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build a pre-filled WhatsApp message with the form data
    const text = [
      `Hello MedHcareSwiss,`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.subject ? `*Subject:* ${form.subject}` : "",
      ``,
      `*Message:*`,
      form.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in new tab, then show the success state
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="eyebrow mb-3 sm:mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="section-heading"
          >
            Contact Us
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ── Left: Contact Details + Map ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#3CAA35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#3CAA35]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-[#1A1A2E] text-sm mb-1">Address</p>
                  <address className="font-inter text-gray-600 text-sm not-italic leading-relaxed">
                    Route de Chatel-St Denis 107,<br />
                    1808, Les Monts-de-Corsier,<br />
                    Vaud Canton, Switzerland
                  </address>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#3CAA35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#3CAA35]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-[#1A1A2E] text-sm mb-1">Email</p>
                  <a
                    href="mailto:Info@medhcareswiss.com"
                    className="font-inter text-[#05427B] text-sm hover:text-[#3CAA35] transition-colors"
                  >
                    Info@medhcareswiss.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#3CAA35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#3CAA35]" />
                </div>
                <div>
                  <p className="font-inter font-semibold text-[#1A1A2E] text-sm mb-1">WhatsApp</p>
                  <div className="space-y-1">
                    <a
                      href="https://wa.me/41775039088"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-inter text-sm text-[#05427B] hover:text-[#3CAA35] transition-colors"
                    >
                      🇨🇭 +41 77 503 90 88
                    </a>
                    <a
                      href="https://wa.me/34652361449"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-inter text-sm text-[#05427B] hover:text-[#3CAA35] transition-colors"
                    >
                      🇪🇸 +34 65 236 14 49
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-56 sm:h-64">
              <iframe
                title="MedHcareSwiss office location in Les Monts-de-Corsier, Switzerland"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.7!2d6.914!3d46.508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c29a7c3a71b1d%3A0x0!2sRoute+de+Ch%C3%A2tel-Saint-Denis+107%2C+1808+Les+Monts-de-Corsier%2C+Switzerland!5e0!3m2!1sen!2sch!4v1680000000000!5m2!1sen!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing MedHcareSwiss office location in Les Monts-de-Corsier, Vaud, Switzerland"
              />
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-[#F4F9F4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#3CAA35]/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#3CAA35]" />
                </div>
                <h3 className="font-baskerville text-xl font-bold text-[#05427B] mb-2">
                  WhatsApp opened!
                </h3>
                <p className="font-inter text-gray-600 text-sm mb-6">
                  Your message is ready to send. Complete it in WhatsApp and we&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="font-inter text-sm text-[#05427B] underline hover:text-[#3CAA35] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* WhatsApp badge */}
                <div className="flex items-center gap-2 mb-6 bg-[#3CAA35]/10 rounded-xl px-4 py-2.5 w-fit">
                  <WhatsAppIcon className="w-4 h-4 text-[#3CAA35]" />
                  <span className="font-inter text-xs font-semibold text-[#3CAA35]">
                    Messages sent via WhatsApp · Spain line
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block font-inter text-sm font-medium text-[#1A1A2E] mb-1.5">
                      Full Name <span aria-hidden="true" className="text-[#3CAA35]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-required="true"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3CAA35]/40 focus:border-[#3CAA35] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block font-inter text-sm font-medium text-[#1A1A2E] mb-1.5">
                      Email <span aria-hidden="true" className="text-[#3CAA35]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      aria-required="true"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3CAA35]/40 focus:border-[#3CAA35] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block font-inter text-sm font-medium text-[#1A1A2E] mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3CAA35]/40 focus:border-[#3CAA35] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block font-inter text-sm font-medium text-[#1A1A2E] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can assist you..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3CAA35]/40 focus:border-[#3CAA35] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3CAA35] text-white font-inter font-semibold py-3.5 rounded-xl hover:bg-[#2e8f29] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="font-inter text-xs text-gray-400 text-center">
                    Opens WhatsApp with your message pre-filled · We&apos;ll never share your information.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
