import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Medal, Target, Trophy } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { codingFocus, codingProfiles } from "@/data/coding";

const platformIcons = [Code2, Trophy, Medal, Target];

export function Coding() {
  return (
    <Section id="coding" labelledBy="coding-heading" className="relative">
      <SectionHeading
        eyebrow="DSA & Competitive Programming"
        title="Where I practice"
        description="A home for my problem-solving journey — profile links and stats are placeholders until I add the real numbers."
        id="coding-heading"
      />

      <ul className="mb-8 flex flex-wrap gap-2">
        {codingFocus.map((focus) => (
          <li
            key={focus}
            className="rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 font-mono text-xs text-primary"
          >
            {focus}
          </li>
        ))}
      </ul>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {codingProfiles.map((profile, i) => {
          const Icon = platformIcons[i % platformIcons.length];
          const card = (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="glass shadow-soft group flex h-full flex-col rounded-2xl p-5 transition-colors hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {profile.url ? (
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                ) : null}
              </div>

              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{profile.platform}</h3>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                {profile.handle || "add profile in src/data/coding.ts"}
              </p>

              <dl className="mt-4 space-y-2 border-t border-border pt-4">
                {profile.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between gap-2">
                    <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                    <dd className="font-mono text-sm font-semibold text-foreground">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.article>
          );

          return (
            <li key={profile.platform} className="list-none">
              {profile.url ? (
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  aria-label={`${profile.platform} profile`}
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </li>
          );
        })}
      </div>
    </Section>
  );
}
