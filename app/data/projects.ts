// app/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description?: string;

  // Datas (opcional)
  dateISO?: string;

  // Imagens: aceite tanto 'image' quanto 'cover' (seu dataset usa 'cover')
  image?: string;      // thumb principal, se você quiser usar esse nome no futuro
  cover?: string;      // thumb principal como você usa hoje
  cardImage?: string;  // alternativa (às vezes útil para cards)
  images?: string[];   // galeria

  tags?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
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
  {
  slug: "nlp-support-bot",
  title: "NLP Support Bot",
  description: "...",
  dateISO: "2025-06-10",
  tags: ["Next.js", "TypeScript", "RAG", "OpenAI"],
  cover: "/projects/nlp-bot-1.jpg",      // <-- usa um que existe
  cardImage: "/projects/nlp-bot-1.jpg",  // opcional, deixa explícito o thumb
  images: ["/projects/nlp-bot-1.jpg", "/projects/nlp-bot-2.jpg"],
  github: "...",
  demo: "..."
}
];
