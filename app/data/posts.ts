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
    dateISO: "2025-08-10",
    excerpt: "Wrapped up my MSc thesis on NLP applied to customer support.",
    image: "/posts/thesis.jpg",
    location: "Berlin, DE",
    type: "milestone",
    tags: ["NLP", "MSc"],
    content: [
      "I’ve just submitted my Master’s thesis focusing on retrieval-augmented generation in customer support scenarios.",
      "I’ll open-source part of the code soon and publish a short write-up here."
    ]
  },
  {
    slug: "websummit-2025",
    title: "Attended Web Summit",
    dateISO: "2025-05-14",
    excerpt: "Networking + great talks on AI safety and tooling.",
    image: "/posts/websummit.jpg",
    location: "Lisbon, PT",
    type: "event",
    tags: ["Conference", "AI"],
    content: [
      "Highlights: practical guardrails for LLMs and better evaluation strategies.",
      "Met amazing people building tools for data quality."
    ]
  }
];
