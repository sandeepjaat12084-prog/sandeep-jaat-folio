import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Github } from "lucide-react";

import { Section, SectionHeading } from "@/components/portfolio/section";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="glass shadow-soft group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-primary/30"
    >
      {/* Preview: image with zoom, or code-styled fallback */}
      <div className="relative h-44 overflow-hidden border-b border-border bg-secondary/40">
        {project.image ? (
          <img
            src={project.image}
            alt={`Preview of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="bg-grid flex h-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <FolderGit2 className="h-10 w-10 text-primary/60" aria-hidden="true" />
          </div>
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technology stack">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-sm">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function EmptyProjects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
          className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/30 p-8 text-center"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
            <FolderGit2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="mt-4 font-display text-sm font-semibold text-foreground">Your project here</p>
          <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
            Add it in <span className="text-primary">src/data/projects.ts</span>
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="Real projects will live here — the cards support previews, tech badges, and simple GitHub / Live Demo links."
        id="projects-heading"
      />
      {projects.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      ) : (
        <EmptyProjects />
      )}
    </Section>
  );
}
