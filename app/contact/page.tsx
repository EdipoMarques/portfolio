import { FaLinkedin, FaGithub } from "react-icons/fa";

export const metadata = { title: "Contact | Édipo" };

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-700">
        Feel free to reach out via email:{" "}
        <a href="mailto:edipomarquesl@gmail.com" className="text-blue-600 underline">
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
    </main>
  );
}
