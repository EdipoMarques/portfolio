// app/about/page.tsx
import Link from "next/link";
import ProfileSidebar from "../components/ProfileSidebar";
import { hobbies } from "../data/hobbies";
import { education } from "../data/education"; // mantém

// Types locais
type Work = {
  company: string;
  role: string;
  startISO: string;
  endISO?: string;
  location?: string;
  bullets?: string[];
};
type Academic = {
  title: string;
  year: number;
  link?: string;
  summary?: string;
  tags?: string[];
};

// Seus dados
const work: Work[] = [
  {
    company: "Your Company / Lab",
    role: "Software Engineer / Research Assistant",
    startISO: "2024-02-01",
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
    title: "MSc Thesis — Retrieval-Augmented Generation for Customer Support",
    year: 2025,
    link: "/posts/master-thesis-finished",
    summary:
      "Designed and evaluated RAG pipelines to improve quality and safety in support scenarios.",
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
    "About me, professional experience, academic projects and hobbies.",
};

export default function AboutPage() {
  const bio =
    "I’m a software engineer and recent MSc graduate with a research background and a data-analysis internship. During my Master’s I strengthened my foundations in building and evaluating machine-learning solutions and applied AI/Data concepts across projects. Earlier I collaborated as a research assistant while completing a BSc in Industrial Engineering. I’m now focused on applying this toolkit in industry to ship reliable software and create measurable impact.";

  return (
    <main className="mx-auto max-w-5xl px-6 pt-20 pb-24">
      {/* Cabeçalho centralizado fora do grid */}
      <header className="text-center">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mx-auto mt-4 max-w-3xl text-gray-700 leading-relaxed">
          {bio}
        </p>
      </header>

      {/* Agora iniciamos o grid: sidebar à esquerda e conteúdo à direita.
          Como o título/bio ficaram fora, a sidebar começa alinhada a Education. */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar (continua sticky, mas “começa” mais abaixo) */}
        <ProfileSidebar />

        {/* Conteúdo principal */}
        <div>
          {/* Education — no topo desta coluna */}
          <section className="mt-0">
            <h2 className="text-2xl font-semibold text-center lg:text-left">
              Education
            </h2>
            <div className="mt-4 grid gap-4">
              {education.map((e) => (
                <div key={e.id} className="rounded-lg border p-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h3 className="font-semibold">{e.degree}</h3>
                      <p className="text-gray-700">{e.school}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {fmtRange(e.startISO, e.endISO)}
                      {e.location ? ` • ${e.location}` : ""}
                    </p>
                  </div>

                  {e.highlights?.length ? (
                    <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                      {e.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  ) : null}

                  {e.link && (
                    <div className="mt-2">
                      <Link
                        href={e.link}
                        className="text-sm underline decoration-gray-300 underline-offset-4 hover:opacity-80"
                      >
                        More details
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

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

          {/* Academic / Research */}
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

          {/* Resume */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Résumé</h2>
            <p className="mt-2 text-gray-700">
              You can find more details in my résumé.
            </p>
            <div className="mt-3">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-gray-50"
              >
                Download résumé
              </Link>
            </div>
          </section>

          {/* Hobbies — final da página */}
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
        </div>
      </div>
    </main>
  );
}
