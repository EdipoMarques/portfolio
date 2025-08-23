// app/posts/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../data/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | Posts`,
    description: p.excerpt ?? p.content[0],
    openGraph: {
      title: p.title,
      description: p.excerpt ?? p.content[0],
      images: p.image ? [{ url: p.image }] : undefined,
    },
  };
}

export default async function PostDetail({
  params,
}: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-24">
      <Link href="/posts" className="text-sm text-gray-600 underline hover:opacity-80">
        ← Back to posts
      </Link>

      <h1 className="mt-2 text-3xl font-bold">{p.title}</h1>
      <p className="mt-1 text-sm uppercase tracking-wide text-gray-500">
        {new Date(p.dateISO).toLocaleDateString()} {p.location ? `• ${p.location}` : ""}
      </p>

      {p.image && (
        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 800px"
            unoptimized
          />
        </div>
      )}

      <div className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
        {p.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {p.tags?.length ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border bg-gray-50 px-2 py-1 text-xs text-gray-700
                                     dark:bg-neutral-900 dark:border-neutral-700">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </main>
  );
}
