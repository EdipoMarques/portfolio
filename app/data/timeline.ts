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
    subtitle: "University XYZ",
    description:
      "Kick-off do mestrado com foco em estatística, machine learning e engenharia de dados.",
    image: "/timeline/msc-start.jpg",
    tags: ["M.Sc.", "Statistics", "Python"],
    level: "major",
    category: "education",
  },
  {
    id: "2024-10-tech-fair-",
    dateLabel: "Oct 2024",
    dateISO: "2024-10-15",
    title: "Tech Fair Speakers",
    subtitle: "Talk: From Notebooks to Production",
    description:
      "Apresentei práticas de MLOps e conteinerização para levar modelos de notebooks a produção.",
    tags: ["MLOps", "Docker"],
    level: "minor",
    category: "other",
  },
  {
    id: "2025-08-msc-grad",
    dateLabel: "Aug 2025",
    dateISO: "2025-08-20",
    title: "M.Sc. Graduation",
    subtitle: "Thesis on Generative AI for Document QA",
    description:
      "Tese aplicando RAG e avaliação para bases corporativas. Pipeline end-to-end e benchmark.",
    image: "/timeline/msc-grad.jpg",
    tags: ["Generative AI", "RAG", "Evaluation"],
    links: [
      { label: "Thesis (PDF)", url: "https://example.com/thesis.pdf" },
      { label: "GitHub", url: "https://github.com/seu-usuario/msc-thesis" },
    ],
    level: "major",
    category: "education",
  },
  {
    id: "2024-10-tech-fair",
    dateLabel: "Oct 2024",
    dateISO: "2025-10-15",
    title: "Tech Fair Speaker",
    subtitle: "Talk: From Notebooks to Production",
    description:
      "Apresentei práticas de MLOps e conteinerização para levar modelos de notebooks a produção.",
    tags: ["MLOps", "Docker"],
    level: "minor",
    category: "talk",
  },
];
