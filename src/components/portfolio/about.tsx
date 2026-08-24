import { GraduationCap, MapPin, User } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { aboutParagraphs, personalInfo } from "@/data/portfolio";

const highlights = [
  { icon: GraduationCap, label: "Education", value: `${personalInfo.education.shortInstitute} · B.Tech CSE` },
  { icon: User, label: "Pronouns", value: personalInfo.pronouns },
  { icon: MapPin, label: "Location", value: personalInfo.location },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading eyebrow="About" title="A bit about me" id="about-heading" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div className="space-y-5">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="space-y-3">
          {highlights.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="glass shadow-soft flex items-center gap-4 rounded-xl px-4 py-3.5 transition-colors hover:border-primary/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[11px] tracking-wider text-muted-foreground uppercase">{label}</span>
                <span className="block text-sm font-medium text-foreground">{value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
