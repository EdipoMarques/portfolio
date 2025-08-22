// app/components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, title, description, cardImage, tags } = project;

  return (
    <article className="rounded-xl border p-4 hover:shadow-sm">
      {cardImage && (
        <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md">
          <Image
            src={cardImage}
            alt={title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      <h3 className="font-semibold">{title}</h3>

      {description && (
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      )}

      {tags?.length ? (
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((t) => (
            <span key={t} className="rounded-full border px-2 py-0.5 text-xs">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <Link href={`/projects/${slug}`} className="mt-3 inline-block underline">
        View details
      </Link>
    </article>
  );
}
