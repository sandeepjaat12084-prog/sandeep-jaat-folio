import { motion } from "framer-motion";
import { Braces, Brain, Database, Globe, Server, Wrench } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { skillCategories, type SkillCategory } from "@/data/skills";

const iconMap: Record<SkillCategory["icon"], typeof Braces> = {
  languages: Braces,
  frontend: Globe,
  backend: Server,
  database: Database,
  tools: Wrench,
  cs: Brain,
};

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        eyebrow="Skills"
        title="Technical toolbox"
        description="The languages, frameworks, and fundamentals I work with."
        id="skills-heading"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="glass shadow-soft group rounded-2xl p-5 transition-colors hover:border-primary/30 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
                  {category.title}
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/20 hover:border-primary/50 hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
