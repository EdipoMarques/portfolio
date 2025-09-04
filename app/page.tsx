// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { projects } from "./data/projects";
import RecentPostsHome from "./components/RecentPostsHome";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 bg-gradient-to-b from-sky-50 to-white">
      {/* HERO — tudo centralizado */}
      <section className="text-center">
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full shadow-lg">
          <Image
            src="/profile.png"
            alt="My picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="mt-8 text-5xl font-bold tracking-tight">
          Hi, I am Édipo :)
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Software Engineer | Data Enthusiast | Tech Explorer
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link href="#contact" className="rounded-lg bg-black px-5 py-3 text-white">
            Get in Touch
          </Link>
          <Link href="#projects" className="rounded-lg border px-5 py-3 hover:bg-gray-50">
            View Projects
          </Link>
        </div>
      </section>

      {/* ABOUT + RECENT POSTS (lado a lado em telas largas) */}
      <section id="about" className="mt-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* About à esquerda */}
          <div>
            <h2 className="text-3xl font-semibold">About me</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              I’m a software engineer and recent MSc graduate with a research background and a data-analysis internship. 
              During my master’s, I developed my foundations in building and evaluating machine learning solutions, 
              applying AI and data concepts to projects. Earlier, I collaborated as a research assistant while completing a BSc 
              in Industrial Engineering. I’m now focused on applying this toolkit in the IT industry shipping 
              reliable software and creating measurable impact.
            </p>
          </div>

          {/* Recent Posts à direita, um pouco mais abaixo e mais largo */}
          <RecentPostsHome className="lg:pt-10" />
        </div>
      </section>

      {/* PROJECTS (destaques) — mantive como estava */}
      <section id="projects" className="mt-24">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <p className="mt-3 text-center text-gray-600">
          Here are some highlights of my recent work:
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block rounded-xl border p-4 text-left shadow-sm transition hover:shadow-lg"
            >
              {(p.cardImage || p.cover) && (
                <div className="relative mb-3 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={p.cardImage ?? p.cover!}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    unoptimized
                  />
                </div>
              )}
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-gray-600 line-clamp-3">{p.description ?? ""}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg border px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* CONTACT — sem mudanças, centralizado como antes */}
      <section id="contact" className="mt-24 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-600">
          Feel free to reach out via email:{" "}
          <a href="mailto:edipomarquesl@gmail.com" className="text-blue-600">
            edipomarquesl@gmail.com
          </a>
        </p>

        <div className="mt-6 flex justify-center gap-6 text-lg">
          <a
            href="https://www.linkedin.com/in/edipomarquesl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/EdipoMarques"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
