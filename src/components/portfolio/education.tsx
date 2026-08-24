import { motion } from "framer-motion";
import { CalendarRange, GraduationCap } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { personalInfo } from "@/data/portfolio";

export function Education() {
  const edu = personalInfo.education;

  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading eyebrow="Education" title="Where I study" id="education-heading" />

      <div className="relative border-l border-border pl-6 sm:pl-8">
        <motion.article
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
        >
          <span
            className="absolute top-7 -left-[31px] flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background sm:-left-[39px]"
            aria-hidden="true"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>

          <div className="glass shadow-soft max-w-2xl rounded-2xl p-6 transition-colors hover:border-primary/30 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base leading-snug font-semibold text-foreground sm:text-lg">
                    {edu.institute}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.branch}</p>
                </div>
              </div>
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                Currently {edu.currentYear}
              </span>
            </div>

            <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
              <CalendarRange className="h-4 w-4 text-primary" aria-hidden="true" />
              {edu.startYear} – {edu.endYear} · Expected Graduation {edu.endYear}
            </p>
          </div>
        </motion.article>
      </div>
    </Section>
  );
}
