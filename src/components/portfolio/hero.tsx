import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { LinkedInIcon } from "@/components/portfolio/brand-icons";
import { personalInfo } from "@/data/portfolio";
import { socialLinks } from "@/data/social-links";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % personalInfo.roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-6 min-w-0 items-center sm:h-7" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={personalInfo.roles[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="font-mono text-sm text-primary sm:text-base"
        >
          {personalInfo.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background: grid + glow blobs */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" aria-hidden="true" />
      <div
        className="animate-pulse-glow absolute -top-32 left-1/2 h-96 w-[42rem] max-w-none -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="animate-float-slow absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Open to internship opportunities
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="mt-6 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Sandeep <span className="text-gradient">Jaat</span>
            </motion.h1>

            <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-display text-lg font-medium text-foreground sm:text-xl">{personalInfo.headline}</span>
            </motion.div>

            <motion.div variants={item} className="mt-3">
              <RotatingRole />
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {personalInfo.intro}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-2 rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {personalInfo.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Code-inspired visual */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="animate-float">
              <div className="glass shadow-soft rounded-2xl p-1">
                <div className="rounded-xl bg-background/60">
                  <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/50" aria-hidden="true" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                    <span className="ml-3 font-mono text-xs text-muted-foreground">sandeep.ts</span>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-muted-foreground">
                    <code>
                      <span className="text-primary">const</span> <span className="text-foreground">sandeep</span> = {"{"}
                      {"\n"}  institute: <span className="text-primary-glow">"NIT Jalandhar"</span>,
                      {"\n"}  branch: <span className="text-primary-glow">"CSE '29"</span>,
                      {"\n"}  focus: [<span className="text-primary-glow">"DSA"</span>,{" "}
                      <span className="text-primary-glow">"Full-Stack"</span>],
                      {"\n"}  solvesProblems: <span className="text-primary">true</span>,
                      {"\n"}{"}"};
                      {"\n"}
                      {"\n"}<span className="text-primary">while</span> (sandeep.solvesProblems) {"{"}
                      {"\n"}  learn(); build(); repeat();
                      {"\n"}{"}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:block"
        >
          <ArrowDown className="animate-float h-5 w-5" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
