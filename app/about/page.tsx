// app/about/page.tsx
import Link from "next/link";
import { hobbies } from "../data/hobbies";

type Work = {
  company: string;
  role: string;
  startISO: string;
  endISO?: string;    // se estiver atual, deixe vazio
  location?: string;
  bullets?: string[];
};

type Academic = {
  title: string;
  year: number;
  link?: string;      // pode apontar para /posts/... ou /projects/...
  summary?: string;
  tags?: string[];
};

// Ajuste estes dados como quiser (ou mova para app/data/experience.ts e app/data/academics.ts)
const work: Work[] = [
  {
    company: "Your Company / Lab",
    role: "Software Engineer / Research Assistant",
    startISO: "2024-02-01",
    endISO: undefined, // atual
    location: "Berlin, DE",
    bullets: [
      "Built and maintained web features used by real users.",
      "Collaborated with researchers/engineers on ML/NLP prototypes.",
    ],
  },
  {
    company: "Internship – Data Analysis",
    role: "Data Analyst Intern",
    startISO: "2022-06-01",
    endISO: "2022-09-01",
    location: "Berlin, DE",
    bullets: [
      "Exploratory analysis and dashboards to support decisions.",
      "Automated small data tasks to speed up reporting.",
    ],
  },
];

const academic: Academic[] = [
  {
    title:
      "MSc Thesis — Retrieval-Augmented Generation for Customer Support",
    year: 2025,
    link: "/posts/master-thesis-finished",
    summary:
      "Designed, evaluated and iterated on RAG pipelines to improve quality and safety in support scenarios.",
    tags: ["NLP", "RAG", "Evaluation"],
  },
  {
    title: "Fake News Detector (undergrad project)",
    year: 2023,
    link: "/projects/fake-news-detector",
    summary:
      "Experimented with feature engineering and ML classifiers for misinformation detection.",
    tags: ["ML", "Text Classification"],
  },
];

function fmtRange(startISO: string, endISO?: string) {
  const start = new Date(startISO).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });
  const end = endISO
    ? new Date(endISO).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
      })
    : "Present";
  return `${start} — ${end}`;
}

export const metadata = {
  title: "About | Édipo Marques",
  description:
    "About me, professional experience, academic projects and a few hobbies.",
};

export default function AboutPage() {
  // Use aqui a sua bio curta preferida (aquela versão polida que criamos)
  const bio =
    "I’m a software engineer and recent MSc graduate with a research background and a data-analysis internship. During my Master’s I strengthened my foundations in building and evaluating machine-learning solutions and applied AI/Data concepts across projects. Earlier I collaborated as a research assistant while completing a BSc in Industrial Engineering. I’m now focused on applying this toolkit in industry to ship reliable software and create measurable impact.";

  return (
    <main className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">{bio}</p>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-4 space-y-6">
          {work.map((w) => (
            <div
              key={`${w.company}-${w.role}-${w.startISO}`}
              className="rounded-lg border p-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="font-semibold">{w.role}</h3>
                  <p className="text-gray-700">{w.company}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {fmtRange(w.startISO, w.endISO)}
                  {w.location ? ` • ${w.location}` : ""}
                </p>
              </div>
              {w.bullets?.length ? (
                <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                  {w.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Academic / Research Projects */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Academic Projects & Research</h2>
        <div className="mt-4 grid gap-4">
          {academic.map((a) => (
            <div key={`${a.title}-${a.year}`} className="rounded-lg border p-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">
                  {a.link ? (
                    <Link
                      href={a.link}
                      className="underline decoration-gray-300 underline-offset-4 hover:opacity-80"
                    >
                      {a.title}
                    </Link>
                  ) : (
                    a.title
                  )}
                </h3>
                <span className="text-sm text-gray-500">{a.year}</span>
              </div>
              {a.summary ? (
                <p className="mt-2 text-gray-700">{a.summary}</p>
              ) : null}
              {a.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border bg-gray-50 px-2 py-1 text-xs text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Resume / CV */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Résumé</h2>
        <p className="mt-2 text-gray-700">
          You can find more details in my resume.
        </p>
        <div className="mt-3">
          <Link
            href="/resume.pdf" // coloque o arquivo em /public/resume.pdf
            target="_blank"
            className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-gray-50"
          >
            Download CV
          </Link>
        </div>
      </section>

      {/* Hobbies (parte inferior) */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Hobbies</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {hobbies.map((h) => (
            <div
              key={h.id}
              className="rounded-lg border p-4 flex items-start gap-3"
            >
              <span className="text-2xl leading-none">{h.emoji}</span>
              <div>
                <h3 className="font-medium">{h.name}</h3>
                <p className="text-gray-700">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
