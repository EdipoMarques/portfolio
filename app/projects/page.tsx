import Image from "next/image";
import { projects } from "../data/projects";

export const metadata = { title: "Projects | Édipo" };

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-20 pb-16">
      <h1 className="text-4xl font-bold text-center">All Projects</h1>
      <p className="mt-3 text-center text-gray-600">
        Here you can explore all the projects I have been working on.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="rounded-xl border p-6 shadow hover:shadow-lg transition">
            <div className="relative h-40 w-full overflow-hidden rounded-lg">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>

            <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-gray-600">{p.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border px-2 py-1 text-xs text-gray-600">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-sm">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                  GitHub
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
