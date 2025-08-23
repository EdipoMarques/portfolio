// app/components/RecentPostsHome.tsx
import Image from "next/image";
import Link from "next/link";
import { posts } from "../data/posts";

type Props = { className?: string };

export default function RecentPostsHome({ className = "" }: Props) {
  const latest = [...posts]
    .sort((a, b) => Date.parse(b.dateISO) - Date.parse(a.dateISO))
    .slice(0, 3);

  return (
    <aside
      className={`w-full rounded-2xl bg-white/80 ring-1 ring-gray-200/60 shadow-sm p-5 ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">Recent Posts</h3>
        <Link href="/posts" className="text-xs text-gray-500 hover:text-gray-700">
          See all
        </Link>
      </div>

      <ul className="space-y-4">
        {latest.map((p) => (
          <li key={p.slug} className="flex gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-md bg-gray-100 flex-shrink-0">
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="56px"
                  unoptimized
                />
              )}
            </div>
            <div className="min-w-0">
              <Link
                href={`/posts/${p.slug}`}
                className="block truncate font-medium hover:underline"
                title={p.title}
              >
                {p.title}
              </Link>
              <p className="text-xs text-gray-500">
                {new Date(p.dateISO).toLocaleDateString()}{" "}
                {p.location ? `• ${p.location}` : null}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
