"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/shared/Button";
import { FormInput, FormTextarea } from "@/components/shared/FormInput";
import { Heading } from "@/components/typography/Heading";
import { Subheading } from "@/components/typography/Subheading";
import { Caption } from "@/components/typography/Caption";
import { Spinner } from "@/components/ui/Spinner";
import { Send, Loader, Phone, MapPin, Mail, Briefcase, Clock, Timer, Inbox } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, sectionProps } from "@/utils/animation";
import { CONTACT } from "@/config/contact";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

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
    <section id="contact" className="pt-24 md:pt-32 pb-16 md:pb-20 border-t border-border scroll-mt-16">
      <Container>
        <motion.div
          className="max-w-7xl"
          {...sectionProps}
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
                <div className="border border-border bg-white p-8 text-center h-full flex flex-col items-center justify-center">
                  <p className="text-base font-medium mb-2">Message sent</p>
                  <p className="text-sm text-muted">
                    Thank you — I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
                  <div className="grid grid-cols-1 gap-5">
                    <FormInput id="name" name="name" type="text" required label="Name" placeholder="Name" />
                    <FormInput id="email" name="email" type="email" required label="Email" placeholder="Email" />
                  </div>
                  <FormInput id="subject" name="subject" type="text" required label="Subject" placeholder="Subject" />
                  <FormTextarea id="message" name="message" required label="Message" placeholder="Message" />
                  <div>
                    <Button type="submit" variant="primary" disabled={submitting}>
                      {submitting ? "Sending..." : "Send Message"}
                      {submitting ? <Loader size={14} className="animate-spin" /> : <Send size={14} />}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="border border-border bg-white p-6 md:p-8 h-full flex flex-col">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-sm text-accent">
                    <Phone size={16} className="text-muted shrink-0" />
                    <span>{CONTACT.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-accent">
                    <MapPin size={16} className="text-muted shrink-0" />
                    <span>{CONTACT.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-accent">
                    <Mail size={16} className="text-muted shrink-0" />
                    <span>{CONTACT.email}</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <hr className="my-5 border-t border-border" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-sm text-accent">
                    <Briefcase size={16} className="text-muted shrink-0" />
                    <span>{CONTACT.availability}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-accent">
                    <Clock size={16} className="text-muted shrink-0" />
                    <span>{CONTACT.timezone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-accent">
                    <Timer size={16} className="text-muted shrink-0" />
                    <span>{CONTACT.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-accent">
                    <Inbox size={16} className="text-muted shrink-0" />
                    <span>{CONTACT.emailNote}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border bg-white overflow-hidden h-full relative">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                  <Spinner size="lg" label="Loading map" />
                </div>
              )}
              <iframe
                src={`https://maps.google.com/maps?q=${CONTACT.mapsQuery}&output=embed`}
                width="100%"
                height="100%"
                className="min-h-[220px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={CONTACT.address}
                onLoad={() => setMapLoaded(true)}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
