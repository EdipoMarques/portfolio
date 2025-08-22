// app/projects/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
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

export default function ProjectDetail({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <a
        href="/projects"
        className="text-sm text-gray-600 underline hover:opacity-80"
      >
        ← Back to projects
      </a>

      <h1 className="mt-2 text-3xl font-bold">{p.title}</h1>
      {p.dateISO && (
        <p className="mt-1 text-sm uppercase tracking-wide text-gray-500">
          {new Date(p.dateISO).toLocaleDateString()}
        </p>
      )}

      {/* Capa */}
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

      {/* Tags */}
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

      {/* Links */}
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

      {/* Galeria */}
      {p.images?.length ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {p.images.map((src) => (
            <div key={src} className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`${p.title} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
