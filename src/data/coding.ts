/**
 * Competitive programming / DSA profiles.
 *
 * Add your profile URLs and real stats when available.
 * An empty `url` renders the card without a link, and `value: "—"`
 * renders an editable placeholder instead of an invented statistic.
 */
export type CodingProfile = {
  platform: string;
  url: string; // TODO: add your profile URL, e.g. "https://leetcode.com/u/username"
  handle: string; // e.g. "@username" — leave "" until you add it
  metrics: { label: string; value: string }[];
};

export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    url: "",
    handle: "",
    metrics: [
      { label: "Problems Solved", value: "—" },
      { label: "Contest Rating", value: "—" },
    ],
  },
  {
    platform: "Codeforces",
    url: "",
    handle: "",
    metrics: [
      { label: "Rating", value: "—" },
      { label: "Rank", value: "—" },
    ],
  },
  {
    platform: "CodeChef",
    url: "",
    handle: "",
    metrics: [
      { label: "Rating", value: "—" },
      { label: "Stars", value: "—" },
    ],
  },
  {
    platform: "HackerRank",
    url: "",
    handle: "",
    metrics: [
      { label: "Badges", value: "—" },
      { label: "Certifications", value: "—" },
    ],
  },
];

export const codingFocus = [
  "Data Structures & Algorithms",
  "Problem Solving",
  "Competitive Programming",
] as const;
