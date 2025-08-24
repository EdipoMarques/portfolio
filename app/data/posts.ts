// app/data/posts.ts
export type Post = {
  slug: string;
  title: string;
  dateISO: string;        // "YYYY-MM-DD"
  excerpt?: string;
  content: string[];      // parágrafos simples
  image?: string;         // caminho em /public (ex.: "/posts/evento.jpg")
  location?: string;      // opcional (cidade, evento...)
  type?: "event" | "certificate" | "milestone" | "update";
  tags?: string[];
};

export const posts: Post[] = [
  {
    slug: "master-thesis-finished",
    title: "Master’s thesis finished!",
    dateISO: "2025-08-14",
    excerpt:  "Master’s thesis on NLP + LSTM for fake-news detection; ~99% accuracy and near-perfect precision/recall on a labeled news dataset.",
    image: "/posts/thesis.jpg",
    location: "Berlin, DE",
    type: "milestone",
    tags: ["NLP", "MSc", "Python"],
    content: [
      "I’ve just submitted my Master’s thesis on fake-news detection using NLP and deep learning. I built an end-to-end pipeline text cleaning, tokenization and sequence preparation feeding an LSTM classifier.",
      "On a labeled news dataset, the model reached ~99% accuracy with precision/recall close to 1.0, indicating strong generalization for short statements and headlines. Beyond the metrics, the goal is practical: a lightweight, interpretable baseline to help journalists, moderators and researchers triage content before deeper fact-checking."
    ]
  },
  {
    slug: "workshop-2025",
    title: "Attended payroll workshop at Deutsch Bank",
    dateISO: "2025-07-16",
    excerpt: "Networking + great talks on AI safety and tooling.",
    image: "/posts/workshop.jpg",
    location: "Berlin, DE",
    type: "event",
    tags: ["Workshop", "Finance", "Java"],
    content: [
      "Highlights: practical guardrails for LLMs and better evaluation strategies.",
      "Met amazing people building tools for data quality."
    ]
  },
  {
    slug: "n26-2025",
    title: "Talk26: AI Platform at N26",
    dateISO: "2025-06-26",
    excerpt: "Networking + great talks on AI safety and tooling.",
    image: "/posts/n26.jpg",
    location: "Berlin, DE",
    type: "event",
    tags: ["Bank", "Finance", "AI", "Talk"],
    content: [
      "Highlights: Attended Talk26: Building a Compliant and Reliable AI Platform at N26 in Berlin. The sessions covered a pragmatic GenAI strategy for fintech, how to move beyond experimentation to proof-of-value on AWS, and an end-to-end path from data-science notebooks to monitored production with governance, compliance and human-in-the-loop baked in. Great practical workflows and real examples from the N26 team.",
      "Met amazing people building tools for data quality."
    ]
  },
  {
  slug: "portfolio-launch-2025",
  title: "Portfolio website is live!",
  dateISO: "2025-06-25",
  type: "milestone",
  location: "Berlin, DE",
  excerpt:
    "I’ve launched my new portfolio built with Next.js, TypeScript and Tailwind, deployed on Vercel with a custom domain.",
  // opcional: adicione essa imagem em /public/posts/portfolio-launch.jpg
  // ou remova a linha abaixo se não for usar imagem agora.
  image: "/posts/portfolio-launch.jpg",
  tags: ["Next.js", "TypeScript", "Vercel", "Portfolio"],
  content: [
    "I’ve just launched the first version of my personal portfolio at edipomarques.io. The site showcases selected projects, a clean About timeline, and a lightweight “Recent Posts” feed.",
    "Under the hood: Next.js (App Router) + TypeScript, Tailwind CSS, and a data-driven content model. Deployments are automated via Git + Vercel on every push.",
    "Roadmap: dark mode, richer project pages (live demos & technical write-ups), and a simple content workflow so posting updates is even faster."
  ]
}

];
