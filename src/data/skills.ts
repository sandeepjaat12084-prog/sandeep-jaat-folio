/**
 * Technical skills grouped by category.
 * Icons are mapped by `icon` key inside the Skills component.
 */
export type SkillCategory = {
  id: string;
  title: string;
  icon: "languages" | "frontend" | "backend" | "database" | "tools" | "cs";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    skills: ["MongoDB", "SQL"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    id: "cs",
    title: "Computer Science",
    icon: "cs",
    skills: ["Data Structures", "Algorithms", "Competitive Programming", "Problem Solving"],
  },
];
