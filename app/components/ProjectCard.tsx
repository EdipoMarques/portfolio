// app/components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { type Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const p = project;

  // pega a melhor imagem disponível
  const imgSrc = p.cardImage ?? p.cover ?? p.image ?? p.images?.[0];

  return (
    <article className="rounded-xl border p-4 transition hover:shadow-md">
      {imgSrc && (
        <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={imgSrc}            // ex.: "/projects/nlp-bot-1.jpg"
            alt={p.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>
      )}

      <h3 className="font-semibold">{p.title}</h3>
      {p.description && (
        <p className="mt-1 text-sm text-gray-600 line-clamp-3">{p.description}</p>
      )}

      {p.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full border bg-gray-50 px-2 py-1 text-xs text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <Link
        href={`/projects/${p.slug}`}
        className="mt-3 inline-block underline hover:opacity-80"
      >
        View details
      </Link>
    </article>
  );
}
