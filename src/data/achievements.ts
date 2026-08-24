/**
 * Achievements — organized by category.
 *
 * Replace the placeholder text in each `items` array with your real
 * achievements as you earn them. Empty categories are fine too —
 * simply leave `items: []` and the category stays hidden.
 */
export type AchievementCategory = {
  id: string;
  title: string;
  items: string[];
};

export const achievementCategories: AchievementCategory[] = [
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    items: [
      // e.g. "Reached Expert on Codeforces"
    ],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    items: [
      // e.g. "Solved 500+ problems on LeetCode"
    ],
  },
  {
    id: "contests",
    title: "Coding Contests",
    items: [
      // e.g. "Top 500 in CodeChef Starters"
    ],
  },
  {
    id: "hackathons",
    title: "Hackathons",
    items: [
      // e.g. "Finalist at HackNITJ 2026"
    ],
  },
  {
    id: "certifications",
    title: "Certifications",
    items: [
      // e.g. "Google Data Analytics Certificate"
    ],
  },
  {
    id: "academic",
    title: "Academic Achievements",
    items: [
      // e.g. "Department rank 1, Semester 2"
    ],
  },
];
