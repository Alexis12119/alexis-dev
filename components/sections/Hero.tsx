import { SITE_CONFIG } from "@/config/site";
import { CONTACT } from "@/config/contact";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/shared/Button";
import { Heading } from "@/components/typography/Heading";
import { Subheading } from "@/components/typography/Subheading";
import { Caption } from "@/components/typography/Caption";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 scroll-mt-16">
      <Container>
        <div className="max-w-3xl">
          <Caption className="font-medium mb-6">
            {SITE_CONFIG.location} · {CONTACT.availability}
          </Caption>

          <Heading as="h1" className="mb-6">
            {SITE_CONFIG.name}
          </Heading>

          <p className="text-lg md:text-xl text-accent mb-4 font-medium">
            {SITE_CONFIG.title}
          </p>

          <Subheading className="mb-10 leading-relaxed">
            {SITE_CONFIG.description}
          </Subheading>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#work"
              variant="primary"
              className="w-full sm:w-auto px-5 py-2.5 whitespace-nowrap"
            >
              View selected work
              <ArrowDown size={16} aria-hidden="true" />
            </Button>
            <Button
              href="/Resume - Alexis Corporal.pdf"
              variant="secondary"
              className="w-full sm:w-auto px-5 py-2.5 whitespace-nowrap"
              download
            >
              <Download size={16} aria-hidden="true" />
              Download résumé
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
