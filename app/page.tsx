import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { projects } from "./data/projects";
import Link from "next/link";



export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      {/* Hero Section */}
      <div className="mx-auto h-32 w-32 relative rounded-full overflow-hidden shadow-lg">
        <Image
          src="/profile.png"   // <-- nome exato do arquivo em public/
          alt="My picture"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mt-8 text-5xl font-bold">Hi, I am Édipo :)</h1>
      <p className="mt-4 text-lg text-gray-600">
        Software Engineer | Data Enthusiast | Tech Explorer
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          className="rounded-lg bg-black px-5 py-3 text-white"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="rounded-lg border px-5 py-3"
        >
          View Projects
        </a>
      </div>

      {/* About Section */}
      <section id="about" className="mt-28 text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I am a software engineer passionate about data, technology, and problem solving. 
          With international experience and a strong academic background, 
          I enjoy building solutions that combine creativity and analytics.
        </p>
      </section>

      {/* Projects Section */}
<section id="projects" className="mt-28 text-center">
  <h2 className="text-3xl font-semibold">Projects</h2>
  <p className="mt-4 text-gray-600">Here are some highlights of my recent work:</p>

  <div className="mt-8 grid gap-6 sm:grid-cols-2">
    <div className="rounded-xl border p-6 shadow hover:shadow-lg">
      <h3 className="text-xl font-bold">Project 1</h3>
      <p className="mt-2 text-gray-600">Short description of the project and tools used.</p>
    </div>
    <div className="rounded-xl border p-6 shadow hover:shadow-lg">
      <h3 className="text-xl font-bold">Project 2</h3>
      <p className="mt-2 text-gray-600">Short description of the project and tools used.</p>
    </div>
  </div>

  {/* Botão para ver todos os projetos */}
  <div className="mt-8 flex justify-center">
    <Link
      href="/projects"
      className="inline-flex items-center rounded-lg border px-5 py-3 text-sm font-medium hover:bg-gray-50"
    >
      View All Projects
    </Link>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="mt-28 text-center">
  <h2 className="text-3xl font-semibold">Contact</h2>
  <p className="mt-4 text-gray-600">
    Feel free to reach out via email:{" "}
    <a href="mailto:edipomarquesl@gmail.com" className="text-blue-600">
      edipomarquesl@gmail.com
    </a>
  </p>

  {/* Social Links */}
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
