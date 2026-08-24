import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  labelledBy,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("scroll-mt-24 py-16 sm:py-24", className)}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
