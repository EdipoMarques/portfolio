// app/components/ProfileSidebar.tsx
import Link from "next/link";
import {
  languages,
  hardSkills,
  softSkills,
  certifications,
} from "../data/profile";

export default function ProfileSidebar() {
  return (
    <aside className="space-y-6 lg:sticky lg:top-20">
      {/* Languages */}
      <section className="rounded-2xl border bg-white/60 p-4 shadow-sm dark:bg-neutral-900/60 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
          Languages
        </h2>
        <ul className="mt-3 space-y-2">
          {languages.map((l) => (
            <li key={l.id} className="flex items-center justify-between">
              <span className="font-medium">{l.name}</span>
              <span className="rounded-full border px-2 py-0.5 text-xs text-gray-700 dark:text-gray-200 dark:border-neutral-700">
                {l.level}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Hard Skills */}
      <section className="rounded-2xl border bg-white/60 p-4 shadow-sm dark:bg-neutral-900/60 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
          Hard Skills
        </h2>
        <div className="mt-3 space-y-3">
          {hardSkills.map((g) => (
            <div key={g.group}>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                {g.group}
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border bg-gray-50 px-2 py-1 text-xs text-gray-700 dark:bg-neutral-800 dark:text-gray-200 dark:border-neutral-700"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="rounded-2xl border bg-white/60 p-4 shadow-sm dark:bg-neutral-900/60 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
          Soft Skills
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border bg-gray-50 px-2 py-1 text-xs text-gray-700 dark:bg-neutral-800 dark:text-gray-200 dark:border-neutral-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="rounded-2xl border bg-white/60 p-4 shadow-sm dark:bg-neutral-900/60 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
          Certifications
        </h2>
        <ul className="mt-3 space-y-3">
          {certifications.map((c) => (
            <li key={c.id} className="leading-tight">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {c.title}
              </p>
              <p className="text-xs text-gray-500">
                {c.issuer ?? ""} {c.year ? `• ${c.year}` : ""}
              </p>
              {c.file && (
                <div className="mt-1">
                  <Link
                    href={c.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline decoration-gray-300 underline-offset-4 hover:opacity-80"
                  >
                    View
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
