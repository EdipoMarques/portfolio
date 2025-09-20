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
    title: "Attended Talk26: AI Platform at N26",
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
  slug: "prep-42-berlin-piscine-2025",
  title: "Preparing for 42 Berlin — Piscine",
  dateISO: "2025-09-20",
  type: "milestone",
  location: "Berlin, DE",
  // opcional: adicione uma imagem em /public/posts/42-piscine.jpg
  image: "/posts/42berlin.jpg",
  excerpt:
    "Starting an intensive prep sprint for the 42 Berlin Piscine: C fundamentals, algorithms, shell, Git and peer-learning habits.",
  tags: ["C", "Algorithms", "Shell", "Git", "42 Berlin"],
  content: [
    "I’m entering a focused preparation phase for the 42 Berlin Piscine a month-long selection bootcamp. The goal: write clear C under time pressure, collaborate effectively, and build solid debugging and problem-solving routines.",
    "Study plan at a glance: daily C katas (pointers, memory management, strings), data-structure exercises, Makefiles, and shell fundamentals. I’m also drilling tooling — gcc/clang, gdb, Valgrind, Git and practicing peer reviews to mirror the Piscine’s collaborative workflow.",
    "Week rhythm: short problem sets during weekdays, longer challenges and mock exams on weekends, plus code clean-ups and documentation. I’ll share small takeaways along the way.",
    "Outcome I’m aiming for: consistency, speed with correctness, and the ability to reason clearly under constraints the same skills I want to bring to real-world software teams."
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
    "My portfolio is now live, a single place to browse projects, recent posts, and contact details.",
    "The goal is clarity and a professional overview of what I build and how I work.",
    "Built with Next.js and TypeScript, styled with Tailwind, deployed on Vercel.",
    "I’ll keep it current as new work ships."
  ]
}

];
