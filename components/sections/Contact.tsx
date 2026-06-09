"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/shared/Button";
import { Heading } from "@/components/typography/Heading";
import { Subheading } from "@/components/typography/Subheading";
import { Caption } from "@/components/typography/Caption";
import { Send, Loader, Phone, MapPin, Mail, Briefcase, Clock, Timer, Inbox, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    const res = await fetch(`https://formspree.io/f/${id}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-16 md:pb-20 border-t border-[#E5E7EB] scroll-mt-16">
      <Container>
        <motion.div
          className="max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Caption className="font-medium mb-4">Contact</Caption>
          <Heading as="h2" className="mb-6">Get in touch</Heading>
          <Subheading className="mb-10 leading-relaxed">
            I&apos;m always interested in hearing about new opportunities,
            interesting projects, or just having a conversation about software
            engineering.
          </Subheading>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="h-full">
              {submitted ? (
                <div className="border border-[#E5E7EB] bg-white p-8 text-center h-full flex flex-col items-center justify-center">
                  <p className="text-base font-medium mb-2">Message sent</p>
                  <p className="text-sm text-[#6B7280]">
                    Thank you — I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Name"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] hover:border-[#111111] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        className="w-full px-4 py-3 text-sm border border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] hover:border-[#111111] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Subject"
                      className="w-full px-4 py-3 text-sm border border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] hover:border-[#111111] transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Message"
                      className="w-full h-full px-4 py-3 text-sm border border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] hover:border-[#111111] transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <Button type="submit" variant="primary" disabled={submitting}>
                      {submitting ? "Sending..." : "Send Message"}
                      {submitting ? <Loader size={14} className="animate-spin" /> : <Send size={14} />}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="border border-[#E5E7EB] bg-white p-6 md:p-8 h-full flex flex-col">
              <div>
                <h3 className="text-sm font-semibold text-[#111111] mb-5 uppercase tracking-wider">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                    <Phone size={16} className="text-[#6B7280] shrink-0" />
                    <span>+63 945 468 1904</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                    <MapPin size={16} className="text-[#6B7280] shrink-0" />
                    <span>Brgy. San Ignacio, San Pablo City, Laguna 4000</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                    <Mail size={16} className="text-[#6B7280] shrink-0" />
                    <span>corporal461@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <hr className="my-5 border-t border-[#E5E7EB]" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                    <Briefcase size={16} className="text-[#6B7280] shrink-0" />
                    <span>Open to full-time, freelance, and contract opportunities</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                    <Clock size={16} className="text-[#6B7280] shrink-0" />
                    <span>Philippine Time (PHT / UTC+8)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                    <Timer size={16} className="text-[#6B7280] shrink-0" />
                    <span>Typically responds within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                    <Inbox size={16} className="text-[#6B7280] shrink-0" />
                    <span>Email is best — I check it daily</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#E5E7EB] bg-white overflow-hidden h-full">
              <iframe
                src="https://maps.google.com/maps?q=Brgy.+San+Ignacio+San+Pablo+City+Laguna+Philippines&output=embed"
                width="100%"
                height="100%"
                className="min-h-[220px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                  title="Brgy. San Ignacio, San Pablo City, Laguna"
              />
            </div>
          </div>

          <div className="flex justify-end mt-8 md:hidden">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111111] transition-colors"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
