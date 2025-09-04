// app/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description?: string;

  
  dateISO?: string;

  
  image?: string;      
  cover?: string;      
  cardImage?: string;  
  images?: string[];   

  tags?: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "to-do-list-application",
    title: "CRUD To-Do List Application",
    description: "A small full-stack app that demonstrates Create, Read, Update and Delete for tasks. I focused on clean code, end-to-end typing, and a straightforward UX: open tasks appear on top, completed ones at the bottom. Data is kept in memory (per the challenge), but the code is structured to plug in a database later.",
    dateISO: "2024-12-02",
    tags: ["CRUD", "Node.js", "HTML/CSS", "Full-Stack"],
    cover: "/projects/crudproject.png",
    images: ["/projects/crudproject.png"],
    github: "https://github.com/EdipoMarques/todoProject",
  },
  {
  slug: "fake-news-detector",
  title: "Fake news Detector",
  description: "Fake-news detector using NLP and Deep learning techniques.",
  dateISO: "2025-06-10",
  tags: ["Next.js", "TypeScript", "RAG", "OpenAI"],
  cover: "/projects/nlp-bot-1.jpg",      
  cardImage: "/projects/nlp-bot-1.jpg",  
  images: ["/projects/nlp-bot-1.jpg", "/projects/nlp-bot-2.jpg"],
  github: "...",
  demo: "..."
},
{
  slug: "website-portfolio",
  title: "Website Portfolio",
  description: "I’ve just launched the first version of my personal portfolio at edipomarques.io. The site showcases selected projects, a clean About timeline, and a lightweight “Recent Posts” feed. Under the hood: Next.js (App Router) + TypeScript, Tailwind CSS, and a data-driven content model. Deployments are automated via Git + Vercel on every push. Roadmap: dark mode, richer project pages, and a simple content workflow so posting updates is even faster.",
  dateISO: "2025-07-10",
  tags: ["Next.js", "TypeScript", "RAG", "AI"],
  cover: "/projects/portfolio-launch.png",      
  cardImage: "/projects/portfolio-launch.png",  
  images: ["/projects/portfolio-launch.png", "/projects/portfolio-launch.png"],
  github: "https://github.com/EdipoMarques/portfolio",
  demo: "..."
}
];
