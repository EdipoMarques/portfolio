// app/data/timeline.ts
export type TimelineLevel = "major" | "minor";
export type TimelineCategory =
  | "education"
  | "work"
  | "project"
  | "talk"
  | "award"
  | "other";

export type TimelineItem = {
  id: string;
  dateLabel: string;           // ex.: "Mar 2024"
  dateISO?: string;            // ex.: "2024-03-01" (opcional, útil pra ordenar)
  title: string;               // ex.: "Started M.Sc."
  subtitle?: string;           // ex.: "University X"
  description: string;         // texto
  image?: string;              // "/timeline/msc-start.jpg"
  tags?: string[];
  links?: { label: string; url: string }[];
  level: TimelineLevel;        // "major" | "minor"
  category?: TimelineCategory; // define cor de destaque (opcional)
};

export const timeline: TimelineItem[] = [
  {
    id: "2024-03-msc-start",
    dateLabel: "Mar 2024",
    dateISO: "2024-03-01",
    title: "Started M.Sc. in Software Engineering",
    subtitle: "University of Europe for Applied Sciences",
    description:
      "Kick-off of my Master's program focusing on AI concepts, machine learning, and data engineering.",
    image: "/timeline/msc-start.jpg",
    tags: ["M.Sc.", "Software Engineering", "Python", "AI"],
    level: "major",
    category: "education",
  },
  {
    id: "2024-10-tech-fair-",
    dateLabel: "Oct 2024",
    dateISO: "2025-06-26",
    title: "Talk26 at N26",
    subtitle: "Attended Talk26: AI Platform at N26",
    description:
      "Attended Talk26: Building a Compliant and Reliable AI Platform at N26 in Berlin.",
    tags: ["AI", "Finance", "Data Science"],
    level: "minor",
    category: "other",
  },
  {
    id: "2025-08-msc-grad",
    dateLabel: "Aug 2025",
    dateISO: "2025-08-14",
    title: "M.Sc. Graduation",
    subtitle: "I have submitted my thesis on Generative AI - Fake News detector applying NPL and machine learning techniques",
    description:
      "Fake News detector applying NPL and machine learning techniques.",
    image: "/timeline/msc-grad.jpg",
    tags: ["Generative AI", "NPL", "ML"],
    links: [
      { label: "Thesis (PDF)", url: "https://example.com/thesis.pdf" },
      { label: "GitHub", url: "https://github.com/seu-usuario/msc-thesis" },
    ],
    level: "major",
    category: "education",
  },
  {
    id: "2024-03-new-home",
    dateLabel: "Mar 2024",
    dateISO: "2024-01-03",
    title: "Moved to berlin",
    subtitle: "Change: New in Germany, ready to start making my own way.",
    description:
      "The day I moved to Berlin and began finding my way in the biggest city in Germany",
    tags: ["city", "changes", "challenges"],
    level: "major",
    category: "talk",
  },
];
