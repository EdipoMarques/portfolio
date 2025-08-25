// app/data/hobbies.ts
export type Hobby = {
  id: string;
  name: string;
  description: string;
  emoji: string; // simples e SSR-friendly (sem precisar importar muitos ícones)
  // se quiser no futuro: color?: string; link?: string;
};

export const hobbies: Hobby[] = [
  {
  id: "football",             // use ids únicos
  name: "Football (Soccer)",  // ou "Futebol"
  description: "Playing pickup games and following European leagues.",
  emoji: "⚽",
  },
  {
  id: "rugby",
  name: "Rugby",
  description: "Enjoying the physical team game and its strategy.",
  emoji: "🏉",
  },
  {
  id: "swimming",
  name: "Swimming",
  description: "Lap swimming to stay active and clear the mind.",
  emoji: "🏊‍♂️", // ou "🏊‍♀️" / "🏊"
  },
  {
    id: "traveling",
    name: "Traveling",
    description:
      "Exploring new cultures and broadening perspectives.",
    emoji: "✈️",
  },
  // adicione mais quando quiser…
];
