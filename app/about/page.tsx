// app/about/page.tsx
import Image from "next/image";
import { timeline } from "../data/timeline";
import { hobbies } from "../data/hobbies";

export const metadata = { title: "About | Édipo" };

function accentFor(category?: string) {
  // cores por categoria (ajuste à vontade)
  switch (category) {
    case "education":
      return { ring: "ring-blue-600", dot: "bg-blue-600" };
    case "work":
      return { ring: "ring-emerald-600", dot: "bg-emerald-600" };
    case "project":
      return { ring: "ring-cyan-600", dot: "bg-cyan-600" };
    case "talk":
      return { ring: "ring-purple-600", dot: "bg-purple-600" };
    case "award":
      return { ring: "ring-amber-500", dot: "bg-amber-500" };
    default:
      return { ring: "ring-gray-400", dot: "bg-gray-400" };
  }
}

export default function AboutPage() {
  // mais recente → mais antigo
  const items = [...timeline].sort((a, b) => {
    const da = a.dateISO ? Date.parse(a.dateISO) : 0;
    const db = b.dateISO ? Date.parse(b.dateISO) : 0;
    return db - da;
  });

  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-3 text-gray-600">
        HERE U CAN SEE HOW SPCIAL I AM .
      </p>

      {/* Timeline vertical */}
      <ol className="relative mt-10 border-s-2 border-gray-200">
        {items.map((item, i) => {
          const isMajor = item.level === "major";
          const accent = accentFor(item.category);

          return (
            <li key={item.id} className="ms-6 mb-10">
              {/* Dot (maior para major) */}
              <span
                className={[
                  "absolute bg-white",
                  isMajor ? "h-6 w-6 -start-3" : "h-5 w-5 -start-2.5",
                  "flex items-center justify-center rounded-full ring-2",
                  accent.ring,
                ].join(" ")}
              >
                <span
                  className={[
                    "rounded-full",
                    isMajor ? "h-3 w-3" : "h-2.5 w-2.5",
                    accent.dot,
                  ].join(" ")}
                />
              </span>

              {/* Collapsible item */}
              <details className="group" open={isMajor || i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-1 hover:bg-gray-50">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {item.dateLabel}
                    </p>
                    <h3
                      className={[
                        "font-semibold text-gray-900",
                        isMajor ? "text-xl" : "text-lg",
                      ].join(" ")}
                    >
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    )}
                  </div>

                  {/* chevron */}
                  <svg
                    className="ms-3 h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>

                <div
                  className={[
                    "mt-3 rounded-lg p-4",
                    isMajor ? "border-2 shadow-md" : "border shadow-sm bg-white/60",
                  ].join(" ")}
                >
                  {item.image && (
  <div
    className={[
      "relative mb-3 w-full overflow-hidden rounded-md",
      isMajor ? "h-56" : "h-40",
    ].join(" ")}
  >
    <Image
      src={item.image}
      alt={item.title}
      fill
      sizes="(max-width: 768px) 100vw, 768px"
      unoptimized
      className="object-cover"
    />
  </div>
)}

                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  {item.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border px-2 py-1 text-xs text-gray-700 border-gray-200 bg-gray-50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {item.links?.length ? (
                    <div className="mt-3 flex gap-4 text-sm">
                      {item.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:opacity-80"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </details>
            </li>
          );
        })}
      </ol>
    </main>
  );
}

