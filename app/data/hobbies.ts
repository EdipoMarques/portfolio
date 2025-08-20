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
    id: "freestyle-skiing",
    name: "Freestyle Skiing",
    description:
      "Passionate about pushing boundaries and perfecting technique on the slopes.",
    emoji: "⛷️",
  },
  {
    id: "hiking",
    name: "Hiking",
    description:
      "Exploring beautiful trails and mountain ranges, always looking for a new view.",
    emoji: "⛰️",
  },
  {
    id: "road-biking",
    name: "Road Biking",
    description:
      "Enjoying scenic routes while keeping an active lifestyle.",
    emoji: "🚴",
  },
  {
    id: "camping",
    name: "Camping",
    description:
      "Connecting with nature and embracing outdoor adventures.",
    emoji: "🏕️",
  },
  {
    id: "boating",
    name: "Boating",
    description:
      "Making waves and enjoying water activities.",
    emoji: "⛵",
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
