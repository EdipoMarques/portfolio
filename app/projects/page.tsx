// app/projects/page.tsx
"use client";

import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as all } from "../data/projects";

export default function ProjectsPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | "">("");

  // ordena por data (mais recente primeiro)
  const ordered = useMemo(() => {
    return [...all].sort((a, b) => {
      const da = a.dateISO ? Date.parse(a.dateISO) : 0;
      const db = b.dateISO ? Date.parse(b.dateISO) : 0;
      return db - da;
    });
  }, []);

  const tags = useMemo(() => {
    const t = new Set<string>();
    all.forEach((p) => p.tags.forEach((x) => t.add(x)));
    return Array.from(t).sort();
  }, []);

  const filtered = ordered.filter((p) => {
    const matchesQ =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase());
    const matchesTag = !tag || p.tags.includes(tag);
    return matchesQ && matchesTag;
  });

  return (
    <main className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-3 text-gray-600">
        Explore my work. Filter by tag or search.
      </p>

      {/* Controles */}
      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects…"
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black/70"
        />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="rounded-lg border px-3 py-2"
        >
          <option value="">All tags</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-600">No projects found.</p>
        )}
      </div>
    </main>
  );
}
