// app/data/education.ts
export type Education = {
  id: string;
  school: string;
  degree: string;      // ex.: "MSc in Software Engineering"
  startISO: string;    // "YYYY-MM-DD"
  endISO?: string;     // se atual, deixe sem
  location?: string;
  highlights?: string[]; // bullets curtas (tese, áreas, prêmios)
  link?: string;         // link para tese/post/uni
};

export const education: Education[] = [
  {
    id: "msc",
    school: "Your University",
    degree: "MSc in Software Engineering",
    startISO: "2024-03-01",
    endISO: "2025-08-31",
    location: "Berlin, DE",
    highlights: [
      "Thesis: Fake-news detection with NLP + LSTM (high accuracy).",
      "Focus on ML evaluation and applied AI.",
    ],
    link: "/posts/master-thesis-finished",
  },
  {
    id: "bsc",
    school: "Your University",
    degree: "BSc in Industrial Engineering",
    startISO: "2018-02-01",
    endISO: "2022-12-01",
    location: "Brazil",
    highlights: [
      "Research assistant during the program.",
    ],
  },
];
