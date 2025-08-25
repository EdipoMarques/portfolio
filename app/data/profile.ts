// app/data/profile.ts
export type Language = {
  id: string;
  name: string;
  level: string; // ex.: "Native", "Fluent/Advanced", "Intermediate"
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer?: string;
  year?: number;
  file?: string; // caminho para PDF/imagem em /public (opcional)
};

export const languages: Language[] = [
  { id: "pt", name: "Portuguese", level: "Native" },
  { id: "en", name: "English", level: "Fluent/Advanced" },
  { id: "de", name: "German", level: "Intermediate" },
  { id: "es", name: "Spanish", level: "Intermediate" },
];

export const hardSkills: SkillGroup[] = [
  { group: "Programming", items: ["Java", "SQL", "Python", "C"] },
  { group: "Frameworks", items: ["Next.js", "React", "Express"] },
  { group: "Data/ML", items: ["Pandas", "TensorFlow", "NLP"] },
  { group: "Tools", items: ["Git", "Vercel"] },
];

export const softSkills: string[] = [
  "Communication",
  "Problem solving",
  "Teamwork",
  "Ownership Mindset",
  // adicione outras
];

export const certifications: Certification[] = [
  // Exemplo — substitua pelos seus
  {
    id: "IBM-data-practitioner",
    title: "Data Analysis with Python",
    issuer: "IBM",
    year: 2024,
    file: "/certs/ibm-data-practitioner.pdf", // coloque o PDF em /public/certs/
  },
  {
    id: "IBM-data",
    title: "Introduction to Data Analytics",
    issuer: "IBM",
    year: 2024,
    file: "/certs/ibm-analytics-practitioner.pdf", // coloque o PDF em /public/certs/
  },
  // { id: "coursera-ml", title: "Machine Learning Specialization", issuer: "Coursera/Stanford", year: 2023, file: "/certs/ml-specialization.pdf" },
];
