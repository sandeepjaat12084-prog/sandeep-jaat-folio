/**
 * Projects data — add your real projects here.
 *
 * Each project supports:
 * - title: project name
 * - description: 1–2 sentence summary
 * - tech: technology badges shown on the card
 * - image: optional preview image (import from src/assets and pass it)
 * - github: GitHub repo URL (leave "" to hide the link)
 * - demo: live demo URL (leave "" to hide the link)
 *
 * Example:
 * {
 *   title: "Task Manager",
 *   description: "A full-stack task manager with authentication and real-time updates.",
 *   tech: ["React", "Node.js", "Express.js", "MongoDB"],
 *   github: "https://github.com/yourusername/task-manager",
 *   demo: "https://task-manager.example.com",
 * },
 */
export type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  // Add your projects here — see the example above.
];
