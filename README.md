# 🌐 Édipo Marques — Portfolio

A clean, fast, **content-driven** personal website built with **Next.js (App Router)** and **Tailwind CSS**.  
It showcases my work (**Projects**), short updates (**Posts**), my timeline (**My Journey**), and an **About** page with résumé, experience, education, and hobbies.

**Goal:** provide a single place where people can understand **who I am**, **what I’ve built**, and **how to contact me**.

---

## ⚡ Highlights

- **Projects** with search, tag filters, and individual detail pages
- **Posts** (short updates/news) with images, tags, and dedicated pages
- **My Journey**: timeline of milestones (education, talks, awards, moves, etc.)
- **About**: concise bio, **Experience**, **Education**, downloadable **Résumé**, and **Hobbies**
- **Simple, file-based content** (edit files in `app/data/`) — no external CMS
- **Deployed on Vercel**; optimized for performance and developer experience

---

## 🔗 Live / Demo

- **Production:** _add your public URL here_ (e.g., `https://edipomarques.io`)
- _Optional:_ add a few screenshots of **Home**, **Projects**, **Post detail**, **My Journey**, **About**

---

## 🧭 Site Map

| Section      | Route             | What it shows                                                             |
|--------------|-------------------|---------------------------------------------------------------------------|
| Home         | `/`               | Hero + CTA, two featured projects, “Recent Posts” sidebar                |
| Projects     | `/projects`       | Search + tag filters, cards, and links to detail pages                    |
| Project page | `/projects/[slug]`| Cover, description, tags, screenshots, links                              |
| Posts        | `/posts`          | List of updates/news with excerpt                                         |
| Post page    | `/posts/[slug]`   | Title, date/location, cover image, content, tags                          |
| My Journey   | `/my-journey`     | Timeline ordered by date                                                  |
| About        | `/about`          | Bio, Experience, Education, Résumé download, Hobbies                      |
| Contact      | `/contact`        | Email and social links                                                    |

---

## 🛠 Tech Stack

- **Framework:** Next.js (React, TypeScript)  
- **Styling:** Tailwind CSS  
- **Icons:** `react-icons`  
- **Images:** `next/image` (assets served from `public/`)  
- **Deploy:** Vercel  
- **Nice-to-have add-ons (future):** Dark mode toggle, `@tailwindcss/typography` for rich post styling, analytics

---

## 🗂 Project Structure (high level)

- `app/components` — Navbar, cards, recent-posts widgets, profile sidebar  
- `app/data` — projects, posts, timeline, hobbies, profile (skills/languages/links), education  
- `app/projects` & `app/posts` — list pages and **dynamic detail routes**  
- `app/my-journey` — timeline page  
- `app/about` — bio, experience, education, résumé download, hobbies  
- `public` — images (`projects/`, `posts/`), profile picture, résumé (`resume.pdf`)

---

## 🧩 Content Model (edit in `app/data`)

- **`projects.ts`** — project cards & detail pages (title, description, images, tags, links, date).  
  _Tip:_ mark the two highlights for the Home page by keeping them **first** in the list or by using a `featured` flag.
- **`posts.ts`** — short updates/news (title, `dateISO`, location, excerpt, image, tags, content paragraphs).
- **`timeline.ts`** — chronological “My Journey” items (`dateISO`, title, category, description).
- **`education.ts`** — degrees and institutions (institution, degree, period, location, highlights).
- **`hobbies.ts`** — emoji + name + description cards.
- **`profile.ts`** — languages & levels, hard skills, soft skills, external links (LinkedIn, GitHub).
- **Résumé:** put `resume.pdf` in `public/` so the “Download résumé” button works.
- **Images:** add post images to `public/posts` and project images to `public/projects`, then reference with paths like `/posts/your-image.jpg`.

---

## ▶️ Local Development

1. **Clone** the repository to your machine.  
2. **Install dependencies** with your package manager (e.g., run `npm install`).  
3. **Start the dev server** (e.g., `npm run dev`).  
4. Open **`http://localhost:3000`** in your browser.  
5. **Production build:** run `npm run build`, then `npm run start`.

---

## 🚀 Deploy (Vercel)

1. Connect the Git repository to **Vercel**.  
2. Push to the default branch (**main**).  
3. Vercel builds and deploys automatically.  
4. Ensure your **`public/resume.pdf`** exists so the download link works.

---

## 🔧 Configuration Notes

- **Home featured projects:** keep your chosen projects at the top of `projects.ts` **or** add a `featured` flag and select the first two featured in Home.
- **SEO/Open Graph:** project/post pages generate metadata dynamically; fine-tune titles, descriptions, and images per item.
- **Accessibility:** components use semantic markup; keep `alt` text meaningful when adding images.

---

## ✍️ Adding Content (quick reference)

- **New project:** add an entry to `app/data/projects.ts` and images to `public/projects`.  
- **New post:** add an entry to `app/data/posts.ts` and an image to `public/posts`.  
- **New journey item:** add to `app/data/timeline.ts`.  
- **Languages/Skills/Links:** edit `app/data/profile.ts`.  
- **Education:** edit `app/data/education.ts`.  
- **Résumé:** replace `public/resume.pdf`.

---

## 🗺 Roadmap (ideas)

- Dark mode (class strategy + toggle)  
- Typography plugin for richer post formatting  
- Vercel Analytics or Plausible  
- RSS/Atom feed for Posts  
- Full-text search for Posts

---

## 🤝 Contributing

This is a personal site, but **suggestions and improvements are welcome**.  
Please open an issue describing your idea or a pull request with context.

---

## 📄 License & Content

- **Code:** MIT (add a `LICENSE` file if desired).  
- **Content (text & images):** © Édipo Marques — please do not reuse without permission.

---

## 🙌 Credits

- **Next.js**, **Tailwind CSS**, **React Icons**  
- Deployed with **Vercel**

---

## ❓ FAQ

**Q:** Where do I change my name or navbar links?  
**A:** Navbar lives in `app/components/Navbar.tsx`. You can also adjust metadata in `app/layout.tsx`.

**Q:** How do I choose the two project highlights on Home?  
**A:** Keep your chosen projects **first** in `app/data/projects.ts` or add a `featured` flag and select by that in Home.

**Q:** How do I make a new post appear in the Home “Recent Posts”?  
**A:** Add a new post entry in `app/data/posts.ts`. The widget shows the latest items automatically.
