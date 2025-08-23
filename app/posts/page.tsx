// app/posts/page.tsx
import Link from "next/link";
import Image from "next/image";
import { posts } from "../data/posts";

export const metadata = { title: "Posts | Édipo" };

export default function PostsPage() {
  const items = [...posts].sort((a, b) => Date.parse(b.dateISO) - Date.parse(a.dateISO));

  return (
    <main className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <h1 className="text-4xl font-bold">Posts</h1>
      <p className="mt-3 text-gray-600">News, events and milestones.</p>

      <div className="mt-8 space-y-6">
        {items.map((p) => (
          <article key={p.slug} className="rounded-xl border p-4 shadow-sm hover:shadow-md transition
                                            dark:bg-neutral-800/60 dark:border-neutral-700">
            <Link href={`/posts/${p.slug}`} className="flex gap-4">
              {p.image && (
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-md bg-gray-100">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="128px" unoptimized />
                </div>
              )}
              <div className="min-w-0">
                <h2 className="text-xl font-semibold leading-snug hover:underline">{p.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(p.dateISO).toLocaleDateString()} {p.location ? `• ${p.location}` : ""}
                </p>
                {p.excerpt && (
                  <p className="mt-1 line-clamp-2 text-gray-700 dark:text-gray-200">{p.excerpt}</p>
                )}
                {p.tags?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border bg-gray-50 px-2 py-0.5 text-xs
                                               dark:bg-neutral-900 dark:border-neutral-700">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
