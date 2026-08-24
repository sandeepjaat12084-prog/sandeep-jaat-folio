import { Linkedin, Mail, Terminal } from "lucide-react";

import { socialLinks } from "@/data/social-links";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-secondary text-primary">
            <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-semibold text-foreground">
            Sandeep<span className="text-primary">.jaat</span>
          </span>
        </a>

        <p className="font-mono text-xs text-muted-foreground">© 2026 Sandeep Jaat · Built with React & Tailwind CSS</p>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email Sandeep"
              className="rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Mail className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sandeep on LinkedIn"
              className="rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
