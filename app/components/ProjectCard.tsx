// app/components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects"; // ajuste se seu type estiver em outro arquivo

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  // thumbnail: tenta usar project.image, senão primeira imagem da galeria
  const thumb =
    (project as any).image ||
    (project as any).cardImage ||
    (project as any).images?.[0] ||
    "/profile.png";

  return (
    <article className="rounded-xl border p-4 transition hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={thumb}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          unoptimized
          className="object-cover"
        />
      </div>

      <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
      {project.description && (
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {project.description}
        </p>
      )}

      {project.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border px-2 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex gap-4 text-sm">
        <Link className="underline" href={`/projects/${project.slug}`}>
          Details
        </Link>
        {project.github && (
          <a
            className="underline"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            className="underline"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
}
