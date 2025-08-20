"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo/Name */}
        <Link href="/" className="text-lg font-semibold text-gray-800">
          Édipo Marques | Portfolio
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-sm">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={`transition-colors ${
                  isActive(it.href)
                    ? "text-black-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
