"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/shared/Button";
import { Heading } from "@/components/typography/Heading";
import { Subheading } from "@/components/typography/Subheading";
import { Caption } from "@/components/typography/Caption";
import { Send, Loader } from "lucide-react";
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
          className="max-w-xl"
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

          {submitted ? (
            <div className="border border-[#E5E7EB] bg-white p-8 text-center">
              <p className="text-base font-medium mb-2">Message sent</p>
              <p className="text-sm text-[#6B7280]">
                Thank you — I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full px-4 py-3 text-sm border border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:border-[#111111] transition-colors"
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
                    className="w-full px-4 py-3 text-sm border border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 text-sm border border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#6B7280] focus:outline-none focus:border-[#111111] transition-colors resize-y"
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
        </motion.div>
      </Container>
    </section>
  );
}
