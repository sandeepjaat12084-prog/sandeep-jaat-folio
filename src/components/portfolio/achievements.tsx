import { motion } from "framer-motion";
import { Award, BadgeCheck, BookOpen, Code2, Medal, Trophy } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { achievementCategories } from "@/data/achievements";

const categoryIcons: Record<string, typeof Trophy> = {
  "competitive-programming": Trophy,
  dsa: Code2,
  contests: Medal,
  hackathons: Award,
  certifications: BadgeCheck,
  academic: BookOpen,
};

export function Achievements() {
  return (
    <Section id="achievements" labelledBy="achievements-heading">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones & wins"
        description="Placeholder categories for now — I'll fill these in with real achievements as they happen."
        id="achievements-heading"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievementCategories.map((category, i) => {
          const Icon = categoryIcons[category.id] ?? Award;
          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="glass shadow-soft rounded-2xl p-5 transition-colors hover:border-primary/30 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-semibold text-foreground sm:text-base">{category.title}</h3>
              </div>

              {category.items.length > 0 ? (
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 rounded-lg border border-dashed border-border bg-background/40 px-3 py-2.5 font-mono text-xs text-muted-foreground">
                  Add entries in <span className="text-primary">src/data/achievements.ts</span>
                </p>
              )}
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
