// app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

type RouteParams = { slug: string };

// Gera as rotas estáticas
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// (Opcional) Metadata — tipar como Promise<RouteParams>
export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | Projects`,
    description: p.description,
    openGraph: {
      title: p.title,
      description: p.description,
      images: p.cover ? [{ url: p.cover }] : undefined,
    },
  };
}

// Página do detalhe — **params como Promise<RouteParams>**
export default async function ProjectDetail({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link
        href="/projects"
        className="text-sm text-gray-600 underline hover:opacity-80"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-2 text-3xl font-bold">{p.title}</h1>
      {p.dateISO && (
        <p className="mt-1 text-sm uppercase tracking-wide text-gray-500">
          {new Date(p.dateISO).toLocaleDateString()}
        </p>
      )}

      {p.cover && (
        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 800px"
            unoptimized
          />
        </div>
      )}

      <p className="mt-6 leading-relaxed text-gray-700">{p.description}</p>

      {p.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border bg-gray-50 px-2 py-1 text-xs text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {(p.github || p.demo) && (
        <div className="mt-6 flex gap-4">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-4 py-2 underline hover:opacity-80"
            >
              GitHub
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-4 py-2 underline hover:opacity-80"
            >
              Live Demo
            </a>
          )}
        </div>
      )}

      {/* Galeria removida */}
    </main>
  );
}
