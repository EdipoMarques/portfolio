// app/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  dateISO?: string;        // para ordenar
  tags: string[];
  cover: string;           // /public/projects/...
  images?: string[];       // galeria opcional
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "nlp-support-bot",
    title: "NLP Support Bot",
    description:
      "Assistente com RAG para base de conhecimento interna. Pipeline de embeddings, cache e avaliação.",
    dateISO: "2025-06-10",
    tags: ["Next.js", "TypeScript", "RAG", "OpenAI"],
    cover: "/projects/nlp-bot-cover.jpg",
    images: [
      "/projects/nlp-bot-1.jpg",
      "/projects/nlp-bot-2.jpg",
    ],
    github: "https://github.com/SEU_USUARIO/nlp-support-bot",
    demo: "https://nlp-bot-demo.vercel.app",
  },
  {
    slug: "sales-dashboard",
    title: "Sales Dashboard",
    description:
      "Dashboard de vendas com métricas de funil e previsão simples.",
    dateISO: "2024-12-02",
    tags: ["Next.js", "Tailwind", "Charts"],
    cover: "/projects/sales-cover.jpg",
    images: ["/projects/sales-1.jpg"],
    github: "https://github.com/SEU_USUARIO/sales-dashboard",
  },
];
