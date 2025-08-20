// app/data/projects.ts
export type Project = {
  slug: string;          // id único do projeto
  title: string;         // título
  description: string;   // resumo
  image: string;         // caminho dentro de /public (ex.: "/projects/proj1.png")
  tech: string[];        // tags de tecnologias
  github?: string;       // link opcional p/ GitHub
  demo?: string;         // link opcional p/ demo/site
};

export const projects: Project[] = [
  {
    slug: "fake-news-detector",
    title: "Fake News Detector",
    description: "LSTM + Word2Vec model to classify news credibility with F1 evaluation.",
    image: "/projects/proj1.png",
    tech: ["Python", "TensorFlow", "NLP"],
    github: "https://github.com/SEU-USUARIO/fake-news-detector",
    demo: "https://fake-news-demo.vercel.app"
  },
  {
    slug: "pricing-analytics",
    title: "Pricing Analytics Dashboard",
    description: "dbt + BigQuery pipelines and a dashboard for price elasticity insights.",
    image: "/projects/proj2.png",
    tech: ["dbt", "BigQuery", "SQL", "Python"],
    github: "https://github.com/SEU-USUARIO/pricing-analytics"
  },
  {
    slug: "genai-notebooks",
    title: "GenAI Notebooks",
    description: "Prompt engineering experiments with retrieval and evaluation.",
    image: "/projects/proj3.png",
    tech: ["Python", "LangChain", "OpenAI"],
    github: "https://github.com/SEU-USUARIO/genai-notebooks"
  }
];
