import { Linkedin, Mail } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { socialLinks } from "@/data/social-links";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <div className="glass shadow-soft relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]" aria-hidden="true" />
        <div className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="The fastest ways to reach me — email for anything formal, LinkedIn for everything else."
            id="contact-heading"
          />

          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${socialLinks.email}`}
                className="group inline-flex items-center gap-3 rounded-sm text-base text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="underline-offset-4 group-hover:underline">{socialLinks.email}</span>
              </a>
            </li>
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-sm text-base text-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="underline-offset-4 group-hover:underline">linkedin.com/in/sandeep-jaat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
