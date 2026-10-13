"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/shared/Button";
import { FormInput, FormTextarea } from "@/components/shared/FormInput";
import { Send, Loader, Phone, MapPin, Mail, Briefcase, Clock, Timer, Inbox } from "lucide-react";
import { CONTACT } from "@/config/contact";

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
    <Section id="contact" className="border-t border-border">
      <Container>
        <SectionHeader
          index="05"
          label="Contact"
          title="Get in touch"
          description="For project inquiries and professional opportunities — email is the fastest way to reach me."
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div aria-live="polite">
            {submitted ? (
              <div className="border border-border bg-white p-8">
                <p className="text-base font-medium mb-2">Message sent</p>
                <p className="text-sm text-muted">
                  Thank you — I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5">
                  <FormInput
                    id="name"
                    name="name"
                    type="text"
                    required
                    label="Name"
                    placeholder="Name"
                  />
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    required
                    label="Email"
                    placeholder="Email"
                  />
                </div>
                <FormInput
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  label="Subject"
                  placeholder="Subject"
                />
                <FormTextarea
                  id="message"
                  name="message"
                  required
                  label="Message"
                  placeholder="Message"
                />
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    {submitting ? (
                      <Loader size={14} className="animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-mono text-xs font-medium text-muted mb-5 uppercase tracking-wider">
              Contact Information
            </h3>
            <address className="flex flex-col gap-4 not-italic">
              <div className="flex items-center gap-3 text-sm text-accent">
                <Phone size={16} className="text-muted shrink-0" aria-hidden="true" />
                <span>{CONTACT.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-accent">
                <MapPin size={16} className="text-muted shrink-0" aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-accent">
                <Mail size={16} className="text-muted shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </address>

            <hr className="my-5 border-t border-border" />
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-accent">
                <Briefcase size={16} className="text-muted shrink-0" aria-hidden="true" />
                <span>{CONTACT.availability}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent">
                <Clock size={16} className="text-muted shrink-0" aria-hidden="true" />
                <span>{CONTACT.timezone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent">
                <Timer size={16} className="text-muted shrink-0" aria-hidden="true" />
                <span>{CONTACT.responseTime}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-accent">
                <Inbox size={16} className="text-muted shrink-0" aria-hidden="true" />
                <span>{CONTACT.emailNote}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
